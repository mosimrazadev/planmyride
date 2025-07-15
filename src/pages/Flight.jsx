import React, { useState } from 'react'
import styles from "../styles/flight.module.css"
import { TbArrowsExchange } from "react-icons/tb";
import Offer from '../components/Offers/Offer';
import Emirates from '../components/Ads/Emirates';
import Footer from '../components/Footer';


const Flight = () => {

  const [triptype, setTriptype] = useState('one-way');
  const [faretype, setFaretype] = useState('regular');

  return (
    <div className={styles.flight_page}>
          <div className={styles.header}>
          </div>
       <h3>Book Domestic and International Flight Tickets</h3>

       <div className={styles.booking_sec}>
        
        <div className={styles.options_container}>
         <label className={`${styles.trip_option} ${triptype === 'one-way' ? styles.selected : '' }`}>
           <input 
           type="radio" 
           checked = {triptype === "one-way"} 
           onChange={() => setTriptype('one-way')}/>One-way</label>

         <label className={`${styles.trip_option} ${triptype === 'round-trip' ? styles.selected : '' }`}>
           <input 
           type="radio" 
           checked = {triptype === "round-trip"} 
           onChange={() => setTriptype('round-trip')}/>Round-trip</label>

         <label className={`${styles.trip_option} ${triptype === 'multi-city' ? styles.selected : '' }`}>
           <input 
           type="radio" 
           checked = {triptype === "multi-city"} 
           onChange={() => setTriptype('multi-city')}/>Multi-city</label>
        </div>

        <div className={styles.input_section}>
           <span className={styles.from}>From</span>
           <input className={styles.from_input} type='text' placeholder='Enter airport name'/>

           <button className={styles.exchange_button}><TbArrowsExchange /></button>

           <span className={`${styles.from} ${styles.from2}`}>To</span>
           <input className={`${styles.from_input} ${styles.from_input2}`} type='text' placeholder='Enter airport name'/>

           <span className={styles.departure}>Departure</span>
           <input className={styles.date_input} type="date" placeholder={Date()}/>

           <span className={styles.return}>Return</span>
           <input className={styles.return_input} type="text" placeholder='Click here to add a return flight' />

           <span className={styles.traveller}>Travellers & Class</span>
           <input className={styles.traveller_input} type='text' placeholder='1 Adult'/>
        </div>

        <div className={styles.fare_section}>
           <div>
            <h4>Special Fares</h4>
            <h4 className={styles.fare_offer}>More Savings</h4>
            </div>

         <label className={`${styles.fare_options} ${faretype === 'regular' ? styles.fare_selected : '' }`}>
           <input 
           type="radio" 
           checked = {faretype === "regular"} 
           onChange={() => setFaretype('regular')}/><span><h5>Regular</h5><h6>Regular Fares</h6></span></label>

         <label className={`${styles.fare_options} ${faretype === 'student' ? styles.fare_selected : '' }`}>
           <input 
           type="radio" 
           checked = {faretype === "student"} 
           onChange={() => setFaretype('student')}/><span><h5>Student</h5><h6>Extra Baggage</h6></span></label>

         <label className={`${styles.fare_options} ${faretype === 'senior' ? styles.fare_selected : '' }`}>
           <input 
           type="radio" 
           checked = {faretype === "senior"} 
           onChange={() => setFaretype('senior')}/><span><h5>Senior Citizen</h5><h6>Up to ₹ 600 off</h6></span></label>

         <label className={`${styles.fare_options} ${faretype === 'armed-forces' ? styles.fare_selected : '' }`}>
           <input 
           type="radio" 
           checked = {faretype === "armed-forces"} 
           onChange={() => setFaretype('armed-forces')}/><span><h5>Armed Forces</h5><h6>Up to ₹ 600 off</h6></span></label>

        <label className={`${styles.fare_options} ${faretype === 'doctor-nurses' ? styles.fare_selected : '' }`}>
           <input 
           type="radio" 
           checked = {faretype === "doctor-nurses"} 
           onChange={() => setFaretype('doctor-nurses')}/><span><h5>Doctors & Nurses</h5><h6>Up to ₹ 600 off</h6></span></label>
        </div>

         <div className={styles.search_button}>
          <button>SEARCH FLIGHTS</button>
         </div>
       </div>
       
       <Emirates/>
       <Offer/>
       <Footer/>
    </div>
  )
}

export default Flight