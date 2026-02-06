import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import ecoBricksImage from '@/assets/eco-bricks.png';

export const ProductPreviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Premium Eco-Bricks for Every Project
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our standard eco-bricks are designed for versatility and durability.
              Made from 70% sand and 30% recycled plastic, they exceed traditional
              brick performance at a fraction of the cost.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">9" × 4" × 3"</div>
                <div className="text-sm text-muted-foreground">Dimensions (LxWxH)</div>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">1350+ PSI</div>
                <div className="text-sm text-muted-foreground">Compressive Strength</div>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">PKR 30-42</div>
                <div className="text-sm text-muted-foreground">Per Brick</div>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Lighter Weight</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                View All Products
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </AnimatedSection>

          {/* Image Side */}
          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 blur-2xl" />
              <img
                src={ecoBricksImage}
                alt="InBricks eco-friendly bricks"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
