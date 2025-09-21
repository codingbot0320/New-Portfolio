import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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

    </section>
  );
};

export default Hero;