import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ViewCertificate.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";

const ViewDeathCertificates = ({ userId }) => {
  const [certificates, setCertificates] = useState([]);

  const fetch = async () => {
    try {
      const res = await axios.get(
        `https://e-grampanchayat-jufy.onrender.com/api/death-certificates/user/${userId}`
      );
      setCertificates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Death Certificate Applications</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Deceased</th>
              <th>Date of Death</th>
              <th>Status</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((c) => (
              <tr key={c.id}>
                <td>{c.deceasedName}</td>
                <td>{c.dateOfDeath}</td>
                <td>{c.status}</td>
                <td>
                  {c.certificateFile ? (
                    <a
                      href={`http://localhost:8082/api/death-certificates/${c.id}/download`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.downloadBtn}
                    >
                      Download
                    </a>
                  ) : (
                    <span className={styles.noFile}>Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewDeathCertificates;
