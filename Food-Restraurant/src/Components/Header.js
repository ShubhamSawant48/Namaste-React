import { useState } from "react";
import { RESLOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let [loginBtn, setLoginBtn] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap justify-between border-3 m-1 border-black bg-cyan-100">
      <div className="res-logo p-5">
        <img className="w-25 h-25 border-1 rounded-full" src={RESLOGO_URL} />
      </div>
      <div className="navbar">
        <ul className="flex flex-wrap gap-8 p-15 text-2xl">
          <li className="hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="/cart">Cart({cartItems.length} Items)</Link>
          </li>

          <button
            className="cursor-pointer hover:text-orange-400"
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
