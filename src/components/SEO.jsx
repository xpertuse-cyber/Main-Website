// src/components/SEO.jsx
export default function SEO({ 
  title = "Most Affordable IT Solutions",
  description = "Xpertuse Technologies provides professional IT solutions including custom website development, mobile app development, and digital transformation services.",
  keywords = "Xpertuse, Xpertuse Technologies, IT solutions Pune, web development company Pune, mobile app development Pune, software development Pune, custom website development, digital transformation services, affordable web development, business IT solutions, MERN stack development, React development company, Next.js development, Node.js services, full-stack development, startup IT solutions, enterprise web solutions, e-commerce development, responsive website design, hire web developer Pune, professional website development, IT consulting services, cost-effective IT solutions, cloud-based applications, API development services, React Native app development, Progressive Web App development, UI/UX design services, website maintenance Pune, SEO services Pune, best IT company Pune, trusted IT services, scalable web solutions, business automation software, digital solutions for startups, website development for growing businesses, IT services for small business, custom software development India, offshore development services, dedicated developer hiring, white label development, IT outsourcing Pune, mobile-first design, cross-platform app development, website speed optimization, database design, IoT application development, AI integration services, chatbot development, blockchain services, microservices architecture, DevOps services, SaaS development, healthcare IT solutions, fintech software development, education technology services, retail IT solutions, hospitality management software, manufacturing ERP, real estate CRM, HR management software, inventory management system, web developer Hinjewadi, IT company Magarpatta, software company Kharadi, Baner web development, Viman Nagar IT services, Wakad software company, startup MVP development, website redesign, free IT consultation, get website quote, professional web developers, affordable app development, custom business solutions, Maharashtra IT services, India web development, technology partners, digital innovation, modern web technologies, cutting-edge solutions",
  ogImage = "https://www.xpertuse.com/og-image.png",
  url = "https://www.xpertuse.com"
}) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  );
}
