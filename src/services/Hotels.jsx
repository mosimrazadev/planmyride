import React from 'react'
import styles from "../styles/hotels.module.css"
import Footer from '../components/Footer'
import { FaChevronDown } from "react-icons/fa";
import store_img from "../assets/LeRoi-image.png"
import Destinations from '../Suggestions/Destinations';


const Hotels = () => {

  const handleClick = () => {
    window.open("https://brands.goibibo.com/LeRoi?showHeader=false");
  }


  return (
   <div className={styles.hotel_page}>

      <div className={styles.header}>
          <h3>Book Hotels and Homestays</h3>
        </div>

      <div className={styles.booking_section}>
        <div className={styles.container}>
          <div className={styles.placearea}>
              <span>Where to</span>
              <p>e.g. - Area, Landmark or Property Name</p></div>

          <div className={styles.inDate}>
            <span>Check-in</span>
            <p>26 Jul '25<span><FaChevronDown /></span></p>
            <h6>Saturday</h6></div>

          <div className={styles.Outdate}>
            <span>Check-out</span>
            <p>27 Jul '25<span><FaChevronDown /></span></p>
            <h6>Sunday</h6></div>

          <div className={styles.guest_section}>
            <span>Guests & Rooms</span>
            <p>2 Adults  | 1 Room<span><FaChevronDown /></span></p></div>

        </div>

        <button className={styles.search_button}>SEARCH</button>
        </div>

      <div className={styles.hotel_store}>
         <div className={styles.store_content}>
          <h4>Introducing</h4>
          <h5>Hotel Stores on PlanMyRide</h5>
          <p>Your one-stop destination to choose hotels, filtered by brands</p>
         </div>
         <div onClick={handleClick} className={styles.store_img}>
          <h5>Le Roi</h5>
          <img src={store_img} alt="store-img" /></div>
      </div>

      <Destinations/>

      <Footer/>
   </div>
  )
}

export default Hotels