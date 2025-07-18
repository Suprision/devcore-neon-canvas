import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider">
            <span className="text-neon-green animate-neon-pulse">DEV</span>
            <span className="text-neon-blue">CORE</span>
          </h1>
          <div className="h-1 w-32 bg-neon-green mx-auto mb-8 neon-glow"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
          We craft <span className="text-neon-green">exceptional code</span> and design{" "}
          <span className="text-neon-blue">stunning websites</span>
        </p>
        
        <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Where innovation meets precision. We transform ideas into digital experiences 
          that captivate, engage, and deliver results.
        </p>
        
        <div className="flex flex-col items-center">
         <a href="#projects-section" className="group relative px-8 py-4 bg-transparent border-2 border-neon-green rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-glow hover:neon-glow-strong">
  <span className="relative z-10 font-bold text-neon-green group-hover:text-background transition-colors duration-300">
    EXPLORE OUR WORK
  </span>
  <div className="absolute inset-0 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</a>
          
          <ArrowDown className="mt-12 w-8 h-8 text-neon-green animate-bounce" />
        </div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-150"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;