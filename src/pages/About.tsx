import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Leaf, Users, Eye, Shield, Lightbulb } from 'lucide-react';

const comparisonData = [
  { feature: 'Material Source', inbricks: 'Recycled plastic waste + sand', traditional: 'Clay from soil (depletes land)' },
  { feature: 'Cost', inbricks: 'PKR 30-42 per brick', traditional: 'PKR 20-56 per brick' },
  { feature: 'Strength (PSI)', inbricks: '1350+ PSI', traditional: '600-800 PSI' },
  { feature: 'Weight', inbricks: 'Lightweight', traditional: 'Heavy' },
  { feature: 'Water Resistance', inbricks: 'Excellent', traditional: 'Moderate' },
  { feature: 'Carbon Footprint', inbricks: '60% lower', traditional: 'High (kiln emissions)' },
  { feature: 'Environmental Impact', inbricks: 'Reduces plastic waste', traditional: 'Depletes natural resources' },
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision prioritizes environmental health and long-term ecological balance.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    description: 'Continuous R&D for better products and more efficient manufacturing processes.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Supporting waste collectors and creating green jobs across Pakistan.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing for construction-grade materials that exceed industry standards.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open about our processes, impact metrics, and environmental footprint.',
  },
];

const About = () => {
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
                  Our Mission: Building a Greener Pakistan
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Transforming plastic waste into sustainable construction solutions
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  Our Story
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    InBricks was founded with a simple yet powerful vision: to solve Pakistan's dual challenges
                    of plastic pollution and affordable housing. We believe that innovation and sustainability
                    go hand-in-hand. By transforming plastic waste into durable construction materials, we're
                    creating economic value while protecting our environment for future generations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Our journey began with a commitment to research and development, perfecting a production
                    process that balances strength, affordability, and environmental responsibility. We spent
                    countless hours testing different compositions, temperatures, and molding techniques to
                    create a product that not only matches but exceeds traditional brick standards.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, InBricks stands at the forefront of Pakistan's green building revolution. We're
                    not just manufacturing bricks—we're building a movement toward sustainable construction
                    practices that benefit communities, businesses, and the planet.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                What Makes InBricks Unique
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                See how our eco-bricks compare to traditional clay bricks
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold">InBricks Eco-Bricks</th>
                      <th className="px-6 py-4 text-left font-semibold">Traditional Clay Bricks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                      >
                        <td className="px-6 py-4 font-medium text-secondary">{row.feature}</td>
                        <td className="px-6 py-4 text-accent font-medium">{row.inbricks}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 100}>
                  <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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

export default About;
