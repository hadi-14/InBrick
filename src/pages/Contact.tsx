import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['InBricks Manufacturing', 'Industrial Area, Sector 5', 'Karachi, Sindh, Pakistan'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+92 331 228 8129', '+92 21 1234 5678'],
    href: 'tel:+923312288129',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@inbricks.pk', 'sales@inbricks.pk'],
    href: 'mailto:info@inbricks.pk',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
  },
];

const subjects = [
  'General Inquiry',
  'Bulk Order',
  'Partnership',
  'Technical Support',
  'Careers',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Let's Build Together
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Get in touch for inquiries, quotes, or partnership opportunities
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <div className="space-y-8">
                <AnimatedSection delay={100}>
                  <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary mb-1">{info.title}</h3>
                          {info.lines.map((line, i) => (
                            info.href ? (
                              <a
                                key={i}
                                href={info.href}
                                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-muted-foreground">{line}</p>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Social Links */}
                <AnimatedSection delay={200}>
                  <h3 className="font-semibold text-secondary mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/923312288129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-lime-dark transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 text-accent-foreground" />
                    </a>
                  </div>
                </AnimatedSection>

                {/* Map */}
                <AnimatedSection delay={300}>
                  <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Interactive map coming soon
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Industrial Area, Sector 5, Karachi
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-16 bg-accent">
          <div className="container-custom">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent-foreground">Need Quick Answers?</h3>
                    <p className="text-accent-foreground/80">Chat with us on WhatsApp for instant support</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="white"
                  size="xl"
                >
                  <a href="https://wa.me/923312288129" target="_blank" rel="noopener noreferrer">
                    Start WhatsApp Chat
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
