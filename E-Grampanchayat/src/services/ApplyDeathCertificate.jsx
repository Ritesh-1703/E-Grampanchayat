import React, { useState } from "react";
import axios from "axios";
import styles from "./ApplyDeathCertificate.module.css";
import { toast } from "react-toastify";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";

const ApplyDeathCertificate = () => {
  const [form, setForm] = useState({
    userId: "", // Replace with logged-in user's ID
    deceasedName: "",
    dateOfDeath: "",
    placeOfDeath: "",
    applicationDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://e-grampanchayat-jufy.onrender.com/api/death-certificates/apply",
        form
      );
      toast.success("Application submitted!");
      setForm({
        userId: "",
        deceasedName: "",
        dateOfDeath: "",
        placeOfDeath: "",
        applicationDate: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit");
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Apply for Death Certificate</h2>
        <input
          name="userId"
          placeholder="User ID"
          value={form.userId}
          onChange={handleChange}
        />
        <input
          name="deceasedName"
          placeholder="Deceased Name"
          value={form.deceasedName}
          onChange={handleChange}
        />
        Date Of Death
        <input
          type="date"
          name="dateOfDeath"
          value={form.dateOfDeath}
          onChange={handleChange}
        />
        <input
          name="placeOfDeath"
          placeholder="Place of Death"
          value={form.placeOfDeath}
          onChange={handleChange}
        />
        Application Date
        <input
          type="date"
          name="applicationDate"
          value={form.applicationDate}
          onChange={handleChange}
        />
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ApplyDeathCertificate;
