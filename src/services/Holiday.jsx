import React from 'react'
import styles from "../styles/holiday.module.css"
import WaveStyle from '../designs/WaveStyle'
import HolidaySlider from '../Ads/HolidaySlider'
import Destinations from '../Suggestions/Destinations';
import Footer from '../components/Footer'





const Holiday = () => {
  return (
    <div className={styles.holiday_page}>
      <WaveStyle/>
       
      <div className={styles.header}>
          <h2>Book Your Dream Holiday Packages with PlanMyRide</h2>
      </div>

      <div className={styles.booking_section}>


 <div className={styles.input_section}>
  <div>
   <input type="text" placeholder='Enter Source Name' />
   <span>From</span>
   </div>

   <div>
   <input type="text" placeholder='Enter Destination Name' />
   <span>To</span>
   </div>

   <div className={styles.departure}>
   <input type="date" placeholder={Date()} />
   <span>Departure</span>
   </div>

   <div className={styles.guest_section}>
   <input type="text" placeholder='2 Adults | 1 Room' />
   <span>Guests & Rooms</span>
   </div>

    
 </div>

 <div className={styles.search_button}>
  <button>SEARCH TRAINS</button>
 </div>
      


     </div>

     <HolidaySlider/>
     <Destinations/>
 
   

       
  <Footer/>
  </div>
  )
}

export default Holiday