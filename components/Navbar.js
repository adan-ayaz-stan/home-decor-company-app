import Image from "next/image";
import React, { useEffect } from "react";
import "animate.css";

import styles from "../styles/Navbar.module.css";
import instagramLogo from "../CMS/icons/instagram.png";
import facebookLogo from "../CMS/icons/facebook.png";
import twitterLogo from "../CMS/icons/twitter.png";
import Aos from "aos";

export default function Navbar(props) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });

  return (
    <div className={styles.main}>
      <a
        href="http://localhost:3000"
        className={`${styles.logo} animate__animated animate__fadeInDown animate__delay-1s animate__slow`}
      >
        Home Decor Company©
      </a>
      <ul className={`${styles.ulist}`}>
        <li>
          <a
            href={props.aboutLinkHref}
            className={`${styles.linkflash}`}
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            About
          </a>
        </li>
        <li>
          <a
            href={props.projectLinkHref}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
            className={`${styles.linkflash}`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href={props.contactLinkHref}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-duration="1000"
            className={`${styles.linkflash}`}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/adan_ayaz/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="800"
            data-aos-duration="1000"
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
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-duration="1000"
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
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1200"
            data-aos-duration="1000"
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
