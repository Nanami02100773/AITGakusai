"use client";
import React from "react";
import "./Timetable.css";

const timetableData = [
  {
    day: "１日目",
    items: [
      ["08:00 〜 09:00", "会場準備"],
      ["09:00 〜 10:00", "スタッフ集合"],
      ["10:00 〜 10:30", "受付開始"],
      ["10:30 〜 11:00", "開会のあいさつ"],
      ["11:00 〜 12:00", "セッション1"],
      ["12:00 〜 13:00", "昼食"],
      ["13:00 〜 14:00", "セッション2"],
      ["14:00 〜 14:30", "休憩"],
      ["14:30 〜 15:30", "セッション3"],
      ["15:30 〜 16:00", "質疑応答"],
      ["16:00 〜 16:30", "閉会"],
      ["16:30 〜 17:00", "退出"],
    ],
  },
  {
    day: "２日目",
    items: [
      ["09:00 〜 10:00", "会場準備"],
      ["10:00 〜 10:30", "スタッフ集合"],
      ["10:30 〜 11:00", "受付開始"],
      ["11:00 〜 12:00", "オープニング"],
      ["12:00 〜 13:00", "企画展示"],
      ["13:00 〜 14:00", "昼食"],
      ["14:00 〜 14:30", "ステージイベント①"],
      ["14:30 〜 15:30", "休憩"],
      ["15:30 〜 16:00", "ステージイベント②"],
      ["16:00 〜 16:30", "エンディング"],
      ["16:30 〜 17:00", "閉会"],
      ["17:00 〜 17:30", "退出"],
    ],
  },
];

const ZentaiTimetable = () => {
  return (
    <section className="Home-timetable-section">
      <h2 className="Home-section-title">タイムテーブル</h2>

      <div className="Home-box">
        {timetableData.map((dayData, index) => (
          <div key={index}>
            <h3 className="Home-day-title">{dayData.day}</h3>

            <table className="Home-table">
              

              <tbody>
                {dayData.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZentaiTimetable;