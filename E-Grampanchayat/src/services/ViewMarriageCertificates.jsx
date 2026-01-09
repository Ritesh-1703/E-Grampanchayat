import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MarriageCertificate.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer3 from "../components/Footer3";

const ViewMarriageCertificates = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchData = async () => {
    const userId = Number(localStorage.getItem("user_id"));
    try {
      const res = await axios.get(
        `http://localhost:8082/api/marriage-certificates/user/${userId}`
      );
      setCertificates(res.data);
    } catch (err) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Marriage Certificate Applications</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Groom</th>
              <th>Bride</th>
              <th>Date of Marriage</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {certificates.length === 0 ? (
              <tr>
                <td colSpan="5">No applications found.</td>
              </tr>
            ) : (
              certificates.map((cert) => (
                <tr key={cert.id}>
                  <td>{cert.groomName}</td>
                  <td>{cert.brideName}</td>
                  <td>{cert.dateOfMarriage}</td>
                  <td>
                    {cert.status === "APPROVED" && (
                      <span className={styles.statusApproved}>Approved</span>
                    )}
                    {cert.status === "PENDING" && (
                      <span className={styles.statusPending}>Pending</span>
                    )}
                    {cert.status === "REJECTED" && (
                      <span className={styles.statusRejected}>Rejected</span>
                    )}
                  </td>
                  <td>
                    {cert.status === "APPROVED" && cert.certificateFileName ? (
                      <a
                        href={`http://localhost:8082/api/marriage-certificates/${cert.id}/download`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadLink}
                      >
                        📥 Download
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
    </>
  );
};

export default ViewMarriageCertificates;
