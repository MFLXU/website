import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Activities from "../components/Activities";
import OurSpecialities from "../components/OurSpecialities";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <OurSpecialities />
      <Cta />
      <Footer />
    </div>
  );
};
export default Home;
