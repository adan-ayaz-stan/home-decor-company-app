import Image from "next/image";
import React from "react";
import "animate.css";

import styles from "../styles/Navbar.module.css";
import instagramLogo from "../CMS/icons/instagram.png";
import facebookLogo from "../CMS/icons/facebook.png";
import twitterLogo from "../CMS/icons/twitter.png";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <h1
        className={`${styles.logo} animate__animated animate__fadeIn animate__delay-1s`}
      >
        Home Decor Company©
      </h1>
      <ul
        className={`${styles.ulist} animate__animated animate__fadeIn animate__delay-2s`}
      >
        <li>
          <a href="/about" className={`${styles.linkflash}`}>
            About
          </a>
        </li>
        <li>
          <a href="/projects" className={`${styles.linkflash}`}>
            Projects
          </a>
        </li>
        <li>
          <a href="/connect" className={`${styles.linkflash}`}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/adan_ayaz/"
            target="_blank"
            className={`${styles.logoflash}`}
          >
            <Image
              alt="instagram-logo"
              src={instagramLogo}
              height={25}
              width={25}
            ></Image>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/adan.adi"
            target="_blank"
            className={`${styles.logoflash}`}
          >
            <Image
              alt="facebook-logo"
              src={facebookLogo}
              height={25}
              width={25}
            ></Image>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AdanAyaz1"
            target="_blank"
            className={`${styles.logoflash}`}
          >
            <Image
              alt="twitter-logo"
              src={twitterLogo}
              height={25}
              width={25}
            ></Image>
          </a>
        </li>
      </ul>
    </div>
  );
}
