import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import WhyImpress from "./sections/WhyImpress/WhyImpress";
import Capabilities from "./sections/Capabilities/Capabilities";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <WhyImpress />
      <Capabilities />
    </MainLayout>
  );
}

export default App;