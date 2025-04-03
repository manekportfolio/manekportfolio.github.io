
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1.5">
              Software Developer → Product Manager
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Bridging Code &<br />
              <span className="text-primary">Product Strategy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              I combine technical expertise with product vision to build solutions that users love. 
              With experience in both development and product management, I bring a unique perspective to every project.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-secondary to-background p-1 rounded-lg shadow-lg">
              <div className="aspect-square bg-card rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Developer working on code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
