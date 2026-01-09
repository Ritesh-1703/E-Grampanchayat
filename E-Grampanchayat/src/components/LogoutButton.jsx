import { useNavigate } from "react-router-dom";
import styles from "./LogoutButton.module.css";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      <FiLogOut className={styles.icon} /> Logout
    </button>
  );
}

export default LogoutButton;
