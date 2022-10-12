/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-cocktail.png";
const Navbar = () => {
  return (
    <div className="flex space-x-16 items-center justify-between bg-transparent absolute top-0 left-1/2 -translate-x-1/2 z-[6] text-white w-full layout text-xl py-4 mb-8">
      <Link to="/" className="logo">
        <img src={Logo} className="md:w-28 w-20 h-20 md:h-28" />
      </Link>
      <nav className="">
        <ul className="flex items-center text-sm md:text-lg space-x-8 md:space-x-16">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
