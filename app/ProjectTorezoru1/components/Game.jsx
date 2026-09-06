import React from "react";
import "./Game.css";

const cardData = [
  {
    group: "ポーカー",
    label: "1～4人",
    title: "役をそろえてディーラーに勝利！",
    points: [
      "5枚のカードを使って役を作るゲームです。",
      "カードチェンジは1回まで可能で、2回に分けてコインを賭けることができます。",
      "ロイヤルストレートフラッシュなら最大15倍の配当！",
    ],
  },
  {
    group: "ブラックジャック",
    label: "1～4人",
    title: "21に近づけてディーラーに勝とう！",
    points: [
      "カードの合計を21に近づけるゲームです。",
      "21を超えないようにカードを引くか、ステイして勝負します。",
      "Aと絵札によるブラックジャックなら3倍の配当！",
    ],
  },
  {
    group: "大富豪",
    label: "2～4人",
    title: "誰よりも早くカードを出し切れ！",
    points: [
      "カードの強さを見極めながら、手札を誰よりも早くなくします。",
      "大富豪や富豪などの順位によって配当が変化します。",
      "革命や8切りなどの特殊ルールも登場！",
    ],
  },
  {
    group: "ドボン",
    label: "2～4人",
    title: "カードを出して誰よりも早くあがろう！",
    points: [
      "場のカードと同じマークや数字のカードを出していきます。",
      "カードを出せない場合は山札からカードを引きます。",
      "条件を満たせば「ドボン」を宣言して一気にあがれます！",
    ],
  },
  {
    group: "ジャックポット",
    label: "1人",
    title: "サイコロを振ってコインを集めよう！",
    points: [
      "2つのサイコロを振り、出た目の合計の場所にコインを置きます。",
      "コインが3枚以上たまっている場所に当たれば、コインをすべてもらえます。",
      "ゾロ目や1のゾロ目には特別なチャンスがあります！",
    ],
  },
  {
    group: "ビッグシックス",
    label: "1人～",
    title: "狙った場所にコインを賭けて勝負！",
    points: [
      "JOKERやFLAG、数字など好きな場所にコインを賭けます。",
      "ストッパーが止まった場所を当てれば配当を獲得できます。",
      "場所によって配当が異なり、最大20枚まで賭けられます！",
    ],
  },
  {
    group: "ルーレット",
    label: "1人～",
    title: "数字を予想してコインを賭けよう！",
    points: [
      "好きな数字や色、奇数・偶数などにコインを賭けます。",
      "ルーレットの出目を予想して勝負します。",
      "賭け方によって配当が変わり、大きな配当も狙えます！",
    ],
  },
  {
    group: "ダーツ",
    label: "1～2人",
    title: "3本のダーツで高得点を狙え！",
    points: [
      "1人3本のダーツを投げて得点を競います。",
      "2人の場合は得点の高い方が10枚のコインを獲得します。",
      "合計160点超えやハットトリックで特別なコインを獲得できます！",
    ],
  },
];

const Game = () => {
  return (
    <section className="kajino-section">

      {/* ==========================================
          タイトル
      ========================================== */}

      <div className="kajino-section-wrapper">
        <div className="kajino-section-title">
          ゲーム一覧
        </div>
      </div>


      {/* ==========================================
          カード一覧
      ========================================== */}

      <main className="kajino-card-list">
        <div className="kajino-card-wrapper">

          {cardData.map((item, index) => (
            <div
              className="kajino-card"
              key={index}
            >

              {/* ==================================
                  上部
              ================================== */}

              <div className="kajino-card-header">

                <div className="kajino-card-header-text">

                  {/* ゲーム名 */}
                  <div className="kajino-overlay-box">
                    {item.group}
                  </div>

                  {/* キャッチコピー */}
                  <div className="kajino-sub1-title">
                    {item.title}
                  </div>

                </div>

                {/* 横ライン */}
                <div className="kajino-header-line"></div>

              </div>


              {/* ==================================
                  内容
              ================================== */}

              <div className="kajino-card-content">

                {/* 左側 */}
                <div className="kajino-card-left">

                  <div className="kajino-thumb-wrapper">

                    <div className="kajino-thumb"></div>

                  </div>

                </div>


                {/* 右側 */}
                <div className="kajino-card-right">

                  {item.points.map((point, pointIndex) => (
                    <div
                      className="kajino-point"
                      key={pointIndex}
                    >

                      <div className="kajino-point-number">
                        {pointIndex + 1}
                      </div>

                      <div className="kajino-introduction1-subdesc">
                        {point}
                      </div>

                    </div>
                  ))}

                </div>

              </div>


              {/* ==================================
                  人数
              ================================== */}

              <div className="kajino-label">
                {item.label}
              </div>

            </div>
          ))}

        </div>
      </main>

    </section>
  );
};

export default Game;