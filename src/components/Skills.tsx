
import ScrollReveal from './ScrollReveal';
import { Code, BarChart4, Users, Layers, LineChart, Search } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Full-Stack Development",
        "JavaScript/TypeScript",
        "React & React Native",
        "Node.js & Express",
        "REST API Design",
        "Database Architecture"
      ]
    },
    {
      title: "Product Management",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        "Product Strategy",
        "Roadmap Planning",
        "Feature Prioritization",
        "Market Analysis",
        "Product Lifecycle",
        "Requirements Definition"
      ]
    },
    {
      title: "User Experience",
      icon: <Users className="h-5 w-5" />,
      skills: [
        "User Research",
        "Usability Testing",
        "Journey Mapping",
        "Wireframing",
        "Prototyping",
        "Accessibility Standards"
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart4 className="h-5 w-5" />,
      skills: [
        "Data Analysis",
        "AB Testing",
        "Performance Metrics",
        "User Behavior Analysis",
        "Business Intelligence",
        "SQL & Data Querying"
      ]
    },
    {
      title: "Strategy",
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        "Go-to-Market Strategy",
        "Competitive Analysis",
        "Pricing Models",
        "Business Case Development",
        "Strategic Planning",
        "Stakeholder Management"
      ]
    },
    {
      title: "Research",
      icon: <Search className="h-5 w-5" />,
      skills: [
        "Market Research",
        "Trend Analysis",
        "User Interviews",
        "Survey Design",
        "Competitive Benchmarking",
        "Feature Discovery"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal className="max-w-md mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/5 rounded-full mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & Competencies
          </h2>
          <p className="text-muted-foreground">
            My unique combination of technical expertise and product management skills allows me to bridge the gap between vision and execution.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal 
              key={category.title} 
              className="group" 
              delay={150 * index}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg">{category.title}</h3>
                </div>
                
                <ul className="space-y-2 flex-1">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-primary/10 -z-10" />
    </section>
  );
};

export default Skills;
