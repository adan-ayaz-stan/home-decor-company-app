import Image from "next/image";
import React from "react";
import styles from "../../styles/projectsModules/SingleProjectPage.module.css";
import "animate.css";
import Navbar from "../../components/Navbar";

export default function ProjectById({ projectInduvidual }) {
  console.log(projectInduvidual);

  return (
    <div className={styles.super}>
      <div className={styles.navbar}>
        <Navbar></Navbar>
      </div>
      <div className={styles.main}>
        <div
          className={`${styles.submain} animate__animated animate__fadeIn animate__slow animate__fadeInUp`}
        >
          <a href="http://localhost:3000/projects" className={styles.backArrow}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFRElEQVR4nO2b329VRRDHP/5qY1uwaO/ttSmthkTAEAnwKNgGwR+P/JBH3ySRiIpRSdrwF2iiUaLPJBhfLKGa+CuWhgKiUE20xFpiNEiNpkXUFIFSvceHmXXPhfv77O69Wr7Jzck9u2dmdnd2d2Z2Fq5jfuOGADyagbXAGuAeYBmQAhZpGcCfwG/ANPAtMAF8ARzTsv8cMsAu4AhwBYiq/M0CI8CzQLsPQV1rQA/wPPAIcLO++wsYRUbTjO4k8DtwQeu0AK1AJ7AU0RKjNXE6HwAvI51SV1gPHMWO3GVgANgELEhAdyGwGTiAaIOhPwL0JqDrDB3A21jBpoA+4HYPvO4A+pVHBGSB/cCdHniVhW2IGkfADPAC0BSAbzOwW3lGyOK5NQDff9EIvIEd9QFk7obGYmRqGDn2qmxe0QJ8pAwvAc/4ZlgGHke2ygg4hKwbXpBG9uYI+BG4zxejKrASOIvINorYGU6xENv4caDLNQMH6AC+RmT8CtlWnaARUa0I+AZoc0XYA1LIAEXAJ0CDC6JvKsFJoNsFQc/oBM4gMr+WlNg2JXSR+przpbAKWaQjYEu1RDqw+/wTbuQKiiexdkKmGgLGwhtwKFQlSAOfAocT0BhE2rC/0g/XYy28Whg5aWBMZfg8AZ0uxOHKIo5a2TCOzYsJmFeLeOPH9H8S9CmtsjWpVz84h1h+IZHC7uXjVDl3r0Iz1oFaV84H72nlPgfMK4HrkY9jj9IdLFUxA8wh/rwPl7YQfDYexHibRaJTRWk/p0K841iAYvCh9vlgdoSni1U6opU2eRLiavge+TgeUz7DhSo0IWoyh0eXMoZQI29wGxJXnKVA4OZhFeYzz4JA2JGP44Ty3Ghe3BgrXKPPo56FSANDwArgFPAgsk2FgGmbaWtOByzV57hHAVKIm7oCCZFvJFzjUZ4gBzTX4DiiHms9Ma+V2sfxgPI/lq/wBy304fPXQ+MB7lYZvs9X+KsWujaAQq/2xdCmckznKzQnL07CSDGMUvuRN2jEnlwBuYvgvEeoKVCzoyxKTAGzCN7lgXHdLoLxKfCLPhd7YDyFGDynEBtgiNp0gjnP+Nm8iHfAaX3mNRIcYAoJtY0hnXCY8NPBGHsT5kW8A8zLez0KMA1sQDRhGfAxYTVhuT5P5yt8iP+/M3RSeW7IV9iE7I+1cod9T4dWxB2+DNxaqNKICrTZszAGtQiIHCpWaRfhD0NCaYIJiT1VrFI7MgVmkZycUAgRFL2iv5K5AyYs3u9YiFIIERY/WE7lHurnYMTFdGhGtt+KYh1mMdztQIBK4VoT+ikRDc6HXuRAcQY/pnEpxDvhRAI63UgCVZYqIl1vqQAHEgiQBGkklnA8AY13kTbsq+bjDJJcEAHbEwhRK+xAZD9PgkTrrdicwJVu5AqC1YjFl8XBKddepBN+wk+swDU6kTzGCHjFBcEGJJZvtibnSYgOkUJi/xGS0eosvrkAG9z8DljiirBDdGMbfxIPNkwK2wmTSCpavWA1MkVN471paQvwITa0XC/J0hcRmYYI4Mo3AK9j09QHqU3ucDd2n88Cr+L+TKMotmDthAtITlEI36EFMW9Nivx5wiV0XIMMkoSYxTpQe/CTUN2mtM9hR30fnm6TVYoeJMobv+52EInCJElbb1Uag+RemhrG0Sm262tz65Brc48Ct+i7v4EvkeQEc23uLPmvzXUhYfnlSANXATdpnTngfeAlChxv1xNSSDbWMLJbVHphMn79bhjYiaetLcTV2SbgfnKvzrYjI24WzRngD+R0aoLcq7OXAsh4HfMW/wDh1qi4RkSsPQAAAABJRU5ErkJggg==" />
          </a>
          <p
            className={`${styles.contactBox} animate__animated animate__fadeIn animate__delay-2s`}
          >
            Contact at +92 3234 5678
          </p>
          <div
            className={`${styles.imageContainer} animate__animated animate__fadeIn animate__delay-2s`}
          >
            <Image
              src={projectInduvidual.img}
              className={styles.img}
              layout="fill"
              alt="project-image"
            ></Image>
          </div>
          <div className={`${styles.contentContainer}`}>
            <h1 className="animate__animated animate__fadeIn animate__delay-2s">
              {projectInduvidual.name}
            </h1>
            <p className="animate__animated animate__fadeIn animate__delay-2s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae porttitor risus. Etiam erat orci, rutrum vel
              dictum a, eleifend et lectus. Aenean lobortis egestas ante vitae
              commodo. Nam consectetur ornare elit at sodales. Proin id justo
              mauris. Quisque vitae fringilla ligula. Vestibulum at tempus
              lectus, sit amet fringilla sem. Proin commodo sit amet dolor eu
              tempus. Nunc varius, urna vel imperdiet egestas, mi elit dictum
              orci, ac vestibulum nibh nunc nec lectus. Vestibulum condimentum
              orci feugiat, lobortis quam et, laoreet nulla. Aliquam aliquet
              quis felis at pharetra. Vivamus fringilla ligula vel diam pretium
              facilisis. Donec aliquet enim a metus aliquam, quis eleifend
              ligula tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const projects = await fetch(
    "https://home-decor-company-api-default-rtdb.firebaseio.com/.json"
  ).then((res) => {
    return res.json();
  });

  const paths = projects.map((project, ind) => ({
    params: { id: `${project.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectInduvidual = await fetch(
    `https://home-decor-company-api-default-rtdb.firebaseio.com/${
      params.id - 1
    }.json`
  ).then((res) => res.json());

  return {
    props: {
      projectInduvidual,
    },
  };
}
