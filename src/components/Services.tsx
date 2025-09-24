import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Brush, Globe, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites with React & TypeScript",
      features: ["React", "TypeScript", "Next.js"],
      color: "text-teal"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design", 
      description: "Beautiful interfaces that users love",
      features: ["Figma", "Prototyping", "User Research"],
      color: "text-purple"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Product Design",
      description: "End-to-end digital product creation",
      features: ["Strategy", "Wireframes", "Testing"],
      color: "text-primary"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Visual Branding",
      description: "Memorable brand identities & assets",
      features: ["Logos", "Brand Guide", "Assets"],
      color: "text-teal-light"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Illustrations",
      description: "Custom artwork & creative visuals",
      features: ["Illustrations", "Icons", "Concepts"],
      color: "text-purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lightning-fast, optimized websites",
      features: ["Speed", "SEO", "Core Vitals"],
      color: "text-primary"
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
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs. From concept to completion, 
            I deliver high-quality work that drives results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card h-full">
              <CardHeader>
                <div className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-text-secondary">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
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