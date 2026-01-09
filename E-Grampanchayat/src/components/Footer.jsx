import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={`bg-dark text-white pt-5 pb-3 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          {/* Column 1: Logo & About */}
          <div className="col-md-4">
            <h4 className="fw-bold">E-Grampanchayat</h4>
            <p>
              A digital initiative to bring transparency and efficiency to rural
              governance. Access services anytime, anywhere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> Village Office,
              Maharashtra, India
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 98765 43210
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@egrampanchayat.com
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mt-4">
          <Link to="#" className="text-white mx-2">
            <i className="fab fa-facebook fa-2x"></i>
          </Link>
          <Link to="#" className="text-white mx-2">
            <i className="fab fa-twitter fa-2x"></i>
          </Link>
          <Link to="#" className="text-white mx-2">
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
          <Link to="#" className="text-white mx-2">
            <i className="fab fa-linkedin fa-2x"></i>
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} E-Grampanchayat. All Rights
            Reserved. to @RiteshDhamale
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
