import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
    </MainLayout>
  );
}

export default App;