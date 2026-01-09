import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Registration.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "Citizen", // Role is fixed to "Citizen"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://e-grampanchayat-jufy.onrender.com/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Registration Successful");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
          role: "Citizen",
        });
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.registrationContainer}>
        <div className={styles.registrationCard}>
          <h2 className={styles.title}>Citizen Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Role</label>
              <input
                type="text"
                value="Citizen"
                readOnly
                className={styles.readOnlyInput}
              />
            </div>
            <button type="submit" className={styles.registerBtn}>
              Register
            </button>
          </form>
          <p className={styles.loginText}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
