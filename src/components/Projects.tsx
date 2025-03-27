import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Features",
    description: "Created new features and modernized the customer journey, resulting in a 9.1% increase in conversion rate. Lauched popularity sorting feature which lead to 4.8% increase in average order value.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Product Strategy", "Figma", "A/B Testing"],
    //link: "#"
  },
  {
    id: 2,
    title: "Payments Admin Website",
    description: "Built an administrative website for payments microservices to manage and implement customer support requests, improving operational efficiency by 72%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Backend Development", "Spring Boot", "API Design"],
    //link: "#"
  },
  {
    id: 3,
    title: "Incentivizing sustainability",
    description: "Conducted a regression analysis of ESG scores of firms with the presence of sustainability-related incentives for executives. Developed a new operational model for sustainability performance incentivization.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    tags: ["Sustainability", "Performance Management", "ESG"],
    link: "https://www.ebs.edu/en/awarding-the-srh-social-impact-thesis-awards-2023"
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'dev', label: 'Development' },
  { id: 'product', label: 'Product Management' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal className="max-w-md mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/5 rounded-full mb-3">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my professional work showcasing both technical and product management expertise.
          </p>
        </ScrollReveal>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-secondary/50">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-4 py-2 text-sm rounded-md transition-all",
                  activeCategory === category.id
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              className="group"
              delay={200 * index}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700",
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    )}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block py-1 px-2 text-xs font-medium bg-secondary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={project.link}
                        className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </ScrollReveal>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl -z-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10" />
    </section>
  );
};

export default Projects;
