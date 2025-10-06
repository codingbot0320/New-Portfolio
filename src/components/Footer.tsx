import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram, ChevronDown } from "lucide-react";

const Footer = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "https://github.com/codingbot0320" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://www.linkedin.com/in/sujal-fuldevare-aa22912a9" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", link: "https://www.instagram.com/sujal_0320/" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", link: "mailto:sujalfuldevare1531@gmail.com" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" }
  ];

  const services = ["Web Development", "UI/UX Design", "Product Design", "Digital Art"];

  return (
    <footer className="relative bg-navy-light/50 border-t border-white/10">
      <div className="container-custom section-padding px-4 sm:px-0">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              <span className="gradient-text">Sujal Fuldevare</span>
            </h3>
            <p className="text-text-secondary mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Freelance web developer and visual designer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (collapsible on mobile) */}
          <div>
            <h4
              className="flex justify-between items-center text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-foreground cursor-pointer sm:cursor-auto"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
            >
              Quick Links
              <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${showQuickLinks ? "rotate-180" : ""}`} />
            </h4>
            <ul
              className={`text-text-secondary text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                showQuickLinks ? "max-h-64" : "max-h-0 sm:max-h-full"
              }`}
            >
              {quickLinks.map((link, index) => (
                <li key={index} className="py-1">
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (collapsible on mobile) */}
          <div>
            <h4
              className="flex justify-between items-center text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-foreground cursor-pointer sm:cursor-auto"
              onClick={() => setShowServices(!showServices)}
            >
              Services
              <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${showServices ? "rotate-180" : ""}`} />
            </h4>
            <ul
              className={`text-text-secondary text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                showServices ? "max-h-64" : "max-h-0 sm:max-h-full"
              }`}
            >
              {services.map((service, index) => (
                <li key={index} className="py-1">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-6 sm:mb-8 p-6 sm:p-8 glass-card rounded-xl sm:rounded-2xl">
          <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base max-w-xl mx-auto">
            Ready to take your project to the next level? I'm here to help you create exceptional digital experiences that make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="btn-hero text-sm sm:text-lg"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="btn-outline text-sm sm:text-lg"
              size="lg"
              onClick={() => window.open('https://calendly.com/sujalfuldevare1531', '_blank')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-white/10 text-sm sm:text-base">
          <div className="flex items-center space-x-2 text-text-secondary mb-2 sm:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Sujal Fuldevare</span>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <Button
              onClick={scrollToTop}
              size="sm"
              className="btn-hero p-2"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Availability Badge */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
        <Badge className="bg-green-500/10 text-green-400 border-green-400/20">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Available for Work
        </Badge>
      </div>
    </footer>
  );
};

export default Footer;
