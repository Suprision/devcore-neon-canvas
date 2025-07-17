import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Expert Development",
      description: "Clean, efficient code that scales with your business needs",
      color: "text-neon-green"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Stunning visuals that capture your brand's essence",
      color: "text-neon-blue"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Lightning-fast solutions built for modern web standards",
      color: "text-neon-green"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-neon-green">WHO</span>{" "}
            <span className="text-foreground">WE</span>{" "}
            <span className="text-neon-blue">ARE</span>
          </h2>
          <div className="h-1 w-24 bg-neon-green mx-auto mb-8 neon-glow"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DevCore is a cutting-edge development studio specializing in creating 
            exceptional digital experiences. We combine technical expertise with 
            creative vision to deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl gradient-card border border-muted hover:border-neon-green transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;