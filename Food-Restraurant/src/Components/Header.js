import { RESLOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="res-logo">
          <img
            className="res-logo"
            src={RESLOGO_URL}
          />
        </div>
        <div className="navbar">
          <ul className="nav-li">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;