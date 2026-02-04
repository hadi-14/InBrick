import { AnimatedSection } from '@/components/AnimatedSection';
import { CountUp } from '@/components/CountUp';
import { Recycle, CloudOff, Building, Users } from 'lucide-react';

const stats = [
  {
    icon: Recycle,
    value: 500,
    suffix: '+',
    label: 'Tons of Plastic Recycled',
  },
  {
    icon: CloudOff,
    value: 60,
    suffix: '%',
    label: 'Reduction in CO₂ Emissions',
  },
  {
    icon: Building,
    value: 250000,
    suffix: '+',
    label: 'Bricks Produced',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Communities Served',
  },
];

export const ImpactSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-teal-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Environmental Impact
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Every brick we produce contributes to a cleaner, greener Pakistan
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100} animation="scale-in">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 mx-auto flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
