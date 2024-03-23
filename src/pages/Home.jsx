import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MidSection1 from "../components/MidSection1";
import MidSection2 from "../components/MidSection2";
import MidSection3 from "../components/MidSection3";
import MottoSection from "../components/MottoSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MidSection1 />
      <MidSection2 />
      <MidSection3 />
      <MottoSection />

      {/* Horizontal Rule */}
      <div className="h-[1px] mb-24 sm:mb-[76px] mx-auto w-[80%] bg-[#5C5959]"></div>

      <Footer />
    </div>
  );
};

export default Home;

