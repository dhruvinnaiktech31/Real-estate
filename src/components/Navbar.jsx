import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { scrollToTop } from "../utils/Scroll.js"
function Navbar() {

  const handleNavLinkClick = () => {
    scrollToTop();

    // Collapse the navbar in mobile view
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    if (navbarCollapse.classList.contains("show")) {
      // Bootstrap collapse toggle
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
          <img src={logo} alt="Logo" width="90px" height="55px" className="me-2" />
          Dream&nbsp; <span style={{ color: "#8ee64e" }}>Homes</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "16px" }}>
            {["/", "/listings", "/about", "/contact"].map((path, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className="nav-link"
                  to={path}
                  end={path === "/"}
                  onClick={handleNavLinkClick}
                >
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
