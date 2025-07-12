// lib/notion.js

// Notionの公式クライアントライブラリからClientクラスをインポート
import { Client } from "@notionhq/client";

// 環境変数から取得したAPIキーでNotionクライアントを初期化
const notion = new Client({ auth: process.env.NOTION_API_KEY });

/**
 * Notionのデータベースからデータを取得する非同期関数
 * @returns {Promise<Array>} Notionのデータベースの各ページ（行）を表すオブジェクト配列
 */
export async function getDatabase() {
  // 環境変数から取得したデータベースIDを使ってクエリを送信
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  // クエリ結果（results）を返す。これはデータベースの中のページの配列。
  return response.results;
}// JavaScript Document