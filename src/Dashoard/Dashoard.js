import React from "react";
import Navbarside from "./Navbarside";
import { useHistory } from "react-router-dom";
import "./Active.css";
const Dashoard = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <header className="header-navbar">
        <h1>Dashboard</h1>
        <nav>
          <li onClick={handleLogout}>Sign Out </li>
        </nav>
      </header>
      <div>
        <Navbarside />
      </div>
    </div>
  );
};
export default Dashoard;
