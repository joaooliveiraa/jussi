import logo from "../assets/jussiLogo.svg";

import "../styles/components/Header.css";

import { FiSearch, FiShoppingCart } from "react-icons/fi";

import { useState, useContext } from "react";
import { SearchPageContext } from '../context/SearchPage';

export default function Header() {

  const [inputSearch, setInputSearch] = useState("");

  const { getListRepo } = useContext(SearchPageContext);

  async function search() {
    if (inputSearch === '') {
      alert('Nos conte o que deseja Pesquisar 😁')
    } else {
      await getListRepo(inputSearch);
    }
  }

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
                <input id="inputSearch" placeholder="Buscar" onChange={event => setInputSearch(event.target.value)} />
                <button type="button" onClick={search}>
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
