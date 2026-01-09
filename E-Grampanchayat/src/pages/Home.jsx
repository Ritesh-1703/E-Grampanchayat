import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Home.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} text-white text-center`}>
        <div className={`${styles.body}`}>
          <h1 className={`${styles.customtitle}`}>
            Welcome to E-Grampanchayat
          </h1>
          <p className={`${styles.customsubtitle}`}>
            A Digital Initiative for Transparent and Efficient Village
            Administration.
          </p>
          <Link to="/register" className="btn btn-warning btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Key Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow text-center p-4">
                <i className="fas fa-file-alt fa-3x text-primary"></i>
                <h5 className="mt-3">Certificate & Documents</h5>
                <p>
                  Apply for Birth, Death, and other certificates easily online.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow text-center p-4">
                <i className="fas fa-rupee-sign fa-3x text-success"></i>
                <h5 className="mt-3">Revenue & Tax Collection</h5>
                <p>Pay your property tax and other dues securely.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow text-center p-4">
                <i className="fas fa-users fa-3x text-warning"></i>
                <h5 className="mt-3">Schemes & Benefits</h5>
                <p>Discover and apply for government welfare schemes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose E-Grampanchayat?</h2>
          <p className="text-center">
            E-Grampanchayat is a modern digital governance initiative aimed at
            streamlining administrative services for citizens. Our mission is to
            bring transparency, efficiency, and accessibility to village
            administration.
          </p>
          <div className="text-center mt-3">
            <Link to="/about" className="btn btn-outline-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`${styles.cta} text-white text-center py-5`}>
        <div className="container">
          <h2 className="fw-bold">Empowering Villages with Digital Services</h2>
          <p className="lead">
            Join us in making governance seamless and accessible for everyone.
          </p>
          <Link to="/register" className="btn btn-light btn-lg mt-3">
            Join Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
