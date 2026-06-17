import "./Hero.css";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import VerticalText from "../../ui/VerticalText/VerticalText";
import SealMark from "../../ui/SealMark/SealMark";
import { heroVideo, imgFull } from "../../../data/content";

// Respeita prefers-reduced-motion: sem reprodução automática do vídeo do hero.
const prefereMenosMovimento =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero__video"
        src={heroVideo}
        poster={imgFull}
        autoPlay={!prefereMenosMovimento}
        muted
        loop
        playsInline
      />
      <div className="hero__scrim" />

      <VerticalText className="hero__vertical">綾小路清隆</VerticalText>

      <div className="hero__content">
        <Eyebrow kanji="戦略" tone="light">
          Estratégia • Inteligência • Classe D
        </Eyebrow>
        <h1 className="hero__title">
          Cada movimento começa com observação e termina com um resultado calculado.
        </h1>
        <p className="hero__lead">
          Se a frieza da estratégia ressoa com você, talvez seja hora de olhar além da
          superfície.
        </p>
        <div className="hero__signature">
          <SealMark kanji="綾" />
          <p className="hero__name">
            Kiyotaka Ayanokōji <span lang="ja">綾小路 清隆</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
