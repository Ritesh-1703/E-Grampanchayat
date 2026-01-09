import React, { useState } from "react";
import axios from "axios";
import styles from "./MarriageCertificate.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer3 from "../components/Footer3";

const ApplyMarriageCertificate = () => {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    dateOfMarriage: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = Number(localStorage.getItem("user_id"));
    try {
      await axios.post(
        "https://e-grampanchayat-jufy.onrender.com/api/marriage-certificates/apply",
        {
          ...formData,
          userId,
        }
      );
      alert("Application submitted successfully!");
      setFormData({
        groomName: "",
        brideName: "",
        dateOfMarriage: "",
      });
    } catch (err) {
      alert("Error submitting application");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Apply for Marriage Certificate</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="groomName"
            className={styles.input}
            placeholder="Groom Name"
            value={formData.groomName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brideName"
            className={styles.input}
            placeholder="Bride Name"
            value={formData.brideName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfMarriage"
            className={styles.input}
            value={formData.dateOfMarriage}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default ApplyMarriageCertificate;
