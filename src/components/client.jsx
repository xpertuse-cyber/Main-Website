// src/components/ClientStrip.jsx
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AkshayRajLogo from "/src/assets/AkshayRaj-Graphics.jpg";
import CerrebroLogo from "/src/assets/classlogo.jpg";
import DinexprtLogo from "/src/assets/Dinexprt.jpg";
import MoreGardensLogo from "/src/assets/More-garden.png";
import SEO from "./SEO";

const clients = [
  { id: 1, name: "AkshayRaj Graphics", logo: AkshayRajLogo },
  { id: 2, name: "Cerrebro Tutorials", logo: CerrebroLogo },
  { id: 3, name: "Dinexprt", logo: DinexprtLogo },
  { id: 4, name: "More Gardens", logo: MoreGardensLogo },
];

export default function ClientStrip() {
  const [visible, setVisible] = useState(false);
  const [activeClient, setActiveClient] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => setVisible(true), []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Handle tap for mobile
  const handleClientTap = (clientId) => {
    setActiveClient(activeClient === clientId ? null : clientId);
  };

  const isActive = (clientId) => activeClient === clientId;

  return (
    <>
      <SEO 
        title="Our Clients - Xpertuse Technologies"
        description="Discover how Xpertuse Technologies has helped businesses grow with custom IT solutions. View our portfolio, client testimonials, and successful project case studies."
        keywords="Xpertuse clients, portfolio, case studies, client testimonials, success stories, IT projects, web development examples, Cerrebro Tutorials Hadapsar manjiri rd Pune, AkshayRaj Graphics Hadapsar pune, More-Gardens Shewalwadi Pune, Ved-vidya Mandir school gopalpatti manjiri road, kalyani School, Holy angel high school"
        url="https://xpertuse.com/"
      />
      
      <section id="our clients" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Trusted by Industry Leaders
                </span>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Clients
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Partnering with innovative companies to deliver exceptional results
            </motion.p>
          </div>

          {/* Client Logos Grid - Responsive & Scrollable */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <motion.div
              className="flex lg:grid lg:grid-cols-4 gap-8 lg:gap-12 min-w-max lg:min-w-0 px-4 lg:px-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {clients.map((client) => (
                <motion.div
                  key={client.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 1.15,
                    transition: { duration: 0.2 }
                  }}
                  animate={isActive(client.id) ? { scale: 1.15 } : { scale: 1 }}
                  onClick={() => handleClientTap(client.id)}
                  onTouchStart={() => handleClientTap(client.id)}
                  className="relative group flex flex-col items-center justify-center gap-4 p-6 min-w-[140px] sm:min-w-[160px] lg:min-w-0 cursor-pointer"
                >
                  {/* Logo container - NO rotation, NO color change */}
                  <div className="relative">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain 
                               drop-shadow-lg
                               transition-all duration-300
                               rounded-lg"
                    />
                  </div>

                  {/* Client name */}
                  <figcaption className="text-xs sm:text-sm font-bold text-center
                                       bg-gradient-to-r from-gray-700 to-gray-900
                                       bg-clip-text text-transparent
                                       transition-all duration-300
                                       max-w-[120px] sm:max-w-[140px]">
                    {client.name}
                  </figcaption>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator for mobile */}
          <div className="lg:hidden flex justify-center mt-6 gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce delay-200"></div>
          </div>
        </div>
      </section>
    </>
  );
}
