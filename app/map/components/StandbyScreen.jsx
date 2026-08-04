"use client";
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useIframeParams } from '@/hooks/useIframeChildSearchParams';

const App = () => {
  const searchParams = useSearchParams();
  // 読み込み時に持つ searchParams を iframe に渡す
  const [url] = useState(`https://ait-guide.sysken.net/?${searchParams.toString()}`);

  useIframeParams();

  return (
    <div
      style={{
        height: "100vh",
        padding: "50px 0 70px"
      }}
    >
      <iframe
        src={url}
        // 位置情報の取得 と クリップボードの書き込み(URL共有機能のため) を許可
        allow="geolocation; clipboard-write"
        style={{
          width: "100%",
          height: "100%"
        }}
      ></iframe>
    </div>
  );
};

export default App;
