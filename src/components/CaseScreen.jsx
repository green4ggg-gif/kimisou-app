import React, { useState, useRef, useEffect } from "react";
import MobFace from "./MobFace.jsx";
import { FUKUWARAI_PARTS, PEN_COLORS, TOTAL_ROUNDS } from "../data/gameData.js";

const CANVAS_W = 320;
const CANVAS_H = 320;
const TRASH_SIZE = 44;

export default function CaseScreen({ mob, featureLog, round, onNextTestimony, onPoke, pokeWarn, onFinish, onBack }) {
  const mainRef = useRef(null);
  const traceRef = useRef(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const dragId = useRef(null);
  const startedRef = useRef(false);
  const scratchRef = useRef(null);

  const [drawerOpen, setDrawerOpen] = useState(true);
  const [mode, setMode] = useState("pen");
  const [color, setColor] = useState(PEN_COLORS[0]);
  const [size, setSize] = useState(5);
  const [fukuwaraiItems, setFukuwaraiItems] = useState([]);
  const [overTrash, setOverTrash] = useState(false);
  const [bubble, setBubble] = useState(null);

  const done = round >= TOTAL_ROUNDS;

  useEffect(() => {
    if (featureLog.length === 0 && !startedRef.current) {
      startedRef.current = true;
      onNextTestimony();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!pokeWarn) return;
    setBubble(pokeWarn.text);
    const t = setTimeout(() => setBubble(null), 2000);
    return () => clearTimeout(t);
  }, [pokeWarn]);

  useEffect(() => {
    setDrawerOpen(true);
  }, [round]);

  useEffect(() => {
    mainRef.current.getContext("2d").clearRect(0, 0, CANVAS_W, CANVAS_H);
    traceRef.current.getContext("2d").clearRect(0, 0, CANVAS_W, CANVAS_H);
    const scratch = document.createElement("canvas");
    scratch.width = CANVAS_W;
    scratch.height = CANVAS_H;
    scratchRef.current = scratch;
  }, []);

  useEffect(() => {
  if (mode !== "fukuwarai") return;

  function handleMove(e) {
    partPointerMove(e);
  }
  function handleUp(e) {
    partPointerUp(e);
  }

  window.addEventListener("mousemove", handleMove);
  window.addEventListener("mouseup", handleUp);
  window.addEventListener("touchmove", handleMove, { passive: false });
  window.addEventListener("touchend", handleUp);

  return () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleUp);
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("touchend", handleUp);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [mode, overTrash]);

  function getPos(e) {
    const rect = mainRef.current.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return {
      x: ((touch.clientX - rect.left) / rect.width) * CANVAS_W,
      y: ((touch.clientY - rect.top) / rect.height) * CANVAS_H,
    };
  }

  function startDraw(e) {
    if (mode === "fukuwarai") return;
    e.preventDefault();
    drawing.current = true;
    last.current = getPos(e);
  }

  function moveDraw(e) {
    if (!drawing.current || mode === "fukuwarai") return;
    e.preventDefault();
    const pos = getPos(e);
    const ctx = mainRef.current.getContext("2d");
    const tctx = traceRef.current.getContext("2d");

    if (mode === "pen") {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (mode === "eraser") {
      const scratch = scratchRef.current;
      const sctx = scratch.getContext("2d");

      sctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      sctx.globalCompositeOperation = "source-over";
      sctx.strokeStyle = "rgba(110,110,110,0.5)";
      sctx.lineWidth = size * 1.5;
      sctx.lineCap = "round";
      sctx.beginPath();
      sctx.moveTo(last.current.x, last.current.y);
      sctx.lineTo(pos.x, pos.y);
      sctx.stroke();

      sctx.globalCompositeOperation = "destination-in";
      sctx.drawImage(mainRef.current, 0, 0);
      sctx.globalCompositeOperation = "source-over";

      tctx.drawImage(scratch, 0, 0);

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = size * 2.4;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.restore();
    }

    last.current = pos;
  }

  function endDraw() {
    drawing.current = false;
  }

  function addFukuwaraiPart(emoji) {
    setFukuwaraiItems((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), emoji, x: 130 + Math.random() * 40, y: 130 + Math.random() * 40, size: size * 5 },
    ]);
  }

  function partPointerDown(id) {
    dragId.current = id;
  }

  function partPointerMove(e) {
    if (dragId.current == null) return;
    const rect = mainRef.current.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;

    const x = ((touch.clientX - rect.left) / rect.width) * CANVAS_W;
    const y = ((touch.clientY - rect.top) / rect.height) * CANVAS_H;

    setFukuwaraiItems((prev) => prev.map((p) => (p.id === dragId.current ? { ...p, x, y } : p)));

    const trashEl = document.getElementById("fukuwarai-trash");
    if (trashEl) {
      const tRect = trashEl.getBoundingClientRect();
      const isOver =
        touch.clientX >= tRect.left &&
        touch.clientX <= tRect.right &&
        touch.clientY >= tRect.top &&
        touch.clientY <= tRect.bottom;
      setOverTrash(isOver);
    }
  }

  function partPointerUp(e) {
    const targetId = dragId.current;

    if (targetId != null) {
      const trashEl = document.getElementById("fukuwarai-trash");
      const faceEl = document.getElementById("mob-face-hitbox");
      let isOverTrash = false;
      let isOverFace = false;

      if (e) {
        const touch = e.changedTouches ? e.changedTouches[0] : e;

        if (trashEl) {
          const tRect = trashEl.getBoundingClientRect();
          isOverTrash =
            touch.clientX >= tRect.left &&
            touch.clientX <= tRect.right &&
            touch.clientY >= tRect.top &&
            touch.clientY <= tRect.bottom;
        }

        if (faceEl) {
          const fRect = faceEl.getBoundingClientRect();
          isOverFace =
            touch.clientX >= fRect.left &&
            touch.clientX <= fRect.right &&
            touch.clientY >= fRect.top &&
            touch.clientY <= fRect.bottom;
        }
      }

      if (isOverTrash) {
        setFukuwaraiItems((prev) => prev.filter((p) => p.id !== targetId));
} else {
        if (isOverFace) {
          onPoke();
        }
        setFukuwaraiItems((prev) =>
          prev.map((p) =>
            p.id === targetId
              ? { ...p, x: Math.max(0, Math.min(CANVAS_W, p.x)), y: Math.max(0, Math.min(CANVAS_H, p.y)) }
              : p
          )
        );
}
    }
    dragId.current = null;
    setOverTrash(false);
}

  function composite() {
    const out = document.createElement("canvas");
    out.width = CANVAS_W;
    out.height = CANVAS_H;
    const octx = out.getContext("2d");
    octx.fillStyle = "#E8E4DC";
    octx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    octx.drawImage(traceRef.current, 0, 0);
    octx.drawImage(mainRef.current, 0, 0);
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    fukuwaraiItems.forEach((p) => {
      octx.font = `${p.size || 34}px sans-serif`;
      octx.fillText(p.emoji, p.x, p.y);
    });
    return out.toDataURL("image/png");
  }

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <span className="stamp" style={{ fontSize: 12 }}>
          聞き込み・捜査中 {Math.min(round, TOTAL_ROUNDS)}/{TOTAL_ROUNDS}
        </span>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
    <div style={{ position: "relative" }}>
      <div id="mob-face-hitbox">
        <MobFace mob={mob} size={54} onTap={onPoke} />
      </div>
      {bubble && (
        <div
          style={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translate(-50%, -100%)",
            background: "#fff",
            border: "1.5px solid var(--navyink)",
            borderRadius: 8,
            padding: "4px 8px",
            fontSize: 10,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            zIndex: 5,
          }}
        >
          {bubble}
        </div>
      )}
    </div>
    <button
      className="btn-secondary"
      style={{ padding: "6px 12px", fontSize: 12 }}
      onClick={() => setDrawerOpen((o) => !o)}
    >
      証言メモ {drawerOpen ? "▲ 閉じる" : "▼ 見る"}
    </button>
</div>

      {drawerOpen && (
        <div className="paper-card" style={{ padding: "12px 14px", marginBottom: 12 }}>
          <div className="tape" style={{ top: -12, right: -8, transform: "rotate(9deg)" }} />
          <p className="yomogi" style={{ margin: "0 0 6px", fontSize: 13, color: "var(--redstamp)" }}>
            「{mob.talk}」
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.9 }}>
            {featureLog.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 8 }}>
        {mode === "pen" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
            {PEN_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: c,
                  border: color === c ? "3px solid var(--navyink)" : "2px solid #ffffff88",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
        {mode !== "pen" && <div style={{ width: 24 }} />}

        <div
        className="paper-card"
        style={{
          width: CANVAS_W + 8,
          height: CANVAS_H + 8,
          position: "relative",
          padding: 4,
          touchAction: "none",
          background: "#E8E4DC",
        }}
      >
          <canvas
            ref={traceRef}
            width={CANVAS_W}
            height={CANVAS_H}
            style={{ position: "absolute", top: 4, left: 4, borderRadius: 3 }}
          />
          <canvas
            ref={mainRef}
            width={CANVAS_W}
            height={CANVAS_H}
            style={{ position: "absolute", top: 4, left: 4, borderRadius: 3, touchAction: "none" }}
            onMouseDown={startDraw}
            onMouseMove={moveDraw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={moveDraw}
            onTouchEnd={endDraw}
          />
          {fukuwaraiItems.map((p) => (
            <div
              key={p.id}
              onPointerDown={() => partPointerDown(p.id)}
              style={{
                position: "absolute",
                left: 4 + p.x - (p.size || 34) / 2,
                top: 4 + p.y - (p.size || 34) / 2,
                fontSize: p.size || 34,
                cursor: "grab",
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              {p.emoji}
            </div>
          ))}
        </div>

        {mode === "fukuwarai" && (
          <div
            id="fukuwarai-trash"
            style={{
              width: TRASH_SIZE,
              height: TRASH_SIZE,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              alignSelf: "center",
              background: overTrash ? "var(--redstamp)" : "var(--cream)",
              border: "2px solid var(--navyink)",
              transition: "background 0.15s",
            }}
          >
            🗑️
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
        <ToolBtn active={mode === "pen"} onClick={() => setMode("pen")} label="✏️ ペン" />
        <ToolBtn active={mode === "eraser"} onClick={() => setMode("eraser")} label="🧽 消しゴム" />
        <ToolBtn active={mode === "fukuwarai"} onClick={() => setMode("fukuwarai")} label="🥸 福笑い" />
      </div>

      <div style={{ maxWidth: 250, margin: "0 auto 14px" }}>
        <input
          type="range"
          min={mode === "fukuwarai" ? 16 : 2}
          max={mode === "fukuwarai" ? 70 : 20}
          value={mode === "fukuwarai" ? size * 5 : size}
          onChange={(e) => setSize(mode === "fukuwarai" ? Number(e.target.value) / 5 : Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {mode === "fukuwarai" && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          {FUKUWARAI_PARTS.map((e, i) => (
            <button
              key={i}
              className="btn-secondary"
              style={{ padding: "6px 10px", fontSize: 20 }}
              onClick={() => addFukuwaraiPart(e)}
            >
              {e}
            </button>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center" }}>
        {!done ? (
          <button className="btn-primary" onClick={onNextTestimony}>
            描けたら次の証言へ →
          </button>
        ) : (
          <button className="btn-primary" onClick={() => onFinish(composite())}>
            手配書を完成させる →
          </button>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 10 }}>
        <button className="btn-secondary" onClick={onBack} style={{ fontSize: 12 }}>
          捜査を中断してタイトルへ戻る
        </button>
      </div>
    </div>
  );
}

function ToolBtn({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="btn-secondary"
      style={{
        padding: "8px 12px",
        fontSize: 13,
        background: active ? "var(--navyink)" : "var(--cream)",
        color: active ? "#fff" : "var(--navyink)",
      }}
    >
      {label}
    </button>
  );
}