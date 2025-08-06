"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const items = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `アイテム ${i + 1}`,
  imgUrl: `https://picsum.photos/seed/${i + 1}/400/300`
}));

const LoopingAutoCarousel = () => {
  const scrollRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const itemWidth = 240 + 16;
  const loopedItems = [...items, ...items, ...items]; // ★ 3倍に複製
  const middleIndex = items.length;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // 真ん中から開始
    container.scrollLeft = middleIndex * itemWidth;

    const scrollStep = 1; // ★ 1pxずつ進む速度
    const interval = 20;  // ★ 更新間隔(ms)

    const loop = setInterval(() => {
      if (!container) return;
      container.scrollLeft += scrollStep;

      // 半分より先に行ったら真ん中へ戻す
      if (container.scrollLeft >= (loopedItems.length - middleIndex) * itemWidth) {
        container.scrollLeft = middleIndex * itemWidth;
      }

      // インジケータ用の現在インデックスを計算
      const index = Math.round(container.scrollLeft / itemWidth) % items.length;
      setPageIndex(index);
    }, interval);

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="bg-gray-200 rounded-xl p-6 shadow-lg max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-center">
        {/* カルーセル本体 */}
        <div
          ref={scrollRef}
          className="carousel-container flex overflow-hidden space-x-4"
          style={{ width: `${itemWidth * 3}px` }} // 常に3枚分の幅
        >
          {loopedItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] rounded-xl shadow-md overflow-hidden bg-white"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ドットインジケータ */}
      <div className="mt-4 flex justify-center">
        <div className="bg-white px-4 py-2 rounded-xl flex space-x-2 shadow-inner max-w-fit mx-auto">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === pageIndex ? "bg-gray-800" : "bg-gray-400"
              } transition duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoopingAutoCarousel;
