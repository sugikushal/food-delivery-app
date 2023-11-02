import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="flex justify-between shadow-lg font-mono font-semibold">
      <img className="w-24" src={LOGO} />
      <ul className="flex items-center justify-around">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mx-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mx-4 h-full flex items-center">
          <Link to="/cart">
            <div className="flex">
              <CartImage />
              <div className="grid items-center relative bottom-3 bg-orange-400 rounded-3xl px-2 text-xs font-mono text-center">
                {quantity}
              </div>
            </div>
          </Link>
        </li>
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

const CartImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export default Header;
