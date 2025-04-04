import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectPage = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
};

export default ProjectPage;
