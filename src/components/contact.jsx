// src/components/Contact.jsx
import { useEffect, useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ShieldCheck, Sparkles } from "lucide-react";
import { handleWhatsApp, handleCall, handleEmail } from "../lib/actions";
import SEO from "./SEO";

function buildMessage({ name, email, whatsapp, projectType, requirements }) {
  return `Hi! I'm ${name}.
Email: ${email}
WhatsApp: ${whatsapp}
Project Type: ${projectType}
Requirements: ${requirements}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    requirements: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const onConnect = async (e) => {
    e.preventDefault();
    const msg = buildMessage(formData);
    try {
      setSubmitting(true);
      // Open WhatsApp with pre-filled message
      handleWhatsApp(msg);
      // Open Email with pre-filled subject & body (slight delay reduces popup blocking)
      setTimeout(() => {
        handleEmail(msg, "project enquiry");
      }, 500);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <SEO 
        title="Contact Us - Xpertuse Technologies"
        description="Contact Xpertuse Technologies for your IT needs. Located in Pune, India. Email: hello@xpertuse.com. Get free consultation for web development, mobile apps, and digital services."
        keywords="contact Xpertuse, Pune IT company contact, get quote, free consultation, IT services inquiry, web development contact, Mr. Sahil Thonge, "
        url="https://xpertuse.com/"
      />
    <section id="contact" className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl animate-pulse" />
      </div>

      <div className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">We reply within minutes</span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Share the details and the team will reach out instantly on WhatsApp and Email with the same message for smooth follow‑up. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form card */}
          <div className="relative">
            <div className="absolute -z-10 -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
            <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg transition-transform duration-500 ease-out hover:shadow-xl hover:-translate-y-0.5">
              <form onSubmit={onConnect} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="peer w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                      <ShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 peer-focus:text-blue-500 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="+91 9028251272"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="Static Website Development">Static Website Development</option>
                      <option value="Dynamic CMS Website">Dynamic CMS Website</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="School Management Software">School Management Software</option>
                      <option value="Hospital Management Software">Hospital Management Software</option>
                      <option value="Hotel Management Software">Hotel Management Software</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="1:1 Guidance">1:1 Guidance</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Describe your project requirements, features needed, and college guidelines..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.015] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                      <span>Connecting…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Connect</span>
                    </>
                  )}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                </button>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/40">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    24/7 WhatsApp support
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/40">
                    <Mail className="w-4 h-4 text-purple-600" />
                    Email subject: project enquiry
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Contact details and quick actions */}
          <div className={`space-y-8 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <div className="relative">
              <div className="absolute -z-10 -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-xl" />
              <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <button
                        onClick={() => handleWhatsApp("Hi! I have a quick query about a project.")}
                        className="text-green-600 hover:text-green-700 transition-colors duration-300"
                      >
                        +91 9028251272
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <button onClick={handleCall} className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                        +91 9028251272
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <button
                        onClick={() => handleEmail("Hi! I have a query about services at Xpertuse.", "project enquiry")}
                        className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                      >
                        hello.xpertuse@gmail.com
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Balkrushna-Kunj Society, Dhere Banglow</p>
                      <p className="text-gray-600">Manjiri Bk, Hadapsar, Pune – 412307</p>
                      <p className="text-gray-600">Maharashtra, India</p>
                      <p className="text-sm text-orange-600 font-medium mt-1">Remote support available globally</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Working Hours</p>
                      <p className="text-gray-600">Monday – Friday</p>
                      <p className="text-gray-600">10:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => handleWhatsApp("Hi! Quick WhatsApp ping from website.")}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </button>
                  <button
                    onClick={() => handleEmail("Hi! Quick email from website.", "project enquiry")}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
}
