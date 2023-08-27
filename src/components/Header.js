import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO}
      />
      <div className="nav-items">
        <ul className="nav-items-ul">
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
