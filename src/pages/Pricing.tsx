import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Truck, Clock, MapPin, Calculator } from 'lucide-react';

const pricingTiers = [
  {
    range: '1 - 10,000',
    price: 'PKR 12',
    discount: '',
    popular: false,
  },
  {
    range: '10,001 - 50,000',
    price: 'PKR 11',
    discount: '8% OFF',
    popular: true,
  },
  {
    range: '50,001+',
    price: 'PKR 10',
    discount: '17% OFF',
    popular: false,
  },
];

const deliveryInfo = [
  {
    icon: MapPin,
    title: 'Delivery Areas',
    description: 'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan',
  },
  {
    icon: Truck,
    title: 'Minimum Order',
    description: '1,000 bricks per order',
  },
  {
    icon: Clock,
    title: 'Lead Time',
    description: '5-7 business days for standard orders',
  },
];

const cities = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Other',
];

const projectTypes = [
  'Residential',
  'Commercial',
  'Government',
  'NGO / Community',
  'Industrial',
  'Other',
];

const Pricing = () => {
  const [brickCount, setBrickCount] = useState<number>(10000);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    city: '',
    quantity: '',
    projectType: '',
    requirements: '',
  });

  const calculatePrice = (count: number) => {
    if (count <= 10000) return count * 12;
    if (count <= 50000) return count * 11;
    return count * 10;
  };

  const calculateTraditionalPrice = (count: number) => {
    return count * 25; // Average traditional brick price
  };

  const inbricksPrice = calculatePrice(brickCount);
  const traditionalPrice = calculateTraditionalPrice(brickCount);
  const savings = traditionalPrice - inbricksPrice;
  const savingsPercent = Math.round((savings / traditionalPrice) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request:', formData);
    alert('Thank you! We will contact you shortly with your quote.');
  };

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
                  Transparent, Competitive Pricing
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90">
                  Save up to 40% compared to traditional bricks
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                Bulk Pricing
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                The more you order, the more you save
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <AnimatedSection key={tier.range} delay={index * 100}>
                  <div className={`bg-card rounded-xl shadow-lg p-8 text-center h-full ${tier.popular ? 'ring-2 ring-accent relative' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <p className="text-muted-foreground mb-2">Order Quantity</p>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{tier.range} bricks</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground"> / brick</span>
                    </div>
                    {tier.discount && (
                      <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {tier.discount}
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Price Calculator */}
            <AnimatedSection delay={300}>
              <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-secondary">Price Calculator</h3>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="brickCount" className="text-base font-medium mb-2 block">
                    Number of Bricks Needed
                  </Label>
                  <Input
                    id="brickCount"
                    type="number"
                    value={brickCount}
                    onChange={(e) => setBrickCount(Math.max(1000, parseInt(e.target.value) || 1000))}
                    min={1000}
                    className="text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">InBricks Cost</p>
                    <p className="text-2xl font-bold text-primary">
                      PKR {inbricksPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Traditional Cost</p>
                    <p className="text-2xl font-bold text-secondary line-through opacity-60">
                      PKR {traditionalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 ring-2 ring-accent">
                    <p className="text-sm text-muted-foreground mb-1">Your Savings</p>
                    <p className="text-2xl font-bold text-accent">
                      PKR {savings.toLocaleString()} ({savingsPercent}%)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
                Delivery & Logistics
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliveryInfo.map((info, index) => (
                <AnimatedSection key={info.title} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl shadow-md text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                  Get a Custom Quote
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization/Company</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Project Location *</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Brick Quantity *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min={1000}
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="requirements">Additional Requirements</Label>
                      <Textarea
                        id="requirements"
                        rows={4}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="Tell us about your project, delivery requirements, or any questions..."
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Get Your Quote
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pricing;
