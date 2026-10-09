// =================================================
// ホーム画面タイムテーブルデータ
//
// ▼変更してよい
// 時間
// 企画名
// 画像
//
// ▼イベント追加方法
// ["時間", "企画名", "画像パス"]
// をコピーして追加
//
// ▼画像保存場所
// public/hometime
// =================================================

const HomeTTData = [
  {
    day: "１日目",
    items: [
      ["10:30〜10:45", "オープニング", "/hometime/opening.png"],
      ["10:45〜11:05", "常笑", "/hometime/microphone.png"],
      ["11:05〜11:15", "YUK BEATBOX", "/hometime/microphone.png"],
      ["11:15〜11:45", "skip-A", "/hometime/microphone.png"],
      ["11:45〜12:15", "歌王", "/hometime/crown.png"],
      ["12:15〜12:45", "Pulse", "/hometime/microphone.png"],
      ["12:45〜13:10", "イントロドン", "/hometime/game.png"],
      ["13:10〜13:40", "大道芸人Kei", "/hometime/microphone.png"],
      ["13:40〜14:00", "○×ゲーム", "/hometime/game.png"],
      ["14:00〜14:20", "名古屋大学落語家研究会", "/hometime/microphone.png"],
      ["14:20〜14:25", "準備", "/hometime/preparation.png"],
      ["14:25〜14:55", "アイデンティティ", "/hometime/microphone.png"],
      ["14:55〜15:05", "エンディング", "/hometime/ending.png"],
      ["15:05〜15:50", "リハーサル", "/hometime/setting.png"],
      ["15:50〜16:00", "オープニング", "/hometime/opening.png"],
      ["16:00〜17:00", "Whimsical Skit", "/hometime/microphone.png"],
      ["17:00〜17:45", "リハーサル", "/hometime/setting.png"],
      ["17:45〜18:45", "ねぎ塩豚丼", "/hometime/microphone.png"],
      ["18:45〜18:55", "片付け", "/hometime/preparation.png"],
      ["18:55〜19:55", "ビンゴゲーム", "/hometime/card.png"],
      ["19:55〜20:00", "エンディング", "/hometime/ending.png"],
    ],
  },
  {
    day: "２日目",
    items: [
      ["10:35〜10:50", "オープニング", "/hometime/opening.png"],
      ["10:50〜11:25", "O₂", "/hometime/microphone.png"],
      ["11:25〜11:55", "歌王", "/hometime/crown.png"],
      ["11:55〜12:45", "超！反抗×CHU♡-Lollipop♡CHU×Re:belious-", "/hometime/microphone.png"],
      ["12:45〜12:50", "準備", "/hometime/preparation.png"],
      ["12:50〜13:10", "ヒトノカネデスシガタベタイ", "/hometime/microphone.png"],
      ["13:10〜13:15", "準備", "/hometime/preparation.png"],
      ["13:15〜13:35", "macaron", "/hometime/microphone.png"],
      ["13:35〜13:40", "準備", "/hometime/preparation.png"],
      ["13:40〜14:20", "最終未来少女", "/hometime/microphone.png"],
      ["14:20〜14:30", "エンディング", "/hometime/ending.png"],
      ["14:30〜17:00", "準備", "/hometime/setting.png"],
      ["17:00〜17:05", "オープニング", "/hometime/opening.png"],
      ["17:05〜17:15", "工科展・模擬店表彰", "/hometime/trophy.png"],
      ["17:15〜17:30", "後夜ダンス1", "/hometime/danceafter.png"],
      ["17:30〜18:10", "足太ぺんた", "/hometime/microphone.png"],
      ["18:10〜18:30", "後夜ダンス2", "/hometime/danceafter.png"],
      ["18:30〜18:35", "準備", "/hometime/preparation.png"],
      ["18:35〜19:40", "ビンゴゲーム", "/hometime/game.png"],
      ["19:40〜20:05", "火舞", "/hometime/fire.png"],
      ["20:05〜20:10", "委員長挨拶", "/hometime/speech.png"],
      ["20:10〜20:15", "仕掛け打ち上げ花火", "/hometime/dynamite.png"],
      ["20:15〜", "ファイヤートーチ", "/hometime/firetorch.png"],
    ],
  },
];

export default HomeTTData;