import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountUp } from '@/components/CountUp';
import { Recycle, Factory, Droplets, TreePine, Award, Target } from 'lucide-react';
import transformationImage from '@/assets/transformation.jpg';

const impactStats = [
  { value: 500, suffix: '+', label: 'Tons Plastic Recycled', icon: Recycle },
  { value: 60, suffix: '%', label: 'Lower CO₂ Emissions', icon: Factory },
  { value: 1000000, suffix: '+', label: 'Bricks Produced', icon: Target },
  { value: 50, suffix: '+', label: 'Communities Impacted', icon: TreePine },
];

const circularEconomySteps = [
  {
    step: 1,
    title: 'Collection',
    description: 'Diverts 40-50% recycled plastic content per brick, addressing pollution at source.',
  },
  {
    step: 2,
    title: 'Processing',
    description: 'Waste is sorted, cleaned, and processed to create raw material for brick production.',
  },
  {
    step: 3,
    title: 'Manufacturing',
    description: 'Streamlined production cycle transforms waste into certified building materials in under 48 hours.',
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Rigorous testing: Compressive strength (3.5+ MPa), Water absorption (<6%), Dimensional accuracy (±2mm).',
  },
  {
    step: 5,
    title: 'Production',
    description: 'Certified to BS EN 771 and ISO 9001 standards, ready for sustainable construction.',
  },
];

const sdgGoals = [
  {
    number: 9,
    title: 'Industry, Innovation & Infrastructure',
    description: 'Building resilient infrastructure through sustainable industrialization',
    color: 'bg-orange-500',
  },
  {
    number: 11,
    title: 'Sustainable Cities & Communities',
    description: 'Making cities inclusive, safe, resilient and sustainable',
    color: 'bg-amber-500',
  },
  {
    number: 12,
    title: 'Responsible Consumption & Production',
    description: 'Ensuring sustainable consumption and production patterns',
    color: 'bg-yellow-600',
  },
  {
    number: 13,
    title: 'Climate Action',
    description: 'Taking urgent action to combat climate change',
    color: 'bg-green-600',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'PSQCA Approved', description: 'Pakistan Standards & Quality Control' },
  { name: 'LEED Compatible', description: 'Green Building Certification Ready' },
  { name: 'Environmental Compliance', description: 'EPA Pakistan Certified' },
];

const Sustainability = () => {
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
                  Building a Circular Economy
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Every brick we create helps heal the planet
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Our Environmental Impact
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Measurable results in our mission to reduce plastic waste
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Plastic Waste Reduction */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                    Plastic Waste Reduction
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Every 1,000 InBricks diverts approximately <span className="text-accent font-bold">250 kg</span> of
                    plastic from landfills and oceans. Our innovative process transforms this environmental
                    burden into valuable construction materials.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Recycle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">Each brick contains 70% recycled plastic waste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Droplets className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">Prevents plastic from entering waterways and oceans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <TreePine className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">Creates green jobs in waste collection</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="relative">
                  <img
                    src={transformationImage}
                    alt="Plastic to brick transformation"
                    className="rounded-xl shadow-xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent rounded-xl" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-lg">From Waste to Walls</p>
                    <p className="text-sm text-white/80">Our transformation process in action</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Carbon Footprint */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Carbon Footprint Comparison
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our production process generates <span className="text-accent font-bold">60% fewer emissions</span> compared
                  to traditional brick kilns
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary">Traditional Brick Kilns</span>
                    <span className="text-muted-foreground">High Emissions</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive/70 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-md ring-2 ring-accent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary">InBricks Production</span>
                    <span className="text-accent font-bold">60% Lower</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Circular Economy */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Our Circular Economy Model
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A sustainable cycle that turns waste into value
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              {circularEconomySteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 100}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      {index < circularEconomySteps.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/30 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* UN SDGs */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                UN Sustainable Development Goals
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Our work aligns with the United Nations' global sustainability agenda
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdgGoals.map((sdg, index) => (
                <AnimatedSection key={sdg.number} delay={index * 100}>
                  <div className="bg-card rounded-xl shadow-md overflow-hidden h-full">
                    <div className={`${sdg.color} text-white p-4 text-center`}>
                      <span className="text-4xl font-bold">SDG {sdg.number}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-secondary mb-2">{sdg.title}</h3>
                      <p className="text-sm text-muted-foreground">{sdg.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Certifications & Compliance
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Meeting the highest standards for quality and environmental responsibility
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.name} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-md text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sustainability;
