import React, { useLayoutEffect, useRef } from "react";

// Heading that always stays on one line: starts at the CSS font size and shrinks until it fits
// the width of its parent (re-checks when the fonts finish loading or the window resizes).
export function FitH({ as: Tag = "h2", className, children }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el && el.parentElement;
    if (!el || !parent) return undefined;
    const fit = () => {
      el.style.fontSize = "";
      const cs = getComputedStyle(parent);
      const avail = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 28;
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.offsetWidth > avail && size > 18) {
        size -= 1;
        el.style.fontSize = `${size}px`;
      }
    };
    fit();
    let alive = true;
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (alive) fit(); });
    window.addEventListener("resize", fit);
    return () => { alive = false; window.removeEventListener("resize", fit); };
  }, [children]);
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
