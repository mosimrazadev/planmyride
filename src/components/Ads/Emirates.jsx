import React from 'react'
import styles from "../../styles/emirates.module.css"
import emirates_image from "../../assets/emirates.jpg"

const Emirates = () => {

    const handleclick = () => {
        window.open("https://brands.makemytrip.com/emirates?showHeader=false&open=browser")
    }


  return (
    <div onClick={handleclick} className={styles.ad_container}>
        <div className={styles.emirates_img}><img src={emirates_image} alt="emirates-image"/></div>
        <div className={styles.ad_content}>
            <h2>Experience <span>Emirates Airline</span> with PlanMyRide</h2>
            <p>Redefine Elegance in the Skies With Our Premium Airline Partner</p>
            <button>VIEW EMIRATES STORE</button>
        </div>
    </div>
  )
}

export default Emirates