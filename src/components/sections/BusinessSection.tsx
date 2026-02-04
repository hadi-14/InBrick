import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Landmark, Heart } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Builders & Contractors',
    description: 'Bulk pricing, reliable supply chain, and technical support for your construction projects.',
    cta: 'Request Contractor Pricing',
    features: ['Bulk discounts', 'Free samples', 'Technical support'],
  },
  {
    icon: Landmark,
    title: 'Government Projects',
    description: 'Compliant with green building initiatives, perfect for low-cost housing programs.',
    cta: 'Discuss Your Project',
    features: ['Policy compliant', 'Large-scale capacity', 'CSR reporting'],
  },
  {
    icon: Heart,
    title: 'NGOs & Development',
    description: 'Special pricing for community development and partnership opportunities.',
    cta: 'Explore Partnership',
    features: ['Special pricing', 'Impact tracking', 'Partnership programs'],
  },
];

export const BusinessSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">For Businesses</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Partner with InBricks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a contractor, government agency, or NGO, we have solutions tailored to your needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <audience.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {audience.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {audience.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group/btn">
                  {audience.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
