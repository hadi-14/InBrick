import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Download, Home, Building2, Fence, Landmark, Heart, FileText } from 'lucide-react';
import ecoBricksImage from '@/assets/eco-bricks-product.jpg';

const products = [
  {
    name: 'Standard Eco-Bricks',
    image: ecoBricksImage,
    dimensions: '9" × 4" × 3" (LxWxH)',
    composition: '70% sand, 30% recycled plastic',
    strength: '1350+ PSI',
    weight: '25% lighter than traditional bricks',
    price: 'Starting from PKR 30 per brick',
    applications: ['Residential walls', 'Commercial buildings', 'Boundary walls'],
    featured: true,
  },
  {
    name: 'Interlocking Eco-Blocks',
    image: ecoBricksImage,
    dimensions: '12" × 6" × 4" (LxWxH)',
    composition: '70% sand, 30% recycled plastic',
    strength: '1500+ PSI',
    weight: '30% lighter than traditional blocks',
    price: 'Starting from PKR 42 per block',
    applications: ['Low-cost housing', 'Fast construction', 'Modular buildings'],
    featured: false,
  },
  {
    name: 'Custom Solutions',
    image: ecoBricksImage,
    dimensions: 'Tailored to your needs',
    composition: 'Custom blend available',
    strength: 'As per specification',
    weight: 'Optimized for project',
    price: 'Contact for enterprise pricing',
    applications: ['Large projects', 'Special requirements', 'Government contracts'],
    featured: false,
  },
];

const applications = [
  { icon: Home, title: 'Residential Housing', description: 'Perfect for homes and apartments' },
  { icon: Building2, title: 'Commercial Buildings', description: 'Offices, shops, and warehouses' },
  { icon: Landmark, title: 'Government Infrastructure', description: 'Public buildings and facilities' },
  { icon: Fence, title: 'Boundary Walls', description: 'Durable and cost-effective fencing' },
  { icon: Heart, title: 'NGO Projects', description: 'Affordable community development' },
  { icon: Home, title: 'Low-Cost Housing', description: 'Making housing accessible to all' },
];

const downloads = [
  { name: 'Product Catalog', description: 'Complete product specifications and pricing', icon: FileText },
  { name: 'Installation Guide', description: 'Step-by-step installation instructions', icon: FileText },
  { name: 'Technical Specifications', description: 'Detailed material safety data', icon: FileText },
  { name: 'Test Certificates', description: 'Strength and durability certifications', icon: FileText },
];

const Products = () => {
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
                  Sustainable Building Solutions
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Premium eco-bricks for every construction project
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Our Product Range
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                High-quality eco-bricks designed for strength, durability, and sustainability
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <AnimatedSection key={product.name} delay={index * 100}>
                  <div className={`bg-card rounded-xl shadow-lg overflow-hidden h-full flex flex-col ${product.featured ? 'ring-2 ring-accent' : ''}`}>
                    {product.featured && (
                      <div className="bg-accent text-accent-foreground text-center py-2 font-semibold text-sm">
                        Most Popular
                      </div>
                    )}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-secondary mb-4">{product.name}</h3>
                      
                      <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="font-medium text-secondary">{product.dimensions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Composition:</span>
                          <span className="font-medium text-secondary">{product.composition}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Strength:</span>
                          <span className="font-medium text-accent">{product.strength}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium text-secondary">{product.weight}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2">Applications:</p>
                        <ul className="space-y-1">
                          {product.applications.map((app) => (
                            <li key={app} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-accent" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <p className="text-lg font-bold text-primary mb-4">{product.price}</p>
                        <Button asChild variant="accent" className="w-full">
                          <Link to="/pricing">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Where InBricks Excel
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Versatile solutions for diverse construction needs
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <AnimatedSection key={app.title} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <app.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Technical Resources
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Download specifications, guides, and certificates
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloads.map((doc, index) => (
                <AnimatedSection key={doc.name} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{doc.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
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
                  Ready to Build Sustainably?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Get in touch for bulk pricing and custom solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/pricing">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="xl">
                    <Link to="/contact">Contact Sales</Link>
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

export default Products;
