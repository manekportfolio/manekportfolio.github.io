
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <a 
          href="#" 
          className="text-xl font-semibold text-foreground"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Dev<span className="text-primary">2</span>Product
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Experience
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
          >
            Experience
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 w-full justify-center"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
