import { Link } from "react-router-dom";
import styles from "./AdminNavbar.module.css";
import LogoutButton from "./LogoutButton";

function AdminNavbar() {
  return (
    <nav className={styles.adminNavbar}>
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
      <ul className={styles.adminNavLinks}>
        <li>
          <Link to="/AdminPanel">Dashboard</Link>
        </li>
        <li>
          <Link to="/AdminCertificate">Certificates</Link>
        </li>
        <li>
          <Link to="/AdminDirectory">Directory </Link>
        </li>

        <li>
          <Link to="/adminpayment">Tax Reports</Link>
        </li>
        <li>
          <LogoutButton></LogoutButton>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
