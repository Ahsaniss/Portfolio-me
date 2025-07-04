import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-primary rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg">AR</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Ahsan Raza</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building innovative solutions with modern technologies. 
              Passionate about AI, web development, and creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Ready to work together? Let's create something amazing.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href="https://github.com/Ahsaniss" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/muhammad-ahsan-raza-2a9b9828a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href="mailto:ahsanraza858585@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="pt-2">
                <a 
                  href="mailto:ahsanraza858585@gmail.com"
                  className="text-sm text-primary hover:underline"
                >
                  ahsanraza858585@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Muhammad Ahsan Raza. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span>by Ahsan Raza</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Sea Waves at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-40"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Wave Gradients - More Dim Colors */}
            <linearGradient id="seaWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="seaWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="seaWave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
              <stop offset="33%" stopColor="hsl(var(--primary))" stopOpacity="0.14" />
              <stop offset="66%" stopColor="hsl(var(--primary))" stopOpacity="0.14" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
            </linearGradient>
            
            {/* Shadow Filters - More Subtle */}
            <filter id="waveShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="hsl(var(--primary))" floodOpacity="0.15"/>
            </filter>
          </defs>
          
          {/* First Wave Layer (Background) - Taller Waves */}
          <path
            d="M0,60 Q200,10 400,40 Q600,70 800,30 Q1000,0 1200,50 L1200,160 L0,160 Z"
            fill="url(#seaWave1)"
            filter="url(#waveShadow)"
            style={{
              animation: 'seaWaveFlow1 14s ease-in-out infinite'
            }}
          />
          
          {/* Second Wave Layer (Middle) - Higher Amplitude */}
          <path
            d="M0,90 Q150,30 300,70 Q450,110 600,60 Q750,20 900,80 Q1050,120 1200,70 L1200,160 L0,160 Z"
            fill="url(#seaWave2)"
            filter="url(#waveShadow)"
            style={{
              animation: 'seaWaveFlow2 10s ease-in-out infinite reverse'
            }}
          />
          
          {/* Third Wave Layer (Front) - More Dynamic */}
          <path
            d="M0,110 Q100,50 200,90 Q300,130 400,80 Q500,40 600,100 Q700,140 800,90 Q900,50 1000,110 Q1100,150 1200,100 L1200,160 L0,160 Z"
            fill="url(#seaWave3)"
            filter="url(#waveShadow)"
            style={{
              animation: 'seaWaveFlow3 12s ease-in-out infinite'
            }}
          />
          
          {/* Fourth Wave Layer (Surface) - Subtle Top Layer */}
          <path
            d="M0,125 Q120,80 240,110 Q360,140 480,105 Q600,70 720,120 Q840,155 960,115 Q1080,85 1200,125 L1200,160 L0,160 Z"
            fill="url(#seaWave1)"
            filter="url(#waveShadow)"
            style={{
              animation: 'seaWaveFlow1 8s ease-in-out infinite reverse'
            }}
          />
          
          {/* Foam/Bubbles Effect - More Subtle */}
          <circle cx="150" cy="100" r="1.5" fill="hsl(var(--primary))" opacity="0.2">
            <animate attributeName="cy" values="100;85;100" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="105" r="1" fill="hsl(var(--primary))" opacity="0.15">
            <animate attributeName="cy" values="105;90;105" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="95" r="1.2" fill="hsl(var(--primary))" opacity="0.25">
            <animate attributeName="cy" values="95;80;95" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="110" r="1" fill="hsl(var(--primary))" opacity="0.18">
            <animate attributeName="cy" values="110;95;110" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.18;0.38;0.18" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="102" r="1.3" fill="hsl(var(--primary))" opacity="0.22">
            <animate attributeName="cy" values="102;87;102" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.22;0.42;0.22" dur="3.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Sea Wave Animation Styles */}
      <style>{`
        @keyframes seaWaveFlow1 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
          }
          25% {
            transform: translateX(-15px) scaleY(1.15);
          }
          50% {
            transform: translateX(-8px) scaleY(0.9);
          }
          75% {
            transform: translateX(-20px) scaleY(1.08);
          }
        }

        @keyframes seaWaveFlow2 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
          }
          20% {
            transform: translateX(12px) scaleY(1.2);
          }
          40% {
            transform: translateX(-5px) scaleY(0.85);
          }
          60% {
            transform: translateX(18px) scaleY(1.12);
          }
          80% {
            transform: translateX(-12px) scaleY(0.95);
          }
        }

        @keyframes seaWaveFlow3 {
          0%, 100% {
            transform: translateX(0) scaleY(1);
          }
          30% {
            transform: translateX(-18px) scaleY(1.25);
          }
          60% {
            transform: translateX(8px) scaleY(0.8);
          }
          90% {
            transform: translateX(-12px) scaleY(1.15);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;