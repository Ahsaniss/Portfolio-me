import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useState } from "react";

const Hero = () => {
  const [burstBalls, setBurstBalls] = useState<number[]>([]);

  const handleBallClick = (ballId: number) => {
    setBurstBalls(prev => [...prev, ballId]);
    
    // Remove the burst ball after animation completes
    setTimeout(() => {
      setBurstBalls(prev => prev.filter(id => id !== ballId));
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center">
          {/* Left content - Text Section (60%) */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Muhammad Ahsan
                <span className="block text-4xl md:text-6xl text-muted-foreground mt-2">
                  (Ahsan) Raza
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Software Engineer | Project Manager
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Machine Learning & Data Science Enthusiast | AI & Chatbot Developer (Gemini AI) | 
                Web & E-Commerce Developer | Python & C# Developer
              </p>
              <p className="text-base text-muted-foreground">
                Student at GCU Faisalabad
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://drive.google.com/file/d/1JJdnvatgbcPc3IbQWQOmuId1F8Dt3BV4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="https://github.com/Ahsaniss" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="https://www.linkedin.com/in/muhammad-ahsan-raza-2a9b9828a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="mailto:ahsanraza858585@gmail.com?subject=Hello%20Ahsan&body=Hi%20Ahsan,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - Hero image (40%) */}
          <div className="relative flex items-center justify-center animate-slide-up">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-full blur-3xl scale-150 opacity-60"></div>
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-125 opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 opacity-70"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Frosted glass backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-full border border-white/10 shadow-2xl"></div>
              
              {/* Orbiting Balls Container */}
              <div className="absolute inset-0 rounded-full">
                {/* First Orbit - Close to image */}
                <div className="absolute inset-0 rounded-full" style={{ animation: burstBalls.includes(1) ? 'none' : 'orbit1 8s linear infinite' }}>
                  <div 
                    onClick={() => handleBallClick(1)}
                    className={`absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(1) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/60 rounded-full animate-ping"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(1) && (
                      <>
                        <div className="absolute inset-0 bg-primary rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary rounded-full animate-shockwaveExpansion"></div>
                        {/* Particle spray */}
                        <div className="absolute inset-0">
                          <div className="absolute w-1 h-1 bg-primary rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/80 rounded-full animate-particleSpray2"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full animate-particleSpray3"></div>
                          <div className="absolute w-1 h-1 bg-primary/70 rounded-full animate-particleSpray4"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Second Orbit - Medium distance */}
                <div className="absolute inset-[-20px] rounded-full" style={{ animation: burstBalls.includes(2) ? 'none' : 'orbit2 12s linear infinite reverse' }}>
                  <div 
                    onClick={() => handleBallClick(2)}
                    className={`absolute top-1/4 right-0 w-2.5 h-2.5 bg-primary/80 rounded-full shadow-md transform translate-x-1/2 -translate-y-1/2 collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(2) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping delay-300"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(2) && (
                      <>
                        <div className="absolute inset-0 bg-primary/80 rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary/80 rounded-full animate-shockwaveExpansion"></div>
                        <div className="absolute inset-0">
                          <div className="absolute w-1 h-1 bg-primary/80 rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full animate-particleSpray2"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/50 rounded-full animate-particleSpray3"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Third Orbit - Far distance */}
                <div className="absolute inset-[-40px] rounded-full" style={{ animation: burstBalls.includes(3) ? 'none' : 'orbit3 16s linear infinite' }}>
                  <div 
                    onClick={() => handleBallClick(3)}
                    className={`absolute bottom-1/4 left-0 w-2 h-2 bg-primary/60 rounded-full shadow-sm transform -translate-x-1/2 translate-y-1/2 animate-pulse delay-500 collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(3) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping delay-700"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(3) && (
                      <>
                        <div className="absolute inset-0 bg-primary/60 rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary/60 rounded-full animate-shockwaveExpansion"></div>
                        <div className="absolute inset-0">
                          <div className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full animate-particleSpray2"></div>
                          <div className="absolute w-1 h-1 bg-primary/50 rounded-full animate-particleSpray3"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Fourth Orbit - Elliptical with collision */}
                <div className="absolute inset-[-30px] rounded-full" style={{ animation: burstBalls.includes(4) ? 'none' : 'orbitElliptical 10s ease-in-out infinite' }}>
                  <div 
                    onClick={() => handleBallClick(4)}
                    className={`absolute top-1/2 right-0 w-2.5 h-2.5 bg-primary/70 rounded-full shadow-md transform translate-x-1/2 -translate-y-1/2 collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(4) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping delay-1000"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(4) && (
                      <>
                        <div className="absolute inset-0 bg-primary/70 rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary/70 rounded-full animate-shockwaveExpansion"></div>
                        <div className="absolute inset-0">
                          <div className="absolute w-1 h-1 bg-primary/70 rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/50 rounded-full animate-particleSpray2"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full animate-particleSpray4"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Fifth Orbit - Slower and larger */}
                <div className="absolute inset-[-50px] rounded-full" style={{ animation: burstBalls.includes(5) ? 'none' : 'orbit5 20s linear infinite reverse' }}>
                  <div 
                    onClick={() => handleBallClick(5)}
                    className={`absolute top-0 left-1/2 w-1.5 h-1.5 bg-primary/50 rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1500 collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(5) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full animate-ping delay-200"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(5) && (
                      <>
                        <div className="absolute inset-0 bg-primary/50 rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-shockwaveExpansion"></div>
                        <div className="absolute inset-0">
                          <div className="absolute w-0.5 h-0.5 bg-primary/50 rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full animate-particleSpray3"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Sixth Orbit - Fast and small */}
                <div className="absolute inset-[-15px] rounded-full" style={{ animation: burstBalls.includes(6) ? 'none' : 'orbit6 6s linear infinite' }}>
                  <div 
                    onClick={() => handleBallClick(6)}
                    className={`absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-lg transform -translate-x-1/2 translate-y-1/2 collision-ball cursor-pointer transition-all duration-300 hover:scale-125 ${
                      burstBalls.includes(6) ? 'animate-clickBurst' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary/70 rounded-full animate-ping delay-800"></div>
                    {/* Click burst effect */}
                    {burstBalls.includes(6) && (
                      <>
                        <div className="absolute inset-0 bg-primary rounded-full animate-explosionBurst"></div>
                        <div className="absolute inset-0 border-2 border-primary rounded-full animate-shockwaveExpansion"></div>
                        <div className="absolute inset-0">
                          <div className="absolute w-1 h-1 bg-primary rounded-full animate-particleSpray1"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/80 rounded-full animate-particleSpray2"></div>
                          <div className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full animate-particleSpray3"></div>
                          <div className="absolute w-1 h-1 bg-primary/70 rounded-full animate-particleSpray4"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/20 z-10">
                <img 
                  src={profileImage} 
                  alt="Ahsan Raza - Software Engineer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-primary/15 rounded-full blur-lg animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>

      {/* Enhanced Animation Styles with Click Interactions */}
      <style>{`
        @keyframes orbit1 {
          0% { transform: rotate(0deg); }
          12.5% { transform: rotate(45deg); }
          /* Collision point at 15% */
          15% { 
            transform: rotate(54deg) scale(1.5);
            filter: brightness(2) blur(2px);
          }
          18% { 
            transform: rotate(65deg) scale(0.3);
            opacity: 0.2;
          }
          25% { 
            transform: rotate(90deg) scale(1);
            opacity: 1;
            filter: brightness(1) blur(0);
          }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbit2 {
          0% { transform: rotate(0deg); }
          30% { transform: rotate(-108deg); }
          /* Collision point at 35% */
          35% { 
            transform: rotate(-126deg) scale(2);
            filter: brightness(3) blur(1px);
          }
          38% { 
            transform: rotate(-137deg) scale(0.1);
            opacity: 0;
          }
          45% { 
            transform: rotate(-162deg) scale(1);
            opacity: 1;
            filter: brightness(1) blur(0);
          }
          100% { transform: rotate(-360deg); }
        }

        @keyframes orbit3 {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          /* Collision point at 55% */
          55% { 
            transform: rotate(198deg) scale(1.8);
            filter: saturate(2) brightness(2.5);
          }
          58% { 
            transform: rotate(208deg) scale(0.2);
            opacity: 0.1;
          }
          65% { 
            transform: rotate(234deg) scale(1);
            opacity: 1;
            filter: saturate(1) brightness(1);
          }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbit5 {
          0% { transform: rotate(0deg); }
          70% { transform: rotate(-252deg); }
          /* Collision point at 75% */
          75% { 
            transform: rotate(-270deg) scale(2.2);
            filter: hue-rotate(45deg) brightness(3);
          }
          78% { 
            transform: rotate(-281deg) scale(0.05);
            opacity: 0;
          }
          85% { 
            transform: rotate(-306deg) scale(1);
            opacity: 1;
            filter: hue-rotate(0deg) brightness(1);
          }
          100% { transform: rotate(-360deg); }
        }

        @keyframes orbit6 {
          0% { transform: rotate(0deg); }
          85% { transform: rotate(306deg); }
          /* Collision point at 88% */
          88% { 
            transform: rotate(317deg) scale(2.5);
            filter: contrast(2) brightness(4);
          }
          91% { 
            transform: rotate(328deg) scale(0.1);
            opacity: 0;
          }
          95% { 
            transform: rotate(342deg) scale(1);
            opacity: 1;
            filter: contrast(1) brightness(1);
          }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbitElliptical {
          0% { transform: rotate(0deg) scaleX(1) scaleY(1); }
          22% { transform: rotate(79deg) scaleX(1.2) scaleY(0.9); }
          /* Collision point at 25% */
          25% { 
            transform: rotate(90deg) scaleX(1.8) scaleY(0.5) scale(1.5);
            filter: blur(3px) brightness(5);
          }
          28% { 
            transform: rotate(101deg) scaleX(0.5) scaleY(0.2) scale(0.2);
            opacity: 0.1;
          }
          35% { 
            transform: rotate(126deg) scaleX(1.3) scaleY(0.8) scale(1);
            opacity: 1;
            filter: blur(0) brightness(1);
          }
          50% { transform: rotate(180deg) scaleX(1) scaleY(1); }
          75% { transform: rotate(270deg) scaleX(0.8) scaleY(1.3); }
          100% { transform: rotate(360deg) scaleX(1) scaleY(1); }
        }

        /* Click-triggered Burst Animations */
        @keyframes clickBurst {
          0% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(3);
            opacity: 0.8;
            filter: brightness(5) saturate(2);
          }
          100% { 
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes explosionBurst {
          0% { 
            transform: scale(1);
            opacity: 0;
          }
          20% { 
            transform: scale(2);
            opacity: 1;
          }
          50% { 
            transform: scale(4);
            opacity: 0.8;
          }
          100% { 
            transform: scale(8);
            opacity: 0;
          }
        }

        @keyframes shockwaveExpansion {
          0% { 
            transform: scale(1);
            opacity: 1;
            border-width: 3px;
          }
          50% { 
            transform: scale(5);
            opacity: 0.6;
            border-width: 2px;
          }
          100% { 
            transform: scale(10);
            opacity: 0;
            border-width: 0;
          }
        }

        @keyframes particleSpray1 {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(-30px, -20px) scale(0);
            opacity: 0;
          }
        }

        @keyframes particleSpray2 {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(25px, -35px) scale(0);
            opacity: 0;
          }
        }

        @keyframes particleSpray3 {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(-15px, 30px) scale(0);
            opacity: 0;
          }
        }

        @keyframes particleSpray4 {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(35px, 15px) scale(0);
            opacity: 0;
          }
        }

        /* Collision Ball Hover Effects */
        .collision-ball:hover {
          transform: scale(1.25) !important;
          filter: brightness(1.5) saturate(1.3) drop-shadow(0 0 8px hsl(var(--primary)));
          cursor: pointer;
        }

        .collision-ball:active {
          transform: scale(0.9) !important;
        }

        /* Chain Reaction Effect */
        @keyframes chainReaction {
          0% { 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: scale(2);
            filter: brightness(3) blur(2px);
          }
          100% { 
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;