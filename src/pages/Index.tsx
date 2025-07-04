import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ahsan Raza</title>
        <meta name="description" content="Portfolio of Muhammad Ahsan Raza - AI Engineer, Full-Stack Developer, and Software Engineer specializing in Machine Learning, Generative AI, and Modern Web Development." />
        <meta name="keywords" content="AI Engineer, Machine Learning, Generative AI, Full-Stack Developer, React, Node.js, Python, Software Engineer" />
        
        {/* AI-themed Favicon */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='aiGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='brain' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f0f9ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='22' fill='url(%23aiGrad)'/%3E%3C!-- AI Brain Symbol --%3E%3Cpath d='M35 40 Q35 25 50 25 Q65 25 65 40 Q70 40 70 50 Q70 60 65 60 L60 60 Q60 70 50 70 Q40 70 40 60 L35 60 Q30 60 30 50 Q30 40 35 40 Z' fill='url(%23brain)' stroke='%23ffffff' stroke-width='1.5'/%3E%3C!-- Neural Network Dots --%3E%3Ccircle cx='42' cy='45' r='2' fill='%2300d4ff'/%3E%3Ccircle cx='50' cy='40' r='2' fill='%236366f1'/%3E%3Ccircle cx='58' cy='45' r='2' fill='%23a855f7'/%3E%3Ccircle cx='46' cy='55' r='2' fill='%2300d4ff'/%3E%3Ccircle cx='54' cy='55' r='2' fill='%23a855f7'/%3E%3C!-- Neural Connections --%3E%3Cline x1='42' y1='45' x2='50' y2='40' stroke='%23ffffff' stroke-width='1' opacity='0.7'/%3E%3Cline x1='50' y1='40' x2='58' y2='45' stroke='%23ffffff' stroke-width='1' opacity='0.7'/%3E%3Cline x1='42' y1='45' x2='46' y2='55' stroke='%23ffffff' stroke-width='1' opacity='0.7'/%3E%3Cline x1='58' y1='45' x2='54' y2='55' stroke='%23ffffff' stroke-width='1' opacity='0.7'/%3E%3Cline x1='46' y1='55' x2='54' y2='55' stroke='%23ffffff' stroke-width='1' opacity='0.7'/%3E%3C!-- AI Text --%3E%3Ctext x='50' y='85' font-family='Arial,sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAI%3C/text%3E%3C/svg%3E" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cdefs%3E%3ClinearGradient id='aiGradApple' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='180' height='180' rx='40' fill='url(%23aiGradApple)'/%3E%3Cpath d='M60 70 Q60 45 90 45 Q120 45 120 70 Q130 70 130 85 Q130 100 120 100 L110 100 Q110 120 90 120 Q70 120 70 100 L60 100 Q50 100 50 85 Q50 70 60 70 Z' fill='white' stroke='%23ffffff' stroke-width='2'/%3E%3Ccircle cx='75' cy='80' r='4' fill='%2300d4ff'/%3E%3Ccircle cx='90' cy='70' r='4' fill='%236366f1'/%3E%3Ccircle cx='105' cy='80' r='4' fill='%23a855f7'/%3E%3Ccircle cx='82' cy='95' r='4' fill='%2300d4ff'/%3E%3Ccircle cx='98' cy='95' r='4' fill='%23a855f7'/%3E%3Ctext x='90' y='145' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white' text-anchor='middle'%3EAI%3C/text%3E%3C/svg%3E" />
        
        {/* Additional Meta Tags for AI/Tech Focus */}
        <meta property="og:title" content="Ahsan Raza - AI Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Specializing in AI/ML, Generative AI, and Modern Web Development. Building intelligent solutions with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'%3E%3Cdefs%3E%3ClinearGradient id='ogGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='630' fill='url(%23ogGrad)'/%3E%3Ctext x='600' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EAhsan Raza%3C/text%3E%3Ctext x='600' y='320' font-family='Arial,sans-serif' font-size='30' fill='white' text-anchor='middle'%3EAI Engineer %26 Full-Stack Developer%3C/text%3E%3Ctext x='600' y='400' font-family='Arial,sans-serif' font-size='24' fill='white' text-anchor='middle' opacity='0.9'%3ESpecializing in Machine Learning %26 Generative AI%3C/text%3E%3C/svg%3E" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahsan Raza - AI Engineer" />
        <meta name="twitter:description" content="Building the future with AI and cutting-edge web technologies" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#6366f1" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;