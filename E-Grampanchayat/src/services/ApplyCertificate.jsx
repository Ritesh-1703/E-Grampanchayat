import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ApplyCertificate.module.css";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";
import ApplyMarriageCertificate from "./ApplyMarriageCertificate";
import ApplyDeathCertificate from "./ApplyDeathCertificate";

const ApplyCertificate = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    fatherName: "",
    motherName: "",
    gender: "",
    userId: "", // Auto-filled
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setFormData((prev) => ({
        ...prev,
        userId: parseInt(storedUserId), // Ensure it's a number
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8082/api/birth-certificates/apply",
        formData
      );
      alert("Application submitted successfully!");
      setFormData({
        childName: "",
        dateOfBirth: "",
        placeOfBirth: "",
        fatherName: "",
        motherName: "",
        gender: "",
        userId: formData.userId, // Keep the ID after reset
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <CitizenNavbar></CitizenNavbar>
      <div className={styles.container}>
        <h2>Apply for Birth Certificate</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="childName"
            placeholder="Full Name"
            value={formData.childName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="placeOfBirth"
            placeholder="Place of Birth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>

          {/* Hidden userId input */}
          <input type="hidden" name="userId" value={formData.userId} />

          <button type="submit">Submit Application</button>
        </form>
      </div>
      <ApplyMarriageCertificate></ApplyMarriageCertificate>
      <ApplyDeathCertificate></ApplyDeathCertificate>
      <Footer2></Footer2>
    </>
  );
};

export default ApplyCertificate;
