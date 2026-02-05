import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const trustIndicators = [
  '70% plastic waste per brick',
  '30-40% cost reduction',
  'Water-resistant & lightweight',
  'Made in Pakistan',
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="InBricks eco-friendly construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container-custom relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-sm font-medium">Building Tomorrow, Brick by Brick</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            INBRICK. BUILDING TOMORROW.{' '}
            <span className="text-primary">BRICK BY BRICK</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Pioneering Innovation in Climate Technology. Transforming plastic waste into affordable, sustainable building materials for a greener tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl">
              Get a Quote
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Products
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              '40-50% recycled plastic content',
              '35% cost reduction',
              '25% lighter than clay bricks',
              'Excellent water resistance',
            ].map((indicator, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-sm">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
