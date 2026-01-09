import { useState, useEffect } from "react";
import styles from "./CitizenDirectory.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";

function CitizenDirectory() {
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/directory") // Adjust API URL as needed
      .then((res) => res.json())
      .then((data) => setDirectory(data))
      .catch((error) => console.error("Error fetching directory:", error));
  }, []);

  return (
    <>
      <CitizenNavbar></CitizenNavbar>{" "}
      <div className={styles.container}>
        <h2>Grampanchayat Directory</h2>
        <div className={styles.grid}>
          {directory.map((item) => (
            <div key={item.directory_id} className={styles.card}>
              <h3>{item.name}</h3>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Contact:</strong> {item.contactNo}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Address:</strong> {item.address}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer2></Footer2>
      </div>
    </>
  );
}

export default CitizenDirectory;
