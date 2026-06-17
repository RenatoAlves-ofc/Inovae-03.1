import type { ReactNode } from "react";
import "./Eyebrow.css";

interface EyebrowProps {
  /** Kanji opcional exibido antes do rótulo (ex.: 静観). */
  kanji?: string;
  /** Rótulo em português. */
  children: ReactNode;
  /** "light" para uso sobre fundos escuros (hero). */
  tone?: "light";
}

/** Rótulo de seção bilíngue: kanji (carimbo) — texto em português. */
function Eyebrow({ kanji, children, tone }: EyebrowProps) {
  return (
    <p className={tone === "light" ? "eyebrow eyebrow--light" : "eyebrow"}>
      {kanji && (
        <span className="eyebrow__kanji" lang="ja" aria-hidden="true">
          {kanji}
        </span>
      )}
      <span className="eyebrow__label">{children}</span>
    </p>
  );
}

export default Eyebrow;
