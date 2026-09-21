import React, { useEffect, useState } from "react";

// A picture slot. `src` empty (or a file that is not there yet) shows a dashed placeholder with the label.
export function SoarPic({ src, label, size = 96 }) {
  const [state, setState] = useState(src ? "loading" : "failed");
  useEffect(() => { setState(src ? "loading" : "failed"); }, [src]);
  return (
    <div className="sp-tile" style={{ width: size, height: size }}>
      {state !== "ok" && <span className="sp-missing"><span>{label}</span></span>}
      {src && state !== "failed" && (
        <img
          src={src}
          alt={label}
          draggable={false}
          onLoad={() => setState("ok")}
          onError={() => setState("failed")}
          style={state === "ok" ? undefined : { position: "absolute", width: 1, height: 1, opacity: 0 }}
        />
      )}
    </div>
  );
}
