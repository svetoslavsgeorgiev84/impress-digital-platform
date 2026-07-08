import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import WhyImpress from "./sections/WhyImpress/WhyImpress";
import Capabilities from "./sections/Capabilities/Capabilities";
import Solutions from "./sections/Solutions/Solutions";
import BackToTop from "./components/ui/BackToTop/BackToTop";
import Gallery from "./sections/Gallery/Gallery";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <WhyImpress />
      <Solutions />
      <Capabilities />
      <Gallery />
      <BackToTop />
    </MainLayout>
  );
}

export default App;