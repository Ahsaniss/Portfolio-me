import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Smartphone, 
  Database, 
  Globe, 
  Settings,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "TypeScript", "HTML5", "CSS3", "SCSS/SASS", "Tailwind CSS", "Bootstrap", "Ant Design", "Chakra UI", "Next.js"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Python", "C#", "Java", "REST APIs", "GraphQL", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Flutter", "Dart", "iOS Development", "Android Development", "Cross-platform", "Expo"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Gemini AI", "Machine Learning", "Data Science", "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "NLP"],
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "Linux", "VS Code", "Webpack"],
    },
    {
      title: "Project Management",
      icon: <Briefcase className="h-6 w-6" />,
      skills: ["Agile", "Scrum", "Team Leadership", "Client Management", "Timeline Planning", "Resource Allocation", "Risk Management"],
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Punjabi", level: "Native" }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Animated Ribbon Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 overflow-hidden">
        {/* Main Ribbon */}
        <div 
          className="absolute top-0 h-2 bg-primary"
          style={{
            width: '200%',
            animation: 'ribbonFlow 8s ease-in-out infinite'
          }}
        />
        
        {/* Ribbon Shimmer Effect */}
        <div 
          className="absolute top-0 h-2 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          style={{
            animation: 'ribbonShimmer 3s ease-in-out infinite'
          }}
        />
        
        {/* Ribbon Particles */}
        <div className="absolute top-0 w-full h-2">
          <div 
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              top: '2px',
              animation: 'ribbonParticle1 4s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
            style={{
              top: '1px',
              animation: 'ribbonParticle2 5s ease-in-out infinite 1s'
            }}
          />
          <div 
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              top: '3px',
              animation: 'ribbonParticle3 6s ease-in-out infinite 2s'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-primary">04.</span> Skills & Expertise
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and methodologies 
              that I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/30 hover:bg-card/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-primary/20">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-primary/20 group-hover:bg-primary group-hover:w-20 transition-all duration-500 mt-2" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/15 hover:scale-105 transition-all duration-300 font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className="bg-card/50 border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/15 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <div key={index} className="flex justify-between items-center group/item">
                      <span className="text-foreground group-hover/item:text-primary transition-colors duration-300">
                        {language.name}
                      </span>
                      <Badge 
                        variant="outline" 
                        className="border-primary/30 text-primary group-hover/item:border-primary/60 group-hover/item:bg-primary/10 transition-all duration-300"
                      >
                        {language.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications & Achievements */}
            <Card className="bg-card/50 border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/15 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 group/item">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover/item:scale-125 group-hover/item:bg-primary/80 transition-all duration-300" />
                    <div>
                      <p className="text-foreground font-medium group-hover/item:text-primary transition-colors duration-300">
                        Academic Excellence
                      </p>
                      <p className="text-sm text-muted-foreground">GPA: 3.8/4.0 at GCU Faisalabad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group/item">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover/item:scale-125 group-hover/item:bg-primary/80 transition-all duration-300" />
                    <div>
                      <p className="text-foreground font-medium group-hover/item:text-primary transition-colors duration-300">
                        Client Satisfaction
                      </p>
                      <p className="text-sm text-muted-foreground">98% client satisfaction rate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group/item">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover/item:scale-125 group-hover/item:bg-primary/80 transition-all duration-300" />
                    <div>
                      <p className="text-foreground font-medium group-hover:item:text-primary transition-colors duration-300">
                        Student Placement
                      </p>
                      <p className="text-sm text-muted-foreground">95% student placement rate as trainer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group/item">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:item:scale-125 group-hover:item:bg-primary/80 transition-all duration-300" />
                    <div>
                      <p className="text-foreground font-medium group-hover:item:text-primary transition-colors duration-300">
                        Project Success
                      </p>
                      <p className="text-sm text-muted-foreground">15+ successful projects delivered</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Ribbon Animation Styles */}
      <style>{`
        @keyframes ribbonFlow {
          0% {
            transform: translateX(-100%);
            opacity: 0.3;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
            opacity: 0.3;
          }
        }

        @keyframes ribbonShimmer {
          0% {
            left: -128px;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes ribbonParticle1 {
          0% {
            left: -10px;
            opacity: 0;
            transform: scale(0);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            left: calc(100% + 10px);
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes ribbonParticle2 {
          0% {
            left: -15px;
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          25% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          75% {
            opacity: 1;
            transform: scale(1) rotate(360deg);
          }
          100% {
            left: calc(100% + 15px);
            opacity: 0;
            transform: scale(0) rotate(540deg);
          }
        }

        @keyframes ribbonParticle3 {
          0% {
            left: -8px;
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          30% {
            opacity: 1;
            transform: scale(1) translateY(-2px);
          }
          70% {
            opacity: 1;
            transform: scale(1) translateY(2px);
          }
          100% {
            left: calc(100% + 8px);
            opacity: 0;
            transform: scale(0) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;