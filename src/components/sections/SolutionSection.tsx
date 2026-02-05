import { AnimatedSection } from '@/components/AnimatedSection';
import { Leaf, PiggyBank, Shield, Droplets } from 'lucide-react';
import transformationImage from '@/assets/transformation.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Each brick uses recycled plastic waste, reducing landfill burden',
  },
  {
    icon: PiggyBank,
    title: 'Cost-Effective',
    description: '30-40% cheaper than conventional bricks (est. PKR 30-42 per brick)',
  },
  {
    icon: Shield,
    title: 'Superior Strength',
    description: 'High compressive strength (1350+ PSI) exceeds traditional bricks (600-800 PSI)',
  },
  {
    icon: Droplets,
    title: 'Water-Resistant',
    description: 'Naturally water-resistant and lightweight for easier transport',
  },
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-teal-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection animation="slide-in-right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-3xl opacity-20 blur-2xl" />
              <img
                src={transformationImage}
                alt="Plastic waste to eco-bricks transformation"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Recycled Content</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Solution</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                InBricks: Engineering a{' '}
                <span className="text-primary">Sustainable</span> Future
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We transform plastic waste into premium construction materials, 
                creating value from what others discard
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
