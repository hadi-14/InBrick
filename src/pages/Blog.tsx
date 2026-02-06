import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Download, FileText, BookOpen } from 'lucide-react';
import ecoBricksImage from '@/assets/eco-bricks.png';
import transformationImage from '@/assets/transformation.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Eco-Bricks in Pakistan',
    excerpt: 'Everything you need to know about eco-bricks, their benefits, and how they\'re changing construction in Pakistan.',
    image: ecoBricksImage,
    date: 'January 15, 2026',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    id: 2,
    title: '5 Reasons Why Recycled Plastic Bricks Outperform Traditional Bricks',
    excerpt: 'Discover the science behind why eco-bricks are stronger, lighter, and more durable than conventional clay bricks.',
    image: transformationImage,
    date: 'January 10, 2026',
    readTime: '5 min read',
    category: 'Research',
  },
  {
    id: 3,
    title: 'How InBricks Contributes to Pakistan\'s Circular Economy',
    excerpt: 'Learn how we\'re turning waste into wealth and creating sustainable jobs across the country.',
    image: ecoBricksImage,
    date: 'January 5, 2026',
    readTime: '6 min read',
    category: 'Sustainability',
  },
  {
    id: 4,
    title: 'Building Low-Cost Housing with Sustainable Materials',
    excerpt: 'A case study on how eco-bricks are making affordable housing accessible to more Pakistanis.',
    image: transformationImage,
    date: 'December 28, 2025',
    readTime: '7 min read',
    category: 'Case Study',
  },
  {
    id: 5,
    title: 'The Future of Green Construction in Pakistan',
    excerpt: 'Industry trends and predictions for sustainable construction in the coming decade.',
    image: ecoBricksImage,
    date: 'December 20, 2025',
    readTime: '6 min read',
    category: 'Industry',
  },
  {
    id: 6,
    title: 'Understanding Compressive Strength in Construction Materials',
    excerpt: 'A technical deep-dive into what makes a building material strong and reliable.',
    image: transformationImage,
    date: 'December 15, 2025',
    readTime: '10 min read',
    category: 'Technical',
  },
];

const resources = [
  {
    title: 'Product Catalog 2026',
    description: 'Complete product specifications, dimensions, and pricing information.',
    icon: FileText,
    size: '2.5 MB',
  },
  {
    title: 'Installation Guide',
    description: 'Step-by-step instructions for laying InBricks eco-bricks.',
    icon: BookOpen,
    size: '1.8 MB',
  },
  {
    title: 'Technical Specifications',
    description: 'Detailed material properties, test results, and compliance data.',
    icon: FileText,
    size: '1.2 MB',
  },
  {
    title: 'Sustainability Report 2025',
    description: 'Our annual report on environmental impact and sustainability metrics.',
    icon: FileText,
    size: '3.5 MB',
  },
  {
    title: 'Case Studies Collection',
    description: 'Success stories from completed projects across Pakistan.',
    icon: BookOpen,
    size: '4.2 MB',
  },
];

const Blog = () => {
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
                  Resources & Insights
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Learn about sustainable construction and eco-friendly building materials
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Latest Articles
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Stay updated with industry news, research, and insights
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <article className="bg-card rounded-xl shadow-lg overflow-hidden h-full flex flex-col group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Downloadable Resources
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Access our catalogs, guides, and technical documentation
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <AnimatedSection key={resource.title} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">PDF • {resource.size}</span>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </div>
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
                  Have Questions?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Our team is ready to help you learn more about sustainable construction
                </p>
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Contact Us</Link>
                </Button>
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

export default Blog;
