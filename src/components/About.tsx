import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Briefcase, Award, Download, FileText, Coffee, Heart, Zap, MapPin } from "lucide-react";

const About = () => {

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

        {/* Fun Facts & Personality */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Coffee Lover</h3>
              <p className="text-text-secondary text-sm">5+ cups daily fuel my creativity</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Passionate</h3>
              <p className="text-text-secondary text-sm">Code with heart, design with soul</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Learner</h3>
              <p className="text-text-secondary text-sm">Always exploring new technologies</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Based in India</h3>
              <p className="text-text-secondary text-sm">Working globally, thinking locally</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <Card className="glass-card border-white/10 p-6">
                    <h4 className="font-semibold text-primary mb-2">Started Learning</h4>
                    <p className="text-text-secondary text-sm">Discovered my passion for web development and design</p>
                    <span className="text-xs text-text-muted">2021</span>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/50 rounded-full relative z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/50 rounded-full relative z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <Card className="glass-card border-white/10 p-6">
                    <h4 className="font-semibold text-primary mb-2">First Internship</h4>
                    <p className="text-text-secondary text-sm">Joined Cognifyz Technologies as Web Developer Intern</p>
                    <span className="text-xs text-text-muted">2022</span>
                  </Card>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <Card className="glass-card border-white/10 p-6">
                    <h4 className="font-semibold text-primary mb-2">Freelancing Journey</h4>
                    <p className="text-text-secondary text-sm">Started taking on freelance projects and building portfolio</p>
                    <span className="text-xs text-text-muted">2023</span>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/50 rounded-full relative z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/50 rounded-full relative z-10 flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <Card className="glass-card border-white/10 p-6 border-primary/30">
                    <h4 className="font-semibold text-primary mb-2">Present Day</h4>
                    <p className="text-text-secondary text-sm">Building amazing projects and helping brands grow online</p>
                    <span className="text-xs text-text-muted">2024</span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;