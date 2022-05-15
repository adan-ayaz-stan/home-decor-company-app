import React, { useEffect } from "react";
import Aos from "aos";
import styles from "../styles/aboutModules/AboutMain.module.css";
import "animate.css";

export default function About() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });

  return (
    <>
      {/* <Parallax speed={-7}> */}
      <div className={styles.main} id="about">
        {/* <div className={styles.navbar}>
            <Navbar></Navbar>
          </div> */}
        <div
          className={`${styles.submain}`}
          data-aos="fade-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1>
            We believe that good design is powerful, hard work is of importance,
            and exploring the unknown is essential.
          </h1>
          <hr />
          <div className={styles.tertiarymain}>
            <div>
              <h4>Identity Design</h4>
              <p>
                We create identities and corresponding systems. Every visual is
                considered and gained with great content and concept. As
                always,it's done with a restless pursuit of discovery.
              </p>
            </div>
            <div>
              <h4>Collaborating Design</h4>
              <p>
                We design and build decors that work well with you, regardless
                of the space available or the stuff of your space. We utilize an
                intensive process that focuses on the environment in which the
                utilizer actually exists: the decor.
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Less talk, more work</h4>
            <p>
              We dig deep, explore oppurtunities, and execute on ideas worth a
              damn. We work with induviduals who understand that design is a
              process and the ripe ingredient is time. Collaboration is a trust,
              egos are a no-go, and we prefer to do work instead of just think
              about it.
            </p>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
      {/* <Footer></Footer> */}
    </>
  );
}
