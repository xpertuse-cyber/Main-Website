// src/components/Footer.jsx
import { useState } from "react";
import { MessageCircle, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Youtube, Shield, FileText, RefreshCw } from "lucide-react";
import { handleWhatsApp, handleEmail, handleCall } from "../lib/actions";
import { scrollToSection } from "../lib/actions";
import Modal from "../components/Model";
import PrivacyPolicyContent from "../data/PrivacyPolicyContent";
import RefundPolicyContent from "../data/RefundPolicyContent";
import TermsConditionsContent from "../data/TermsConditionsContent";

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false); // Fixed variable name

  const handlePolicyClick = (policyType) => {
    if (policyType === 'privacy') {
      setShowPrivacyModal(true);
    } else if (policyType === 'refund') {
      setShowRefundModal(true);
    } else if (policyType === 'terms') { // Added the missing terms condition
      setShowTermsModal(true);
    }
  };

  const navigationLinks = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "Our Story", action: () => scrollToSection("about") }, 
    { name: "Our Services", action: () => scrollToSection("services") },
    { name: "Our Clients", action: () => scrollToSection("our clients") },
    { name: "Terms and Conditions", action: () => handlePolicyClick('terms') }, // Changed to use handlePolicyClick
    { name: "Privacy Policy", action: () => handlePolicyClick('privacy') },
    { name: "Refund Policy", action: () => handlePolicyClick('refund') },
    { name: "Connect with us", action: () => scrollToSection("contact") }
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br bg-white/80 text-gray-800 border-t border-gray-200">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-2 md:opacity-3 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/3 -right-4 w-16 h-16 md:w-20 md:h-20 bg-purple-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-8 md:py-10">
            
            {/* Footer Header */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-5xl font-bold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Trust </span>
                <span className="text-black">Builds Success!</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                Connect with us at{" "}
                <button 
                  onClick={() => handleEmail("Hi! I'm interested in your services.", "Brand Evolution Inquiry")}
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium underline underline-offset-2"
                >
                  hello@xpertuse.com
                </button>
              </p>
            </div>

            {/* Navigation Links */}
            <div className="mb-6 md:mb-8">
              <nav className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-3 md:gap-6 text-center">
                {navigationLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-300 py-2 px-1 hover:bg-gray-100/60 rounded-md"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-center gap-3 md:gap-4">
                {/* LinkedIn */}
                <button 
                  onClick={() => {
                    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isMobile) {
                      const appUrl = "linkedin://in/xpert-use-86431938a/";
                      const webUrl = "https://www.linkedin.com/in/xpert-use-86431938a/";
                      
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, "_blank", "noopener,noreferrer");
                      }, 1000);
                    } else {
                      window.open("https://www.linkedin.com/in/xpert-use-86431938a/", "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                {/* Twitter/X */}
              <button 
                  onClick={() => {
                    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isMobile) {
                      const appUrl = "twitter://user?screen_name=xpertuse";
                      const webUrl = "https://x.com/xpertuse";
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, "_blank", "noopener,noreferrer");
                      }, 1000);
                    } else {
                      window.open("https://x.com/xpertuse", "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Follow us on X (formerly Twitter)">
                {/* New X Logo SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  className="w-4 h-4 md:w-5 md:h-5 text-white" 
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </button>


                {/* YouTube */}
                <button 
                  onClick={() => {
                    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isMobile) {
                      const appUrl = "vnd.youtube://channel/UCZfxOIqw1pR76s3cJwQDlCQ";
                      const webUrl = "https://www.youtube.com/channel/UCZfxOIqw1pR76s3cJwQDlCQ";
                      
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, "_blank", "noopener,noreferrer");
                      }, 1000);
                    } else {
                      window.open("https://www.youtube.com/channel/UCZfxOIqw1pR76s3cJwQDlCQ", "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                {/* Instagram */}
                <button 
                  onClick={() => {
                    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isMobile) {
                      const appUrl = "instagram://user?username=xpertuse";
                      const webUrl = "https://www.instagram.com/xpertuse/";
                      
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, "_blank", "noopener,noreferrer");
                      }, 1000);
                    } else {
                      window.open("https://www.instagram.com/xpertuse/", "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                {/* Facebook */}
                <button 
                  onClick={() => {
                    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isMobile) {
                      const appUrl = "fb://profile.php?id=61582082315834";
                      const webUrl = "https://www.facebook.com/profile.php?id=61582082315834";
                      
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, "_blank", "noopener,noreferrer");
                      }, 1000);
                    } else {
                      window.open("https://www.facebook.com/profile.php?id=61582082315834", "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Like our Facebook page"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                {/* Email Contact */}
                <button 
                  onClick={() => handleEmail("Hi! Quick email from website.", "Hello from Xpertuse site")}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Send us an email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Mobile Quick Contact */}
            <div className="block sm:hidden mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 shadow-sm mx-4">
                <h3 className="text-center font-semibold text-gray-800 mb-3 text-sm">Quick Contact</h3>
                <div className="flex justify-center gap-3">
                  <button 
                    onClick={() => handleWhatsApp("Hi! Mobile contact from website.")}
                    className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                  <button 
                    onClick={handleCall}
                    className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="text-sm font-medium">Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t border-gray-200/50 pb-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-center sm:text-left">
              <div className="text-xs sm:text-sm text-gray-600">
                © 2025{" "}
                <span className="font-semibold text-red-500">
                  Xpertuse Technologies Pvt. Ltd.
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Crafted by{" "}
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  XpertUse
                </span>{" "}
                for entrepreneurs
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
        icon={Shield}
      >
        <PrivacyPolicyContent />
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms & Conditions"
        icon={FileText}
      >
        <TermsConditionsContent />
      </Modal>

      {/* Refund Policy Modal */}
      <Modal
        isOpen={showRefundModal}
        onClose={() => setShowRefundModal(false)}
        title="Refund Policy"
        icon={RefreshCw}
      >
        <RefundPolicyContent />
      </Modal>
    </>
  );
}
