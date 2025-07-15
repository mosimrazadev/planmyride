import React from 'react'
import styles from "../styles/cabs.module.css"
import Footer from '../components/Footer'
import { carWash, dollars, map, texiDriver, chennai, delhi, mumbai, pune, agra, RSRTC_bg, ASTC_bg, chandigarh, bangalore} from "../assets/index.js"


const whyuscontent = [
  {title:"Clean and Hygienic Car", image: carWash},
  {title:"Transparent Billing", image: dollars},
  {title:"Expert Chauffeurs", image: texiDriver},
  {title:"2000+ cities", image: map},
]

const cabsRoute = [
   {title: "Cabs From Delhi To", description: "Agra,Jaipur,Dehradun,Haridwar", image: delhi},
   {title: "Cabs From Agra To", description: "Gurgaon,Noida,New Delhi,Faridabad", image: agra},
   {title: "Cabs From Jaipur To", description: "Gurgaon,Noida,New Delhi,Faridabad", image: RSRTC_bg},
   {title: "Cabs From Pune To", description: "Mumbai,Shirdi,Mahabaleshwar,Nasik", image: pune},
   {title: "Cabs From Mumbai To", description: "Pune,Nasik,Shirdi,Lonavala", image: mumbai},
   {title: "Cabs From Chandigarh To", description: "Shimla,Manali,Gurgaon,Noida", image: chandigarh},
   {title: "Cabs From Bangalore To", description: " Ooty,Madikeri,Coorg, Vellore", image: bangalore},
   {title: "Cabs From Chennai To", description: "Madurai,Vellore,Bangalore,Tirupati", image: chennai},
   {title: "Cabs From Dehradun To", description: "New Delhi,Gurgaon,Noida,Faridabad", image: ASTC_bg},
]

const Cabs = () => {

  const [statustype, setStatustype] = React.useState("one-way");
  const [pickupTime, setPickupTime] = React.useState("09:00")

  
  return (
    <div className={styles.cabs_page}>

       <div className={styles.header}>
          <h3>Cabs Ticket Booking</h3>
       </div>

       <div className={styles.booking_section}>

         <div className={styles.status_container}>
           <label className={`${styles.status} ${statustype === "one-way" ? styles.selected : ''}`}>
           <input type="radio"
           checked = {statustype === "one-way"}
           onChange={() => setStatustype('one-way')}/>Outstation One-way</label>

           <label className={`${styles.status} ${statustype === "round-trip" ? styles.selected : ''}`}>
           <input type="radio"
           checked = {statustype === "round-trip"}
           onChange={() => setStatustype('round-trip')}/>Outstation Round trip</label>

           <label className={`${styles.status} ${statustype === "airport-transfer" ? styles.selected : ''}`}>
           <input type="radio"
           checked = {statustype === "airport-transfer"}
           onChange={() => setStatustype('airport-transfer')}/>Airport transfer</label>

           <label className={`${styles.status} ${statustype === "hourly-rental" ? styles.selected : ''}`}>
           <input type="radio"
           checked = {statustype === "hourly-rental"}
           onChange={() => setStatustype('hourly-rental')}/>Hourly Rental</label>
        </div>


        <div className={styles.input_section}>
          <div>
             <input type="text" placeholder='Enter Pickup location' />
             <span>From</span>
          </div>

          <div>
             <input type="text" placeholder='Enter Drop location' />
             <span>To</span>
          </div>

          <div className={styles.departure}>
             <input type="date" placeholder={Date()} />
             <span>Departure</span>
          </div>

          <div className={styles.pickUpTime}>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
            <span>Pickup-Time</span>
          </div>

        </div>

        <div className={styles.search_button}>
          <button>SEARCH CABS</button>
       </div>
      


       </div>

       <div className={styles.whyUsSection}>
          <h2>Why <span>PlanMyRide</span> Is Your Best Choice</h2>
          <div className={styles.whyUscontent}>
           {whyuscontent.map(whyus => (
            <div className={styles.whyUsTextContent} key={whyus.title}>
               <img src={whyus.image} alt={whyus.title} />
               <h5>{whyus.title}</h5>
            </div>
           ))}
          </div>
       </div>

       <div className={styles.cabsRouteSection}>

         <h3>Popular Cabs Routes</h3>
         <p>Explore our top cab routes for a smooth, hassle-free ride with planMyRide.</p>

          <div className={styles.cabsRouteListContainer}>
            {cabsRoute.map(route => (
               <div className={styles.cabsRouteCards} key={route.title}>
                  <img src={route.image} alt={route.title} />

                  <div className={styles.cabsRouteTextContent}>
                      <h2>{route.title}</h2>
                      <p>{route.description}</p>
                  </div>
                  <button>View Cabs</button>
               </div>
            ))}
          </div>

       </div>

    <Footer/>
  </div>
  )
}

export default Cabs