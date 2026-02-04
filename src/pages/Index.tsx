import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { ProductPreviewSection } from '@/components/sections/ProductPreviewSection';
import { BusinessSection } from '@/components/sections/BusinessSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <ImpactSection />
        <ProductPreviewSection />
        <BusinessSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
