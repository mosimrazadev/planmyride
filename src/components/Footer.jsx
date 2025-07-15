import React from 'react';
import styles from "../styles/footer.module.css";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          <h3>PlanMyRide</h3>
          <p className={styles.textLineContent}>Your trusted partner for unforgettable holidays and travel experiences.</p>
          <p className={styles.copyrightNotice}>© 2025 PlanMyRide. All Rights Reserved.</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/hotels#popularDestinations">Destinations</Link></li>
            <li><Link to="/holiday#holidaySlider">Packages</Link></li>
            <li><Link to="/bus#busRoutes">Popular Bus Routes</Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4>Contact Us</h4>
          <p>Email: info@planmyride.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Travel St, Adventure City</p>
        </div>

        <div className={styles.footerSocial}>
          <h4>Follow Us</h4>
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
