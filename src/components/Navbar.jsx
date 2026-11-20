import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        عدسة<span>.</span>
      </Link>

      <nav>
        <NavLink to="/" end>
          الرئيسية
        </NavLink>

        <NavLink to="/blog">
          المدونة
        </NavLink>
      </nav>

      <Link className="explore-button" to="/blog">
        ابدأ القراءة
      </Link>
    </header>
  );
}

export default Navbar;