import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const technologies = [
    "JavaScript (ES6+)", "TypeScript", "Python", "C#",
    "React.js", "Node.js", "Express.js", "React Native",
    "MongoDB", "Firebase", "HTML5", "CSS3",
    "Git", "REST APIs", "GraphQL", "Machine Learning"
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="text-primary">01.</span> About Me
              </h2>
              <div className="w-20 h-0.5 bg-primary" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Ahsan Raza</span>, currently pursuing a BSc in 
                <span className="text-primary"> Software Engineering</span> at Government College University Faisalabad.
              </p>
              
              <p>
                I thrive on transforming ideas into visually stunning and functional digital experiences. 
                Specializing in <span className="text-primary">front-end development</span>, 
                <span className="text-primary"> e-commerce design</span>, and 
                <span className="text-primary"> AI/ML solutions</span>, I blend technical proficiency 
                with creative flair to craft engaging user-centric applications.
              </p>

              <p>
                My passion lies in seamlessly integrating technology and design to deliver solutions 
                that leave a lasting impact. With expertise spanning from 
                <span className="text-primary"> web development</span> to 
                <span className="text-primary"> machine learning</span> and 
                <span className="text-primary"> AI chatbot development</span>, I'm committed to 
                pushing the boundaries of digital possibilities.
              </p>

              <p>
                I aim to pursue a PhD in the United States to advance in technology research and innovation, 
                particularly in the field of <span className="text-primary">Generative AI</span> and 
                <span className="text-primary"> Machine Learning</span>.
              </p>
            </div>
          </div>

          {/* Right content - Technologies */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Technologies I work with:</h3>
            
            <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Current Focus:</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Generative AI",
                    description: "Exploring cutting-edge AI technologies and applications"
                  },
                  {
                    title: "Full-Stack Development",
                    description: "Building scalable web applications with modern tech stacks"
                  },
                  {
                    title: "Project Management",
                    description: "Leading development teams and managing complex projects"
                  }
                ].map((focus, index) => (
                  <Card key={index} className="bg-secondary/30 border-border/30 hover:bg-secondary/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary text-sm">{focus.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{focus.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;