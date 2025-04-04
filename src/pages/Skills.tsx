
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const SkillsPage = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Skills />
      <Footer />
    </main>
  );
};

export default SkillsPage;
