import Head from "next/head";
import Parallax from "react-rellax";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AZ | Home Decor Agency</title>
        <meta name="description" content="marketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

// A home decor website
