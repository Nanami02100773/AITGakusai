import React from 'react';
import './AwardSection.css';

const AwardSection = () => {
  return (
    <section>
      <h2 className="title1" style={{ textAlign: 'center' }}>グランプリ</h2>
      <h3 className="box1 title2">
        例）本校学園祭では、模擬店・工科展などの出展に対し、来場者や審査員による投票をもとに「グランプリ」を決定します。
        工夫や創造性、完成度、来場者への対応など、総合的な評価をもとに選ばれるこの賞は、学祭の中でも最高の栄誉です。皆様、是非投票してください。
      </h3>

      <div className="box2">
        <div className="award-card">
          <div>ベスト・オブ・ブース賞</div>
          <div className="award-desc">説明： ——————————————</div>
        </div>
        <div className="award-card">
          <div>ベストオブ工科展賞</div>
          <div className="award-desc">説明：——————————————</div>
        </div>
        <div className="award-card">
          <div>瑞若会特別賞</div>
          <div className="award-desc">説明：——————————————</div>
        </div>
        <div className="award-card">
          <div>後援会賞</div>
          <div className="award-desc">説明：——————————————</div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
