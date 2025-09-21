import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Studying at SRM Institute - Building strong technical foundations"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      description: "Internships at Cognifyz & Prodigy InfoTech - Real-world expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Skills",
      description: "Full-stack development, UI/UX design, and digital creativity"
    }
  ];

  const strengths = ["Creative Problem Solver", "Tech Enthusiast", "Detail-Oriented", "Client-Focused"];

  return (
    <section id="about" className="section-padding bg-navy-light/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <User className="w-4 h-4 mr-2" />
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting Digital <span className="gradient-text">Experiences</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I'm a passionate freelance web developer and visual designer dedicated to creating 
                impactful digital solutions. With a strong foundation in modern technologies and 
                a keen eye for design, I help businesses and individuals bring their visions to life.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey combines technical expertise with creative thinking, ensuring every 
                project not only functions flawlessly but also tells a compelling visual story.
              </p>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {strengths.map((strength, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 text-sm py-2 px-4"
                  >
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
                      <p className="text-text-secondary">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "25+", label: "Happy Clients" },
            { number: "2+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;