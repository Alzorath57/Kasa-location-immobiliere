import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
