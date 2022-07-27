import Info from "../components/Info";
import Works from "../components/Works";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col px-10">
      <Info />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
