import React from 'react';
import './Timetable.css';

const ZentaiTimetable = () => {
  return (
    <section className="timetable-section">
  <h2 className="title time_table">タイムテーブル</h2>

  <div className="box">
    {/* ===== 1日目 ===== */}
    <h3 className="title time_table day-title">１日目</h3>
    <table>
      <thead>
        <tr>
          <th>時間</th>
          <th className="divider-cell divider-head only-head" rowSpan="100"></th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>08:00 〜 09:00</td><td className="divider-cell" rowSpan="100"></td><td>会場準備</td></tr>
        <tr><td>09:00 〜 10:00</td><td className="divider-space"></td><td>スタッフ集合</td></tr>
        <tr><td>10:00 〜 10:30</td><td className="divider-space"></td><td>受付開始</td></tr>
        <tr><td>10:30 〜 11:00</td><td className="divider-space"></td><td>開会のあいさつ</td></tr>
        <tr><td>11:00 〜 12:00</td><td className="divider-space"></td><td>セッション1</td></tr>
        <tr><td>12:00 〜 13:00</td><td className="divider-space"></td><td>昼食</td></tr>
        <tr><td>13:00 〜 14:00</td><td className="divider-space"></td><td>セッション2</td></tr>
        <tr><td>14:00 〜 14:30</td><td className="divider-space"></td><td>休憩</td></tr>
        <tr><td>14:30 〜 15:30</td><td className="divider-space"></td><td>セッション3</td></tr>
        <tr><td>15:30 〜 16:00</td><td className="divider-space"></td><td>質疑応答</td></tr>
        <tr><td>16:00 〜 16:30</td><td className="divider-space"></td><td>閉会</td></tr>
        <tr><td>16:30 〜 17:00</td><td className="divider-space"></td><td>退出</td></tr>
      </tbody>
    </table>

    {/* ===== 2日目 ===== */}
    <h3 className="title time_table day-title">２日目</h3>
    <table>
      <thead>
        <tr>
          <th>時間</th>
          <th className="divider-cell divider-head only-head" rowSpan="100"></th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>10:00 〜 11:00</td><td className="divider-cell" rowSpan="100"></td><td>オープニング</td></tr>
        <tr><td>11:00 〜 12:00</td><td className="divider-space"></td><td>企画展示</td></tr>
        <tr><td>12:00 〜 13:00</td><td className="divider-space"></td><td>昼食</td></tr>
        <tr><td>13:00 〜 14:30</td><td className="divider-space"></td><td>ステージイベント</td></tr>
        <tr><td>14:30 〜 15:00</td><td className="divider-space"></td><td>休憩</td></tr>
        <tr><td>15:00 〜 16:00</td><td className="divider-space"></td><td>クロージング</td></tr>
      </tbody>
    </table>
  </div>
</section>

  );
};

export default ZentaiTimetable;
