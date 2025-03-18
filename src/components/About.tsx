
import ScrollReveal from './ScrollReveal';
import { Code, Sparkles, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-primary/10 relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal className="max-w-md mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/5 rounded-full mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground">
            From developing software to leading product strategy, with a deep commitment to sustainability throughout my career.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Sustainability Advocate</h3>
                    <p className="text-xs text-muted-foreground">
                      Award-winning researcher dedicated to developing solutions for climate change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">From Developer to PM</h3>
                    <p className="text-muted-foreground">
                      My journey began as a software developer, where I honed my technical skills and learned to write clean, efficient code. This foundation gave me a deep understanding of what it takes to build great products from the ground up.
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <p className="text-sm text-muted-foreground">
                    The technical expertise I gained allows me to communicate effectively with engineering teams and make informed decisions about product feasibility and implementation.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">Evolution to Product Strategy</h3>
                    <p className="text-muted-foreground">
                      As I grew professionally, I realized my passion for understanding user needs and translating them into product features. The transition to product management was natural, allowing me to leverage my technical background while focusing on strategic vision.
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <p className="text-sm text-muted-foreground">
                    Today, I bridge the gap between business objectives, user experiences, and technical feasibility to create products that truly matter.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">Sustainability Research</h3>
                    <p className="text-muted-foreground">
                      My passion for sustainability led me to complete an award-winning master's thesis on climate change solutions. This research has deeply influenced my approach to product development, where I constantly seek to create technology that has a positive environmental impact.
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <p className="text-sm text-muted-foreground">
                    I believe that technological innovation plays a crucial role in addressing our climate crisis, and I'm committed to developing products that contribute to a more sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full border border-primary/10" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full border border-primary/10" />
    </section>
  );
};

export default About;
