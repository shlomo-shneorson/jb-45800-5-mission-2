import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header bg-dark text-white">
      <h1 className="p-3 text-center">React Weather App</h1>
      <nav className="d-flex justify-content-evenly p-4">
        <NavLink className={``} to={"home"}>
          Home
        </NavLink>
        <NavLink className={` `} to="/history">
          History
        </NavLink>
        <NavLink className={``} to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
