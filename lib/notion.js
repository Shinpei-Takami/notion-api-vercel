// lib/notion.js
import { Client } from "@notionhq/client";

// Notion API クライアントを初期化（環境変数からキーを取得）
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// データベースからページを取得する関数
export async function getDatabase() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return response.results;
}