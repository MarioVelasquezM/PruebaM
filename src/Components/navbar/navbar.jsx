import React from "react";
import Logo from "../Assets/Logo_ML.png";
import SearchIcon from "../Assets/ic_Search.png";
import "./navbar.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmitSearchBar = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchBar.value;

    navigate(`/items?search=${searchValue}`);
  };

  return (
    <nav className="bar">
      <img
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="ManitaLogo"
        className="Logo"
        onClick={() => {
          navigate("/");
        }}
      />

      <form onSubmit={handleSubmitSearchBar} className="barsearch">
        <input
          type="text"
          id="Search"
          name="searchBar"
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
