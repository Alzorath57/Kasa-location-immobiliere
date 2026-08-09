import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="/logo.svg" alt="Logo du site location immobiliere Kasa" />
        </Link>
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
