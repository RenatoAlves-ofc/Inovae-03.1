import "./Footer.css";
import SealMark from "../../ui/SealMark/SealMark";
import { footerNavItems, redesSociais } from "../../../data/content";

// Navegação do rodapé também é apenas visual (não funciona, igual à navbar).
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-col">
          <div className="footer__brand-row">
            <SealMark kanji="綾" />
            <p className="footer__brand">Ayanokoji</p>
          </div>
          <p className="footer__tagline">
            Estúdio de estratégia — operando nos bastidores, em silêncio.
          </p>
          <p className="footer__meta">Escola Avançada de Desenvolvimento · Tóquio</p>
          <p className="footer__meta">Sempre observando — 24/7</p>
        </div>

        <nav className="footer__col" aria-label="Navegação do rodapé">
          <h4>Navegação</h4>
          <ul>
            {footerNavItems.map((item) => (
              <li key={item}>
                <button type="button">{item}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Redes</h4>
          <ul>
            {redesSociais.map((rede) => (
              <li key={rede}>
                <button type="button">{rede}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>Ayanokoji © 2026 · Tributo não-oficial</span>
        <span>
          Baseado em <em>Classroom of the Elite</em> (Youkoso Jitsuryoku Shijou Shugi no
          Kyoushitsu e)
        </span>
      </div>
    </footer>
  );
}

export default Footer;
