// src/components/Hero.jsx
import { CheckCircle, Zap, Shield, Users, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion
import { handleWhatsApp } from "../lib/actions";
import { scrollToSection } from "../lib/actions";

export default function Hero() {
  const features = [
    { icon: CheckCircle, text: "100% Original Code & Documentation" },
    { icon: Zap, text: "Turn complexity into clarity in short period" },
    { icon: Shield, text: "Measurable outcomes, not vague promises" },
    { icon: Users, text: "Trusted. Tested. Proven." },
  ];

  // Variants for the container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  // Variants for individual cards, with direction-aware logic
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left'? -100 : 100, // Start off-screen to the left or right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="pt-24 pb-8 px-4 sm:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 animate-pulse">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">✨ Trust Builds Success</span>
</div>
 </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Xpertuse</span>
            <br />
            <span className="text-gray-900">Let's Connect Your Business to a World of Growth.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Together, we'll craft the powerful websites, applications, and cloud solutions that connect you to more customers and drive your business forward.
          </p>

          {/* Animated container for feature cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Animate only once when it enters the viewport
          >
            {features.map(({ icon: Icon, text }, i) => (
              // Outer div for gradient border and hover effects
              <motion.div
                key={i}
                className="relative group p-px rounded-2xl 
                           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                           bg-[length:400%_400%] 
                           transition-all duration-300 
                           hover:shadow-[0_0_24px_0_rgba(147,51,234,0.5)] 
                           animate-none hover:animate-[gradient-move_3ds_ease_infinite]"
                variants={cardVariants}
                custom={i < 2? 'left' : 'right'} // Pass direction for slide-in animation
                whileHover={{ scale: 1.0, y: -5 }} // Add lift effect on hover
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* Inner div for card content and solid background */}
                <div className="h-full w-full rounded-[15px] bg-white/60 backdrop-blur-lg p-6 flex flex-col items-center text-center gap-4">
                  <motion.div whileHover={{ rotate: 15 }}> {/* Icon rotation on hover */}
                    <div className="text-blue-600">
                      <Icon className="w-8 h-8" />
                    </div>
                  </motion.div>
                  <p className="text-gray-800 font-semibold text-base">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <button onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" >
                 <span>Get Started Now</span>
                 <ArrowRight className="w-5 h-5" />
                 </button>
                 <button onClick={() => handleWhatsApp()}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                     <span>WhatsApp Us</span>
                    </button>
                    </div>
          </div>
        </div>
    </section>
  );
}