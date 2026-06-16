import About from "../components/About";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact"
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

function Home() {
  return (
    <>
      <Hero />
      <Navbar/>
      <About/>
      <Services/>
      <Projects/>
      <WhyChooseUs/>
      <Stats/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
      <ScrollTop/>
    </>
  );
}

export default Home;