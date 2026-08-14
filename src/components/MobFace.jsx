import React from "react";
import { COLORS } from "../data/gameData.js";

const ANGRY_COLORS = ["#F2C230", "#4CAF7D", "#9B6BC7", "#E85C4A"];

export default function MobFace({ mob, size = 90, onTap, angry = false, angryLevel = 0 }) {
  const colorIndex = Math.max(0, Math.min(ANGRY_COLORS.length - 1, angryLevel - 2));
  const skinColor = angry ? ANGRY_COLORS[colorIndex] : mob.skin;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      onClick={onTap}
      style={{ cursor: onTap ? "pointer" : "default" }}
    >
      <circle cx="50" cy="55" r="38" fill={skinColor} stroke={COLORS.navyink} strokeWidth="2.5" />
      <path
        d="M14 45 Q50 5 86 45 Q86 20 50 16 Q14 20 14 45 Z"
        fill={mob.hair}
        stroke={COLORS.navyink}
        strokeWidth="2"
      />
      {angry ? (
        <>
          <line x1="30" y1="48" x2="42" y2="53" stroke={COLORS.navyink} strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="48" x2="58" y2="53" stroke={COLORS.navyink} strokeWidth="3" strokeLinecap="round" />
          <path d="M38 75 Q50 66 62 75" stroke={COLORS.redstamp} strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="38" cy="55" r="3.5" fill={COLORS.navyink} />
          <circle cx="62" cy="55" r="3.5" fill={COLORS.navyink} />
          <path d="M40 72 Q50 78 60 72" stroke={COLORS.navyink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}