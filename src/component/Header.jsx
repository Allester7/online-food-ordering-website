import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#bdb96a] to-[#bdb96b] text-white shadow-lg sticky top-0 z-2">
      <div className="bg-[#bdb96a] p-2 rounded flex items-center flex-shrink-0">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
        <img src={LOGO_URL} className="h-20 w-20 object-contain" alt="Logo" />
        </Link>
      </div>
      <nav className="nav-items">
        <ul className="flex gap-4 space-x-6 text-lg font-semibold">
          <li className="cursor-pointer  flex items-center">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer  flex items-center"><Link to="/Cart">Cart</Link></li>
          <li className="cursor-pointer flex items-center"><Link to="/Contact">Contact Us</Link></li>
          <li className="cursor-pointer  flex items-center">Status</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
