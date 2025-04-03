
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            My journey from software development to product management has equipped me with a unique perspective
            on building products that users love and developers can efficiently implement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Developer Background</h3>
                  <p className="text-muted-foreground">
                    With several years of experience in software development, I've built complex applications
                    across various technologies and platforms. This technical foundation helps me understand
                    feasibility and collaborate effectively with engineering teams.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Full-stack development expertise</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>System architecture and design experience</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Performance optimization specialist</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product Leadership</h3>
                  <p className="text-muted-foreground">
                    As a product manager, I focus on understanding user needs and translating them into
                    product requirements. I use data-driven approaches to prioritize features and ensure
                    we're building products that delight users and meet business goals.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>User research and persona development</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Product roadmap planning and execution</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Stakeholder management and communication</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground mb-4">
            I began my career as a software developer, diving deep into code and building complex systems. As I worked on various projects,
            I became increasingly interested in the "why" behind the products we were building, not just the "how."
          </p>
          <p className="text-muted-foreground mb-4">
            This curiosity led me to product management, where I could leverage my technical knowledge while focusing on user needs,
            business objectives, and strategic planning. The transition has allowed me to speak both languages — translating business requirements
            into technical specifications and helping non-technical stakeholders understand technical constraints.
          </p>
          <p className="text-muted-foreground">
            Today, I combine these dual perspectives to create products that are both technically sound and user-focused.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
