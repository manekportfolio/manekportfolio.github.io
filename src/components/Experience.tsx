
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Product Manager",
      period: "2021 - Present",
      description: "Leading product strategy and roadmap development for a SaaS platform with over 50k users. Collaborate with engineering, design, and marketing teams to deliver high-value features.",
      achievements: [
        "Increased user retention by 35% through strategic feature prioritization",
        "Led the launch of a new enterprise offering that generated $2M ARR in first year",
        "Implemented a customer feedback system that improved NPS scores by 20 points"
      ]
    },
    {
      company: "Software Solutions Co.",
      position: "Product Manager",
      period: "2018 - 2021",
      description: "Managed the product development lifecycle for a B2B analytics platform. Conducted user research and translated findings into product requirements.",
      achievements: [
        "Developed product vision and strategy that resulted in 40% YoY growth",
        "Streamlined the development process, reducing time-to-market by 30%",
        "Created and maintained detailed product documentation and specifications"
      ]
    },
    {
      company: "Digital Creations Ltd.",
      position: "Senior Software Developer",
      period: "2015 - 2018",
      description: "Designed and developed full-stack web applications for various clients. Collaborated with product managers to implement new features and improvements.",
      achievements: [
        "Led a team of 5 developers to rebuild the core platform architecture",
        "Implemented CI/CD pipelines that reduced deployment time by 75%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Tech Startup",
      position: "Software Developer",
      period: "2012 - 2015",
      description: "Built and maintained web applications using JavaScript, React, and Node.js. Worked in an agile environment with rapid iteration cycles.",
      achievements: [
        "Developed key features that helped secure Series A funding",
        "Optimized application performance, improving load times by 60%",
        "Contributed to open-source projects and represented the company at tech meetups"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My career progression from software development to product management roles.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-3 mt-6 w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full md:transform md:-translate-x-1/2 z-10"></div>

                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date - visible on mobile, hidden on desktop for even items */}
                  <div className={`mb-4 md:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`inline-block md:block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Card - always visible */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <Card className="border shadow-md">
                      <CardHeader>
                        <CardTitle>{exp.position}</CardTitle>
                        <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
