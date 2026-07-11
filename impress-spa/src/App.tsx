import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import WhyImpress from "./sections/WhyImpress/WhyImpress";
import Capabilities from "./sections/Capabilities/Capabilities";
import Solutions from "./sections/Solutions/Solutions";
import BackToTop from "./components/ui/BackToTop/BackToTop";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import SEO from "./components/SEO/SEO";

function App() {
  return (
    <MainLayout>
      <SEO />
      <Navbar />
      <Hero />
      <WhyImpress />
      <Solutions />
      <Capabilities />
      <Gallery />
      <Contact />
      <BackToTop />
      <Footer />
    </MainLayout>
  );
}

export default App;