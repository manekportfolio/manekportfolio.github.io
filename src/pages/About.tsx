import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
};

export default AboutPage;
