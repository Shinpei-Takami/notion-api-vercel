// pages/index.js

import { getDatabase } from "../lib/notion";

// ビルド時、または指定時間ごとにデータを取得する関数
export async function getStaticProps() {
  const data = await getDatabase(); // Notionからデータ取得
  return {
    props: {
      items: data, // propsとして渡す
    },
    revalidate: 60, // ISR（Incremental Static Regeneration）対応：60秒ごとに再生成
  };
}

// 実際のページのコンポーネント
export default function Home({ items }) {
  return (
    <div>
      <h1>Notion データ一覧</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.properties['書籍名']?.title?.[0]?.plain_text || '(無題)'}
          </li>
        ))}
      </ul>
    </div>
  );
}// JavaScript Document