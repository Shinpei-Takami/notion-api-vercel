// lib/notion.js

// Notion SDK を読み込む
import { Client } from "@notionhq/client";

// Notionクライアントを初期化（.env.local の NOTION_API_KEY を使用）
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// データベースの内容を取得する非同期関数
export async function getDatabase() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID, // .env.local に設定したデータベースIDを使用
  });

  // 必要なプロパティだけ抽出して整形
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

  return results;
}