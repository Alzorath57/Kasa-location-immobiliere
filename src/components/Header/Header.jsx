import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1>
        <img src="/logo.svg" alt="Logo du site location immobiliere Kasa" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
