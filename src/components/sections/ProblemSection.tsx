import { AnimatedSection } from '@/components/AnimatedSection';
import { Trash2, DollarSign, Factory } from 'lucide-react';

const problems = [
  {
    icon: Trash2,
    title: 'Plastic Pollution Crisis',
    description: 'Pakistan generates 48.5 million tons of waste annually, with 9% being plastic that harms our environment',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: DollarSign,
    title: 'High Construction Costs',
    description: 'Traditional bricks cost PKR 13-56 per piece, making affordable housing difficult for many Pakistanis',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Factory,
    title: 'Carbon Emissions',
    description: 'Traditional brick kilns contribute 40% of construction-related carbon emissions globally',
    color: 'bg-gray-500/10 text-gray-500',
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Challenge</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            The Challenge We're Solving
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pakistan faces critical environmental and housing challenges that demand innovative solutions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                <div className={`w-16 h-16 rounded-xl ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
