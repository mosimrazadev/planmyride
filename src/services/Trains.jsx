import React from 'react';
import styles from '../styles/trains.module.css';
import WaveStyle from '../designs/WaveStyle';
import Footer from '../components/Footer';
import irctc_logo from "../assets/irctc_logo.webp"
import irctc_lofo2 from "../assets/irctc_logo2.jpg"
import food_logo from "../assets/food_logo.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Trains = () => {

  const [statustype, setStatustype] = React.useState("book-train");
  const [selectClass, setSelectClass] = React.useState("All");



  const classes = [
    { value: 'All', label: 'All Class' },
    { value: '1A', label: 'First AC' },
    { value: '2A', label: 'Second AC' },
    { value: '3A', label: 'Third AC' },
    { value: 'SL', label: 'Sleeper' },
    { value: 'CC', label: 'AC Chair Car' },
    { value: '2S', label: 'Second Sitting' },
    { value: 'GN', label: 'General' },
  ];

  const inquiry = [
    {title: "Live Train Status", description: "Know the whereabouts of your train easily", svg: <FaLongArrowAltRight />},
    {title: "Coach & Seat Position", description: "View coach & seat layout of the train you wish to", svg: <FaLongArrowAltRight />},
    {title: "PNR Status", description: "Check PNR Status effortlessly just in one click", svg: <FaLongArrowAltRight />},
    {title: "Platform Locator", description: "Know the platform for your train", svg: <FaLongArrowAltRight />},
  ]
  
  const irctcSettings = [
    {title:"Create IRCTC ID", img:irctc_lofo2, svg:<IoIosArrowDroprightCircle />, link:"https://www.irctc.co.in/nget/profile/user-registration"},
    {title:"Forgot IRCTC ID", img:irctc_lofo2, svg:<IoIosArrowDroprightCircle />, link:"https://www.irctc.co.in/nget/profile/forgot-password?pageType=P"},
    {title:"Forgot IRCTC Password", img:irctc_lofo2, svg:<IoIosArrowDroprightCircle />, link:"https://www.irctc.co.in/nget/profile/forgot-password?pageType=P"},
  ]



  return (
    <div className={styles.train_page}>
    <WaveStyle/>

        <div className={styles.header}>
          <h2>Train Ticket Booking</h2>
          <div className={styles.irctc_section}>
          <img src={irctc_logo} alt="irctc_logo" />
          <h2>IRCTC Authorized Partner</h2>
          </div>
        </div>

        <div className={styles.booking_section}>

          <div className={styles.status_container}>
           <label className={`${styles.status} ${statustype === "book-train" ? styles.selected : ''}`}>
            <input type="radio"
            checked = {statustype === "book-train"}
            onChange={() => setStatustype('book-train')}/>Book Train Tickets</label>

           <label className={`${styles.status} ${statustype === "check-pnr" ? styles.selected : ''}`}>
            <input type="radio"
            checked = {statustype === "check-pnr"}
            onChange={() => setStatustype('check-pnr')}/>Check PNR Status</label>

           <label className={`${styles.status} ${statustype === "live-train" ? styles.selected : ''}`}>
            <input type="radio"
            checked = {statustype === "live-train"}
            onChange={() => setStatustype('live-train')}/>Live Trains Status</label>
         </div>


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
              
             <div>
              <select className={styles.class} value={selectClass} onChange={((e) => setSelectClass(e.target.value))}>
                  {classes.map(cls => (
                    <option  key={cls.value} value={cls.value}>
                      {cls.label}
                      {/* {cls.value} */}
                    </option>
                  ))}
              </select>
              <span>Class</span>
              </div>
           </div>

           <div className={styles.search_button}>
            <button>SEARCH TRAINS</button>
           </div>
                
 
      
       </div>
       
       {/* do this with map in future */}

       <div className={styles.whyUsSection}>
          <div className={styles.sectionHeader}>
            <h2>1 million+ customers</h2>
            <p>book train tickets with us because</p>
          </div>
          <ul className={styles.titles}>                                                          
            <li>
              <span><img src="https://gos3.ibcdn.com/no_can_fee-1668596842.svg" alt="noCancelFee"/></span>    
              <div>
                <h3>No Cancellation Fee</h3>
                <p>You can opt for free cancellation & get full refund.</p>
                <h6>Learn more about cancellation</h6>
              </div>
            </li>
            <li>
              <span><img src="https://gos3.ibcdn.com/go_cnfrm-1668596688.svg" alt="confirmTrip"/></span>
              <div>
                <h3>goConfirmed Trip</h3>
                <p>Guaranteed confirmed tickets or we give you 2x refund.</p>
                <h6>Learn more about goConfirmed</h6>
              </div>
            </li>
            <li>
              <span><img src="https://gos3.ibcdn.com/no_pg_fee_icon-1673341757.png" alt="noUPIFee"/></span>
              <div>
                <h3>No PG Fee via UPI</h3>
                <p>Zero Payment Gateway Charges via UPI mode</p>
              </div>
            </li>
          </ul>
       </div>
        
      <div className={styles.inquiry_area}>
       <div className={styles.inquiry_section}>
            <h2>Railways inquiry just a click away!</h2>
             <div className={styles.inquiry_cards}>
              {inquiry.map(inq => (
                <div className={styles.inquiry_content} key={inq.title}>
                  <h3>{inq.title}</h3>
                  <p>{inq.description}</p>
                  <button>{inq.svg}</button>
                </div>
              ))}
             </div>
       </div>
       </div>

       <div className={styles.bookMealSection}>
          <img src={food_logo} alt="food_logo" />
          <div className={styles.bookContent}>
            <h3>Book Meals for your train journey</h3>
            <p>Order now & get food delivered at your seat</p>
          </div>
          <button onClick={() => window.open("https://www.ecatering.irctc.co.in/")}>Book Meals Now</button>
       </div>

       <div className={styles.irctcSettings}>
         <h3>IRCTC Settings</h3>
         <div className={styles.irctcSettingButtons}>
          {irctcSettings.map(settings => (
            <div onClick={() => window.open(settings.link, "_blank")} className={styles.irctcSettingContent} key={settings.title}>
              <img src={settings.img} alt={settings.title}/>
              <h6>{settings.title}</h6>
              <span>{settings.svg}</span>
            </div>
          ))}
        </div>
       </div>


       <Footer/>
    </div>
  );
};

export default Trains;

