import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Briefcase, Award, Download, FileText } from "lucide-react";

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const finalCounters = {
    projects: 50,
    clients: 25,
    experience: 2,
    satisfaction: 100
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(finalCounters.projects * progress),
        clients: Math.floor(finalCounters.clients * progress),
        experience: Math.floor(finalCounters.experience * progress),
        satisfaction: Math.floor(finalCounters.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalCounters);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const downloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // This would be your actual PDF base64 or URL
    link.download = 'Sujal_Fuldevare_Resume.pdf';
    link.click();
  };

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
              <div className="flex flex-wrap gap-3 mb-6">
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
              
              {/* Resume Download */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={downloadResume}
                  className="btn-hero flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-outline flex items-center gap-2"
                  onClick={() => window.open('#portfolio', '_self')}
                >
                  <FileText className="w-4 h-4" />
                  View Portfolio
                </Button>
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

        {/* Animated Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { key: "projects", number: counters.projects, suffix: "+", label: "Projects Completed" },
            { key: "clients", number: counters.clients, suffix: "+", label: "Happy Clients" },
            { key: "experience", number: counters.experience, suffix: "+", label: "Years Experience" },
            { key: "satisfaction", number: counters.satisfaction, suffix: "%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in-delay-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-all duration-300">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;