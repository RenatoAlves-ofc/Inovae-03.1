import "./Navbar.css";

const opcoesDeNavegacao = [
  { label: "Kiyotaka", href: "#inicio" },
  { label: "Classe D", href: "#classe-d" },
  { label: "Quarto Branco", href: "#quarto-branco" },
  { label: "Estratégia", href: "#estrategia" },
  { label: "Inteligência", href: "#inteligencia" },
];

function BarraDeNavegacaoAyanokoji() {
  return (
    <header className="navbar" id="inicio">
      <a href="#inicio" aria-label="Ayanokoji, ir para o início">
        Ayanokoji
      </a>

      <nav aria-label="Navegação principal">
        <ul>
          {opcoesDeNavegacao.map((opcaoDeNavegacao) => (
            <li key={opcaoDeNavegacao.label}>
              <a href={opcaoDeNavegacao.href}>{opcaoDeNavegacao.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#observacao">observação</a>
    </header>
  );
}

export default BarraDeNavegacaoAyanokoji;
