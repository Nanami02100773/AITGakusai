import React from "react";
import "./Timetable.css";

const ZentaiTimetable = () => {
  return (
    <section className="Home-timetable-section">
      <h2 className="Home-title Home-time_table">タイムテーブル</h2>

      <div className="Home-box">
        {/* ===== 1日目 ===== */}
        <h3 className="Home-title Home-time_table Home-day-title">１日目</h3>
        <table className="Home-table">
          <thead>
            <tr>
              <th>時間</th>
              <th
                className="Home-divider-cell Home-divider-head Home-only-head"
                rowSpan="100"
              ></th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>08:00 〜 09:00</td><td className="Home-divider-cell" rowSpan="100"></td><td>会場準備</td></tr>
            <tr><td>09:00 〜 10:00</td><td className="Home-divider-space"></td><td>スタッフ集合</td></tr>
            <tr><td>10:00 〜 10:30</td><td className="Home-divider-space"></td><td>受付開始</td></tr>
            <tr><td>10:30 〜 11:00</td><td className="Home-divider-space"></td><td>開会のあいさつ</td></tr>
            <tr><td>11:00 〜 12:00</td><td className="Home-divider-space"></td><td>セッション1</td></tr>
            <tr><td>12:00 〜 13:00</td><td className="Home-divider-space"></td><td>昼食</td></tr>
            <tr><td>13:00 〜 14:00</td><td className="Home-divider-space"></td><td>セッション2</td></tr>
            <tr><td>14:00 〜 14:30</td><td className="Home-divider-space"></td><td>休憩</td></tr>
            <tr><td>14:30 〜 15:30</td><td className="Home-divider-space"></td><td>セッション3</td></tr>
            <tr><td>15:30 〜 16:00</td><td className="Home-divider-space"></td><td>質疑応答</td></tr>
            <tr><td>16:00 〜 16:30</td><td className="Home-divider-space"></td><td>閉会</td></tr>
            <tr><td>16:30 〜 17:00</td><td className="Home-divider-space"></td><td>退出</td></tr>
          </tbody>
        </table>

        {/* ===== 2日目 ===== */}
        {/* ===== 2日目 ===== */}
<h3 className="Home-title Home-time_table Home-day-title">２日目</h3>
<table className="Home-table">
  <thead>
    <tr>
      <th>時間</th>
      <th
        className="Home-divider-cell Home-divider-head Home-only-head"
        rowSpan="100"
      ></th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>09:00 〜 10:00</td>
      <td className="Home-divider-cell" rowSpan="100"></td>
      <td>会場準備</td>
    </tr>
    <tr>
      <td>10:00 〜 10:30</td>
      <td className="Home-divider-space"></td>
      <td>受付開始</td>
    </tr>
    <tr>
      <td>10:30 〜 11:00</td>
      <td className="Home-divider-space"></td>
      <td>オープニング</td>
    </tr>
    <tr>
      <td>11:00 〜 12:00</td>
      <td className="Home-divider-space"></td>
      <td>企画展示</td>
    </tr>
    <tr>
      <td>12:00 〜 13:00</td>
      <td className="Home-divider-space"></td>
      <td>昼食</td>
    </tr>
    <tr>
      <td>13:00 〜 14:00</td>
      <td className="Home-divider-space"></td>
      <td>ステージイベント①</td>
    </tr>
    <tr>
      <td>14:00 〜 14:30</td>
      <td className="Home-divider-space"></td>
      <td>休憩</td>
    </tr>
    <tr>
      <td>14:30 〜 15:30</td>
      <td className="Home-divider-space"></td>
      <td>ステージイベント②</td>
    </tr>
    <tr>
      <td>15:30 〜 16:00</td>
      <td className="Home-divider-space"></td>
      <td>エンディング</td>
    </tr>
    <tr>
      <td>16:00 〜 16:30</td>
      <td className="Home-divider-space"></td>
      <td>閉会</td>
    </tr>
    <tr>
      <td>16:30 〜 17:00</td>
      <td className="Home-divider-space"></td>
      <td>退出</td>
    </tr>
  </tbody>
</table>

      </div>
    </section>
  );
};

export default ZentaiTimetable;
