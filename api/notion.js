// notion-api-vercel/api/notion.js
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    const results = response.results.map((page) => {
      const props = page.properties;
      return {
        title: props['書籍名']?.title?.[0]?.plain_text || '(無題)',
        author: props['著者名']?.rich_text?.[0]?.plain_text || '',
        publisher: props['出版社']?.rich_text?.[0]?.plain_text || '',
        year: props['出版年']?.rich_text?.[0]?.plain_text || '',
      };
    });

    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Notion API error' });
  }
}// JavaScript Document