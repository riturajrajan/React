import { Link } from "react-router-dom";

const Header = () => (
  <div className="flex">
    <div className="logo">
      <img
        id="logoId"
        src="https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png"
      />
      <span className="food-title">Food Slip</span>
    </div>
    <div className="nav-items">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <Link to="about"><li>About</li></Link>
        <Link to="contact"><li>Contact Us</li></Link>
        <li>Cart</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
);

export default Header;
