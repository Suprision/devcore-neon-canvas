import { Mail, Phone, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-neon-green" />
              <h3 className="text-3xl font-black">
                <span className="text-neon-green">DEV</span>
                <span className="text-neon-blue">CORE</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Transforming ideas into digital reality. Let's build something extraordinary together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 group-hover:border-neon-green transition-colors duration-300">
                  <Mail className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">customer-devcore@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 group-hover:border-neon-blue transition-colors duration-300">
                  <Phone className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+255-745-775-641 <span style={{ color: '#00FFFF' }}>(WhatsApp available)</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="inline-block p-8 rounded-xl gradient-card border border-muted">
             <h4 className="text-xl font-bold mb-4 text-foreground text-center">Ready to Start?</h4>
              <p className="text-muted-foreground mb-6 text-foreground text-center">
                Let's discuss your next project and bring your vision to life.
              </p>
              <a 
  href="mailto:customer-devcore@proton.me" 
  className="px-6 py-3 bg-gradient-to-r from-neon-green to-white text-background font-bold rounded-lg hover:scale-105 transition-transform duration-300 neon-glow text-black block mx-auto w-max"
>
  GET IN TOUCH
</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-green"></div>
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue"></div>
          </div>
          <p className="text-muted-foreground">
            © 2025 DevCore. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;