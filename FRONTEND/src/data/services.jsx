import { Globe, Layers, ShoppingCart, ClipboardList, GraduationCap, Stethoscope, Hotel, Smartphone, ShieldCheck, Settings, BarChart2, CloudLightning, BookOpenText, Users } from "lucide-react";

export const services = [
  // Existing/principal offerings
  {
    title: "Static Website Development",
    description: "Professional, responsive websites for instant online presence and credibility.",
    tech: "5–8 pages (Home, About, Services, Contact), custom design, mobile-ready, basic SEO.",
    icon: Globe,
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "Dynamic CMS Website",
    description: "Easily manageable websites for teams needing frequent content updates.",
    tech: "10–20 pages, admin panel, blog, multimedia, forms, training for editors, SEO basics.",
    icon: Layers,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "E-commerce Website",
    description: "Turnkey online store setup with scalable product, order, and payment flows.",
    tech: "Product catalog, cart, secure payments, admin dashboard, analytics, GST support.",
    icon: ShoppingCart,
    color: "from-teal-500 to-emerald-400"
  },
  {
    title: "Custom Web Applications",
    description: "Business logic-driven SaaS portals, dashboards, and workflow automation.",
    tech: "End-to-end product dev, user auth, reporting, REST API, integrations, SLAs.",
    icon: ClipboardList,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "School Management Software",
    description: "Full-featured ERP for schools: class, fee, and academic automation.",
    tech: "Attendance, exam, fee mgmt, role-wise access, parent portal, bus tracking.",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Hospital Management Software",
    description: "Modern patient, staff, and billing solutions for medical establishments.",
    tech: "Registration, appointments, OP/IP, pharmacy, EHR, insurance, analytics.",
    icon: Stethoscope,
    color: "from-emerald-600 to-lime-500"
  },
  {
    title: "Hotel Management Software",
    description: "Guest, room, and facility automation for hotels and hospitality.",
    tech: "Room, booking, check-in, POS, CRM, analytics, web/mobile, channel mgmt.",
    icon: Hotel,
    color: "from-yellow-700 to-amber-400"
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform mobile apps for your business growth.",
    tech: "Android/iOS, React Native, API integration, push notifications, Play Store setup.",
    icon: Smartphone,
    color: "from-green-500 to-lime-400"
  },
  {
    title: "Database Services & Optimization",
    description: "Expert database design, performance tuning, and migrations.",
    tech: "SQL schema design, data migration, optimization, backup, bulk import/export.",
    icon: BarChart2,
    color: "from-sky-600 to-cyan-500"
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Secure, audit-ready solutions for privacy and compliance-sensitive sectors.",
    tech: "SSL/TLS, penetration testing, secure SDLC, GDPR/data localization consulting.",
    icon: ShieldCheck,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Technical Documentation & Training",
    description: "Professional docs, SOPs, and team enablement for smooth handover.",
    tech: "Process flows, user guides, API docs, walkthroughs, onboarding support.",
    icon: BookOpenText,
    color: "from-cyan-600 to-blue-500"
  },
  {
    title: "IT Consulting & 1:1 Guidance",
    description: "Expert project review, mentoring for deployments, and student support.",
    tech: "Code/debug help, viva prep, demo training, business requirements consulting.",
    icon: Users,
    color: "from-fuchsia-600 to-pink-400"
  }
];
