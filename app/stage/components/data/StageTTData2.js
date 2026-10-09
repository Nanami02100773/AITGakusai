import opening1Image from "../stagetimeTT2/opening1.jpg";
import opening2Image from "../stagetimeTT2/opening2.jpg";
import preparation1Image from "../stagetimeTT2/preparation1.jpg";
import preparation2Image from "../stagetimeTT2/preparation2.jpg";
import endingImage from "../stagetimeTT2/ending1.jpg";
import awardImage from "../stagetimeTT2/Award.jpg";
import bingoGameImage from "../stagetimeTT2/bingogame1.jpg";
import fireTorchImage from "../stagetimeTT2/firetorch.jpg";
import fireworksPieceImage from "../stagetimeTT2/fireworkspiece.jpg";
import greetingImage from "../stagetimeTT2/greeting.jpg";
import himaiImage from "../stagetimeTT2/himai.jpg";
import koyaDance1Image from "../stagetimeTT2/koyadance1.jpg";
import koyaDance2Image from "../stagetimeTT2/koyadance2.jpg";

const StageTTData2 = [
  {
    time: "10:35〜10:50",
    title: "オープニング",
    icon: "/hometime/opening.png",
    image: opening1Image,
    detail:
      "2日目のステージがスタート！出演者と一緒に会場を盛り上げます。",
  },
  {
    time: "10:50〜11:25",
    title: "O₂",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "11:25〜11:55",
    title: "歌王",
    icon: "/hometime/crown.png",
    isPerformer: true,
  },
  {
    time: "11:55〜12:45",
    title: "超！反抗×CHU♡-Lollipop♡CHU×Re:belious-",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "12:45〜12:50",
    title: "準備",
    icon: "/hometime/preparation.png",
    image: preparation1Image,
    detail:
      "次のステージに向けて、出演者やスタッフが準備を行います。",
  },
  {
    time: "12:50〜13:10",
    title: "ヒトノカネデスシガタベタイ",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "13:10〜13:15",
    title: "準備",
    icon: "/hometime/preparation.png",
    image: preparation2Image,
    detail:
      "次のステージに向けて、出演者やスタッフが準備を行います。",
  },
  {
    time: "13:15〜13:35",
    title: "macaron",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "13:35〜13:40",
    title: "準備",
    icon: "/hometime/preparation.png",
    image: preparation1Image,
    detail:
      "次のステージに向けて、出演者やスタッフが準備を行います。",
  },
  {
    time: "13:40〜14:20",
    title: "最終未来少女",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "14:20〜14:30",
    title: "エンディング",
    icon: "/hometime/ending.png",
    image: endingImage,
    detail:
      "昼のステージを締めくくるエンディング！最後まで一緒に楽しみましょう！",
  },
  {
    time: "14:30〜17:00",
    title: "準備",
    icon: "/hometime/setting.png",
    image: preparation2Image,
    detail:
      "夜のステージに向けて、会場や機材などの準備を行います。",
  },
  {
    time: "17:00〜17:05",
    title: "オープニング",
    icon: "/hometime/opening.png",
    image: opening2Image,
    detail:
      "夜のステージがスタート！ここからさらに会場を盛り上げます！",
  },
  {
    time: "17:05〜17:15",
    title: "工科展・模擬店表彰",
    icon: "/hometime/trophy.png",
    image: awardImage,
    detail:
      "工科展や模擬店で選ばれた団体を表彰します。受賞団体をみんなでお祝いしましょう！",
  },
  {
    time: "17:15〜17:30",
    title: "後夜ダンス1",
    icon: "/hometime/danceafter.png",
    image: koyaDance1Image,
    detail:
      "愛工大祭の夜を盛り上げるダンスステージ！一緒に楽しみましょう！",
  },
  {
    time: "17:30〜18:10",
    title: "足太ぺんた",
    icon: "/hometime/microphone.png",
    isPerformer: true,
  },
  {
    time: "18:10〜18:30",
    title: "後夜ダンス2",
    icon: "/hometime/danceafter.png",
    image: koyaDance2Image,
    detail:
      "後夜祭を盛り上げるダンスステージ！会場みんなで盛り上がろう！",
  },
  {
    time: "18:30〜18:35",
    title: "準備",
    icon: "/hometime/preparation.png",
    image: preparation1Image,
    detail:
      "次の企画に向けて、ステージの準備を行います。",
  },
  {
    time: "18:35〜19:40",
    title: "ビンゴゲーム",
    icon: "/hometime/game.png",
    image: bingoGameImage,
    detail:
      "数字が読み上げられるたびにカードをチェック！ビンゴを目指して盛り上がろう！",
  },
  {
    time: "19:40〜20:05",
    title: "火舞",
    icon: "/hometime/fire.png",
    image: himaiImage,
    detail:
      "炎を使った迫力あるパフォーマンス！夜のステージを華やかに彩ります。",
  },
  {
    time: "20:05〜20:10",
    title: "委員長挨拶",
    icon: "/hometime/speech.png",
    image: greetingImage,
    detail:
      "愛工大祭実行委員長より、来場者の皆さまへご挨拶します。",
  },
  {
    time: "20:10〜20:15",
    title: "仕掛け打ち上げ花火",
    icon: "/hometime/dynamite.png",
    image: fireworksPieceImage,
    detail:
      "愛工大祭のフィナーレを彩る仕掛け花火！最後の瞬間までお楽しみください。",
  },
  {
    time: "20:15〜",
    title: "ファイヤートーチ",
    icon: "/hometime/firetorch.png",
    image: fireTorchImage,
    detail:
      "炎を使ったパフォーマンスで愛工大祭を締めくくります！",
  },
];

export default StageTTData2;