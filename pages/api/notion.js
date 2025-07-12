// pages/api/notion.js

// lib フォルダから getDatabase 関数をインポート
import { getDatabase } from "../../lib/notion";

// 非同期のAPIハンドラー関数を定義
export default async function handler(req, res) {
  try {
    // Notionデータベースのデータを取得
    const data = await getDatabase();

    // 取得したデータをJSON形式でレスポンスとして返す
    res.status(200).json(data);
  } catch (error) {
    // エラーが発生した場合は、エラー内容をログに出して500で返す
    console.error("APIエラー:", error);
    res.status(500).json({ error: "Failed to fetch data from Notion." });
  }
}