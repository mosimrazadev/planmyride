import React from 'react'
import styles from "../styles/wavestyle.module.css"

const WaveStyle = () => {
  return (
    <div className={styles.header}>
    <svg
      className={styles.wave}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,60 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
      ></path>
    </svg>
  </div>
  )
}

export default WaveStyle;