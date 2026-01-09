import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        {/* Logo & Brand Name */}
        <Link
          className={`navbar-brand fw-bold d-flex align-items-center ${styles.brand}`}
          to="/"
        >
          <img
            src="/images/Logo1.jpeg"
            alt="Logo"
            className={`${styles.logo} me-2`}
          />
          E-Grampanchayat
        </Link>

        {/* Mobile Toggle Button */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navLinks}`}>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navItem}`} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.navItem}`} to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navItem}`} to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Login & Register Buttons */}
          <div className={`d-flex ${styles.authButtons}`}>
            <Link
              className={`btn btn-outline-light me-2 ${styles.loginBtn}`}
              to="/Login"
            >
              Login
            </Link>
            <Link
              className={`btn btn-warning ${styles.registerBtn}`}
              to="/Register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
