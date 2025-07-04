import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Freelance Developer",
      position: "Full-Stack Developer & Project Manager",
      duration: "2022 - Present",
      location: "Remote",
      description: [
        "Led development teams in creating large-scale web and mobile applications using MERN Stack",
        "Specialized in React Native for cross-platform mobile development",
        "Implemented AI chatbot solutions using Gemini AI for various client projects",
        "Managed project timelines, resources, and client communications",
        "Delivered 15+ successful projects with 98% client satisfaction rate"
      ],
      technologies: ["React.js", "Node.js", "React Native", "MongoDB", "Gemini AI", "Project Management"]
    },
    {
      company: "GCU Faisalabad",
      position: "Software Engineering Student & Research Assistant",
      duration: "2022-26 - Present",
      location: "Faisalabad, Pakistan",
      description: [
        "Pursuing BSc in Software Engineering with focus on AI and Machine Learning",
        "Conducting research in Generative AI and its applications",
        "Teaching assistant for programming fundamentals courses",
        "Leading student development teams in hackathons and coding competitions",
        "Maintaining a GPA of 3.25/4.0 with academic excellence"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Academic Research", "C#", "Java"]
    },
    {
      company: "Tech Training Institute",
      position: "Software Development Trainer",
      duration: "2023 - Present",
      location: "Faisalabad, Pakistan",
      description: [
        "Training students and professionals in modern web development technologies",
        "Developed comprehensive curriculum for MERN Stack development",
        "Conducted workshops on AI/ML integration in web applications",
        "Mentored 50+ students in their programming journey",
        "Achieved 95% student placement rate in tech companies"
      ],
      technologies: ["Teaching", "Curriculum Development", "MERN Stack", "AI/ML", "Mentoring"]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Bouncing Ball Animation */}
      <div className="absolute top-0 left-0 w-full h-20 pointer-events-none z-20">
        <div 
          className="absolute w-4 h-4 bg-primary rounded-full shadow-lg"
          style={{
            animation: 'bouncingBall 8s ease-in-out infinite',
            top: '10px'
          }}
        />
        {/* Ball shadow */}
        <div 
          className="absolute w-3 h-1 bg-primary/30 rounded-full blur-sm"
          style={{
            animation: 'ballShadow 8s ease-in-out infinite',
            top: '25px'
          }}
        />
      </div>

      {/* Top Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="topWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* First Wave Layer */}
          <path
            d="M0,0 Q150,60 300,40 T600,20 T900,50 T1200,30 L1200,120 L0,120 Z"
            fill="url(#topWaveGrad)"
            className="animate-pulse"
            style={{
              animation: 'waveFloat 6s ease-in-out infinite'
            }}
          />
          
          {/* Second Wave Layer */}
          <path
            d="M0,10 Q200,80 400,60 T800,40 T1200,70 L1200,120 L0,120 Z"
            fill="url(#topWave2)"
            style={{
              animation: 'waveFloat 8s ease-in-out infinite reverse'
            }}
          />
          
          {/* Background Layer */}
          <path
            d="M0,30 Q150,90 300,70 T600,50 T900,80 T1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-primary">02.</span> Where I've Worked
            </h2>
            <div className="w-20 h-0.5 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tab navigation */}
            <div className="lg:col-span-1">
              <div className="flex lg:flex-col gap-2">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`p-4 text-left border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 transition-all duration-300 ${
                      activeTab === index
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <div className="text-sm font-medium">{exp.company}</div>
                    <div className="text-xs opacity-70">{exp.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {experiences[activeTab].position}
                      </h3>
                      <p className="text-muted-foreground">
                        {experiences[activeTab].company} • {experiences[activeTab].location}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {experiences[activeTab].duration}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {experiences[activeTab].description.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[activeTab].technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bottomWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="bottomWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Background Layer */}
          <path
            d="M0,90 Q150,30 300,50 T600,70 T900,40 T1200,60 L1200,0 L0,0 Z"
            fill="hsl(var(--background))"
            opacity="0.9"
          />
          
          {/* First Wave Layer */}
          <path
            d="M0,120 Q150,60 300,80 T600,100 T900,70 T1200,90 L1200,0 L0,0 Z"
            fill="url(#bottomWaveGrad)"
            className="animate-pulse"
            style={{
              animation: 'waveFloat 7s ease-in-out infinite reverse'
            }}
          />
          
          {/* Second Wave Layer */}
          <path
            d="M0,110 Q200,40 400,60 T800,80 T1200,50 L1200,0 L0,0 Z"
            fill="url(#bottomWave2)"
            style={{
              animation: 'waveFloat 9s ease-in-out infinite'
            }}
          />
        </svg>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes waveFloat {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        @keyframes bouncingBall {
          0% {
            left: -20px;
            transform: translateY(0px);
          }
          
          10% {
            transform: translateY(-15px);
          }
          
          20% {
            transform: translateY(0px);
          }
          
          30% {
            transform: translateY(-12px);
          }
          
          40% {
            transform: translateY(0px);
          }
          
          50% {
            left: 50%;
            transform: translateY(-10px);
          }
          
          60% {
            transform: translateY(0px);
          }
          
          70% {
            transform: translateY(-8px);
          }
          
          80% {
            transform: translateY(0px);
          }
          
          90% {
            transform: translateY(-5px);
          }
          
          100% {
            left: calc(100% + 20px);
            transform: translateY(0px);
          }
        }

        @keyframes ballShadow {
          0% {
            left: -20px;
            width: 12px;
            opacity: 0.8;
          }
          
          10%, 30%, 50%, 70%, 90% {
            width: 8px;
            opacity: 0.3;
          }
          
          20%, 40%, 60%, 80% {
            width: 12px;
            opacity: 0.8;
          }
          
          100% {
            left: calc(100% + 20px);
            width: 12px;
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;