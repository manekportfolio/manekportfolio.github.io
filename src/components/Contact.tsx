
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

          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[150px] resize-y"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={cn(
                      "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-primary text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto",
                      (isSubmitting || submitted) && "opacity-90 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        Message Sent <span className="ml-2">✓</span>
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="absolute top-full left-0 mt-2 text-sm text-green-600 flex items-center">
                      <span className="mr-1">✓</span> Thanks! I'll get back to you soon.
                    </div>
                  )}
                </div>
              </form>
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
