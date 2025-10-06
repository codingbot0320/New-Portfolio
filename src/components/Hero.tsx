import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingTexts = [
    "Web Developer",
    "UI/UX Designer", 
    "Product Developer",
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
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Hero Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
              <span className="text-foreground">Sujal</span>{" "}
              <span className="gradient-text">Fuldevare</span>
            </h1>
            
            {/* Typing Animation */}
            <div className="h-16 md:h-20 mb-8 fade-in-delay-1">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-secondary">
                I design & build as a{" "}
                <span className="text-primary typing font-semibold">
                  {displayText}
                </span>
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl lg:max-w-none mb-12 fade-in-delay-2">
              Transforming ideas into stunning digital realities. I specialize in creating 
                responsive websites, intuitive user interfaces, and engaging digital experiences 
                that help businesses thrive in the digital age.
            </p>


  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 lg:mb-0">
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
      View My Work
    </Button>
  </div>
</div>

          {/* Right Column - Photo */}
<div className="flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
  <div className="relative">
    <img 
      src="/lovable-uploads/WhatsApp_Image_2025-09-22.jpg.jpg" 
      alt="Sujal Fuldevare - Portfolio Photo" 
      className="
        w-56 sm:w-64 md:w-72 lg:w-80 
        h-auto 
        object-cover 
        rounded-2xl 
        transform 
        rotate-0 sm:rotate-3 lg:rotate-6 
        shadow-2xl 
        fade-in-delay-1
      "
    />
  </div>
</div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-2">
          <div className="flex flex-col items-center">
            <p className="text-text-muted text-sm mb-2">Scroll to explore</p>
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;