import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className="flex-none w-10">
        <img src={logo} alt="load nhi hui" />
      </Link>

      <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey"></div>
    </nav>
  );
};

export default Navbar;
