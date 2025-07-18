import React from 'react';
import styles from "../styles/footer.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";


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
            <li><Link to="/a">About Us</Link></li>
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
          <div className={styles.footerSVS}>
          <a href="#" className={styles.socialIcon}><FaInstagram /></a>
          <a href="#" className={styles.socialIcon}><FaSquareXTwitter /></a>
          <a href="https://www.linkedin.com/in/mosim-raza-00b44b358/"  target="_blank" className={styles.socialIcon}><FaLinkedin /></a>
          <a href="#" className={styles.socialIconFB}><ImFacebook2 /></a>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
