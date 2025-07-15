import React, { useEffect, useState } from "react";
import styles from "../styles/holidaySlider.module.css";
import {
  maldivesSlider,
  sunSiyamSlider,
  thailandSlider,
  dubaiSlider,
} from "../assets/index.js";

const images = [
  maldivesSlider.img1,
  sunSiyamSlider.img1,
  thailandSlider.img1,
  dubaiSlider.img1,
];

const HolidaySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Holiday destination ${index + 1}`}
              className={styles.sliderImage}
            />
          ))}
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HolidaySlider;
