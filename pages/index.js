import Head from "next/head";
import Parallax from "react-rellax";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import About from "../componentsMain/about";
import Connect from "../componentsMain/connect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AZ | Home Decor Agency</title>
        <meta name="description" content="marketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Parallax speed={-5}> */}
      <HomePage></HomePage>
      {/* </Parallax> */}
      <About></About>
      <Connect></Connect>
      <Footer
        aboutLinkHref="/#about"
        contactLinkHref="/#contact"
        projectLinkHref="/projects"
      ></Footer>
    </div>
  );
}

// A home decor website
