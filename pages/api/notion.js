// pages/api/notion.js

import { Client } from "@notionhq/client";

// .env.local に保存されたキーを使って Notion クライアントを初期化
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  try {
    // Notion データベースの情報を取得
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // 各ページのプロパティを整形して返す
    const results = response.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props['書籍名']?.title?.[0]?.plain_text || '(無題)',
        author: props['著者名']?.rich_text?.[0]?.plain_text || '',
        publisher: props['出版社']?.rich_text?.[0]?.plain_text || '',
        year: props['出版年']?.number || '',
        selector: props['選書者']?.rich_text?.[0]?.plain_text || '',
        quote: props['引用']?.rich_text?.[0]?.plain_text || '',
        comment: props['一言']?.rich_text?.[0]?.plain_text || '',
      };
    });

    // 成功時に JSON を返す
    res.status(200).json(results);
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ error: 'Notion API error' });
  }
}