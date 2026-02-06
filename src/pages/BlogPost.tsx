import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
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
    content: `
      <h2>What Are Eco-Bricks?</h2>
      <p>Eco-bricks are innovative construction materials made from recycled plastic waste mixed with sand and other binding agents. Unlike traditional clay bricks that require extensive mining and high-temperature kilns, eco-bricks offer a sustainable alternative that addresses both waste management and construction needs.</p>
      
      <h2>The Manufacturing Process</h2>
      <p>The process begins with collecting plastic waste from various sources—households, industries, and waste collection centers. This plastic is then cleaned, shredded, and heated to a specific temperature (170-200°C) where it becomes malleable without releasing harmful gases.</p>
      <p>The heated plastic is mixed with sand in a 30:70 ratio, creating a composite material that is then pressed into brick molds. After cooling, these bricks achieve a compressive strength of 1350+ PSI—significantly higher than traditional clay bricks.</p>
      
      <h2>Benefits for Pakistan's Construction Industry</h2>
      <p>Pakistan generates approximately 48.5 million tons of solid waste annually, with plastic comprising about 9% of this waste. By converting this plastic into construction materials, eco-bricks address two critical challenges simultaneously.</p>
      <ul>
        <li><strong>Cost Reduction:</strong> Eco-bricks cost PKR 8-12 per unit compared to PKR 13-56 for traditional bricks</li>
        <li><strong>Environmental Impact:</strong> Each brick diverts plastic from landfills and reduces kiln emissions</li>
        <li><strong>Superior Performance:</strong> Higher strength, lighter weight, and better water resistance</li>
        <li><strong>Local Employment:</strong> Creates jobs in waste collection and manufacturing</li>
      </ul>
      
      <h2>Applications in Construction</h2>
      <p>Eco-bricks are suitable for a wide range of construction applications including residential walls, commercial buildings, boundary walls, and low-cost housing projects. Their water-resistant properties make them particularly valuable in areas prone to flooding or high humidity.</p>
      
      <h2>The Future of Sustainable Construction</h2>
      <p>As Pakistan continues to urbanize and address its housing shortage, eco-bricks represent a promising solution that balances affordability, sustainability, and performance. With proper scaling and government support, this technology could revolutionize the construction industry while significantly reducing plastic pollution.</p>
    `,
  },
  {
    id: 2,
    title: '5 Reasons Why Recycled Plastic Bricks Outperform Traditional Bricks',
    excerpt: 'Discover the science behind why eco-bricks are stronger, lighter, and more durable than conventional clay bricks.',
    image: transformationImage,
    date: 'January 10, 2026',
    readTime: '5 min read',
    category: 'Research',
    content: `
      <h2>The Science Behind Superior Performance</h2>
      <p>When comparing recycled plastic bricks to traditional clay bricks, the differences are remarkable. Here are five key reasons why eco-bricks outperform their conventional counterparts.</p>
      
      <h2>1. Higher Compressive Strength</h2>
      <p>Eco-bricks achieve a compressive strength of 1350+ PSI, compared to 600-800 PSI for traditional clay bricks. This superior strength comes from the polymer matrix formed when plastic is heated and combined with sand, creating a more uniform and resilient structure.</p>
      
      <h2>2. Lighter Weight</h2>
      <p>Plastic-sand composite bricks are significantly lighter than clay bricks, reducing transportation costs and making construction easier. This also means less structural load on foundations, potentially reducing overall construction costs.</p>
      
      <h2>3. Water Resistance</h2>
      <p>Unlike clay bricks that absorb water and can deteriorate over time, eco-bricks are naturally water-resistant. The plastic component acts as a barrier against moisture, making these bricks ideal for flood-prone areas and humid climates common in Pakistan.</p>
      
      <h2>4. Thermal Insulation</h2>
      <p>The plastic content in eco-bricks provides better thermal insulation compared to traditional bricks. Buildings constructed with eco-bricks maintain more stable internal temperatures, reducing energy costs for heating and cooling.</p>
      
      <h2>5. Durability and Longevity</h2>
      <p>Eco-bricks don't crack or chip as easily as clay bricks. They're resistant to weathering, salt damage, and biological growth, ensuring longer-lasting structures with lower maintenance requirements.</p>
      
      <h2>Conclusion</h2>
      <p>The performance advantages of recycled plastic bricks aren't just marketing claims—they're backed by material science and real-world testing. As construction professionals seek more efficient and sustainable materials, eco-bricks are proving to be a superior choice on multiple fronts.</p>
    `,
  },
  {
    id: 3,
    title: 'How InBricks Contributes to Pakistan\'s Circular Economy',
    excerpt: 'Learn how we\'re turning waste into wealth and creating sustainable jobs across the country.',
    image: ecoBricksImage,
    date: 'January 5, 2026',
    readTime: '6 min read',
    category: 'Sustainability',
    content: `
      <h2>Building a Circular Economy</h2>
      <p>The traditional linear economy model of "take, make, dispose" is unsustainable. At InBricks, we're pioneering a circular economy approach in Pakistan's construction sector, where waste becomes a valuable resource.</p>
      
      <h2>From Waste to Walls</h2>
      <p>Our process transforms plastic waste—typically destined for landfills or oceans—into durable construction materials. This closed-loop system creates value at every stage:</p>
      <ul>
        <li><strong>Waste Collection:</strong> We partner with waste collectors and recyclers, providing them with a reliable market for plastic waste</li>
        <li><strong>Processing:</strong> Local processing facilities create jobs while preparing materials for brick production</li>
        <li><strong>Manufacturing:</strong> Our production facilities employ skilled workers and contribute to the local economy</li>
        <li><strong>Construction:</strong> Builders receive affordable, high-quality materials that reduce project costs</li>
      </ul>
      
      <h2>Economic Impact</h2>
      <p>By creating demand for plastic waste, we've established a new value chain that benefits communities across Pakistan. Waste collectors earn better incomes, processing facilities create employment, and construction companies save on material costs.</p>
      
      <h2>Environmental Benefits</h2>
      <p>Every ton of plastic we process is a ton diverted from the environment. Our production process also generates 60% less carbon emissions compared to traditional brick kilns, contributing to Pakistan's climate commitments.</p>
      
      <h2>Scaling for Greater Impact</h2>
      <p>As we expand our operations, the positive impact grows exponentially. More plastic waste is recycled, more jobs are created, and more affordable housing becomes available. This is the power of circular economy thinking.</p>
    `,
  },
  {
    id: 4,
    title: 'Building Low-Cost Housing with Sustainable Materials',
    excerpt: 'A case study on how eco-bricks are making affordable housing accessible to more Pakistanis.',
    image: transformationImage,
    date: 'December 28, 2025',
    readTime: '7 min read',
    category: 'Case Study',
    content: `
      <h2>The Housing Challenge</h2>
      <p>Pakistan faces a significant housing shortage, with an estimated deficit of 10 million units. Traditional construction costs make homeownership unattainable for many families, particularly in lower-income brackets.</p>
      
      <h2>A Community Housing Project</h2>
      <p>In partnership with a local NGO, InBricks supplied eco-bricks for a community housing project in rural Sindh. The project aimed to build 50 homes for families previously living in temporary structures.</p>
      
      <h2>Cost Savings Achieved</h2>
      <p>By using eco-bricks instead of traditional materials, the project achieved a 35% reduction in material costs. This savings translated directly into more homes built within the same budget, benefiting more families.</p>
      
      <h2>Construction Experience</h2>
      <p>Local masons quickly adapted to working with eco-bricks. The lighter weight made handling easier, and the consistent sizing reduced cutting and adjustment time. Construction speed improved by approximately 20% compared to previous projects using clay bricks.</p>
      
      <h2>Resident Feedback</h2>
      <p>Six months after completion, residents reported high satisfaction with their new homes. The improved thermal insulation kept homes cooler in summer, and the water-resistant walls performed well during the monsoon season.</p>
      
      <h2>Replicating Success</h2>
      <p>This case study demonstrates the viability of eco-bricks for affordable housing projects. The combination of cost savings, environmental benefits, and performance advantages makes them an ideal choice for addressing Pakistan's housing crisis.</p>
    `,
  },
  {
    id: 5,
    title: 'The Future of Green Construction in Pakistan',
    excerpt: 'Industry trends and predictions for sustainable construction in the coming decade.',
    image: ecoBricksImage,
    date: 'December 20, 2025',
    readTime: '6 min read',
    category: 'Industry',
    content: `
      <h2>A Transforming Industry</h2>
      <p>Pakistan's construction industry is at a crossroads. Environmental pressures, resource constraints, and changing regulations are driving a shift toward sustainable practices. Here's what we expect in the coming decade.</p>
      
      <h2>Regulatory Push</h2>
      <p>The government is increasingly focusing on environmental standards in construction. We anticipate stricter emissions regulations for brick kilns, incentives for green building materials, and green building codes for new developments.</p>
      
      <h2>Technology Adoption</h2>
      <p>Advanced manufacturing techniques, quality control systems, and material innovations will continue to improve eco-friendly construction materials. Costs will decrease while performance improves, making sustainable options increasingly competitive.</p>
      
      <h2>Consumer Awareness</h2>
      <p>Homebuyers and commercial property developers are becoming more environmentally conscious. Green certifications and sustainable materials are becoming selling points, creating market demand for eco-friendly construction.</p>
      
      <h2>Investment and Growth</h2>
      <p>International investors and development organizations are prioritizing sustainable projects. Access to green financing and impact investment is increasing, supporting the growth of sustainable construction companies.</p>
      
      <h2>Our Commitment</h2>
      <p>InBricks is positioned at the forefront of this transformation. We continue to invest in R&D, expand our production capacity, and build partnerships that advance sustainable construction in Pakistan.</p>
    `,
  },
  {
    id: 6,
    title: 'Understanding Compressive Strength in Construction Materials',
    excerpt: 'A technical deep-dive into what makes a building material strong and reliable.',
    image: transformationImage,
    date: 'December 15, 2025',
    readTime: '10 min read',
    category: 'Technical',
    content: `
      <h2>What Is Compressive Strength?</h2>
      <p>Compressive strength is a fundamental property of construction materials, measuring their ability to withstand loads that tend to reduce size. It's expressed in pounds per square inch (PSI) or megapascals (MPa).</p>
      
      <h2>Why It Matters</h2>
      <p>Buildings must support their own weight plus additional loads from occupants, furniture, equipment, and environmental factors like wind and earthquakes. Materials with higher compressive strength can support greater loads safely.</p>
      
      <h2>Testing Methods</h2>
      <p>Compressive strength is measured by applying increasing force to a material sample until it fails. Standardized tests ensure consistent, comparable results across different materials and manufacturers.</p>
      
      <h2>Comparing Materials</h2>
      <p>Here's how common construction materials compare:</p>
      <ul>
        <li>Traditional clay bricks: 600-800 PSI</li>
        <li>InBricks eco-bricks: 1350+ PSI</li>
        <li>Concrete blocks: 1900-2800 PSI</li>
        <li>Standard concrete: 2500-4000 PSI</li>
      </ul>
      
      <h2>Beyond the Numbers</h2>
      <p>While compressive strength is important, it's not the only factor in material selection. Weight, thermal properties, water resistance, cost, and environmental impact all play roles in choosing the right material for each application.</p>
      
      <h2>InBricks Advantage</h2>
      <p>Our eco-bricks offer compressive strength that exceeds traditional clay bricks by over 75%. Combined with their lighter weight and water resistance, they provide excellent structural performance for a wide range of applications.</p>
    `,
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Articles
                </Link>
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Article Content */}
                <AnimatedSection className="lg:col-span-8">
                  <article
                    className="prose prose-lg max-w-none prose-headings:text-secondary prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-secondary prose-li:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </AnimatedSection>

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                  <AnimatedSection delay={100}>
                    {/* Share */}
                    <div className="bg-muted/30 rounded-xl p-6 mb-8">
                      <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        Share this article
                      </h3>
                      <div className="flex items-center gap-3">
                        <a
                          href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h3 className="font-bold text-secondary mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            to={`/blog/${relatedPost.id}`}
                            className="block group"
                          >
                            <h4 className="font-medium text-secondary group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">{relatedPost.readTime}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container-custom">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Build Sustainably?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Get in touch to learn how InBricks can support your next project
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="xl">
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

export default BlogPost;
