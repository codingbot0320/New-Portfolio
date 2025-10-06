import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";

const Footer = () => {
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

  return (
    <footer className="relative bg-navy-light/50 border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Sujal Fuldevare</span>
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Freelance web developer and visual designer passionate about creating 
              exceptional digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Product Design</li>
              <li>Digital Art</li>
            </ul>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mb-8 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Ready to take your project to the next level? I'm here to help you create 
            exceptional digital experiences that make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero text-lg" 
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
              className="btn-outline text-lg" 
              size="lg"
              onClick={() => window.open('https://calendly.com/sujalfuldevare1531', '_blank')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center space-x-2 text-text-secondary mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Sujal Fuldevare</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <Button
              onClick={scrollToTop}
              size="sm"
              className="btn-hero"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Availability Badge */}
      <div className="absolute top-8 right-8">
        <Badge className="bg-green-500/10 text-green-400 border-green-400/20">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Available for Work
        </Badge>
      </div>
    </footer>
  );
};

export default Footer;