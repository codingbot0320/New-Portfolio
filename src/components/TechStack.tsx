import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
      category: "Proficient",
      description: "Technologies I use daily and am highly experienced with",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🟦" },
        { name: "JavaScript", icon: "💛" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Figma", icon: "🎨" },
        { name: "Git", icon: "📝" }
      ]
    },
    {
      category: "Familiar", 
      description: "Technologies I've worked with and continue to learn",
      technologies: [
        { name: "Next.js", icon: "▲" },
        { name: "Vue.js", icon: "💚" },
        { name: "Python", icon: "🐍" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Firebase", icon: "🔥" },
        { name: "Adobe XD", icon: "🔷" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "GraphQL", icon: "📊" }
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
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${categoryIndex === 0 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500'}`}></div>
                  <h3 className="text-2xl font-bold gradient-text">{category.category}</h3>
                </div>
                <p className="text-sm text-text-secondary mb-6">{category.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-foreground font-medium text-sm">{tech.name}</span>
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