import "./SealMark.css";

interface SealMarkProps {
  /** Kanji exibido dentro do carimbo (padrão: 綾, inicial de Ayanokoji). */
  kanji?: string;
  className?: string;
}

/** Selo estilo hanko (carimbo japonês) em vermelhão tradicional. */
function SealMark({ kanji = "綾", className }: SealMarkProps) {
  return (
    <span
      className={className ? `seal ${className}` : "seal"}
      lang="ja"
      aria-hidden="true"
    >
      {kanji}
    </span>
  );
}

export default SealMark;
