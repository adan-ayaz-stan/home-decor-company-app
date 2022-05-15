import Image from "next/image";
import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/projectsModules/ProjectsMain.module.css";
import Aos from "aos";

export default function Projects() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });
  const [projectsList, setProjectsList] = useState([]);

  async function fetcher() {
    const data = await fetch(
      "https://home-decor-company-api-default-rtdb.firebaseio.com/.json"
    ).then((res) => res.json());
    setProjectsList(data);
  }

  useEffect(() => {
    fetcher();
  }, []);

  console.log(projectsList);

  return (
    <>
      <div className={styles.navbar}>
        <Navbar
          aboutLinkHref="/#about"
          contactLinkHref="/#contact"
          projectLinkHref="#projects"
        ></Navbar>
      </div>
      <div className={styles.main} id="projects">
        <h2>Projects</h2>
        <hr />
        <div className={styles.submain}>
          {projectsList.map((ele, ind, arr) => {
            return (
              <a
                href={`/projects/${ind + 1}`}
                key={ind + 100}
                className={`${styles.tertiarymain}`}
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay={ind % 2 ? 500 : 200}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={ele.img}
                    alt={`${ele.name}+${ele.ind}`}
                    className={styles.img}
                    layout="fill"
                    priority={ind + 1}
                  ></Image>
                </div>
                <h3>{ele.name}</h3>
              </a>
            );
          })}
        </div>
      </div>
      <Footer
        aboutLinkHref="/#about"
        contactLinkHref="/#contact"
        projectLinkHref="#projects"
      ></Footer>
    </>
  );
}
