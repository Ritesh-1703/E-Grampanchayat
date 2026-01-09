import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contactContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have questions or need assistance? Get in touch with us!
          </p>
        </section>

        {/* Contact Information */}
        <section className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Our Address</h3>
            <p>123 Grampanchayat Road, Your Village, India - 123456</p>
          </div>

          <div className={styles.infoCard}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>Email Us</h3>
            <p>support@egrampanchayat.in</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.contactFormSection}>
          <h2>Send Us a Message</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
