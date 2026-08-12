import { useState } from "react";
import TitleScreen from "./components/TitleScreen.jsx";
import CaseScreen from "./components/CaseScreen.jsx";
import PosterScreen from "./components/PosterScreen.jsx";
import GalleryScreen from "./components/GalleryScreen.jsx";
import {
  MOBS,
  CREATURE_CHANCE,
  generateTestimony,
  pick,
  EARLY_END_CHANCE,
  EARLY_END_LINE_SETS,
  DEFAULT_EARLY_END_LINES,
  TOTAL_ROUNDS,
  REACTION_LINE_SETS_NORMAL,
  POKE_LINE_SETS,
  POKE_ANGRY_REACTION_SETS,
  saveGalleryEntry,
} from "./data/gameData.js";

export default function App() {
  const [screen, setScreen] = useState("title");

  const [mob, setMob] = useState(null);
  const [isCreature, setIsCreature] = useState(false);
  const [featureLog, setFeatureLog] = useState([]);
  const [round, setRound] = useState(0);
  const [usedHuman, setUsedHuman] = useState([]);
  const [usedCreature, setUsedCreature] = useState([]);
  const [usedTemplates, setUsedTemplates] = useState([]);
  const [pokeCount, setPokeCount] = useState(0);
  const [pokeAngryFlag, setPokeAngryFlag] = useState(false);
  const [pokeWarn, setPokeWarn] = useState(null);

  const [posterImg, setPosterImg] = useState(null);
  const [reaction, setReaction] = useState("");
  const [userName, setUserName] = useState("たか");

  function startCase() {
    setMob(pick(MOBS));
    setIsCreature(Math.random() < CREATURE_CHANCE);
    setFeatureLog([]);
    setRound(0);
    setUsedHuman([]);
    setUsedCreature([]);
    setUsedTemplates([]);
    setPokeCount(0);
    setPokeAngryFlag(false);
    setPokeWarn(null);
    setPosterImg(null);
    setScreen("case");
  }

  function nextTestimony() {
    const { line, usedKey, isCreatureLine, usedTemplateIndex } = generateTestimony({
      mob,
      isCreature,
      usedHuman,
      usedCreature,
      usedTemplates,
    });
    if (isCreatureLine) {
      setUsedCreature((u) => [...u, usedKey]);
    } else {
      setUsedHuman((u) => [...u, usedKey]);
      if (usedTemplateIndex !== null) setUsedTemplates((u) => [...u, usedTemplateIndex]);
    }
    setFeatureLog((prev) => [...prev, line]);

    const nextRound = round + 1;
    const shouldEndEarly = nextRound >= 2 && nextRound < TOTAL_ROUNDS && Math.random() < EARLY_END_CHANCE;

    if (shouldEndEarly) {
      const lines = EARLY_END_LINE_SETS[mob.style] || DEFAULT_EARLY_END_LINES;
      setFeatureLog((prev) => [...prev, pick(lines)]);
      setRound(TOTAL_ROUNDS);
    } else {
      setRound(nextRound);
    }
  }

  function pokeMob() {
    if (pokeAngryFlag || round >= TOTAL_ROUNDS) return;
    setPokeCount((c) => {
      const nc = c + 1;
      if (nc >= 5) {
        const angryLine = (POKE_LINE_SETS[mob.style] && POKE_LINE_SETS[mob.style].angry) || "……もういいです！";
        setFeatureLog((prev) => [...prev, angryLine]);
        setRound(TOTAL_ROUNDS);
        setPokeAngryFlag(true);
      } else if (nc >= 2) {
        const warnLines = (POKE_LINE_SETS[mob.style] && POKE_LINE_SETS[mob.style].warn) || [];
        if (warnLines.length) {
          setPokeWarn({ text: pick(warnLines), key: Date.now() + Math.random() });
        }
      }
      return nc;
    });
}

  function finishCase(dataUrl) {
    setPosterImg(dataUrl);
    const lines = pokeAngryFlag
      ? POKE_ANGRY_REACTION_SETS[mob.style]
      : REACTION_LINE_SETS_NORMAL[mob.style];
    const chosenReaction = pick(lines);
    setReaction(chosenReaction);

    saveGalleryEntry({
      id: Date.now() + Math.random(),
      posterImg: dataUrl,
      featureLog,
      reaction: chosenReaction,
      mob,
      userName,
      date: new Date().toLocaleString("ja-JP"),
    });

    setScreen("poster");
}

  return (
    <div className="app-shell">
      {screen === "title" && (
        <TitleScreen onStart={startCase} onOpenGallery={() => setScreen("gallery")} />
      )}

      {screen === "case" && mob && (
  <CaseScreen
    mob={mob}
    featureLog={featureLog}
    round={round}
    onNextTestimony={nextTestimony}
    onPoke={pokeMob}
    pokeWarn={pokeWarn}
    onFinish={finishCase}
    onBack={() => setScreen("title")}
  />
)}

{screen === "poster" && (
  <PosterScreen
    mob={mob}
    posterImg={posterImg}
    featureLog={featureLog}
    reaction={reaction}
    userName={userName}
    setUserName={setUserName}
    onRestart={startCase}
    onBack={() => setScreen("title")}
  />
)}

      {screen === "gallery" && <GalleryScreen onBack={() => setScreen("title")} />}
    </div>
);
}