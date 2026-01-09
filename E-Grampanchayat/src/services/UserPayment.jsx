import React, { useState } from "react";
import styles from "./UserPayment.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";
import qrImage from "/images/scanner.jpg"; // Replace with actual path

const UserPayment = () => {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState(null);

  const userId = 1; // Replace with dynamic ID if needed

  const handleSubmit = async () => {
    if (!purpose || !amount || !file) {
      toast.warning("Please fill all fields and upload a screenshot.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("purpose", purpose);
    formData.append("amount", amount);
    formData.append("screenshot", file);

    try {
      await axios.post("http://localhost:8082/api/payments/submit", formData);
      toast.success("Payment submitted successfully!");
      setPurpose("");
      setAmount("");
      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit payment.");
    }
  };

  return (
    <>
      <CitizenNavbar />
      <div className={styles.container}>
        <h2>Submit Payment Proof</h2>
        <div className={styles.paymentBox}>
          <img src={qrImage} alt="QR Code" className={styles.qrImage} />
          <div className={styles.form}>
            <label>Purpose</label>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />

            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <label>Upload Screenshot</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default UserPayment;
