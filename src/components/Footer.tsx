
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-semibold">
              Dev<span className="text-primary">2</span>Product
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Bridging the gap between technical expertise and product vision to build exceptional digital experiences.
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-background hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-background hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="bg-background hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center md:text-left text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-primary mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
