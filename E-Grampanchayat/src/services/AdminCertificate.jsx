import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Footer2 from "../components/Footer2";
import AdminBirthCertificate from "./AdminBirthCertificate";
import AdminDeathCertificate from "./AdminDeathCertificate";
import AdminMarriageCertificate from "./AdminMarriageCertificate";
// import AdminIncomeCertificate from "./AdminIncomeCertificate";
import styles from "./AdminCertificate.module.css";

const AdminCertificate = () => {
  const [selectedType, setSelectedType] = useState("birth");

  const renderSelectedComponent = () => {
    switch (selectedType) {
      case "birth":
        return <AdminBirthCertificate />;
      case "death":
        return <AdminDeathCertificate />;
      case "marriage":
        return <AdminMarriageCertificate />;
      // case "income":
      //   return <AdminIncomeCertificate />;
      default:
        return <AdminBirthCertificate />;
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Admin Certificate Panel</h2>

        <div className={styles.filters}>
          <button onClick={() => setSelectedType("birth")}>Birth</button>
          <button onClick={() => setSelectedType("death")}>Death</button>
          <button onClick={() => setSelectedType("marriage")}>Marriage</button>
          {/* <button onClick={() => setSelectedType("income")}>Income</button> */}
        </div>

        {renderSelectedComponent()}
      </div>
      <Footer2 />
    </>
  );
};

export default AdminCertificate;
