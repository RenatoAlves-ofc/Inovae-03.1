import "./VerticalText.css";

interface VerticalTextProps {
  /** Texto japonês exibido na vertical (tategaki). */
  children: string;
  className?: string;
}

/** Acento decorativo de texto vertical (writing-mode: vertical-rl). */
function VerticalText({ children, className }: VerticalTextProps) {
  return (
    <span
      className={className ? `vtext ${className}` : "vtext"}
      lang="ja"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default VerticalText;
