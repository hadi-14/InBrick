import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';

const Privacy = () => {
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
                  Privacy Policy
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
                <h2>1. Introduction</h2>
                <p>
                  InBricks ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>

                <h2>2. Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Fill out a contact form or quote request</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our products</li>
                  <li>Contact us directly via email or phone</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company/Organization name</li>
                  <li>Project location</li>
                  <li>Project requirements</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information, including:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Time and date of visits</li>
                  <li>Referring website</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and requests</li>
                  <li>Provide quotes and product information</li>
                  <li>Process orders and deliver products</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against fraud and unauthorized access</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>4. Disclosure of Your Information</h2>
                <p>We may share your information in the following situations:</p>
                <ul>
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as delivery partners.</li>
                  <li><strong>Business Partners:</strong> We may share information with our business partners for joint marketing or other business purposes.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                </ul>

                <h2>5. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable.
                </p>

                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  We may use cookies and similar tracking technologies to collect and store information about your preferences and activity on our website. You can set your browser to refuse all or some browser cookies, but this may affect your ability to access certain features of our website.
                </p>

                <h2>7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>

                <h2>8. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to opt-out of marketing communications</li>
                  <li>The right to data portability</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the information provided below.</p>

                <h2>9. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>

                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                </p>

                <h2>11. Contact Us</h2>
                <p>If you have questions or concerns about this privacy policy, please contact us at:</p>
                <ul>
                  <li><strong>Email:</strong> info.inbrick@gmail.com</li>
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

export default Privacy;
