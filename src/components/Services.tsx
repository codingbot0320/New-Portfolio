import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Brush, Globe, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "React • TypeScript • Next.js",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design", 
      subtitle: "Figma • Prototyping • Research",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Product Design",
      subtitle: "Strategy • Wireframes • Testing",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Visual Branding",
      subtitle: "Logos • Brand Guide • Assets",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Business Management",
      subtitle: "Strategy • Solutions • Leadership",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance",
      subtitle: "Speed • SEO • Optimization",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Creating immersive experiences that makes a difference
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group glass-card border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary font-medium">
                  {service.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My <span className="gradient-text">Work Process</span></h3>
            <p className="text-lg text-text-secondary">A structured approach to deliver exceptional results</p>
          </div>
          
          

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and visual concepts" },
              { step: "03", title: "Development", description: "Building with modern technologies" },
              { step: "04", title: "Delivery", description: "Testing, optimization, and launch" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-text-secondary">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;