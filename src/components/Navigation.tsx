import { useState, useEffect } from "react";
import { Home, User, Code, Palette, Mail, BookOpen } from "lucide-react";


import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
          <button
            onClick={() => navigate('/blogs')}
            className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full text-text-secondary hover:text-primary hover:bg-primary/5"
          >
            Blog
          </button>
        </div>
      </nav>

{/* 📱 Mobile Navigation - Centered Curved Glass Navbar */}
<div
  className={`lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-50 
    flex items-center justify-around 
    w-[90%] max-w-sm
    rounded-full border border-white/10 backdrop-blur-xl 
    shadow-md transition-all duration-500 px-3 py-2
    ${isScrolled ? "bg-background/70" : "bg-background/30"}`}
>
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`flex flex-col items-center justify-center text-[10px] transition-all duration-300 ${
        activeSection === item.id
          ? "text-primary scale-105"
          : "text-text-secondary hover:text-primary"
      }`}
    >
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
          activeSection === item.id
            ? "bg-primary/10 shadow-md shadow-primary/30"
            : "hover:bg-primary/10"
        }`}
      >
        {item.id === "hero" && <Home className="w-4 h-4" />}
        {item.id === "about" && <User className="w-4 h-4" />}
        {item.id === "services" && <Code className="w-4 h-4" />}
        {item.id === "portfolio" && <Palette className="w-4 h-4" />}
        {item.id === "contact" && <Mail className="w-4 h-4" />}
      </div>
      <span className="mt-1">{item.label}</span>
    </button>
  ))}

  <button
    onClick={() => navigate("/blogs")}
    className="flex flex-col items-center justify-center text-[10px] text-text-secondary hover:text-primary transition-all duration-300"
  >
    <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10">
      <BookOpen className="w-4 h-4" />
    </div>
    <span className="mt-1">Blog</span>
  </button>
</div>




{/* Brand Logo - Fixed Position (Desktop Only) */}
<div className="hidden lg:block fixed top-6 left-6 z-50">
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