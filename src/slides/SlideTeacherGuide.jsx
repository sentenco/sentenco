const MODE_COLOR = {
  Performance: "#D85A30",
  Model: "#3D6B8C",
  Output: "#1B2A4A",
};

export default function SlideTeacherGuide({ content }) {
  const accent = MODE_COLOR[content.mode] || "#1B2A4A";
  const sections = content.sections || [];

  return (
    <div className="sltg-slide">
      <style>{CSS}</style>
      <div className="sltg-header">
        <span className="sltg-wordmark">sentenco</span>
        <span className="sltg-badge" style={{ background: "#5C6F8A" }}>
          Teacher Guide
        </span>
      </div>
      <div className="sltg-body">
        {sections.map((section, i) => (
          <div className="sltg-section" key={i}>
            {i > 0 && (
              <div className="sltg-divider">
                <span className="sltg-divider-line" />
                <span className="sltg-divider-label" style={{ color: accent }}>
                  &#9670; {section.label.toUpperCase()}
                </span>
                <span className="sltg-divider-line" />
              </div>
            )}
            {i === 0 && <div className="sltg-first-label">{section.label}</div>}
            {(section.blocks || []).map((block, j) => (
              <div className="sltg-block" key={j}>
                {block.subLabel && (
                  <div className="sltg-sublabel">{block.subLabel}</div>
                )}
                <p
                  className={`sltg-text ${block.style === "quote" ? "is-quote" : ""} ${
                    block.style === "accent" ? "is-accent" : ""
                  }`}
                >
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sltg-footer" style={{ background: accent }} />
    </div>
  );
}

const CSS = `
.sltg-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFF8F2;
  font-family: 'Inter', sans-serif;
}
.sltg-header {
  padding: 12px 18px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAD9C8;
  flex-shrink: 0;
}
.sltg-wordmark {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #1B2A4A;
}
.sltg-badge {
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  border-radius: 3px;
  padding: 2px 7px;
}
.sltg-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px 18px 18px;
}
.sltg-first-label {
  font-size: 10.5px;
  letter-spacing: 0.06em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.sltg-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0;
}
.sltg-divider-line {
  flex: 1;
  height: 1px;
  background: #E0D2C0;
}
.sltg-divider-label {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
.sltg-block {
  margin-bottom: 10px;
}
.sltg-sublabel {
  font-size: 10.5px;
  letter-spacing: 0.06em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.sltg-text {
  font-family: 'Inter', sans-serif;
  font-size: 14.5px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
  text-align: justify;
  text-indent: 1.4em;
  hyphens: auto;
}
.sltg-text.is-quote {
  font-style: italic;
  color: #6B5F52;
}
.sltg-text.is-accent {
  font-style: italic;
  color: #B5502E;
}
.sltg-footer {
  height: 14px;
  flex-shrink: 0;
}
`;
