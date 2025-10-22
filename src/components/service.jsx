// src/components/Services.jsx
import { services } from "../data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { handleWhatsApp } from "../lib/actions";
import { useEffect, useState, useRef } from "react";


export default function Services() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);


    // Intersection Observer with proper scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when scrolling INTO view, not on page load
          if (entry.isIntersecting && entry.intersectionRatio > 0.3 && !animationStarted) {
            // Add small delay to ensure it's intentional scrolling
            setTimeout(() => {
              if (entry.isIntersecting) {
                setAnimationStarted(true);
              }
            }, 100);
          }
        });
      },
      { 
        threshold: [0.1, 0.3, 0.5], // Multiple thresholds for better detection
        rootMargin: '-50px 0px -50px 0px' // Only trigger when truly in viewport
      }
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [animationStarted]);


  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="pt-6 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative">  
        {/* Header Content - Falls from basket */}
        <div className={`falling-header text-center mb-16 relative z-10 ${animationStarted ? 'animate' : ''}`}>
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
        </div>


        {/* Services Grid - Cards fall and arrange */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 relative z-10">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className={`service-card group bg-white/60  rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:-rotate-1 ${
                  animationStarted ? 'animate-card' : ''
                }`}
                style={{ 
                  '--card-index': idx,
                  '--fall-x': isMobile ? '0px' : `${Math.random() * 30 - 15}px`,
                  '--rotation': isMobile ? '0deg' : `${Math.random() * 25 - 12.5}deg`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {s.tech}
                  </span>
                </div>
                <button
                  onClick={() => handleWhatsApp(`Hi! I'm interested in ${s.title}. Can you provide more details?`)}
                  className={`w-full bg-gradient-to-r ${s.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>


      {/* Magical Effects */}
      <div className="magic-effects">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <div 
            key={i} 
            className={`magic-sparkle ${animationStarted ? 'animate' : ''}`}
            style={{ '--sparkle-delay': `${1.5 + i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </section>
  );
}

