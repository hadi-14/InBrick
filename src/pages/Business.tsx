import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HardHat, Landmark, Heart, Check, ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';

const targetSegments = [
  {
    icon: HardHat,
    title: 'Builders & Contractors',
    description: 'Scale your projects with sustainable materials at competitive prices',
    benefits: [
      'Bulk pricing discounts up to 15%',
      'Reliable supply chain & on-time delivery',
      'Technical support & training included',
      'Free samples for quality testing',
      'Priority order processing',
    ],
    cta: 'Request Contractor Pricing',
    href: '/contact?type=contractor',
  },
  {
    icon: Landmark,
    title: 'Government Projects',
    description: 'Compliant with green building initiatives and low-cost housing programs',
    benefits: [
      'Government procurement compliant',
      'Low-cost housing program ready',
      'Large-scale project capacity',
      'CSR & sustainability reporting',
      'Tender documentation support',
    ],
    cta: 'Discuss Your Project',
    href: '/contact?type=government',
  },
  {
    icon: Heart,
    title: 'NGOs & Development',
    description: 'Partner with us to build sustainable communities across Pakistan',
    benefits: [
      'Special pricing for community projects',
      'Partnership opportunities',
      'Impact measurement tools',
      'Training for local workers',
      'Co-branding opportunities',
    ],
    cta: 'Explore Partnership',
    href: '/contact?type=ngo',
  },
];

const whyPartner = [
  {
    icon: TrendingUp,
    title: 'Cost Savings',
    description: '30-40% lower material costs compared to traditional bricks, improving your project margins.',
  },
  {
    icon: Building2,
    title: 'Superior Quality',
    description: '1350+ PSI compressive strength exceeds industry standards for reliable construction.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Account managers, technical support, and training to ensure project success.',
  },
];

const caseStudies = [
  {
    title: 'Community Housing Project',
    location: 'Karachi, Sindh',
    bricks: '50,000+',
    savings: '35%',
    description: 'Built affordable housing for 20 families using InBricks eco-bricks.',
  },
  {
    title: 'Commercial Complex',
    location: 'Lahore, Punjab',
    bricks: '100,000+',
    savings: '40%',
    description: 'Modern shopping complex with LEED certification compatibility.',
  },
  {
    title: 'School Construction',
    location: 'Islamabad',
    bricks: '30,000+',
    savings: '32%',
    description: 'NGO-funded school providing education to 500+ students.',
  },
];

const Business = () => {
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
                  Partner with InBricks
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Sustainable solutions for construction professionals
                </p>
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Target Segments */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Solutions for Every Sector
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Tailored offerings for builders, government, and non-profit organizations
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {targetSegments.map((segment, index) => (
                <AnimatedSection key={segment.title} delay={index * 100}>
                  <div className="bg-card rounded-xl shadow-lg p-8 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <segment.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{segment.title}</h3>
                    <p className="text-muted-foreground mb-6">{segment.description}</p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {segment.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="accent" size="lg" className="w-full mt-auto">
                      <Link to={segment.href}>
                        {segment.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-20">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
                  Market Opportunity & Revenue
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection delay={0}>
                  <div className="bg-card p-8 rounded-xl shadow-lg border-l-4 border-primary h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Substantial Market</h3>
                    <p className="text-muted-foreground mb-4">
                      The sustainable building materials market is projected to reach <span className="font-bold text-primary">£235 billion by 2027</span>, growing at 11.2% annually.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-accent mt-1" />
                        <span className="text-sm">Commercial builders seeking cost-effective materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-accent mt-1" />
                        <span className="text-sm">Affordable housing schemes requiring budget solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-accent mt-1" />
                        <span className="text-sm">Government infrastructure with sustainability mandates</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <div className="bg-card p-8 rounded-xl shadow-lg border-l-4 border-accent h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Revenue Model</h3>
                    <p className="text-muted-foreground mb-6">
                      Our business model generates <span className="font-bold text-accent">28-32% gross margins</span> whilst remaining 35% cheaper than conventional alternatives.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <span className="font-semibold block mb-1">Bulk Manufacturing</span>
                        <span className="text-sm text-muted-foreground">Large-volume production enables economies of scale</span>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <span className="font-semibold block mb-1">B2B Distribution</span>
                        <span className="text-sm text-muted-foreground">Direct partnerships with contractors and developers</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Why Partner with InBricks?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Benefits that drive your business forward
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyPartner.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="bg-card p-8 rounded-xl shadow-md text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Real projects delivering real results
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={study.title} delay={index * 100}>
                  <div className="bg-card rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="bg-primary p-6 text-primary-foreground">
                      <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                      <p className="text-primary-foreground/80 text-sm">{study.location}</p>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-6 mb-4">
                        <div>
                          <p className="text-2xl font-bold text-accent">{study.bricks}</p>
                          <p className="text-xs text-muted-foreground">Bricks Used</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{study.savings}</p>
                          <p className="text-xs text-muted-foreground">Cost Savings</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{study.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Projects?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Join hundreds of businesses building sustainably with InBricks
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="xl">
                    <Link to="/contact">Schedule a Call</Link>
                  </Button>
                </div>
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

export default Business;
