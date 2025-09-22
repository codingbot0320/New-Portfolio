import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blogs", label: "Blog" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Floating Circular */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden lg:block ${
        isScrolled ? 'glass-card' : 'bg-background/20'
      } rounded-full px-8 py-4 backdrop-blur-md border border-white/10`}>
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-text-secondary hover:text-primary hover:bg-primary/5'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full ${
            isScrolled ? 'glass-card' : 'bg-background/20'
          } backdrop-blur-md border border-white/10 hover:bg-primary/20`}
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-medium transition-all duration-300 px-8 py-4 rounded-full ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Brand Logo - Fixed Position */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => scrollToSection("hero")}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
            isScrolled ? 'glass-card' : 'bg-background/20'
          } backdrop-blur-md border border-white/10 hover:bg-primary/10`}
        >
          <span className="gradient-text">SF</span>
        </button>
      </div>
    </>
  );
};

export default Navigation;