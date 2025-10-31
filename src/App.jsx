import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* Aquí irán las demás secciones */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
