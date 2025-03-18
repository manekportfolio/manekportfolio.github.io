
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="relative font-display text-xl font-bold tracking-tight z-50"
          aria-label="Home"
        >
          <span className="text-gradient">Portfolio.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="relative z-50 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 transition-all" />
          ) : (
            <Menu className="h-6 w-6 transition-all" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-background z-40 flex items-center justify-center transition-all duration-300 md:hidden',
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          )}
        >
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.name} className="overflow-hidden">
                <a
                  href={link.href}
                  className={cn(
                    'text-2xl font-medium inline-block transition-all duration-300',
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  )}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${navLinks.indexOf(link) * 100}ms` : '0ms' 
                  }}
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
