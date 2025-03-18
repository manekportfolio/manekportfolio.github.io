
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com", 
      label: "Twitter" 
    }
  ];

  return (
    <footer className="py-12 bg-secondary/40 border-t border-border/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="inline-block font-display text-xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Portfolio.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Bridging technical expertise with product vision to create meaningful digital experiences.
            </p>
          </div>
          
          <div className="md:text-center">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:text-right">
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex md:justify-end space-x-3 mb-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              hello@example.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Designed and built with <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
