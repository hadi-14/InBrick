import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What are InBricks eco-bricks made of?',
        answer: 'InBricks eco-bricks are made from a mixture of recycled plastic waste (30%) and sand (70%). The plastic is heated to a specific temperature where it becomes malleable, then mixed with sand and pressed into brick molds. This process creates a strong, durable, and water-resistant construction material.',
      },
      {
        question: 'Are eco-bricks safe for construction?',
        answer: 'Yes, absolutely. Our eco-bricks undergo rigorous quality testing to ensure they meet construction standards. They have a compressive strength of 1350+ PSI, which exceeds traditional clay bricks (600-800 PSI). The plastic is processed at temperatures that ensure material stability without releasing harmful chemicals.',
      },
      {
        question: 'How long do eco-bricks last?',
        answer: 'Eco-bricks are designed to last as long as or longer than traditional bricks. The plastic component makes them resistant to water damage, weathering, and biological growth. With proper installation, structures built with eco-bricks can last for decades.',
      },
      {
        question: 'Are eco-bricks fire-resistant?',
        answer: 'While eco-bricks are not completely fireproof, they have good fire resistance properties. The sand content helps limit flame spread, and the bricks don\'t support combustion. For applications requiring higher fire resistance, we recommend additional fire protection measures as per building codes.',
      },
    ],
  },
  {
    category: 'Ordering & Pricing',
    questions: [
      {
        question: 'What is the minimum order quantity?',
        answer: 'Our minimum order is 1,000 bricks for local deliveries. For larger projects, we offer bulk discounts starting at 10,000 bricks. Contact us for custom pricing on enterprise orders.',
      },
      {
        question: 'How much do eco-bricks cost?',
        answer: 'Our standard eco-bricks are priced at PKR 8-12 per brick, depending on order quantity and specifications. This is 30-40% cheaper than traditional clay bricks which cost PKR 13-56 per brick. Contact us for a detailed quote based on your project needs.',
      },
      {
        question: 'Do you offer samples?',
        answer: 'Yes, we offer free samples for contractors and builders who want to test our products before placing a larger order. Please fill out our contact form to request samples.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, online payments, and cash on delivery for local orders. For large orders, we can arrange payment plans. Please contact our sales team for details.',
      },
    ],
  },
  {
    category: 'Delivery & Logistics',
    questions: [
      {
        question: 'Which cities do you deliver to?',
        answer: 'We currently deliver to major cities across Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar. We\'re continuously expanding our delivery network. Contact us if your location is not listed.',
      },
      {
        question: 'How long does delivery take?',
        answer: 'Standard delivery takes 5-7 business days for orders within Karachi and 7-14 business days for other cities. Lead times may vary based on order size and availability. Expedited delivery is available for urgent projects at additional cost.',
      },
      {
        question: 'Are delivery charges included in the price?',
        answer: 'Delivery charges are calculated separately based on your location and order size. For bulk orders within Karachi, we may offer free delivery. Contact us for a complete quote including delivery.',
      },
      {
        question: 'How are the bricks packaged for transport?',
        answer: 'Bricks are palletized and wrapped for protection during transport. Each pallet contains approximately 500 bricks. We use appropriate handling equipment to ensure safe loading and unloading.',
      },
    ],
  },
  {
    category: 'Technical & Installation',
    questions: [
      {
        question: 'Can eco-bricks be cut or shaped?',
        answer: 'Yes, eco-bricks can be cut using standard masonry tools including brick saws and angle grinders. They are easier to cut than traditional clay bricks due to their composition.',
      },
      {
        question: 'What mortar should be used with eco-bricks?',
        answer: 'Standard cement mortar works well with eco-bricks. The brick surface provides good adhesion for mortar bonds. For best results, follow conventional brick-laying techniques.',
      },
      {
        question: 'Are eco-bricks suitable for load-bearing walls?',
        answer: 'Yes, with their high compressive strength (1350+ PSI), eco-bricks are suitable for load-bearing walls in residential and low-rise commercial construction. For multi-story buildings, consult a structural engineer for specific requirements.',
      },
      {
        question: 'Do you provide installation training?',
        answer: 'Yes, we offer training sessions for masons and contractors who are new to working with eco-bricks. We also provide detailed installation guides and technical documentation.',
      },
    ],
  },
  {
    category: 'Sustainability & Environment',
    questions: [
      {
        question: 'How much plastic does each brick contain?',
        answer: 'Each standard eco-brick contains approximately 30% recycled plastic by weight. For a typical brick weighing around 2.5 kg, this means approximately 750 grams of plastic waste is diverted from landfills per brick.',
      },
      {
        question: 'What types of plastic can be recycled into bricks?',
        answer: 'We can process most common plastic types including HDPE, LDPE, PP, and PS. Plastics are cleaned, sorted, and processed to ensure quality. We work with waste collectors and recyclers to source materials.',
      },
      {
        question: 'Are eco-bricks recyclable at end of life?',
        answer: 'Yes, eco-bricks can be processed and recycled at the end of their useful life. The material can be reground and used to create new bricks or other products, supporting a circular economy.',
      },
      {
        question: 'Do eco-bricks have any certifications?',
        answer: 'We are currently working towards ISO certifications and green building certifications. Our products are tested by independent laboratories for strength and durability. Contact us for current test certificates.',
      },
    ],
  },
];

const FAQ = () => {
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
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  Find answers to common questions about our eco-bricks and services
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <AnimatedSection key={category.category} delay={categoryIndex * 100}>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-secondary mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${category.category}-${index}`}
                          className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="text-left font-medium text-secondary hover:text-primary py-5">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Still have questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is here to help. Reach out to us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="accent" size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
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

export default FAQ;
