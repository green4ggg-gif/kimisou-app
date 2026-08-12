import React from "react";

export default function TitleScreen({ onStart, onOpenGallery }) {
    return (
        <div style={{ textAlign: "center", paddingTop: 30 }}>
         <div className="stamp" style={{ marginBottom: 18 }}>
          極秘調査ファイル
        </div>
        <h1 className="yomogi" style={{ fontSize: 40, lineHeight: 1.3, margin: "6px 0 4px" }}>
         君も捜査官に
         <br />
         なろう！
        </h1>
        <div className="yomogi" style={{ fontSize: 26, color: "var(--redstamp)", marginBottom: 26 }}>
         『キミソウ』
        </div>

        <div className="paper-card" style={{ padding: "18px 16px", margin: "0 8px 28px", textAlign: "left" }}>
            <div className="tape" style={{ top: -12, left: -10, transform: "rotate(-12deg)" }} />
            <p style={{ margin: "0 0 8px", fontSize: 13.5, lineHeight: 1.6 }}>
                目撃者の証言を頼りに、似顔絵を描いて手配書を完成させよう！
            </p>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6 }}>
                真面目に捜査する必要はない！完成した手配書も保存できるからどんどん描いてみよう！
            </p>
        </div>

        <button className="btn-primary" onClick={onStart} style={{ fontSize: 17, padding: "16px 40px" }}>
            事件現場へ向かう
        </button>
        
        <div style={{ marginTop: 14 }}>
            <button className="btn-secondary" onClick={onOpenGallery} style={{ fontSize: 13 }}>
                📖 歴史的やばいやつコレクション
            </button>
        </div>
        </div>
    );
}