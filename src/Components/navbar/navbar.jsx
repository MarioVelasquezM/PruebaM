import React from "react";
import manita from "../../Assets/manita.jpg";

const Navbar = () => {
  return (
    <nav>
      <div className="flex-row items-center justify-center">
        <img
          src={manita}
          alt="ManitaLogo"
          className="rounded- boder-3 border-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
