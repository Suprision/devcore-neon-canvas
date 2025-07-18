// src/pages/Index.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

// --- Import your new Prices component here ---
import Prices from "@/components/Prices"; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* --- Add your Prices component here, for example, before the Footer --- */}
      <Prices /> 
      <Footer />
    </div>
  );
};

export default Index;