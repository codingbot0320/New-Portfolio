import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Sparkles, Zap } from "lucide-react";
import mascotDeveloper from "@/assets/mascot-developer.png";
import floatingElements from "@/assets/floating-elements.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingTexts = [
    "Web Developer",
    "Visual Designer", 
    "Product Designer",
    "Digital Artist"
  ];

  useEffect(() => {
    const currentText = typingTexts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, typingTexts]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in">
            <span className="text-foreground">Sujal</span>{" "}
            <span className="gradient-text">Fuldevare</span>
          </h1>
          
          {/* Typing Animation */}
          <div className="h-16 md:h-20 mb-8 fade-in-delay-1">
            <p className="text-2xl md:text-4xl font-medium text-text-secondary">
              I design & build{" "}
              <span className="text-primary typing font-semibold">
                {displayText}
              </span>
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 fade-in-delay-2">
            Helping brands stand out with modern digital solutions. 
            Specializing in responsive websites, UI/UX design, and creative digital art.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-delay-2">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg"
              size="lg"
            >
              Hire Me Now
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              className="btn-outline text-lg"
              size="lg"
            >
              View Portfolio
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-2">
            <div className="flex flex-col items-center">
              <p className="text-text-muted text-sm mb-2">Scroll to explore</p>
              <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mascot */}
      <div className="absolute top-1/4 right-8 lg:right-16 hidden lg:block">
        <div className="relative">
          <img 
            src={mascotDeveloper} 
            alt="Developer Mascot" 
            className="w-32 h-32 xl:w-40 xl:h-40 float opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{animationDelay: '1s'}}
          />
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-32 left-8 lg:left-16 hidden lg:block">
        <div className="glass-card p-4 float" style={{animationDelay: '2s'}}>
          <Code className="w-8 h-8 text-primary mb-2" />
          <p className="text-sm text-text-secondary">Clean Code</p>
        </div>
      </div>

      <div className="absolute bottom-32 left-12 hidden lg:block">
        <div className="glass-card p-4 float" style={{animationDelay: '3s'}}>
          <Palette className="w-8 h-8 text-purple mb-2" />
          <p className="text-sm text-text-secondary">Creative Design</p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={floatingElements} 
          alt="" 
          className="absolute top-10 left-10 w-64 h-64 opacity-20 float"
          style={{animationDelay: '0s'}}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <Zap className="absolute top-2/3 right-1/4 w-6 h-6 text-primary opacity-50 animate-pulse" style={{animationDelay: '3s'}} />
      </div>
    </section>
  );
};

export default Hero;