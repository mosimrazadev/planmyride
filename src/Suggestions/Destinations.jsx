import React from 'react'
import styles from "../styles/destinations.module.css"
import {Amritsar, Amsterdam, Bali, Bengaluru, Dubai, HoChiMinh, Hyderabad, Krabi, Langkawi, Maldives, Manali, Mumbai, Munnar, Mysore, Ooty, Paris, Phuket, Shimla, Singapore, Udaipur,} from "../assets";


const popularDestinations = [
  {title: "Mumbai", description:"Cosmpolitan and financial capital of India", image: Mumbai,featured: true,},
  {title: "Ho Chi Minh", description:"Economical, historical and entertainment centre of Vietnam", image: HoChiMinh},
  {title: "Krabi", description:"A quaint destination featuring endless natural beauty", image: Krabi},
  {title: "Paris", description:"The City of Light", image: Paris},
  {title: "Maldives", description:"An ultimate luxurious and romantic holiday destination", image: Maldives},
  {title: "Ooty", description:"Endless natural beauty of the Nilgiris", image: Ooty},
  {title: "Manali", description:" Panoramic views of snow-laden mountains and dense deodar trees", image: Manali},
  {title: "Udaipur", description:"Crowned as India's most romantic city", image: Udaipur,featured: true,},
  {title: "Hyderabad", description:"The glorious city of Nizams known for radiant pearls", image: Hyderabad},
  {title: "Mysore", description:"A royal city with grand palaces and heritage sites", image: Mysore},
  {title: "Langkawi", description:"Picturesque island bordering azure blue waters", image: Langkawi,featured: true,},
  {title: "Bali", description:"Land of the Gods", image: Bali},
  {title: "Phuket", description:"A tropical paradise boasting of stunning beaches", image: Phuket},
  {title: "Amsterdam", description:"Venice of the North", image: Amsterdam},
  {title: "Shimla", description:"Endearing combination of snow-covered peaks and blue sky", image: Shimla},
  {title: "Singapore", description:"The city of vast green spaces and glittering skyline", image: Singapore},
  {title: "Dubai", description:"Treasured gem of the Emirates", image: Dubai},
  {title: "Bengaluru", description:"Techonolgy hub of India", image: Bengaluru,featured: true,},
  {title: "Munnar", description:"Referred as the Kashmir of South India", image: Munnar},
  {title: "Amritsar", description:"The Pool of Nectar", image: Amritsar},
]

const Destinations = () => {
  return (
    <div className={styles.container}>
           <div className={styles.text_content}>
              <h3>Popular Destinations</h3>
              <p>We have selected some best locations around the world for you.</p>
           </div>

         <div className={styles.destinations}>
              {popularDestinations.map((des, index) => (
                <div key={index} className={`${styles.destination_card} ${des.featured ? styles.featured : ""}`}>
                  <img src={des.image} alt={des.title} />
                  <div className={styles.destinations_text}>
                    <h3>{des.title}</h3>
                    <p>{des.description}</p>
                  </div>
                </div>
              ))}
         </div>
    </div>
  )
}

export default Destinations