import { Mail, Phone, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-neon-cyan" />
              <h3 className="text-3xl font-black">
                <span className="text-neon-cyan">DEV</span>
                <span className="text-neon-magenta">CORE</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Transforming ideas into digital reality. Let's build something extraordinary together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/20 group-hover:border-neon-cyan transition-colors duration-300">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">mail@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-neon-magenta/10 to-neon-magenta/5 border border-neon-magenta/20 group-hover:border-neon-magenta transition-colors duration-300">
                  <Phone className="w-5 h-5 text-neon-magenta" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">1234567890</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="inline-block p-8 rounded-xl gradient-card border border-muted">
              <h4 className="text-xl font-bold mb-4 text-foreground">Ready to Start?</h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss your next project and bring your vision to life.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-bold rounded-lg hover:scale-105 transition-transform duration-300 neon-glow">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan"></div>
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-magenta"></div>
          </div>
          <p className="text-muted-foreground">
            © 2024 DevCore. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;