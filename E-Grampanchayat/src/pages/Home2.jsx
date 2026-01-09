import React, { useState, useEffect } from "react";
import styles from "./Home2.module.css";
import { Link } from "react-router-dom";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer2 from "../components/Footer2";

const images = [
  "/images/village3.jpg",
  "/images/village4.jpg",
  "/images/Logo4.jpeg",
  "/images/village5.jpg",
  "/images/village6.jpg",
];

const Home2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <CitizenNavbar></CitizenNavbar>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className={styles.slideshow}
          />
          <div className={styles.overlay}>
            <h1 className={`${styles.customtitle}`}>
              Welcome to E-Grampanchayat
            </h1>
            <p className={`${styles.customsubtitle}`}>
              Empowering citizens with digital governance
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            <Link to="/ApplyCertificate" className={styles.card}>
              <h3>Certificate Services</h3>
              <p>Apply for birth, death, and property certificates online.</p>
            </Link>
            {/* <Link to="/schemes" className={styles.card}>
              <h3>Schemes & Benefits</h3>
              <p>Explore government schemes and check your eligibility.</p>
            </Link> */}
            <Link to="/userpayment" className={styles.card}>
              <h3>Revenue & Tax Collection</h3>
              <p>Pay your property taxes securely online.</p>
            </Link>
            <Link to="/Project" className={styles.card}>
              <h3>Village Development</h3>
              <p>Stay updated with ongoing development projects.</p>
            </Link>
            <Link to="/CitizenDirectory" className={styles.card}>
              <h3>Grampanchayat Directory</h3>
              <p>
                Get contact details of local officials and emergency services.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default Home2;
