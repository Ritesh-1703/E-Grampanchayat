import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} text-white text-center`}>
        <div className="container">
          <h1 className={`${styles.title} animate-fade`}>
            About E-Grampanchayat
          </h1>
          <p className={`${styles.subtitle} animate-fade`}>
            Transforming Rural Governance with Digital Solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className={`${styles.aboutContent} py-5`}>
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-6 animate-slide-left">
              <h2 className={styles.heading}>Our Mission</h2>
              <p className={styles.text}>
                E-Grampanchayat is dedicated to bringing transparency,
                efficiency, and accessibility to village governance. Our goal is
                to digitize administrative processes, making services more
                convenient for citizens.
              </p>
            </div>

            {/* Right Section with Image */}
            <div className="col-md-6 text-center animate-slide-right">
              <img
                src="/images/village3.jpg"
                alt="About Us"
                className={styles.image}
              />
            </div>
          </div>

          {/* Achievements */}
          <div className={`${styles.achievements} mt-5`}>
            <h2 className="text-center">Our Journey</h2>
            <ul className={styles.timeline}>
              <li className="animate-fade-up">
                <h4>Jan 2025 - Project Initiation</h4>
                <p>
                  Conceptualized the need for a digital solution for village
                  administration.
                </p>
              </li>
              <li className="animate-fade-up">
                <h4>Feb 2025 - Development Begins</h4>
                <p>Started building a user-friendly and robust platform.</p>
              </li>
              <li className="animate-fade-up">
                <h4>April 2025 - Successful Launch</h4>
                <p>Rolled out E-Grampanchayat services to multiple villages.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.cta} text-white text-center py-5`}>
        <div className="container">
          <h2>Join Our Digital Revolution</h2>
          <p>
            Be a part of this transformation and experience hassle-free village
            services.
          </p>
          <Link to="/register" className="btn btn-warning btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
