import { useState } from "react";
import { RESLOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="res-logo">
        <img className="res-logo" src={RESLOGO_URL} />
      </div>
      <div className="navbar">
        <ul className="nav-li">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("LogOut")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
