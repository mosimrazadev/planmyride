import React from 'react'
import styles from "../styles/bus.module.css"
import Footer from '../components/Footer'
import { FaArrowRightLong } from "react-icons/fa6";
import {UPSRTC, APSRTC, BSRTC, GSRTC, HRTC, JKSRTC, KERALARTC, OSRTC, PRTC, RSRTC, TGSRTC, ASTC, UPSRTC_bg, APSRTC_bg, BSRTC_bg, GSRTC_bg, HRTC_bg, JKSRTC_bg, KERALARTC_bg, OSRTC_bg, PRTC_bg, RSRTC_bg, TGSRTC_bg, ASTC_bg, ahemdabad, chennai, delhi, hyderabad, mumbai, pune, tirupathi,} from "../assets/index.js"


const whyuscontent = [
  {title: "Bus routes across india", count: "350000+"},
  {title: "Bus partners", count: "4500+"},
  {title: "Trusted travellers", count: "50000000+"},
  {title: "Daily Offers", count: "25+"},
]

const busByState = [
  {title: "UPSRTC", description: "Uttar Pradesh State Road Transport Corporation", image: UPSRTC_bg , logo: UPSRTC},
  {title: "APSRTC", description: "Andhra Pradesh State Road Transport Corporation", image: APSRTC_bg , logo: APSRTC},
  {title: "TGSRTC", description: "Telangana State Road Transport Corporation", image: BSRTC_bg , logo: BSRTC},
  {title: "Kerala RTC", description: "Kerala Road Transport Corporation", image: GSRTC_bg , logo: GSRTC},
  {title: "GSRTC", description: "Gujarat State Road Transport Corporation", image: HRTC_bg , logo: HRTC},
  {title: "RSRTC", description: "Rajasthan State Road Transport Corporation", image: JKSRTC_bg , logo: JKSRTC},
  {title: "HRTC", description: "Himachal Pradesh State Road Transport Corporation", image: KERALARTC_bg , logo: KERALARTC},
  {title: "OSRTC", description: "Odisha State Road Transport Corporation", image: OSRTC_bg , logo: OSRTC},
  {title: "BSRTC", description: "Bihar State Road Transport Corporation", image: PRTC_bg , logo: PRTC},
  {title: "PRTC", description: "PEPSU Road Transport Corporation", image: RSRTC_bg , logo: RSRTC},
  {title: "JKSRTC", description: "Jammu & Kashmir Road Transport Corporation", image: TGSRTC_bg , logo: TGSRTC},
  {title: "ASTC", description: "Assam State Transport Corporation", image: ASTC_bg , logo: ASTC},
]

const busRoutes = [
  {from: "Bangalore", to: "Hyderabad", image: hyderabad, svg:<FaArrowRightLong />},
  {from: "Hyderabad", to: "Vijayawada", image: hyderabad, svg:<FaArrowRightLong />},
  {from: "Bangalore", to: "Chennai", image: chennai, svg:<FaArrowRightLong />},
  {from: "Hyderabad", to: "Visakhapatnam", image: hyderabad, svg:<FaArrowRightLong />},
  {from: "Bangalore", to: "Tirupathi", image: tirupathi, svg:<FaArrowRightLong />},
  {from: "Hyderabad", to: "Tirupathi", image: tirupathi, svg:<FaArrowRightLong />},
  {from: "Delhi", to: "Lucknow", image: delhi, svg:<FaArrowRightLong />},
  {from: "Chennai", to: "Madurai", image: chennai, svg:<FaArrowRightLong />},
  {from: "Delhi", to: "Manali", image: delhi, svg:<FaArrowRightLong />},
  {from: "Delhi", to: "Jaipur", image: delhi, svg:<FaArrowRightLong />},
  {from: "Mumbai", to: "Pune", image: mumbai, svg:<FaArrowRightLong />},
  {from: "Pune", to: "Nagpur", image: pune, svg:<FaArrowRightLong />},
  {from: "Hyderabad", to: "Nellore", image: hyderabad, svg:<FaArrowRightLong />},
  {from: "Chennai", to: "Coimbatore", image: chennai, svg:<FaArrowRightLong />},
  {from: "Mumbai", to: "Indore", image: mumbai, svg:<FaArrowRightLong />},
  {from: "Ahmedabad", to: "Rajkot", image: ahemdabad, svg:<FaArrowRightLong />},
]

const Bus = () => {
  return (
    <div className={styles.bus_page}>

        <div className={styles.header}>
          <h3>Bus Ticket Booking</h3>
        </div>

    <div className={styles.booking_section}>
           <div className={styles.input_section}>
            <div>
             <input type="text" placeholder='Enter Source' />
             <span>From</span>
             </div>

             <div>
             <input type="text" placeholder='Enter Destination' />
             <span>To</span>
             </div>

             <div className={styles.departure}>
             <input type="date" placeholder={Date()} />
             <span>Departure</span>
             </div> 
           </div>

           <div className={styles.search_button}>
            <button>SEARCH BUS</button>
           </div>
    </div>

    <div className={styles.whyUsSection}>

       <div className={styles.topfirst}></div>
       <div className={styles.topsecond}></div>
       <div className={styles.bottomfisrt}></div>
       <div className={styles.bottomsecond}></div>

       <div className={styles.whyUsContent}>
         {whyuscontent.map(whyus => (
          <div className={styles.textContent} key={whyus.title}>
            <p>{whyus.title}</p>
            <h2>{whyus.count}</h2>
          </div>
         ))}
       </div>

    </div>

    <div className={styles.governmentBusSection}>
      <div className={styles.governmentBusSectionHeader}>
        <h3>Book Bus Tickets at PlanMyRide</h3>
        <p>From SRTC (State Road Transport Corporation)</p>
      </div>

      <div className={styles.govtBusListContainer}>
        {busByState.map(buses => (
          <div className={styles.stateCard} key={buses.title}>

           <div className={styles.imageWrapper}> 
            <img className={styles.bgImage} src={buses.image} alt={buses.title}/>
            <img className={styles.logo} src={buses.logo} alt={buses.title} />
           </div>
           
            <div className={styles.stateTextContent}>
              <h3>{buses.title}</h3>
              <p>{buses.description}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}

      </div>
    </div>

    <div className={styles.busRouteSectoin}>

      <div className={styles.busRouteHeader}>
        <h3>Popular Bus Routes</h3>
        <p>You can check popular bus routes, compare bus schedules, timings and their prices to book bus tickets online. AbhiBus offers you low-cost bus fares for your travel across India. For a seamless travel experience, book bus tickets online with AbhiBus for your bus journey.</p>
      </div>

      <div className={styles.busRouteListContainer}>
          {busRoutes.map(route => (
            <div className={styles.busRouteCards} key={route.from}>
                <img src={route.image} alt={route.from} />
                <div className={styles.routeTextContent}>
                <h2>{route.from}</h2>
                <span>{route.svg}</span>
                <h2>{route.to}</h2>
                </div>
                <button>View Buses</button>  
            </div>
          ))}
      </div>

    </div>

    

    <Footer/>
  </div>
  )
}

export default Bus