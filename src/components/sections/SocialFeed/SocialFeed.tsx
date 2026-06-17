import "./SocialFeed.css";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SealMark from "../../ui/SealMark/SealMark";
import { bastidoresQuote, heroVideo, imgDigital } from "../../../data/content";

// Respeita prefers-reduced-motion: sem reprodução automática do avatar animado.
const prefereMenosMovimento =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function SocialFeed() {
  return (
    <section className="feed" id="bastidores">
      <div className="feed__intro">
        <Eyebrow kanji="舞台裏">Bastidores</Eyebrow>
      </div>

      <header className="feed__header">
        <video
          className="feed__avatar"
          src={heroVideo}
          poster={imgDigital}
          autoPlay={!prefereMenosMovimento}
          muted
          loop
          playsInline
          aria-label="Avatar animado de Ayanokoji"
        />
        <div className="feed__identity">
          <p className="feed__handle">@ayanokoji.kiyotaka</p>
          <p className="feed__bio">Estúdio de estratégia · Classe D · Tóquio</p>
        </div>
        <button type="button" className="feed__follow">
          Seguir
        </button>
      </header>

      <blockquote className="feed__quote-card">
        <p className="feed__quote-text">{bastidoresQuote}</p>
        <footer className="feed__quote-author">
          <SealMark kanji="綾" />
          <cite>Kiyotaka Ayanokōji</cite>
        </footer>
      </blockquote>
    </section>
  );
}

export default SocialFeed;
