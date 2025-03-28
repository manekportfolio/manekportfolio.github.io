
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ScrollReveal from '@/components/ScrollReveal';

// This will be expanded with actual project data in the future
const projectsData = [
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    description: "Led a complete redesign of the customer journey, resulting in a 35% increase in conversion rates and 42% reduction in cart abandonment.",
    fullDescription: `
      This project involved a comprehensive redesign of an e-commerce platform's customer journey.
      
      More details will be added here.
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Product Strategy", "UX Design", "A/B Testing"],
    link: "https://example.com/project",
    github: "https://github.com/username/project"
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-custom section-padding">
          <ScrollReveal>
            <Link to="/#projects">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
            <Card>
              <CardContent className="pt-6">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <p>The project you're looking for doesn't exist or has been removed.</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom section-padding">
        <ScrollReveal>
          <Link to="/#projects">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{project.title}</h1>
        </ScrollReveal>
        
        <ScrollReveal className="mb-10" delay={300}>
          <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal className="md:col-span-2" delay={400}>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <h2 className="text-xl font-bold mb-4">Project Details</h2>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{project.fullDescription}</p>
                </div>
                
                {(project.link || project.github) && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground shadow transition-all hover:bg-primary/90"
                      >
                        View Live <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground shadow-sm transition-all"
                      >
                        GitHub <Github className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Project Info</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-block py-1 px-2 text-xs font-medium bg-secondary rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
