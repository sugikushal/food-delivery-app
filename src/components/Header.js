import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  console.log("Rendered");
  return (
    <div className="header">
      <img className="logo" src={LOGO} />
      <div className="nav-items">
        <ul className="nav-items-ul">
          <li> <Link to="/" className="react-link">Home</Link></li>
          <li> <Link to="/about" className="react-link">About Us</Link> </li> 
          <li> <Link to="/contact" className="react-link">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
            }}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
