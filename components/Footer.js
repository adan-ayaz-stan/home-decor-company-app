import Image from "next/image";
import Link from "next/link";
import React from "react";
import Parallax from "react-rellax";

import styles from "../styles/Footer.module.css";
import instagramLogo from "../CMS/icons/instagram.png";
import facebookLogo from "../CMS/icons/facebook.png";
import twitterLogo from "../CMS/icons/twitter.png";

export default function Footer() {
  return (
    <div className={styles.main}>
      <Parallax speed={2} className={styles.monthlyDispatch}>
        <h1>Monthly Dispatch</h1>
        <h4>Sign up to recieve latest updates and newsletters.</h4>
        <div className={styles.form}>
          <input
            type="email"
            className={styles.form__email}
            placeholder="Enter your email address"
          />
          <button className={styles.form__button}>Send</button>
        </div>
      </Parallax>
      <div className={styles.secondary}>
        <h1 className={styles.logo}>Home Decor Company©</h1>
        <ul className={styles.ulist}>
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
        <h5>
          All rights reserved. This website has been made by{" "}
          <Link href="https://twitter.com/AdanAyaz1">
            <a>Adan Ayaz.</a>
          </Link>
        </h5>
      </div>
    </div>
  );
}
