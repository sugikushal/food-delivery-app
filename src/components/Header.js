import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  return (
    <div className="flex justify-between shadow-lg font-mono font-semibold">
      <img className="w-24" src={LOGO} />
      <ul className="flex items-center justify-around">
        <li className="mx-4">
          <Link to="/" >
            Home
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/about">
            About Us
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="mx-4">Cart</li>
        <button
          className="mx-4"
          onClick={() => {
            loginText === "Login"
              ? setLoginText("Logout")
              : setLoginText("Login");
          }}
        >
          {loginText}
        </button>
      </ul>
    </div>
  );
};

export default Header;
