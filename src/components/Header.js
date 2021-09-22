import logo from "../assets/jussiLogo.svg";

import { FiSearch, FiShoppingCart } from "react-icons/fi";

import "../styles/components/Header.css";

export default function Header() {
  return (
    <>
      <header className="header-container">
        <div className="content">
          <div className="content-left">
            <div className="logo">
              <img src={logo} alt="logo marca jussi" />
            </div>
            <nav className="content-title">
              <ul>
                <li>
                  <a>Nossas Soluções</a>
                </li>
                <li>
                  <a>Conheça a Jussi</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content-right">
            <div className="search-header">
              {" "}
              <form>
                <input placeholder="Buscar" />
                <button type="submit">
                  <FiSearch />
                </button>
              </form>
            </div>
            <div className="header-login">Login</div>
            <div className="header-card">
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
