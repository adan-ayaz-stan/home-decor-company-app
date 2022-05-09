import React from "react";
import styles from "../styles/connectModules/MainPage.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactPage/ContactForm";

export default function Connect() {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>

        <main className={styles.submain}>
          <div className={styles.getInTouch}>
            <h1>Get in touch.</h1>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
            <h3>999a.d.a.n.a.y.az999@gmail.com</h3>
            <h3>+92 3234 5678</h3>
          </div>
          <div className={styles.form}>
            <ContactForm></ContactForm>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
