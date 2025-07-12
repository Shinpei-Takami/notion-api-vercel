// pages/api/notion.js
import { getDatabase } from "../../lib/notion";

export default async function handler(req, res) {
  try {
    const data = await getDatabase();
    const results = data.map((page) => {
      const props = page.properties;
      return {
        title: props['書籍名']?.title?.[0]?.plain_text || '(無題)',
        author: props['著者名']?.rich_text?.[0]?.plain_text || '',
        publisher: props['出版社']?.rich_text?.[0]?.plain_text || '',
        year: props['出版年']?.number || '',
        selector: props['選書者']?.rich_text?.[0]?.plain_text || '',
        quote: props['引用']?.rich_text?.[0]?.plain_text || '',
        comment: props['一言']?.rich_text?.[0]?.plain_text || '',
      };
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ error: 'Notion API error' });
  }
}