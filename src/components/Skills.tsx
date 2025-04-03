
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: "Frontend Development", proficiency: 90 },
    { name: "Backend Development", proficiency: 85 },
    { name: "System Architecture", proficiency: 80 },
    { name: "Database Design", proficiency: 75 },
    { name: "DevOps / CI/CD", proficiency: 70 }
  ];

  const productSkills = [
    { name: "User Research", proficiency: 85 },
    { name: "Product Strategy", proficiency: 90 },
    { name: "Roadmap Planning", proficiency: 85 },
    { name: "Stakeholder Management", proficiency: 80 },
    { name: "Data Analysis", proficiency: 75 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skill Set</h2>
          <p className="text-lg text-muted-foreground">
            My unique background gives me a dual skill set that spans both technical development
            and product management domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-primary/10 p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-primary/10 p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Product Skills
            </h3>
            <div className="space-y-6">
              {productSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Languages</h4>
            <p className="text-sm text-muted-foreground">JavaScript, TypeScript, Python, Java, SQL</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Frameworks</h4>
            <p className="text-sm text-muted-foreground">React, Node.js, Express, Django, Spring Boot</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Tools</h4>
            <p className="text-sm text-muted-foreground">JIRA, Figma, GitHub, Amplitude, Mixpanel</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Methodologies</h4>
            <p className="text-sm text-muted-foreground">Agile, Scrum, Design Thinking, Lean UX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
