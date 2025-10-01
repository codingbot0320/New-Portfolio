import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Palette, Code, Smartphone } from "lucide-react";

// Import project images
import projectResearch from "@/assets/project-Research.png";
import projectBanking from "@/assets/project-banking.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectFoodApp from "@/assets/project-food-app.jpg";
import projectIgym from "@/assets/project-gym.png";
import projectCricket from "@/assets/project-Cricket.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ResearchPortal",
      description: "Designed and developed a web platform for students and researchers to collaborate and publish papers.",
      image: projectResearch,
      category: "web-dev",
      tags: ["Typescript", "Node.js", "MySql", "RazorPay"],
      liveLink: "https://drive.google.com/file/d/1VtAj_7QD8ESMqtfh28lYuvBcw9i5xCmM/view?usp=sharing",
      githubLink: "https://github.com/codingbot0320/ResearchPortal"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "User-friendly mobile banking interface with advanced security features",
      image: projectBanking, 
      category: "product-design",
      tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity package for a tech startup including logo and guidelines",
      image: projectBranding,
      category: "digital-art",
      tags: ["Branding", "Logo Design", "Illustrator", "Brand Guidelines"],
      liveLink: "",
      githubLink: ""
    },
    {
      id: 4,
      title: "GyaanSagar",
      description: "Gamified Learning Platform for Rural Students-Makes learning fun and interactive for rural students, helping them engage beyond textbooks.",
      image: projectDashboard,
      category: "web-dev",
      tags: ["Vite.js", "Node.js", "Supabase", "Typescript"],
      liveLink: "https://drive.google.com/file/d/1ETBXTYRN0OszkYYrYPf6TLbBWonP8oZW/view",
      githubLink: "https://github.com/codingbot0320/GyaanSagar"
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Complete UX/UI design for a food delivery mobile application",
      image: projectFoodApp,
      category: "product-design", 
      tags: ["Figma", "User Research", "Prototyping", "Mobile UX"],
      liveLink: "https://www.figma.com/design/asrmpTJ8cMFvhBqpywaEK3/Untitled?node-id=0-1&t=AESXyTthSH71JQJg-1",
      githubLink: "https://www.figma.com/proto/asrmpTJ8cMFvhBqpywaEK3/Untitled?node-id=3-249&t=AESXyTthSH71JQJg-1"
    },
    {
      id: 6,
      title: "Cricket Scorring Website",
      description: "Interactive digital cricket scorecard with live scoring, over tracking, and player management.",
      image: projectCricket,
      category: "web-dev",
      tags: ["Typescript", "Analysis", "Management", "Frontend"],
      liveLink: "https://cricket-scorecard-lime.vercel.app/",
      githubLink: "https://github.com/codingbot0320/Cricket-Scorecard-"
    },
    {
      id: 7,
      title: "Elite Fitness Branding",
      description: "Elite Fitness is a sleek, responsive website showcasing gym services and trainers.",
      image: projectIgym,
      category: "web-dev",
      tags: ["Typescript", "Tracking", "Management", "Frontend"],
      liveLink: "https://cricket-scorecard-lime.vercel.app/",
      githubLink: "https://github.com/codingbot0320/Elite-Fitness"
    },
   
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: null },
    { id: "web-dev", label: "Web Development", icon: <Code className="w-4 h-4" /> },
    { id: "product-design", label: "Product Design", icon: <Smartphone className="w-4 h-4" /> },
    { id: "digital-art", label: "Digital Art", icon: <Palette className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-navy-light/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore my latest work showcasing expertise in web development, 
            product design, and digital creativity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? "btn-hero" 
                  : "btn-outline"
              } flex items-center gap-2`}
            >
              {filter.icon}
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button 
                      size="sm" 
                      className="btn-hero"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-outline"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <Button 
            className="btn-hero text-lg" 
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;