import { AnimatedSection } from '@/components/AnimatedSection';
import { Package, Scissors, Flame, Box, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Collection & Preparation',
    description: 'We collect and clean plastic waste from communities',
    step: 1,
  },
  {
    icon: Scissors,
    title: 'Processing',
    description: 'Plastic is cut into small pieces and prepared for melting',
    step: 2,
  },
  {
    icon: Flame,
    title: 'Melting & Mixing',
    description: 'Controlled heating (170-200°C) + sand mixture (70% sand, 30% plastic)',
    step: 3,
  },
  {
    icon: Box,
    title: 'Molding',
    description: 'Hot mixture is poured into molds and pressed to remove air',
    step: 4,
  },
  {
    icon: CheckCircle,
    title: 'Quality Control',
    description: 'Each brick is tested for strength, durability, and environmental safety',
    step: 5,
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From waste to wonder—a transparent, efficient process that creates quality products
          </p>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-lg flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-card rounded-xl p-6 shadow-sm flex-1 mb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
