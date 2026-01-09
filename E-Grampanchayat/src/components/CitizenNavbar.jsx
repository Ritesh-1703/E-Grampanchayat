import { Link } from "react-router-dom";
import styles from "./CitizenNavbar.module.css";
import LogoutButton from "./LogoutButton";

function CitizenNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
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
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/Home2" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/ViewCertificate" className={styles.navItem}>
            Certificates
          </Link>
        </li>

        <li>
          <Link to="/userpayment" className={styles.navItem}>
            Tax Payment
          </Link>
        </li>
        <li>
          <Link to="/CitizenDirectory" className={styles.navItem}>
            Directory
          </Link>
        </li>
        <li>
          <LogoutButton></LogoutButton>
        </li>
      </ul>
    </nav>
  );
}

export default CitizenNavbar;
