import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch(
        "https://e-grampanchayat-jufy.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user_id", data.id);
        localStorage.setItem("username", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        localStorage.setItem("phone", data.phone);
        localStorage.setItem("address", data.address);

        if (data.role === "Citizen") {
          navigate("/Home2"); // Redirect to Home
        } else if (data.role === "Admin") {
          navigate("/AdminPanel"); // Redirect to Admin Panel
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Server error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2 className={styles.title}>Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
