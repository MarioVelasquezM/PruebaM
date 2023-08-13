import React from "react";
import Navbar from "../../Components/navbar/navbar";
import { Outlet } from "react-router";
import "./layout.css";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="outletContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
