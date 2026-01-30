import React from 'react';
import './AwardSection.css';

const AwardSection = () => {
  return (
    <section className="Home-award-section">
      <h2 className="Home-section-title" style={{ textAlign: 'center' }}>
        グランプリ
      </h2>

      <h3 className="Home-box1 Home-title2">
        例）本校学園祭では、模擬店・工科展などの出展に対し、来場者や審査員による投票をもとに「グランプリ」を決定します。( 仮置き文 )
      </h3>

      <div className="Home-box2">
        <div className="Home-award-card">
          <div>ベスト・オブ・ブース賞</div>
          <div className="Home-award-desc">説明： ——————————————</div>
        </div>
        <div className="Home-award-card">
          <div>ベストオブ工科展賞</div>
          <div className="Home-award-desc">説明：——————————————</div>
        </div>
        <div className="Home-award-card">
          <div>瑞若会特別賞</div>
          <div className="Home-award-desc">説明：——————————————</div>
        </div>
        <div className="Home-award-card">
          <div>後援会賞</div>
          <div className="Home-award-desc">説明：——————————————</div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
