import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, Users, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Google UX Design Certificate",
      issuer: "Google Career Certificates",
      date: "2023",
      type: "certification",
      icon: <Award className="w-8 h-8" />,
      description: "Comprehensive program covering user experience research, design, and prototyping",
      credentialId: "GUXD-2023-SF-001",
      verifyLink: "https://coursera.org/verify/google-ux-certificate",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      id: 2,
      title: "Hackathon Winner - Best UI/UX",
      issuer: "SRM TechFest 2023",
      date: "March 2023",
      type: "award",
      icon: <Trophy className="w-8 h-8" />,
      description: "Won first place for innovative user interface design in 48-hour hackathon",
      credentialId: "SRM-HCK-2023-001",
      verifyLink: "#",
      skills: ["Rapid Prototyping", "Team Leadership", "Design Thinking"]
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      type: "certification",
      icon: <Medal className="w-8 h-8" />,
      description: "Advanced React development patterns, hooks, and performance optimization",
      credentialId: "META-REACT-2023-SF",
      verifyLink: "https://coursera.org/verify/meta-react-certificate",
      skills: ["React", "JavaScript", "Component Architecture", "State Management"]
    },
    {
      id: 4,
      title: "Freelancer of the Month",
      issuer: "Upwork",
      date: "August 2023",
      type: "recognition",
      icon: <Star className="w-8 h-8" />,
      description: "Recognized for exceptional client satisfaction and project delivery",
      credentialId: "UW-FOM-08-2023",
      verifyLink: "#",
      skills: ["Client Communication", "Project Management", "Quality Delivery"]
    },
    {
      id: 5,
      title: "CSS Design Awards - Site of the Day",
      issuer: "CSS Design Awards",
      date: "June 2023",
      type: "award",
      icon: <Trophy className="w-8 h-8" />,
      description: "E-commerce platform design recognized for innovation and usability",
      credentialId: "CSSDA-SOTD-062023",
      verifyLink: "https://cssdesignawards.com/sites/ecommerce-platform",
      skills: ["CSS Animation", "Responsive Design", "User Experience"]
    },
    {
      id: 6,
      title: "Top 10 Young Developers",
      issuer: "DevCommunity India",
      date: "2023",
      type: "recognition",
      icon: <Users className="w-8 h-8" />,
      description: "Featured in annual list of promising young developers in India",
      credentialId: "DCI-TOP10-2023",
      verifyLink: "#",
      skills: ["Full-Stack Development", "Innovation", "Community Impact"]
    }
  ];

  const certifications = [
    { name: "Google UX Design", progress: 100, color: "bg-blue-500" },
    { name: "Meta React Developer", progress: 100, color: "bg-blue-600" },
    { name: "AWS Cloud Practitioner", progress: 85, color: "bg-orange-500" },
    { name: "Adobe Certified Expert", progress: 90, color: "bg-red-500" }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'certification': return <Award className="w-5 h-5" />;
      case 'award': return <Trophy className="w-5 h-5" />;
      case 'recognition': return <Star className="w-5 h-5" />;
      default: return <Medal className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification': return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
      case 'award': return 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20';
      case 'recognition': return 'bg-purple-500/10 text-purple-400 border-purple-400/20';
      default: return 'bg-green-500/10 text-green-400 border-green-400/20';
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Recognition for dedication to excellence in web development and design.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.slice(0, 3).map((achievement, index) => (
            <Card 
              key={achievement.id} 
              className={`glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group h-full fade-in-delay-${(index % 3) + 1}`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <Badge className={getTypeColor(achievement.type)}>
                      {getTypeIcon(achievement.type)}
                      <span className="ml-1 capitalize">{achievement.type}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center text-text-muted text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {achievement.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-primary/80 text-sm mb-3 font-medium">
                    {achievement.issuer}
                  </p>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {achievement.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <p className="text-xs text-text-muted">
                    ID: {achievement.credentialId}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary text-xs"
                    onClick={() => window.open(achievement.verifyLink, '_blank')}
                  >
                    Verify
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Progress */}
        <div className="fade-in-delay-2">
          <h3 className="text-2xl font-bold text-center mb-8">
            Current <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{cert.name}</h4>
                  <span className="text-text-secondary text-sm">{cert.progress}%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${cert.color} transition-all duration-1000 rounded-full`}
                    style={{ width: `${cert.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-delay-2">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 gradient-text">
              Committed to Excellence
            </h4>
            <p className="text-text-secondary mb-6 leading-relaxed">
              These achievements represent my commitment to continuous learning and delivering 
              high-quality work. I believe in staying updated with industry standards and 
              best practices to provide the best value to my clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                View All Certificates
              </Button>
              <Button variant="outline" className="btn-outline">
                Download Portfolio PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;