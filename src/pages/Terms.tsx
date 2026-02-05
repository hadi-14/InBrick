import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';

const Terms = () => {
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
                  Terms of Service
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  Last updated: January 1, 2026
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-secondary prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-secondary">
                <h2>1. Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and InBricks ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
                </p>
                <p>
                  By accessing or using our website or purchasing our products, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, you may not access the website or purchase our products.
                </p>

                <h2>2. Products and Services</h2>
                <p>
                  InBricks manufactures and sells eco-friendly construction materials, including but not limited to eco-bricks made from recycled plastic. All products are manufactured to meet quality standards and are tested for compressive strength and durability.
                </p>
                <p>Product specifications, including dimensions and strength ratings, are provided as general guidelines. Actual specifications may vary slightly within acceptable tolerances.</p>

                <h2>3. Ordering and Pricing</h2>
                <h3>Quotes and Orders</h3>
                <ul>
                  <li>All prices are quoted in Pakistani Rupees (PKR) unless otherwise specified</li>
                  <li>Quotes are valid for 30 days from the date of issue unless otherwise stated</li>
                  <li>Orders are subject to acceptance by InBricks</li>
                  <li>Minimum order quantities may apply</li>
                </ul>

                <h3>Pricing</h3>
                <ul>
                  <li>Prices are subject to change without notice</li>
                  <li>Bulk discounts may be available for large orders</li>
                  <li>Delivery charges are calculated separately based on location and order size</li>
                </ul>

                <h2>4. Payment Terms</h2>
                <ul>
                  <li>Payment terms will be specified in your order confirmation or invoice</li>
                  <li>For new customers, advance payment may be required</li>
                  <li>Established customers may be eligible for credit terms</li>
                  <li>Late payments may incur additional charges</li>
                </ul>

                <h2>5. Delivery</h2>
                <ul>
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>We will make reasonable efforts to meet estimated delivery dates</li>
                  <li>Risk of loss passes to the buyer upon delivery</li>
                  <li>Delivery charges are the responsibility of the buyer unless otherwise agreed</li>
                  <li>The buyer is responsible for ensuring adequate access for delivery vehicles</li>
                </ul>

                <h2>6. Returns and Refunds</h2>
                <p>
                  Due to the nature of construction materials, returns are only accepted in the following circumstances:
                </p>
                <ul>
                  <li>Products are defective or damaged upon delivery</li>
                  <li>Products do not match the specifications in the order</li>
                  <li>Products fail quality testing within 7 days of delivery</li>
                </ul>
                <p>
                  To request a return, contact us within 7 days of delivery with photos and description of the issue. Refunds or replacements will be processed after inspection.
                </p>

                <h2>7. Product Warranty</h2>
                <p>
                  InBricks warrants that its eco-bricks will meet the specified compressive strength ratings when used according to standard construction practices. This warranty does not cover:
                </p>
                <ul>
                  <li>Damage from improper handling or storage</li>
                  <li>Damage from exposure to chemicals or extreme conditions</li>
                  <li>Issues arising from improper installation</li>
                  <li>Normal wear and weathering</li>
                </ul>

                <h2>8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, InBricks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
                <p>
                  Our total liability shall not exceed the total amount paid by you for the products giving rise to the claim.
                </p>

                <h2>9. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of InBricks or its content suppliers and is protected by intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
                </p>

                <h2>10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.
                </p>

                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>

                <h2>12. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us at:</p>
                <ul>
                  <li><strong>Email:</strong> legal@inbricks.pk</li>
                  <li><strong>Phone:</strong> +92 331 228 8129</li>
                  <li><strong>Address:</strong> Industrial Area, Karachi, Sindh, Pakistan</li>
                </ul>
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

export default Terms;
