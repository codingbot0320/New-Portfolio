import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
      content: "Sujal delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "FinTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      content: "Working with Sujal on our mobile banking app design was fantastic. He understood our vision perfectly and created an intuitive, user-friendly interface that our customers love.",
      rating: 5,
      project: "Banking App Design"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      content: "Sujal's brand identity work transformed our startup's image completely. The logo and brand guidelines he created perfectly capture our company's essence and values.",
      rating: 5,
      project: "Brand Identity"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Startup Founder",
      company: "DataFlow Analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "The SaaS dashboard Sujal built for us is incredibly intuitive and powerful. His ability to translate complex data into beautiful, actionable insights is remarkable.",
      rating: 5,
      project: "SaaS Dashboard"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "UX Lead",
      company: "Food Delivery Corp",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=200&q=80",
      content: "Sujal's UX research and design process was thorough and insightful. The food delivery app design he created significantly improved our user engagement and conversion rates.",
      rating: 5,
      project: "Food Delivery App"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Client Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and collaborators say about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-lg text-text-secondary leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-text-secondary">{testimonial.role}</p>
                          <p className="text-sm text-primary">{testimonial.company}</p>
                          <Badge variant="outline" className="mt-1 text-xs border-primary/20 text-primary/80">
                            {testimonial.project}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="btn-outline"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="btn-outline"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-delay-1">
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "100%", label: "Project Success Rate" },
            { number: "25+", label: "Happy Clients" },
            { number: "48h", label: "Average Response Time" }
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

export default Testimonials;