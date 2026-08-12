import React, { useState, useEffect } from "react";
import MobFace from "./MobFace.jsx";
import { COLORS, loadGallery, deleteGalleryEntry } from "../data/gameData.js";

export default function GalleryScreen({ onBack }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(loadGallery());
  }, []);

  function handleDelete(id) {
    deleteGalleryEntry(id);
    setEntries(loadGallery());
  }

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span className="stamp">歴史的やばいやつコレクション</span>
      </div>

      {entries.length === 0 ? (
        <div className="paper-card" style={{ padding: "24px 16px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>
            まだ手配書がありません！いますぐ捜査しましょう！
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {entries.map((entry) => (
            <div key={entry.id} className="paper-card" style={{ padding: 10, position: "relative" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <div
                  style={{
                    flex: 1,
                    border: `1.5px solid ${COLORS.navyink}`,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#fff",
                    aspectRatio: "1 / 1",
                  }}
                >
                  <img
                    src={entry.posterImg}
                    alt="似顔絵"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: 11, margin: "0 0 4px", fontWeight: 700 }}>
                      捜査官：{entry.userName || "名無し"}
                    </p>
                    <p style={{ fontSize: 10, margin: "0 0 6px", opacity: 0.6 }}>{entry.date}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <MobFace mob={entry.mob} size={30} />
                      <p style={{ fontSize: 10, margin: 0, opacity: 0.8 }}>{entry.mob.name}</p>
                    </div>
                  </div>
                  <button
                    className="btn-secondary"
                    style={{ fontSize: 10, padding: "4px 10px", alignSelf: "flex-start" }}
                    onClick={() => handleDelete(entry.id)}
                  >
                    🗑️ 削除
                  </button>
                </div>
              </div>
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