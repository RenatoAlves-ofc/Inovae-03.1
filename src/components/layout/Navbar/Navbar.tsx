import "./Navbar.css";
import { navItems } from "../../../data/content";

// Navbar puramente visual: os itens NÃO navegam (requisito da atividade).
// Por isso usamos <button type="button"> sem ação, em vez de <a href>.
function Navbar() {
  return (
    <header className="navbar">
      <button type="button" className="navbar__brand" aria-label="Ayanokoji — início">
        <span className="navbar__brand-en">Ayanokoji</span>
        <span className="navbar__brand-jp" lang="ja" aria-hidden="true">
          綾小路
        </span>
      </button>

      <nav aria-label="Navegação principal">
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item}>
              <button type="button" className="navbar__link">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button type="button" className="navbar__inquire">
        observação
      </button>
    </header>
  );
}

export default Navbar;
