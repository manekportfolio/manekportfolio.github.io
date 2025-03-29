
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mail, MessageSquare, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "amnk.459@gmail.com",
      link: "mailto:amnk.459@gmail.com"
    },
    {
      icon: <Linkedin  className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Aishwarya Manek",
      link: "https://www.linkedin.com/in/aishwarya-manek/"
    }
    // {
    //   icon: <MapPin className="h-5 w-5" />,
    //   title: "Location",
    //   value: "India",
    // }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal className="max-w-md mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/5 rounded-full mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? Reach out and let's start a conversation.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
