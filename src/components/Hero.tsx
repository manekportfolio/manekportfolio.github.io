
import AnimatedText from './AnimatedText';
import ScrollReveal from './ScrollReveal';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <ScrollReveal className="mb-4" delay={200}>
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/5 rounded-full">
              Software Developer & Product Manager
            </span>
          </ScrollReveal>
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">
              <AnimatedText 
                text="Bridging Code and" 
                className="block mb-1" 
                delay={300}
              />
              <AnimatedText 
                text="Product Strategy" 
                className="block text-gradient" 
                delay={600}
              />
            </h1>
            
            <ScrollReveal delay={900}>
              <p className="text-lg text-muted-foreground md:text-xl max-w-xl leading-relaxed">
                From writing elegant code to crafting product visions that solve real problems. 
                I bring a technical foundation to strategic product management.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={1100}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-primary text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <a 
          href="#about" 
          className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-primary/10 bg-primary/5 text-primary"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-primary/5 to-transparent rounded-tr-full blur-3xl" />
    </section>
  );
};

export default Hero;
