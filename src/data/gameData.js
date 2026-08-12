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
  hairType: ["ツンツン頭", "七三分け", "スキンヘッド", "ぼさぼさの長髪", "きっちりパーマ", "寝ぐせだらけの髪", "オールバック"],
  hairColor: ["真っ黒な髪", "茶色っぽい髪", "金髪", "白髪交じりの髪", "なぜか緑の髪たぶんカツラ", "ピンクの髪"],
  faceShape: ["丸顔", "面長の顔", "えらの張った輪郭", "三角っぽい輪郭", "四角い輪郭"],
  eyes: ["タレ目", "ツリ目", "ギョロっとした目", "細い目", "左右で大きさが違う目"],
  notable: ["とても大きい鼻", "つながった眉毛", "ほっぺたに大きなほくろ", "金歯", "ほっぺたに傷跡", "ずっとにやにやした表情", "鼻の下にちょびひげ"],
  accessory: ["深くかぶった帽子", "サングラス", "マスク姿", "派手なマフラー", "でかい金のネックレス"],
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
    warn: ["あらあら、くすぐったいねえ。", "ちょいちょい触るんじゃないよ。"],
    angry: "もう！いい加減にしとくれ！話はここまでだよ！",
  },
  salary: {
    warn: ["...あの、何してんですかやめてください", "ちょっと、困るんですけど"],
    angry: "いい加減にしてください！もう帰ります！",
  },
  gakusei: {
    warn: ["え、やめてください...", "あの、触らないでもらえますか？"],
    angry: "もういいです！これ以上は無理です！",
  },
  hen: {
    warn: ["え、なにしてんの", "ちょっとやめてくんない？"],
    angry: "うざ！もう知らない、帰る！",
  },
  anntyan: {
    warn: ["おい、やめんかい", "こら、いい加減にしろよ"],
    angry: "おらぁ！もうやめんかい！こっちも忙しいんだよ！",
  },
  kodomo: {
    warn: ["やだ、やめてよぉ", "もう、やめてってばー！"],
    angry: "もう！やめてって言ったじゃん！😢",
  },
  nito: {
    warn: ["あの、もうふざけすぎですよ！", "……そろそろ、ご勘弁を"],
    angry: "...も、もうやめろ！か、勘弁してください！",
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

export function generateTestimony({ mob, isCreature, usedHuman, usedCreature, usedTemplates }) {
  if (isCreature) {
    const remaining = PARTS_CREATURE.filter((l) => !usedCreature.includes(l));
    const line = pick(remaining.length ? remaining : PARTS_CREATURE);
    return { line, usedKey: line, isCreatureLine: true, usedTemplateIndex: null };
  }
  const keys = Object.keys(PARTS_HUMAN);
  let key, value, attempts = 0;
  do {
    key = pick(keys);
    value = pick(PARTS_HUMAN[key]);
    attempts++;
  } while (usedHuman.includes(`${key}:${value}`) && attempts < 25);

  const templates = TEMPLATE_SETS[mob.style] || DEFAULT_TEMPLATES;

  const availableIndexes = templates
    .map((_, i) => i)
    .filter((i) => !(usedTemplates || []).includes(i));
  const indexPool = availableIndexes.length ? availableIndexes : templates.map((_, i) => i);
  const chosenIndex = pick(indexPool);
  const template = templates[chosenIndex];

  return { line: template(value), usedKey: `${key}:${value}`, isCreatureLine: false, usedTemplateIndex: chosenIndex };
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