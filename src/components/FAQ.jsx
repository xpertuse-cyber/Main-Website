// src/components/FAQ.jsx
import { useState } from "react";
import { faqs } from "../data/faq";
import { ChevronDown, Search, HelpCircle, Star } from "lucide-react";
import { handleWhatsApp } from "../lib/actions";
import SEO from "./SEO";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState(new Set());

  // Get unique categories
  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Xpertuse Technologies"
        description="Find answers to common questions about Xpertuse's IT services, web development, mobile apps, pricing, timelines, and support. Get clarity before starting your project."
        keywords="Xpertuse FAQ, IT services questions, web development pricing, mobile app development timeline, technical support, project delivery"
        url="https://xpertuse.com/"
      />
    <section id="FAQ" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-gray-900">Questions</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our IT solutions and services. 
            Find answers to make the right decision for your project.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 lg:mb-12 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/80 text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        {filteredFaqs.length > 0 ? (
          <div className="grid gap-4 lg:gap-6">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openItems.has(index);
              
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-inset"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full mb-3">
                          <Star className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-medium text-blue-900">
                            {faq.category}
                          </span>
                        </div>
                        
                        {/* Question */}
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed group-hover:text-blue-900 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center transition-all duration-500 ${
                          isOpen ? 'rotate-180 bg-gradient-to-r from-blue-600 to-purple-600' : 'group-hover:from-blue-200 group-hover:to-purple-200'
                        }`}>
                          <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                            isOpen ? 'text-white' : 'text-blue-600'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="w-full h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent mb-4" />
                      <p className="text-gray-700 leading-relaxed text-sm lg:text-base animate-fade-in">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* No Results State */
          <div className="text-center py-12 lg:py-16">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <HelpCircle className="w-5 h-5" />
              View All Questions
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect IT solution for your business needs.
            </p>
            
            <button
            onClick={() => handleWhatsApp(`Hi! I'm Facing some more Quetions..`)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <HelpCircle className="w-5 h-5" />
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>  
    </section></>
  );
}
