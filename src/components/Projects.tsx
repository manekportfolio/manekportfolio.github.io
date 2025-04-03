
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Product Analytics Dashboard",
      description: "Led the development of a comprehensive analytics dashboard that provided real-time insights into user behavior and product performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Product Management", "Data Visualization", "UX Design"],
      role: "Product Manager",
      githubLink: "#",
      liveLink: "#/project"
    },
    {
      title: "E-Commerce Platform",
      description: "Architected and developed a scalable e-commerce platform with seamless payment integration and inventory management system.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Software Development", "Full-Stack", "Architecture"],
      role: "Lead Developer",
      githubLink: "#",
      liveLink: "#/project"
    },
    {
      title: "Mobile App Redesign",
      description: "Led a cross-functional team to redesign a mobile application, resulting in a 40% increase in user engagement and a 25% increase in conversion rate.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Product Strategy", "UX/UI", "Mobile"],
      role: "Product Manager",
      githubLink: "#",
      liveLink: "#/project"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of my work that demonstrates my experience in both software development and product management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="ml-2 text-xs font-normal">
                    {project.role}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
