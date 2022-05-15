import React, { useState } from "react";
import styles from "../../styles/connectModules/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.centered}`}>
        <article className={`${styles.letter}`}>
          <div className={`${styles.side}`}>
            <h1 className={styles.h1}>Contact us</h1>
            <p className={styles.p}>
              <textarea
                className={styles.textarea}
                placeholder="Your message"
                defaultValue={""}
              />
            </p>
          </div>
          <div className={`${styles.side}`}>
            <p className={styles.p}>
              <input
                className={styles.input}
                type="text"
                placeholder="Your name"
              />
            </p>
            <p className={styles.p}>
              <input
                className={styles.input}
                type="email"
                placeholder="Your email"
              />
            </p>
            <p className={styles.p}>
              <button className={`${styles.button}`} id="sendletter">
                Send
              </button>
            </p>
          </div>
        </article>
        <div className={`${styles.envelope} ${styles.front}`} />
        <div className={`${styles.envelope} ${styles.back}`} />
      </div>
      <p className={`${styles.resultmessage} ${styles.centered} ${styles.p}`}>
        .
      </p>

      {/* </div> */}
    </div>
  );
}
