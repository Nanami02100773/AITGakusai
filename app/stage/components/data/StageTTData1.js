import openingImage from "../stagetimeTT/opening.jpg";
import opening2Image from "../stagetimeTT/opening2.jpg";
import marubatsuGameImage from "../stagetimeTT/marubatsugame.jpg";
import bingoGameImage from "../stagetimeTT/bingogame.jpg";
import cleaningImage from "../stagetimeTT/cleaning.jpg";
import endingImage from "../stagetimeTT/ending1.jpg";
import preparation1Image from "../stagetimeTT/preparation1.jpg";
import setting1Image from "../stagetimeTT/setting1.jpg";
import setting2Image from "../stagetimeTT/setting2.jpg";

const StageTTData1 = [
  {
    time: "10:30〜10:45",
    title: "オープニング",
    icon: "/hometime/opening.png",
    image: openingImage,
    detail:
      "愛工大祭のスタートを飾るオープニング！出演者と一緒に会場を盛り上げます。",
  },
  {
    time: "10:45〜11:05",
    title: "常笑",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "11:05〜11:15",
    title: "YUK BEATBOX",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "11:15〜11:45",
    title: "skip-A",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "11:45〜12:15",
    title: "歌王",
    icon: "/hometime/crown.png",
    isPerformer: true,
  },
  {
    time: "12:15〜12:45",
    title: "Pulse",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "12:45〜13:10",
    title: "イントロドン",
    icon: "/hometime/game.png",
    image: marubatsuGameImage,
    detail:
      "曲のイントロを聴いて曲名を当てる参加型ゲーム！みんなで一緒に楽しもう！",
  },
  {
    time: "13:10〜13:40",
    title: "大道芸人Kei",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "13:40〜14:00",
    title: "○×ゲーム",
    icon: "/hometime/game.png",
    image: marubatsuGameImage,
    detail:
      "さまざまな問題に○か×で答える参加型ゲーム！最後まで正解を目指そう！",
  },
  {
    time: "14:00〜14:20",
    title: "名古屋大学落語家研究会",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "14:20〜14:25",
    title: "準備",
    icon: "/hometime/preparation.png",
    image: preparation1Image,
    detail:
      "次のステージに向けて、出演者やスタッフが準備を行います。",
  },
  {
    time: "14:25〜14:55",
    title: "アイデンティティ",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "14:55〜15:05",
    title: "エンディング",
    icon: "/hometime/ending.png",
    image: endingImage,
    detail:
      "1日目のステージを締めくくるエンディング！最後まで一緒に楽しみましょう！",
  },
  {
    time: "15:05〜15:50",
    title: "リハーサル",
    icon: "/hometime/setting.png",
    image: setting1Image,
    detail:
      "これから始まるステージに向けて、本番前のリハーサルを行います。",
  },
  {
    time: "15:50〜16:00",
    title: "オープニング",
    icon: "/hometime/opening.png",
    image: opening2Image,
    detail:
      "次のステージのスタートに向けて、会場を盛り上げます！",
  },
  {
    time: "16:00〜17:00",
    title: "Whimsical Skit",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "17:00〜17:45",
    title: "リハーサル",
    icon: "/hometime/setting.png",
    image: setting2Image,
    detail:
      "夜のステージに向けて、出演者が本番前のリハーサルを行います。",
  },
  {
    time: "17:45〜18:45",
    title: "ねぎ塩豚丼",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "18:45〜18:55",
    title: "片付け",
    icon: "/hometime/preparation.png",
    image: cleaningImage,
    detail:
      "次の企画に向けて、ステージ周辺の片付けと準備を行います。",
  },
  {
    time: "18:55〜19:55",
    title: "ビンゴゲーム",
    icon: "/hometime/card.png",
    image: bingoGameImage,
    detail:
      "数字が読み上げられるたびにカードをチェック！ビンゴを目指してみんなで盛り上がろう！",
  },
  {
    time: "19:55〜20:00",
    title: "エンディング",
    icon: "/hometime/ending.png",
    image: endingImage,
    detail:
      "1日目のステージを締めくくります。最後まで一緒に楽しみましょう！",
  },
];

export default StageTTData1;