import React from "react";
import Logo from "../Assets/Logo_ML.png";
import SearchIcon from "../Assets/ic_Search.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="bar">
            <img src={Logo} alt="ManitaLogo" className="Logo" />

            <form className="barsearch">
                <input
                    type="text"
                    id="Search"
                    className="labelSearch"
                    placeholder="Nunca dejes de buscar"
                />
                <button type="submit" className="SearchButton">
                    <img src={SearchIcon} alt="SearchButto" />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
