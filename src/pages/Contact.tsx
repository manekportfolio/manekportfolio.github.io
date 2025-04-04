import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
