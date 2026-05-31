"use client";

import React from "react";
import "./Timetable.css";

const timetableData = [
  {
    day: "１日目",
    items: [
      ["10:30〜10:45", "オープニング", "/hometime/opening.png"],
      ["10:45〜11:10", "ダンサー1組目", "/hometime/note.png"],
      ["11:10〜11:15", "準備", "/hometime/preparation.png"],
      ["11:15〜11:45", "出演者様", "/hometime/microphone.png"],
      ["11:45〜11:50", "準備", "/hometime/preparation.png"],
      ["11:50〜12:10", "○×ゲーム", "/hometime/game.png"],
      ["12:10〜12:20", "準備", "/hometime/preparation.png"],
      ["12:20〜12:50", "アイドル1組目", "/hometime/star.png"],
      ["12:50〜13:20", "歌王", "/hometime/crown.png"],
      ["13:20〜13:40", "出演者様", "/hometime/microphone.png"],
      ["13:40〜13:45", "準備", "/hometime/preparation.png"],
      ["13:45〜14:15", "芸人1組目", "/hometime/comedian.png"],
      ["14:15〜14:25", "準備", "/hometime/preparation.png"],
      ["14:25〜14:55", "芸人2組目", "/hometime/comedian.png"],
      ["14:55〜15:05", "エンディング", "/hometime/ending.png"],
      ["15:05〜16:00", "セッティング・リハーサル", "/hometime/setting.png"],
      ["16:00〜16:10", "オープニング", "/hometime/opening.png"],
      ["16:10〜17:10", "演者様①演奏", "/hometime/guitar.png"],
      ["17:10〜17:45", "セッティング・リハーサル", "/hometime/setting.png"],
      ["17:45〜18:45", "演者様②演奏", "/hometime/guitar.png"],
      ["18:45〜18:55", "片付け", "/hometime/preparation.png"],
      ["18:55〜19:55", "ビンゴゲーム", "/hometime/card.png"],
      ["19:55〜20:00", "エンディング", "/hometime/ending.png"],
    ],
  },

  {
    day: "２日目",
    items: [
      ["10:30〜10:45", "オープニング", "/hometime/opening.png"],
      ["10:45〜11:15", "アイドル1組目", "/hometime/star.png"],
      ["11:15〜11:45", "アイドル2組目", "/hometime/star.png"],
      ["11:45〜12:15", "歌王", "/hometime/crown.png"],
      ["12:15〜12:50", "アイドル3組目", "/hometime/star.png"],
      ["12:50〜13:20", "アイドル4組目", "/hometime/star.png"],
      ["13:20〜13:30", "エンディング", "/hometime/ending.png"],
      ["13:30〜15:00", "出演者様", "/hometime/microphone.png"],
      ["17:00〜17:05", "オープニング", "/hometime/opening.png"],
      ["17:05〜17:15", "工科展・模擬店の表彰", "/hometime/trophy.png"],
      ["17:15〜17:30", "後夜ダンス①", "/hometime/danceafter.png"],
      ["17:30〜17:35", "準備", "/hometime/preparation.png"],
      ["17:35〜18:10", "Laugh & Music", "/hometime/note.png"],
      ["17:35〜18:10", "アイドル5組目", "/hometime/star.png"],
      ["18:10〜18:25", "後夜ダンス②", "/hometime/danceafter.png"],
      ["18:25〜18:30", "準備", "/hometime/preparation.png"],
      ["18:30〜19:35", "ビンゴゲーム", "/hometime/game.png"],
      ["19:35〜20:00", "火舞", "/hometime/fire.png"],
      ["20:00〜20:05", "委員長挨拶", "/hometime/speech.png"],
      ["20:05〜20:10", "仕掛け花火", "/hometime/dynamite.png"],
      ["未定", "打ち上げ花火", "/hometime/firework.png"],
      ["20:10〜", "ファイヤートーチ", "/hometime/firetorch.png"],
    ],
  },
];

const ZentaiTimetable = () => {
  return (
    <section className="Home-timetable-section">
      <h2 className="Home-section-title">
        タイムテーブル
      </h2>

      <div className="Home-box">
        {timetableData.map((dayData, index) => (
          <div key={index}>
            <h3
              className={`Home-day-title ${
                index === 1
                  ? "Home-day-title-second"
                  : ""
              }`}
            >
              <span>
                <small>
                  {index === 0
                    ? "1日目"
                    : "2日目"}
                </small>

                <b>
                  {index === 0
                    ? "10.10(土)"
                    : "10.11(日)"}
                </b>
              </span>
            </h3>

            <div className="Home-list">
              {dayData.items.map((item, i) => (
                <div
                  key={i}
                  className="Home-row"
                >
                  <div className="Home-time">
                    {item[0]}
                  </div>

                  <div className="Home-icon">
                    <img
                      src={item[2]}
                      alt={item[1]}
                      className="Home-icon-img"
                    />
                  </div>

                  <div className="Home-content">
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZentaiTimetable;