import styles from "./AdminPanel.module.css";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaUsers,
  FaClipboardCheck,
  FaMoneyBillWave,
} from "react-icons/fa";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

function AdminPanel() {
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <div className={styles.adminPanel}>
        <header className={styles.header}>
          <h1>Admin Dashboard</h1>
          <p>Welcome, Admin! Manage Grampanchayat operations efficiently.</p>
        </header>

        <div className={styles.dashboard}>
          <Link to="/AdminCertificate" className={styles.card}>
            <FaFileAlt className={styles.icon} />
            <h3>Certificate Documents</h3>
            <p>Review and approve citizen document requests.</p>
          </Link>

          {/* <Link to="/manage-users" className={styles.card}>
            <FaUsers className={styles.icon} />
            <h3>Manage Users</h3>
            <p>Oversee citizen and official accounts.</p>
          </Link> */}

          <Link to="/adminproject" className={styles.card}>
            <FaClipboardCheck className={styles.icon} />
            <h3>Projects</h3>
            <p>Add and Update Project Status Details.</p>
          </Link>

          <Link to="/adminpayment" className={styles.card}>
            <FaMoneyBillWave className={styles.icon} />
            <h3>Tax Reports</h3>
            <p>View and analyze tax collection details.</p>
          </Link>

          <Link to="/AdminDirectory" className={styles.card}>
            <VscFileSymlinkDirectory className={styles.icon} />
            <h3>Grampanchayat Directory</h3>
            <p>View & Manage the Details of Grampanchayat Offcials .</p>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AdminPanel;
