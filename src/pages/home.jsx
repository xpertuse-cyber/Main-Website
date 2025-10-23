import { useEffect } from "react";
import Hero from "../components/hero";
import Services from "../components/service";
import About from "../components/about";
import FAQ from "../components/FAQ";
import Contact from "../components/contact";
import OurClients from "../components/client";
import SEO from "../components/SEO";


export default function Home() {
  useEffect(() => {
    // Section titles mapping
    const sectionTitles = {
      home: 'Xpertuse.com - IT Solutions Pune | Web & Mobile App Development',
      services: 'Our Services - Web Development & IT Solutions Pune',
      our_clients: 'Our Clients - Success Stories | Xpertuse Technologies',
      about: 'About Us - Xpertuse Technologies | IT Company Pune',
      faq: 'FAQ - Frequently Asked Questions | Xpertuse',
      contact: 'Contact Us - Xpertuse Technologies Pune'
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      const sections = ['home',  'services', 'our_clients', 'about', 'faq', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          document.title = sectionTitles[sections[i]];
          break;
        }
      }
    };

    // Set initial title
    document.title = sectionTitles.home;

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount
    handleScroll();

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title="Xpertuse.com - IT Solutions Pune | Web Development & Mobile App Development"
        description="Xpertuse Technologies provides professional IT solutions including custom website development, mobile app development, and digital transformation services in Pune, India."
        keywords="Xpertuse, IT solutions Pune, web development company Pune, mobile app development Pune, custom website development, digital transformation services, MERN stack development, React development company, affordable web development, business IT solutions, startup IT solutions, enterprise web solutions, cost-effective IT solutions, professional website development, hire web developer Pune, React Native app development, Node.js development, full-stack development services, UI/UX design services, mobile app development services"
        url="https://www.xpertuse.com"
      />
      
      {/* Sections with IDs */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="our_clients">
        <OurClients />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

