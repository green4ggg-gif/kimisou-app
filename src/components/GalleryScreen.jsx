import React, { useState, useEffect, useRef } from "react";
import MobFace from "./MobFace.jsx";
import { COLORS, loadGallery, deleteGalleryEntry, POKE_ANGRY_REACTION_SETS, FONT_SETS } from "../data/gameData.js";
import html2canvas from "html2canvas";

export default function GalleryScreen({ onBack }) {
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const posterRef = useRef(null);

  useEffect(() => {
    setEntries(loadGallery());
  }, []);

  function handleDelete(id) {
    deleteGalleryEntry(id);
    setEntries(loadGallery());
    if (selected && selected.id === id) setSelected(null);
  }

  async function handleSave() {
    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: "#F8F2E2",
      scale: 2,
    });
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

  // 詳細表示モード
  if (selected) {
    const isAngry = Object.values(POKE_ANGRY_REACTION_SETS).flat().includes(selected.reaction);
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <span className="stamp">手配書 詳細</span>
        </div>

        <div ref={posterRef} className="paper-card" style={{ padding: 10, marginBottom: 18 }}>
          <div className="tape" style={{ top: -12, left: 20, transform: "rotate(-8deg)" }} />

          <div style={{ textAlign: "center", marginBottom: 6 }}>
            <span className="yomogi" style={{ fontSize: 13 }}>
              捜査官：{selected.userName || "名無し"}
            </span>
          </div>
          <p style={{ textAlign: "center", fontSize: 10, opacity: 0.6, margin: "0 0 8px" }}>{selected.date}</p>

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
              <img
                src={selected.posterImg}
                alt="似顔絵"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
                    fontFamily: FONT_SETS[selected.mob.style],
                  }}
                >
                  {selected.featureLog.map((f, i) => (
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
                <MobFace mob={selected.mob} size={50} angry={isAngry} />
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    margin: "6px 0 0",
                    lineHeight: 1.4,
                    fontFamily: FONT_SETS[selected.mob.style],
                  }}
                >
                  「{selected.reaction}」
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
          <button className="btn-secondary" onClick={() => setSelected(null)}>
            一覧へ戻る
          </button>
          <button className="btn-primary" onClick={handleSave}>
            画像を保存する
          </button>
          <button className="btn-secondary" onClick={() => handleDelete(selected.id)}>
            🗑️ 削除
          </button>
        </div>
      </div>
    );
  }

  // 一覧モード
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span className="stamp">歴史的やばいやつコレクション</span>
      </div>

      {entries.length === 0 ? (
        <div className="paper-card" style={{ padding: "24px 16px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>
            まだ手配書がありません。捜査して、似顔絵を描いてみよう。
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="paper-card"
              style={{ padding: 6, cursor: "pointer" }}
              onClick={() => setSelected(entry)}
            >
              <div
                style={{
                  border: `1.5px solid ${COLORS.navyink}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#fff",
                  aspectRatio: "1 / 1",
                  marginBottom: 4,
                }}
              >
                <img
                  src={entry.posterImg}
                  alt="似顔絵"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p style={{ fontSize: 10, margin: "0 0 2px", fontWeight: 700, textAlign: "center" }}>
                {entry.userName || "名無し"}
              </p>
              <p style={{ fontSize: 9, margin: 0, opacity: 0.6, textAlign: "center" }}>{entry.mob.name}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 18 }}>
        <button className="btn-primary" onClick={onBack}>
          タイトルへ戻る
        </button>
      </div>
    </div>
  );
}