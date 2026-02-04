import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-secondary to-slate rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Ready to Build{' '}
              <span className="text-primary">Sustainably?</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Get a free quote today and join the green building revolution. 
              Our team is ready to help you make the switch to eco-friendly construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="white" size="xl">
                Contact Our Team
              </Button>
            </div>
            
            {/* Trust Note */}
            <p className="text-secondary-foreground/60 text-sm mt-8">
              ✓ Free samples available &nbsp; ✓ No commitment required &nbsp; ✓ Response within 24 hours
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
