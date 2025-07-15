import React, { useRef, useState } from 'react';
import styles from "../../styles/offer.module.css"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import {bus1, cab1, hotel1, indigo1, kotak1, train1, calendar, clock} from "../../assets";

const Offer = () => {

  const [offertype, setOffertype] = useState("all");
  const scrollRef = useRef(null);


  const offers = [
    {title: "Bus, Hotels, Flights", category: "bank-offers", description: "Up to 15% OFF* Instant Discount* on Flights, Hotels & Bus", image: kotak1, validity_icon: calendar, validity: "Valid till 30th Jul'25"},
    {title: "Flights", category: "flights", description: "LIVE NOW: Monsoon Sale by Indigo!", image: indigo1, validity_icon: calendar, validity: "Valid till 28th Jul'25"},
    {title: "Domestic Hotels", category: "hotels", description: "20% Discounts on Food & Beverages @ Sayaji Hotels! ", image: hotel1, validity_icon: calendar, validity: "Valid till 25th Jul'25"},
    {title: "Bus", category: "bus", description: "LIVE NOW: ₹ 500 off on Bus Booking", image: bus1, validity_icon: calendar, validity: "Valid till 15th Aug'25"},
    {title: "Cabs", category: "cabs", description: "Explore this NEW feature now!", image: cab1, validity_icon: clock, validity: "Limited period offer"},
    {title: "Trains", category: "trains", description: "Zero service fee on 1st train booking", image: train1, validity_icon: calendar, validity: "Every Day (Today)"},
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  const filterOffers = offertype === "all" ? offers : offers.filter(offer => offer.category === offertype);



  return (
    <div className={styles.offer_section}>
      <h3>Offers just for You...</h3>

      <div className={styles.offer_header}>
        <h5 className={`${styles.offer_options} ${offertype === 'all' ? styles.offer_selected : '' }`} 
            onClick={() => setOffertype('all')}>All</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'bank-offers' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('bank-offers')} >Bank Offers</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'flights' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('flights')} >Flights</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'hotels' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('hotels')} >Hotels</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'cabs' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('cabs')} >Cabs</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'bus' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('bus')} >Bus</h5>

        <h5 className={`${styles.offer_options} ${offertype === 'trains' ? styles.offer_selected : '' }`}
            onClick={() => setOffertype('trains')} >Trains</h5>

         </div>

         <button className={`${styles.scroll_arrow} ${styles.scroll_left}`} onClick={() => scroll('left')}><LuArrowLeft /></button>
         <button className={`${styles.scroll_arrow} ${styles.scroll_right}`} onClick={() => scroll('right')}><LuArrowRight /></button>

         <div className={styles.offer_list} ref={scrollRef}>
           {filterOffers.map((offer, index) => {
            return (
            <div className={styles.offer_card} key={index}>
              <img src={offer.image} alt={offer.title}></img>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <div className={offer.validity_icon === calendar ? styles.validity_caln : styles.validity_cl}>
              <img src={offer.validity_icon} alt="calendar" /><span>{offer.validity}</span>
              </div>  
            </div>
            ) 
          })}
         </div>

    </div>
  )
}

export default Offer