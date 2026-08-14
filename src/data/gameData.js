export const COLORS = {
  kraft: "#E7D9B8",
  kraftDark: "#D8C69E",
  navyink: "#263148",
  redstamp: "#B23A2E",
  tape: "#EFB93C",
  cream: "#F8F2E2",
};

export const MOBS = [
  { id: "obaa", style: "obaa", name: "近所のおばあちゃん", skin: "#F1C9A0", hair: "#BFBFBF", talk: "ねぇねぇ、聞いてよ……" },
  { id: "salary", style: "salary", name: "帰宅中のサラリーマン", skin: "#EFC29A", hair: "#2B2B2B", talk: "いやー残業帰りにあんなやつ見れるとはね、あれはね……" },
  { id: "gakusei", style: "gakusei", name: "学生", skin: "#F3CFA8", hair: "#4A3B2A", talk: "えっと…………ちゃんと見ました。" },
  { id: "gakusei2", style: "hen", name: "少し変わった学生", skin: "#F3CFA8", hair: "#4A3B2A", talk: "あのさ…………見たんだけどさ、たぶん。知らんけど" },
  { id: "anntyan", style: "anntyan", name: "距離感の近い現場職", skin: "#E7B98C", hair: "#1F1F1F", talk: "おれ上から見てたんだけどよ。" },
  { id: "kodomo", style: "kodomo", name: "こども", skin: "#F3CFA8", hair: "#4A3B2A", talk: "えっとね、ぼくみたんだけどね。えっとね…………" },
  { id: "ni-to", style: "nito", name: "ニート", skin: "#F3CFA8", hair: "#4A3B2A", talk: "あのですね、拙者見てんですがね…………はい、あの、はい。" },
];

export const PARTS_HUMAN = {
  hairType: [
    "ツンツン頭", "七三分け", "スキンヘッド", "ぼさぼさの長髪", "きっちりパーマ",
    "寝ぐせだらけの髪", "オールバック", "刈り上げ", "ドレッドヘア", "アフロ",
    "モヒカン", "びしょ濡れの髪",
  ],
  hairColor: [
    "真っ黒な髪", "茶色っぽい髪", "金髪", "白髪交じりの髪", "なぜか緑の髪（たぶんカツラ）",
    "ピンクの髪", "青みがかった髪", "虹色っぽい髪（見間違いかも）", "白髪", "銀髪",
  ],
  faceShape: [
    "丸顔", "面長の顔", "えらの張った輪郭", "三角っぽい輪郭", "四角い輪郭",
    "ひょうたんみたいな輪郭", "やたら平べったい顔", "妙にツヤツヤした顔",
  ],
  eyes: [
    "タレ目", "ツリ目", "ギョロっとした目", "細い目", "左右で大きさが違う目",
    "やたら潤んだ目", "眠そうな目", "笑ってるみたいに見える目", "焦点の合ってない目",
  ],
  notable: [
    "とても大きい鼻", "つながった眉毛", "ほっぺたに大きなほくろ", "金歯", "ほっぺたに傷跡",
    "ずっとにやにやした表情", "鼻の下にちょびひげ", "耳がやたら大きい", "鼻がやたら低い",
    "顎がしゃくれてる", "頬がこけてる", "妙に色白な肌", "普通の丸めがねをかけてた",
    "ちょっと眠そうな顔だった", "特に特徴のない顔だった", "どこにでもいそうな顔だった",
    "地味だけど清潔感のある顔だった", "ちょっと日焼けした顔だった", "無精髭が生えてた",
    "普通にイケメンだった", "普通に地味な顔だった", "愛想の良さそうな顔だった",
    "ちょっと気が弱そうな顔だった", "背が高そうな体格だった", "小柄な体格だった",
    "がっしりした体格だった", "ほっそりした体つきだった", "笑うと八重歯が見えた",
    "耳にピアスの穴があった", "普通に清潔感のある服装だった", "特に変わったところはなかった",
],
  iconic: [
    "あんこが詰まってそうな顔でした",
    "この人がいたら事件が起きそうな顔でした",
    "おでこに「肉」って書いてありそうな顔でした",
    "コンビニの前でしゃがんでそうな顔でした",
    "習い事の先生っぽい顔でした",
    "教頭先生みたいな顔でした",
    "やんちゃな不良っぽいけど根は優しそうな顔でした",
    "何かの主人公っぽい顔でした",
    "ラスボスっぽい顔でした",
    "その場のノリで結婚しそうな顔でした",
    "全国大会で負けそうな顔でした",
    "実は良い人そうな顔でした",
    "得意げになりそうな顔でした",
    "ちょっとハンバーグが好きそうな顔でした",
    "何かのマスコットキャラみたいな顔でした",
    "パチンコ屋の前にいそうな顔でした",
    "駅前で演説してそうな顔でした",
    "占い師っぽい顔でした",
    "何かの妖精っぽい顔でした",
    "同窓会で誰だか分からなそうな顔でした",
  ],
  accessory: [
    "深くかぶった帽子", "サングラス", "マスク姿", "派手なマフラー", "でかい金のネックレス",
    "変な柄のシャツ", "アロハシャツ", "ダボダボのジャージ", "謎の着ぐるみっぽい何か",
    "妙にキラキラした指輪",
  ],
};

export const TEMPLATE_SETS = {
  obaa: [
    (v) => `犯人はね、${v}だったんだよ`,
    (v) => `たしか${v}だったねえ`,
    (v) => `${v}だったと思うんだけどねえ`,
    (v) => `${v}じゃったなあ、たぶん`,
  ],
  salary: [
    (v) => `犯人、${v}でしたね`,
    (v) => `疲れてたんで自信ないですけど、${v}だったと思います`,
    (v) => `${v}だったような...そんな感じでした`,
    (v) => `${v}だったのは間違いないです`,
  ],
  gakusei: [
    (v) => `${v}だったと思います`,
    (v) => `たしか${v}でした`,
    (v) => `${v}だったはずです`,
    (v) => `ちゃんと見たので、${v}です`,
  ],
  hen: [
    (v) => `${v}っぽかったよ、知らんけど`,
    (v) => `なんか${v}だった気がする〜`,
    (v) => `${v}だったような？わかんないけど`,
    (v) => `${v}、だったかなあ。帰ってもいい？`,
  ],
  anntyan: [
    (v) => `${v}だったな`,
    (v) => `上から見てたけど、${v}だったぞ`,
    (v) => `${v}だったのは見えたな`,
    (v) => `間違いなく${v}だったわ`,
  ],
  kodomo: [
    (v) => `えっとね、${v}だったよ！`,
    (v) => `${v}だったとおもう！たぶん！`,
    (v) => `あのねー、${v}だったのー`,
    (v) => `${v}だったよ、ほんとだよ！`,
  ],
  nito: [
    (v) => `あの、拙者が見たところ、${v}でしたね...はい`,
    (v) => `${v}だったかと...あの、はい`,
    (v) => `おそらく${v}かと...存じます`,
    (v) => `${v}でございました...たぶん`,
  ],
};

export const FONT_SETS = {
  obaa: "'Klee One', cursive",
  salary: "'Zen Kaku Gothic New', sans-serif",
  gakusei: "'Yomogi', cursive",
  hen: "'Hachi Maru Pop', cursive",
  anntyan: "'Yusei Magic', sans-serif",
  kodomo: "'Kiwi Maru', serif",
  nito: "'Zen Old Mincho', serif",
};

const DEFAULT_TEMPLATES = [
  (v) => `犯人、${v}でしたね`,
  (v) => `たしか${v}だったと思います`,
];

export const PARTS_CREATURE = [
  "なんか...体中に毛が生えていたんです！",
  "おでこのあたりに、角みたいなのがあって",
  "後ろに、しっぽらしきものが見えて",
  "肌が、うろこっぽい感じで光っていて",
  "目が異様に大きくて、しかも丸くて",
  "口から牙みたいなのが見えていて",
  "耳が、ビョーンって感じでとがっていて",
  "とにかく体が妙にデカくて",
  "指の先が、こう...鋭くて爪みたいで",
  "全体的に、湿っていた気がします",
];

export const ABSTRACT_CHANCE = 0.10; 

export const PARTS_ABSTRACT = [
  "なんというか、中間管理職みたいな哀愁がありましたね。",
  "私と同じ柔軟剤の匂いがしたんです。",
  "声のトーンからして、絶対に休日はインドア派ですね。",
  "とにかく、昨日の晩御飯みたいな顔でした。",
  "まるで、冬の夜空に浮かぶ三日月のような瞳をしてました……。",
  "輪郭は、春の雪解けを思わせる儚さがありましたね……。",
  "一言で言うと、じゃがいもみたいな顔でしたね。",
  "妙に、月曜日の朝みたいな空気をまとってました。",
  "説明が難しいんですが、水曜日って感じの顔でした。",
  "とにかく「お疲れ様です」が似合いそうな顔でしたね。",
  "全体的に、ちょっと納豆の匂いがした気がします。",
  "なんか、履き古した靴みたいな安心感がありました。",
  "強いて言うなら、駅前の看板みたいな顔でしたね。",
];

export const CREATURE_CHANCE = 0.12;

export const REACTION_LINE_SETS_NORMAL = {
  obaa: [
    "……あら、なんだかこんな感じかねえ。",
    "おやまあ、上手なもんだね！",
    "え、これがあたしの言った特徴だったかい……？",
  ],
  salary: [
    "……あー、まあこんな感じですかね。",
    "おー、思ったよりちゃんとしてますね。",
    "疲れてたんで、これでいいと思います。",
  ],
  gakusei: [
    "あ、意外とちゃんと描けてますね。",
    "……これでいいんでしょうか、わかりませんが。",
    "思ったより似てるかもしれません。",
  ],
  hen: [
    "あー、こんな感じっしょ。知らんけど。",
    "似てる似てる、たぶん。",
    "……なんかもう、これでいいんじゃない？",
  ],
  anntyan: [
    "おー、こんなもんだろ。悪くねえな。",
    "似てるかどうかは知らねえけど、まあいいや。",
    "上出来じゃねえの。",
  ],
  kodomo: [
    "わー！なんかへんてこな顔になったー！",
    "こんな感じだったかなぁ？わかんない！",
    "おもしろい顔！すき！",
  ],
  nito: [
    "……なるほど、これはこれで一興でございます。",
    "拙者の記憶とは、少々異なりますが……よろしいのでは。",
    "……お見事、と言っておきましょう。",
  ],
};

export const POKE_LINE_SETS = {
  obaa: {
    warn: [
      "あらあら、くすぐったいねえ。",
      "ちょいちょい触るんじゃないよ。",
      "こら、いたずらしないでおくれ。",
      "あんた、暇なのかい？",
      "ふふ、遊びたい盛りだねえ。",
      "そぉれ以上はダメだよ、ほんとに。",
    ],
    angry: "もう！いい加減にしとくれ！話はここまでだよ！",
  },
  salary: {
    warn: [
      "……あの、やめてもらえますか。",
      "ちょっと、困るんですけど。",
      "仕事中なんですけど……。",
      "あの、真面目にやってもらえます？",
      "……正直、ちょっと引いてます。",
      "いい大人が何やってるんですか。",
    ],
    angry: "いい加減にしてください！もう帰ります！",
  },
  gakusei: {
    warn: [
      "え、やめてください……。",
      "あの、触らないでもらえますか？",
      "な、なんですか急に……。",
      "ちょっと怖いんですけど……。",
      "……真面目にやってもらえませんか。",
      "あの、証言の途中なんですが……。",
    ],
    angry: "もういいです！これ以上は無理です！",
  },
  hen: {
    warn: [
      "え、なにしてんの。",
      "ちょっとやめてくんない？",
      "は？意味わかんないんだけど。",
      "あんたヒマ人でしょ、絶対。",
      "……もしかしてバカにしてる？",
      "うわ、キモ。やめて。",
    ],
    angry: "うざ！もう知らない、帰る！",
  },
  anntyan: {
    warn: [
      "おい、やめろって。",
      "こら、いい加減にしろよ。",
      "おいこら、聞いてんのか？",
      "調子乗ってんじゃねえぞ。",
      "あ？もう一回言ってみろ。",
      "いい歳して何やってんだ、お前。",
    ],
    angry: "おらぁ！もうやめんかい！こっちも忙しいんだよ！",
  },
  kodomo: {
    warn: [
      "やだ、やめてよぉ。",
      "もう、やめてってばー！",
      "こら！だめだよ！",
      "せんせいに言うよ！",
      "いたいよぉ、やめて！",
      "もう、しらないもん！",
    ],
    angry: "もう！やめてって言ったじゃん！(´；ω；｀)",
  },
  nito: {
    warn: [
      "……あの、お戯れが過ぎませんか。",
      "……そろそろ、ご勘弁を。",
      "……いささか、不躾ではございませんか。",
      "……何用でございましょうか、それは。",
      "……拙者、困惑しております。",
      "……お戯れも、ほどほどに願いたく。",
    ],
    angry: "……もう結構でございます！勘弁してください……！",
  },
};

export const POKE_ANGRY_REACTION_SETS = {
  obaa: ["まったく...あんたにはあきれたよ..."],
  salary: ["...もう何も言うことはないです。"],
  gakusei: ["...ひどいと思います。"],
  hen: ["は？ありえないんだけど。"],
  anntyan: ["いい加減にしろって言っただろうが！💢"],
  kodomo: ["もうやだぁ...😢"],
  nito: ["...拙者、もう何も申せませぬ。"],
};

export const FUKUWARAI_PARTS = ["👁️", "👃", "👄", "👂"];

export const PEN_COLORS = ["#263148", "#B23A2E", "#3D6B4F", "#EFB93C", "#7D5BA6", "#F2A6C8", "#FFFFFF"];

export const TOTAL_ROUNDS = 4;

export const EARLY_END_CHANCE = 0.05;

export const EARLY_END_LINE_SETS = {
  obaa: [
    "...あら、なんだか疲れちゃったよ。今日はこのぐらいでごめんね。",
    "うーん、もう思い出せないねえ。また今度ね。",
  ],
  salary: [
    "あ、すみません、この後ちょっと用事があるので...",
    "...正直、これ以上は覚えてないですね。すみません。",
  ],
  gakusei: [
    "すみません、ちゃんと見てたはずなんですけど、この辺で...",
    "...あんまり自信ないので、これくらいで大丈夫ですか？",
  ],
  hen: [
    "あーもう飽きた。この辺でいいでしょ、知らんけど。",
    "え、まだ続けるの？もう覚えてないんだけど。",
  ],
  anntyan: [
    "悪ぃ、そろそろ現場戻らねぇとだからさ。すまねぇな。",
    "もうこれくらいしか覚えてねえよ",
  ],
  kodomo: [
    "あのね、もうわかんないの。ばいばい！",
    "えっとね...もうおなかすいたから、おしまい！",
  ],
  nito: [
    "...申し訳ございません、もう記憶が...あの、はい。",
    "拙者、これ以上は...なんと言いますか、限界でございます。",
  ],
};

export const DEFAULT_EARLY_END_LINES = [
  "...すみません、もう思い出したくないです。",
  "これ以上はちょっと、勘弁してください。",
];

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateTestimony({ mob, isCreature, isAbstract, usedHuman, usedCreature, usedAbstract, usedTemplates }) {
  if (isCreature) {
    const remaining = PARTS_CREATURE.filter((l) => !usedCreature.includes(l));
    const line = pick(remaining.length ? remaining : PARTS_CREATURE);
    return { line, usedKey: line, isCreatureLine: true, isAbstractLine: false, usedTemplateIndex: null };
  }

  if (isAbstract) {
    const remaining = PARTS_ABSTRACT.filter((l) => !usedAbstract.includes(l));
    const line = pick(remaining.length ? remaining : PARTS_ABSTRACT);
    return { line, usedKey: line, isCreatureLine: false, isAbstractLine: true, usedTemplateIndex: null };
  }

  const usedKeys = usedHuman.map((k) => k.split(":")[0]);
  const allKeys = Object.keys(PARTS_HUMAN);
  const remainingKeys = allKeys.filter((k) => !usedKeys.includes(k));
  const keyPool = remainingKeys.length ? remainingKeys : allKeys;

  const key = pick(keyPool);
  const value = pick(PARTS_HUMAN[key]);

  if (key === "iconic") {
    return { line: value, usedKey: `${key}:${value}`, isCreatureLine: false, isAbstractLine: false, usedTemplateIndex: null };
  }

  const templates = TEMPLATE_SETS[mob.style] || DEFAULT_TEMPLATES;
  const availableIndexes = templates
    .map((_, i) => i)
    .filter((i) => !(usedTemplates || []).includes(i));
  const indexPool = availableIndexes.length ? availableIndexes : templates.map((_, i) => i);
  const chosenIndex = pick(indexPool);
  const template = templates[chosenIndex];

  return { line: template(value), usedKey: `${key}:${value}`, isCreatureLine: false, isAbstractLine: false, usedTemplateIndex: chosenIndex };
}

const GALLERY_KEY = "kimisou_gallery";
const GALLERY_MAX = 50;

export function loadGallery() {
  try {
    const raw = localStorage.getItem(GALLERY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveGalleryEntry(entry) {
  try {
    const current = loadGallery();
    const next = [entry, ...current].slice(0, GALLERY_MAX);
    localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
  } catch (e) {

  }
}

export function deleteGalleryEntry(id) {
  try {
    const current = loadGallery();
    const next = current.filter((item) => item.id !== id);
    localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
  } catch (e) {
  }
}