import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", level: 95 },
        { name: "TypeScript", icon: "🟦", level: 90 },
        { name: "Next.js", icon: "▲", level: 85 },
        { name: "Tailwind CSS", icon: "🎨", level: 95 },
        { name: "Vue.js", icon: "💚", level: 80 },
        { name: "JavaScript", icon: "💛", level: 95 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express.js", icon: "🚀", level: 80 },
        { name: "Python", icon: "🐍", level: 75 },
        { name: "MongoDB", icon: "🍃", level: 80 },
        { name: "PostgreSQL", icon: "🐘", level: 70 },
        { name: "Firebase", icon: "🔥", level: 85 }
      ]
    },
    {
      category: "Design Tools",
      technologies: [
        { name: "Figma", icon: "🎨", level: 95 },
        { name: "Adobe XD", icon: "🔷", level: 85 },
        { name: "Illustrator", icon: "🎯", level: 80 },
        { name: "Photoshop", icon: "📸", level: 75 },
        { name: "Procreate", icon: "✏️", level: 90 },
        { name: "Framer", icon: "📱", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", icon: "📝", level: 90 },
        { name: "Docker", icon: "🐳", level: 70 },
        { name: "Vercel", icon: "▲", level: 85 },
        { name: "AWS", icon: "☁️", level: 65 },
        { name: "Stripe", icon: "💳", level: 80 },
        { name: "GraphQL", icon: "📊", level: 75 }
      ]
    }
  ];

  const clientLogos = [
    { name: "TechStart Inc", logo: "🚀" },
    { name: "FinTech Solutions", logo: "💰" },
    { name: "Creative Agency", logo: "🎨" },
    { name: "DataFlow Analytics", logo: "📊" },
    { name: "Food Delivery Corp", logo: "🍕" },
    { name: "E-Commerce Plus", logo: "🛒" },
    { name: "Mobile Apps Co", logo: "📱" },
    { name: "Startup Hub", logo: "🌟" }
  ];

  return (
    <section className="section-padding bg-navy-light/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Technologies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Here are the technologies, tools, and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`glass-card border-white/10 hover:border-primary/20 transition-all duration-300 fade-in-delay-${categoryIndex + 1}`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">{category.category}</h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-foreground font-medium">{tech.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-background/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000"
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                        <span className="text-text-secondary text-sm w-8">{tech.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="fade-in-delay-2">
          <h3 className="text-3xl font-bold text-center mb-12">
            Trusted by <span className="gradient-text">Amazing Clients</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <p className="text-xs text-text-secondary group-hover:text-primary transition-colors">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center fade-in-delay-2">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 gradient-text">Always Learning</h4>
            <p className="text-text-secondary leading-relaxed">
              I'm constantly exploring new technologies and staying updated with the latest trends 
              in web development and design. Currently diving deeper into AI integration, 
              Web3 technologies, and advanced animation frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;