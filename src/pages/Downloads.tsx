import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, FileText, BookOpen, BarChart3, Image, Video, FolderOpen } from 'lucide-react';

const downloadCategories = [
  {
    title: 'Product Documentation',
    icon: FileText,
    items: [
      {
        title: 'Product Catalog 2026',
        description: 'Complete product specifications, dimensions, and pricing information for all InBricks products.',
        size: '2.5 MB',
        format: 'PDF',
      },
      {
        title: 'Technical Specifications Sheet',
        description: 'Detailed material properties, compressive strength test results, and compliance data.',
        size: '1.2 MB',
        format: 'PDF',
      },
      {
        title: 'Material Safety Data Sheet (MSDS)',
        description: 'Safety information, handling guidelines, and environmental impact data.',
        size: '850 KB',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Installation Guides',
    icon: BookOpen,
    items: [
      {
        title: 'Installation Guide - Standard Bricks',
        description: 'Step-by-step instructions for laying InBricks eco-bricks with best practices and tips.',
        size: '1.8 MB',
        format: 'PDF',
      },
      {
        title: 'Interlocking Blocks Guide',
        description: 'Installation guidelines specifically for our interlocking block products.',
        size: '1.5 MB',
        format: 'PDF',
      },
      {
        title: 'Mortar Mixing Guidelines',
        description: 'Recommended mortar types and mixing ratios for optimal adhesion.',
        size: '500 KB',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Reports & Research',
    icon: BarChart3,
    items: [
      {
        title: 'Sustainability Report 2025',
        description: 'Our annual report on environmental impact, plastic recycled, and sustainability metrics.',
        size: '3.5 MB',
        format: 'PDF',
      },
      {
        title: 'Compressive Strength Test Report',
        description: 'Independent laboratory test results confirming our brick strength specifications.',
        size: '1.1 MB',
        format: 'PDF',
      },
      {
        title: 'Life Cycle Assessment',
        description: 'Environmental impact comparison between eco-bricks and traditional clay bricks.',
        size: '2.2 MB',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Case Studies',
    icon: FolderOpen,
    items: [
      {
        title: 'Case Studies Collection',
        description: 'Success stories from completed projects across Pakistan with photos and testimonials.',
        size: '4.2 MB',
        format: 'PDF',
      },
      {
        title: 'Low-Cost Housing Project - Sindh',
        description: 'Detailed case study of our community housing project with cost analysis.',
        size: '2.8 MB',
        format: 'PDF',
      },
      {
        title: 'Commercial Building Project - Karachi',
        description: 'Case study featuring a commercial construction project using eco-bricks.',
        size: '2.5 MB',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Marketing Materials',
    icon: Image,
    items: [
      {
        title: 'Company Brochure',
        description: 'Overview of InBricks, our mission, products, and services.',
        size: '5.1 MB',
        format: 'PDF',
      },
      {
        title: 'Product Photography Pack',
        description: 'High-resolution product images for use in presentations and marketing.',
        size: '15 MB',
        format: 'ZIP',
      },
      {
        title: 'Logo & Brand Assets',
        description: 'InBricks logos, color palette, and brand guidelines.',
        size: '8 MB',
        format: 'ZIP',
      },
    ],
  },
  {
    title: 'Video Resources',
    icon: Video,
    items: [
      {
        title: 'Manufacturing Process Video',
        description: 'See how eco-bricks are made from plastic waste to finished product.',
        size: '45 MB',
        format: 'MP4',
      },
      {
        title: 'Installation Tutorial',
        description: 'Video tutorial demonstrating proper brick installation techniques.',
        size: '38 MB',
        format: 'MP4',
      },
      {
        title: 'Company Overview Video',
        description: 'Learn about InBricks mission, team, and impact.',
        size: '52 MB',
        format: 'MP4',
      },
    ],
  },
];

const Downloads = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Downloads & Resources
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  Access our catalogs, guides, technical documents, and marketing materials
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Downloads Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {downloadCategories.map((category, categoryIndex) => (
                <AnimatedSection key={category.title} delay={categoryIndex * 100}>
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-secondary">{category.title}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                              {item.format}
                            </span>
                          </div>
                          <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{item.size}</span>
                            <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Request Custom Documents */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Need something specific?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Can't find what you're looking for? Contact us for custom documentation, 
                  bulk sample requests, or partnership materials.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="accent" size="lg">
                    <Link to="/contact">Request Documents</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/products">View Products</Link>
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

export default Downloads;
