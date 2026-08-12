import React, { useRef, useState } from "react";
import MobFace from "./MobFace.jsx";
import { COLORS, POKE_ANGRY_REACTION_SETS, FONT_SETS } from "../data/gameData.js";
import html2canvas from "html2canvas";

export default function PosterScreen({ mob, posterImg, featureLog, reaction, userName, setUserName, onRestart, onBack }) { 
    const isAngry = Object.values(POKE_ANGRY_REACTION_SETS).flat().includes(reaction);
    const posterRef = useRef(null);
    const [capturing, setCapturing] = useState(false);

  async function handleSave() {
    setCapturing(true);
    await new Promise((r) => setTimeout(r, 50)); // 表示切り替えを待つ
    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: "#F8F2E2",
      scale: 2,
    });
    setCapturing(false);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "kimisou_手配書.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    }, "image/png");
}

async function handleShare() {
    setCapturing(true);
    await new Promise((r) => setTimeout(r, 50));
    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: "#F8F2E2",
      scale: 2,
    });
    setCapturing(false);

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "kimisou_手配書.png", { type: "image/png" });
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "キミソウ 手配書" });
        } catch (err) {
        }
      }
    }, "image/png");
}
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span className="stamp">手配書 完成</span>
      </div>

      <div ref={posterRef} className="paper-card" style={{ padding: 10, marginBottom: 18 }}>
        <div className="tape" style={{ top: -12, left: 20, transform: "rotate(-8deg)" }} />

        <div style={{ textAlign: "center", marginBottom: 6 }}>
            <span className="yomogi" style={{ fontSize: 13 }}>
                捜査官：
            </span>
            {capturing ? (
                <span className="yomogi" style={{ fontSize: 13, color: "var(--redstamp)" }}>
                    {userName || "名無し"}
                </span>
            ) : (
                <input
                    className="name-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="名無し"
                />
            )}
        </div>

        <div style={{ display: "flex", gap: 6, height: 300 }}>
          <div
            style={{
              flex: 2,
              border: `1.5px solid ${COLORS.navyink}`,
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {posterImg && (
              <img src={posterImg} alt="似顔絵" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )}
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                flex: 3,
                border: `1.5px solid ${COLORS.navyink}`,
                borderRadius: 4,
                background: "#fff",
                padding: 6,
                overflow: "hidden",
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, margin: "0 0 4px" }}>証言メモ</p>
              <ul
              style={{
                margin: 0,
                paddingLeft: 12,
                fontSize: 11,
                fontWeight: 700,
                lineHeight: 1.6,
                wordBreak: "break-word",
                fontFamily: FONT_SETS[mob.style],
            }}
        >
                {featureLog.map((f, i) => (
                  <li key={i} style={{ marginBottom: 2 }}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                flex: 2,
                border: `1.5px solid ${COLORS.navyink}`,
                borderRadius: 4,
                background: COLORS.cream,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                textAlign: "center",
              }}
            >
              <MobFace mob={mob} size={50} angry={isAngry} />
              <p style={{ fontSize: 13, fontWeight: 700, margin: "6px 0 0", lineHeight: 1.4, fontFamily: FONT_SETS[mob.style] }}>
  「{reaction}」
</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 8 }}>
          <span className="yomogi" style={{ fontSize: 11, opacity: 0.7 }}>
            君も捜査官になろう！『キミソウ』
          </span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        <button className="btn-secondary" onClick={onRestart}>
            もう一度捜査する
        </button>
        <button className="btn-primary" onClick={handleSave}>
            画像を保存する
        </button>
        {navigator.share && (
            <button className="btn-secondary" onClick={handleShare}>
                共有する
            </button>
        )}
    </div>

<div style={{ textAlign: "center", marginTop: 10 }}>
    <button className="btn-secondary" onClick={onBack} style={{ fontSize: 12 }}>
        タイトルへ戻る
    </button>
</div>
    </div>
  );
}