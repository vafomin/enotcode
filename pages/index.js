import Head from "next/head";
import Info from "../components/Info";
import Works from "../components/Works";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Portfolio | Viktor Fomin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Info />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
