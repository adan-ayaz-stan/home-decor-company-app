import React from "react";
import styles from "../styles/HomePage.module.css";
import Navbar from "./Navbar";
import Parallax from "react-rellax";
import "animate.css";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <Parallax speed={5} centered={true} className={styles.headingBox}>
        <h1
          className={`${styles.mainHeading} animate__animated animate__fadeInDown animate__delay-3s`}
        >
          Brightening up homes
        </h1>
        <h2
          className={`${styles.secondaryHeading} animate__animated animate__fadeIn animate__delay-4s`}
        >
          making ends meet
        </h2>
      </Parallax>
    </div>
  );
}
