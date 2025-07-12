// Notion SDK をインポート
const { Client } = require('@notionhq/client');

// 環境変数から API キーを読み込む
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// エクスポートされる非同期関数（APIハンドラ）
export default async function handler(req, res) {
  try {
    // データベースIDを使ってクエリ実行
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // 必要なプロパティを整形して抽出（あなたのNotionのカラム名に合わせて調整）
    const results = response.results.map((page) => {
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

    // JSONで返す
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Notion API error' });
  }
}