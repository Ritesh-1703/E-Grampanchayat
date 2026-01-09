import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ViewCertificates.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer3 from "../components/Footer3";
import ViewMarriageCertificates from "./ViewMarriageCertificates";
import ViewDeathCertificates from "./ViewDeathCertificates";

const ViewCertificates = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    try {
      const userId = Number(localStorage.getItem("user_id"));
      const response = await axios.get(
        `https://e-grampanchayat-jufy.onrender.com/api/birth-certificates/user/${userId}`
      );
      setCertificates(response.data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();

    // Optional auto-refresh every 5s
    const interval = setInterval(fetchCertificates, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CitizenNavbar />
      {/* Add margin to avoid content going under sticky navbar */}
      <div style={{ marginTop: "80px" }}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>My Birth Certificate Applications</h2>

        <button onClick={fetchCertificates} className={styles.refreshBtn}>
          🔄 Refresh
        </button>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {certificates.length === 0 ? (
              <tr>
                <td colSpan="4">No applications found.</td>
              </tr>
            ) : (
              certificates.map((cert) => (
                <tr key={cert.id}>
                  <td>{cert.childName}</td>
                  <td>{cert.dateOfBirth}</td>
                  <td>
                    {cert.status === "APPROVED" && (
                      <span className={styles.approved}>Approved</span>
                    )}
                    {cert.status === "PENDING" && (
                      <span className={styles.pending}>Pending</span>
                    )}
                    {cert.status === "REJECTED" && (
                      <span className={styles.rejected}>Rejected</span>
                    )}
                  </td>
                  <td>
                    {cert.status === "APPROVED" ? (
                      <a
                        href={`http://localhost:8082/api/birth-certificates/${cert.id}/download`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.downloadBtn}>
                          📥 Download PDF
                        </button>
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ViewMarriageCertificates></ViewMarriageCertificates>
      <ViewDeathCertificates></ViewDeathCertificates>
      <Footer3 />
    </>
  );
};

export default ViewCertificates;
