// App.jsx
import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel'; // カルーセルコンポーネントを読み込み

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // 仮の画像データを使ってテスト（本番はAPIなどから取得）
    const sampleImages = [
      "https://via.placeholder.com/300x200?text=Image+1",
      "https://via.placeholder.com/300x200?text=Image+2",
      "https://via.placeholder.com/300x200?text=Image+3"
    ];
    setImageList(sampleImages);

    // console.log で確認
    console.log("画像データ:", sampleImages);
  }, []);

  return (
    <div>
      <h1>画像カルーセル</h1>
      {Array.isArray(imageList) && imageList.length > 0 ? (
        <ImageCarousel images={imageList} />
      ) : (
        <p>画像を読み込み中...</p>
      )}
    </div>
  );
}

export default App;
