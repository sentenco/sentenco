import React, { useEffect, useState } from "react";

// A picture slot. `src` empty (or a file that is not there yet) shows a dashed placeholder with the label.
export function SoarPic({ src, label, size = 96, count = 1 }) {
  const [state, setState] = useState(src ? "loading" : "failed");
  useEffect(() => { setState(src ? "loading" : "failed"); }, [src]);
  return (
    <div className="sp-tile" style={{ width: count > 1 ? Math.round(size * (1 + 0.55 * (count - 1))) : size, height: size }}>
      {state !== "ok" && <span className="sp-missing"><span>{label}</span></span>}
      {src && state !== "failed" && (count > 1
        ? (
          <div className="sp-multi" style={state === "ok" ? undefined : { position: "absolute", width: 1, height: 1, opacity: 0 }}>
            {Array.from({ length: count }).map((_, k) => (
              <img key={k} src={src} alt={label} draggable={false} onLoad={k === 0 ? () => setState("ok") : undefined} onError={k === 0 ? () => setState("failed") : undefined} />
            ))}
          </div>
        )
        : (
          <img
            src={src}
            alt={label}
            draggable={false}
            onLoad={() => setState("ok")}
            onError={() => setState("failed")}
            style={state === "ok" ? undefined : { position: "absolute", width: 1, height: 1, opacity: 0 }}
          />
        ))}
    </div>
  );
}
