import Navbar from "./components/layout/Navbar";
import InteractiveGrid from "./components/layout/InteractiveGrid";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen relative">
      <InteractiveGrid />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
