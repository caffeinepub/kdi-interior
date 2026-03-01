import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Award,
  Box,
  Check,
  CheckCircle,
  ChefHat,
  ChevronRight,
  Clock,
  DoorOpen,
  Eye,
  Facebook,
  Frame,
  Grid2x2,
  Hammer,
  HeartHandshake,
  Home,
  IndianRupee,
  Instagram,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Package,
  Paintbrush,
  PenTool,
  Phone,
  Ruler,
  Shield,
  Sparkles,
  Star,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

/* ============================================================
   KDI Interior & Studio — Single Page Website
   ============================================================ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Calculator", href: "#calculator" },
  { label: "3D Visualizer", href: "#visualizer" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    image: "/assets/generated/service-bedroom.dim_600x400.jpg",
    title: "Residential Interior",
    description:
      "Transform your home into a sanctuary of elegance. We design every room to reflect your personality and lifestyle.",
    icon: "🏠",
  },
  {
    image: "/assets/generated/service-kitchen.dim_600x400.jpg",
    title: "Modular Kitchen",
    description:
      "Sleek, functional kitchens with premium hardware, smart storage solutions, and beautiful finishes.",
    icon: "🍳",
  },
  {
    image: "/assets/generated/service-office.dim_600x400.jpg",
    title: "Office Interior",
    description:
      "Create inspiring workspaces that boost productivity with modern, professional design solutions.",
    icon: "🏢",
  },
  {
    image: "/assets/generated/service-ceiling.dim_600x400.jpg",
    title: "False Ceiling",
    description:
      "Stunning ceiling designs with LED cove lighting, geometric patterns, and premium POP work.",
    icon: "✨",
  },
  {
    image: "/assets/generated/service-wallpaper.dim_600x400.jpg",
    title: "Wallpaper & Wall Panels",
    description:
      "Handpicked premium wallpapers and 3D wall panels that create dramatic feature walls.",
    icon: "🎨",
  },
  {
    image: "/assets/generated/service-office.dim_600x400.jpg",
    title: "Commercial Interior",
    description:
      "Retail spaces, showrooms, and hospitality interiors designed to impress and convert.",
    icon: "🏪",
  },
];

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock assistance throughout your project journey.",
  },
  {
    icon: Zap,
    title: "On-Time Delivery",
    desc: "We commit to deadlines and honour them — every single time.",
  },
  {
    icon: Shield,
    title: "No Hidden Cost",
    desc: "Transparent pricing with detailed quotes upfront. No surprises.",
  },
  {
    icon: Eye,
    title: "3D Design Preview",
    desc: "See your space before a single nail is hammered — in photorealistic 3D.",
  },
  {
    icon: Package,
    title: "Premium Materials",
    desc: "Only the finest materials sourced from trusted suppliers.",
  },
  {
    icon: Award,
    title: "10 Years Warranty",
    desc: "Our workmanship backed by a decade-long warranty for peace of mind.",
  },
];

const PROJECTS = [
  {
    image: "/assets/generated/project-1.dim_600x400.jpg",
    title: "3BHK Apartment",
    location: "Gurgaon",
    category: "Residential",
  },
  {
    image: "/assets/generated/service-office.dim_600x400.jpg",
    title: "Corporate Office",
    location: "Noida",
    category: "Commercial",
  },
  {
    image: "/assets/generated/service-bedroom.dim_600x400.jpg",
    title: "Luxury Villa",
    location: "Greater Noida",
    category: "Residential",
  },
  {
    image: "/assets/generated/service-kitchen.dim_600x400.jpg",
    title: "Modular Kitchen",
    location: "Dwarka",
    category: "Kitchen",
  },
  {
    image: "/assets/generated/service-ceiling.dim_600x400.jpg",
    title: "Penthouse",
    location: "South Delhi",
    category: "Residential",
  },
  {
    image: "/assets/generated/service-wallpaper.dim_600x400.jpg",
    title: "Retail Showroom",
    location: "Faridabad",
    category: "Commercial",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Discuss your vision, requirements, and budget. We listen before we design.",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Site Visit & Measurement",
    desc: "Our expert team visits your space, takes accurate measurements, and assesses the scope.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "3D Design & Quote",
    desc: "Receive photorealistic 3D renders of your space and a transparent, itemised quote.",
  },
  {
    step: "04",
    icon: Hammer,
    title: "Execution & Handover",
    desc: "We execute with precision and craftsmanship, delivering on time — every time.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Gurgaon",
    text: "KDI Interior transformed our 3BHK into a dream home. Exceptional quality, stunning design, and on-time delivery. The team was professional throughout.",
    initials: "RS",
  },
  {
    name: "Priya Malhotra",
    location: "Noida",
    text: "Professional team, stunning designs, and completely transparent pricing. From the first consultation to the final handover — highly recommended!",
    initials: "PM",
  },
  {
    name: "Amit Kapoor",
    location: "South Delhi",
    text: "The modular kitchen they designed is absolutely perfect. Great attention to detail and the quality of materials is top-notch. Very happy with the result.",
    initials: "AK",
  },
  {
    name: "Sunita Agarwal",
    location: "Greater Noida",
    text: "From concept to execution, everything was seamless. The 3D preview really helped us visualise the space. Truly a 5-star experience from start to finish!",
    initials: "SA",
  },
];

const FAQS = [
  {
    q: "How long does an interior design project take?",
    a: "Project duration varies by scope. A single room typically takes 2–4 weeks. A full 3BHK apartment takes 6–10 weeks. We provide a detailed timeline before starting, and we honour our commitments.",
  },
  {
    q: "What is the cost of interior design in Delhi NCR?",
    a: "Costs depend on the area, materials, and complexity of design. We offer packages starting from ₹800/sq ft for basic and going up to ₹2500+ per sq ft for premium finishes. Contact us for a free, personalised quote.",
  },
  {
    q: "Do you provide 3D design previews?",
    a: "Yes! We create photorealistic 3D renders of your space before any work begins. This helps you visualise the final result and make changes early — saving time and money.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve clients across the Delhi NCR region including Delhi, Noida, Gurgaon, Faridabad, Greater Noida, Ghaziabad, and surrounding areas.",
  },
  {
    q: "Do you handle end-to-end project management?",
    a: "Absolutely. We offer complete turnkey solutions — from design conception to material procurement, execution, and final handover. You don't need to coordinate with multiple vendors.",
  },
];

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.12_0.005_60/0.96)] shadow-[0_2px_20px_rgba(0,0,0,0.6)] border-b border-gold/10"
            : "bg-transparent"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 focus:outline-none group"
            >
              <img
                src="/assets/generated/kdi-logo-v2-transparent.dim_500x160.png"
                alt="KDI Interior"
                className="h-14 w-auto object-contain"
                style={{
                  filter:
                    "drop-shadow(0 2px 8px rgba(0,0,0,0.7)) brightness(1.05)",
                }}
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors duration-200 uppercase"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:8588830091"
                className="flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded text-sm font-bold tracking-wide hover:bg-gold-light transition-colors duration-200"
              >
                <Phone size={14} />
                8588830091
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-foreground p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[oklch(0.12_0.005_60/0.99)] border-b border-gold/20 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-foreground/90 hover:text-gold py-3 border-b border-border/50 transition-colors text-lg font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:8588830091"
                className="flex items-center justify-center gap-2 bg-gold text-charcoal px-4 py-3 rounded font-bold text-base mt-2"
              >
                <Phone size={16} />
                Call: 8588830091
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-living-room.dim_1400x700.jpg')",
        }}
      />
      {/* Rich navy-teal overlay for better font visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.06_230/0.88)] via-[oklch(0.14_0.05_220/0.80)] to-[oklch(0.10_0.03_210/0.96)]" />
      {/* Warm accent vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0.10_0.04_220)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-[0.3em] uppercase border border-gold/30 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Premium Interior Design Studio
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white"
          >
            Transform Your{" "}
            <span className="text-gradient-gold block sm:inline">Space</span>{" "}
            Into a{" "}
            <em className="not-italic text-gradient-gold">Masterpiece</em>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed"
          >
            Premium Interior Design Services in Delhi NCR — where your vision
            meets our craftsmanship to create spaces that inspire.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <a
              href="tel:8588830091"
              className="flex items-center gap-2 bg-gold text-charcoal px-8 py-4 rounded font-bold text-base tracking-wide hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call Now: 8588830091
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded font-semibold text-base tracking-wide hover:bg-gold/10 hover:border-gold transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ChevronRight size={18} />
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gold/20 rounded-xl overflow-hidden border border-gold/20 w-full max-w-3xl"
          >
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Years Experience", value: "10+" },
              { label: "Service Area", value: "Delhi NCR" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[oklch(0.14_0.05_220/0.85)] backdrop-blur px-6 py-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="w-0.5 h-8 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ============================================================
   WHY CHOOSE US
   ============================================================ */

function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-mid relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_75/0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Why KDI Interior
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Promise to You
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-xl p-8 border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon size={26} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES
   ============================================================ */

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-charcoal relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.78_0.12_75/0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            From residential havens to dynamic commercial spaces — we design
            interiors that tell your story.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-2xl">
                  {service.icon}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  Get Quote <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-charcoal-mid relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_75/0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into our completed works across Delhi NCR — each project a
            testament to our craft.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={`${project.title}-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden aspect-[3/2] shadow-card hover:shadow-card-hover transition-all duration-400 border border-border hover:border-gold/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-xs font-semibold text-gold bg-gold/15 border border-gold/30 px-3 py-1 rounded-full mb-2 tracking-wide uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm flex items-center gap-1 mt-1">
                  <MapPin size={12} />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DESIGN PROCESS
   ============================================================ */

function DesignProcess() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.78_0.12_75/0.04)_0%,transparent_50%,oklch(0.78_0.12_75/0.03)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Design Process
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-28 h-28 rounded-full bg-card border-2 border-gold/30 flex flex-col items-center justify-center shadow-gold">
                  <step.icon size={28} className="text-gold mb-1" />
                  <span className="text-xs text-gold/70 font-mono font-bold tracking-widest">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */

function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.12_75/0.06)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-foreground/85 leading-relaxed italic mb-6 text-base">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground font-display">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <MapPin size={11} />
                    {t.location}
                  </p>
                </div>
                <CheckCircle size={18} className="text-gold ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT US
   ============================================================ */

function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.12_75/0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              KDI Interior{" "}
              <span className="text-gradient-gold">&amp; Studio</span>
            </h2>
            <div className="section-divider mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a leading interior design firm based in{" "}
                <strong className="text-foreground">Delhi NCR</strong> with over{" "}
                <strong className="text-gold">10 years of experience</strong>{" "}
                creating spaces that people love to live and work in.
              </p>
              <p>
                We specialise in residential and commercial interiors, modular
                kitchens, false ceilings, and complete turnkey solutions. Our
                mission is to create spaces that reflect your unique personality
                and lifestyle — beautifully executed, on time, and within
                budget.
              </p>
              <p>
                We proudly serve clients across{" "}
                <strong className="text-foreground">
                  Delhi, Noida, Gurgaon, Faridabad, and Greater Noida
                </strong>
                , bringing premium design to every corner of the NCR.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { val: "500+", label: "Projects" },
                { val: "10+", label: "Years" },
                { val: "100%", label: "Satisfaction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 bg-card rounded-lg border border-border"
                >
                  <div className="text-2xl font-display font-bold text-gold">
                    {s.val}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:8588830091"
                className="flex items-center justify-center gap-2 bg-gold text-charcoal px-6 py-3 rounded font-bold hover:bg-gold-light transition-colors shadow-gold"
              >
                <Phone size={16} />
                Call Us Now
              </a>
              <a
                href="https://wa.me/918588830091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gold/40 text-gold px-6 py-3 rounded font-semibold hover:bg-gold/10 transition-colors"
              >
                <SiWhatsapp size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/assets/generated/hero-living-room.dim_1400x700.jpg"
                alt="KDI Interior - Premium Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card border border-gold/30 rounded-xl p-5 shadow-gold-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <HeartHandshake size={22} className="text-gold" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">
                    Trusted by 500+
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Happy Families & Businesses
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */

function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-mid relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Common Questions
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="bg-card border border-border rounded-lg px-6 overflow-hidden data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground text-left py-5 hover:text-gold hover:no-underline transition-colors [&[data-state=open]]:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */

function Contact() {
  const { mutateAsync, isPending } = useSubmitInquiry();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
      toast.success("Thank you! We'll get back to you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.12_75/0.07)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Create Together
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your space? Reach out for a free consultation and
            3D design preview.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:8588830091"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-foreground font-semibold text-lg group-hover:text-gold transition-colors">
                      8588830091
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:kdiinteriorandstudio@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-gold transition-colors break-all">
                      kdiinteriorandstudio@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Service Area
                    </p>
                    <p className="text-foreground font-semibold">Delhi NCR</p>
                    <p className="text-muted-foreground text-sm">
                      Delhi · Noida · Gurgaon · Faridabad · Greater Noida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918588830091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-6 py-4 rounded-xl hover:bg-[#25D366]/20 transition-all duration-300 font-semibold group"
            >
              <SiWhatsapp
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="font-bold">Chat on WhatsApp</p>
                <p className="text-xs text-[#25D366]/80 font-normal">
                  Quick response guaranteed
                </p>
              </div>
              <ChevronRight size={18} className="ml-auto" />
            </a>

            {/* Working hours */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} className="text-gold" />
                <p className="font-semibold text-foreground">Working Hours</p>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span className="text-foreground">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">10:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Request a Free Consultation
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                      <CheckCircle size={32} className="text-gold" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-foreground">
                      Thank You!
                    </h4>
                    <p className="text-muted-foreground">
                      Your inquiry has been submitted. Our team will contact you
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-gold text-sm underline underline-offset-4 hover:text-gold-light"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-foreground/80 text-sm"
                        >
                          Full Name <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          className="bg-background border-border focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="text-foreground/80 text-sm"
                        >
                          Phone <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          required
                          className="bg-background border-border focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-foreground/80 text-sm"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-background border-border focus:border-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-foreground/80 text-sm"
                      >
                        Message <span className="text-gold">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project — type of space, area (sq ft), preferred style, and timeline..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        required
                        rows={4}
                        className="bg-background border-border focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gold text-charcoal font-bold py-3 h-auto text-base hover:bg-gold-light transition-all shadow-gold hover:shadow-gold-lg disabled:opacity-60"
                    >
                      {isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-charcoal/40 border-t-charcoal rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Get Free Consultation"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to be contacted by KDI Interior.
                      We respect your privacy.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-charcoal border-t border-border relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src="/assets/generated/kdi-logo-v2-transparent.dim_500x160.png"
              alt="KDI Interior"
              className="h-14 w-auto object-contain mb-4"
              style={{
                filter:
                  "drop-shadow(0 2px 8px rgba(0,0,0,0.7)) brightness(1.05)",
              }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Premium interior design studio serving Delhi NCR since 2014.
              Transforming spaces into masterpieces.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-card border border-border hover:border-gold/40 hover:text-gold flex items-center justify-center transition-all text-muted-foreground"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-card border border-border hover:border-gold/40 hover:text-gold flex items-center justify-center transition-all text-muted-foreground"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/918588830091"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-card border border-border hover:border-[#25D366]/40 hover:text-[#25D366] flex items-center justify-center transition-all text-muted-foreground"
              >
                <SiWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href.replace("#", ""))}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={12} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => scrollTo("services")}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors flex items-center gap-1 text-left"
                  >
                    <ChevronRight size={12} />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:8588830091"
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold flex-shrink-0" />
                  8588830091
                </a>
              </li>
              <li>
                <a
                  href="mailto:kdiinteriorandstudio@gmail.com"
                  className="flex items-start gap-2 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="break-all">
                    kdiinteriorandstudio@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                Delhi NCR, India
              </li>
            </ul>
          </div>
        </div>

        {/* Berger Paints partnership */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              Authorised Partner
            </span>
            <img
              src="/assets/generated/berger-logo-transparent.dim_300x120.png"
              alt="Berger Paints"
              className="h-10 w-auto object-contain brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2017 KDI Interior &amp; Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WHATSAPP BUTTON
   ============================================================ */

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918588830091"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 whatsapp-pulse"
    >
      <SiWhatsapp size={28} className="text-white" />
    </a>
  );
}

/* ============================================================
   COST CALCULATOR
   ============================================================ */

/* ============================================================
   COST CALCULATOR — TYPES & CONSTANTS
   ============================================================ */

type CalcFlatType = "1BHK" | "2BHK" | "3BHK" | "4BHK" | "Custom";
type CalcServiceId =
  | "full-home"
  | "modular-kitchen"
  | "wardrobes"
  | "false-ceiling"
  | "painting"
  | "wallpaper"
  | "flooring";
type CalcPackage = "Basic" | "Standard" | "Premium";

interface CalcService {
  id: CalcServiceId;
  name: string;
  icon: React.ReactNode;
  startingRate: string;
  flatPrice?: boolean;
}

const CALC_FLAT_SIZES: Record<Exclude<CalcFlatType, "Custom">, number> = {
  "1BHK": 550,
  "2BHK": 850,
  "3BHK": 1200,
  "4BHK": 1600,
};

const CALC_RATES: Record<CalcServiceId, Record<CalcPackage, number>> = {
  "full-home": { Basic: 999, Standard: 1600, Premium: 2500 },
  "modular-kitchen": { Basic: 120000, Standard: 200000, Premium: 350000 },
  wardrobes: { Basic: 450, Standard: 850, Premium: 1400 },
  "false-ceiling": { Basic: 85, Standard: 130, Premium: 200 },
  painting: { Basic: 12, Standard: 18, Premium: 28 },
  wallpaper: { Basic: 35, Standard: 65, Premium: 120 },
  flooring: { Basic: 60, Standard: 100, Premium: 180 },
};

const CALC_SERVICES: CalcService[] = [
  {
    id: "full-home",
    name: "Full Home Interior",
    icon: <Home size={22} />,
    startingRate: "₹999/sq ft",
  },
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    icon: <ChefHat size={22} />,
    startingRate: "₹1,20,000 onwards",
    flatPrice: true,
  },
  {
    id: "wardrobes",
    name: "Wardrobes & Wooden Work",
    icon: <DoorOpen size={22} />,
    startingRate: "₹450/sq ft",
  },
  {
    id: "false-ceiling",
    name: "False Ceiling",
    icon: <Layers size={22} />,
    startingRate: "₹85/sq ft",
  },
  {
    id: "painting",
    name: "Painting",
    icon: <Paintbrush size={22} />,
    startingRate: "₹12/sq ft",
  },
  {
    id: "wallpaper",
    name: "Wallpaper & Wall Panels",
    icon: <Frame size={22} />,
    startingRate: "₹35/sq ft",
  },
  {
    id: "flooring",
    name: "Flooring",
    icon: <Grid2x2 size={22} />,
    startingRate: "₹60/sq ft",
  },
];

const PACKAGE_DETAILS: Record<
  CalcPackage,
  { label: string; star: string; features: string[] }
> = {
  Basic: {
    label: "Basic",
    star: "⭐",
    features: [
      "Economy-grade materials",
      "Standard finish quality",
      "Basic hardware & fittings",
      "No 3D design included",
      "6-month service warranty",
    ],
  },
  Standard: {
    label: "Standard",
    star: "⭐⭐",
    features: [
      "Mid-range branded materials",
      "Premium finish quality",
      "2D layout planning",
      "1-year service warranty",
      "Dedicated project manager",
    ],
  },
  Premium: {
    label: "Premium",
    star: "⭐⭐⭐",
    features: [
      "Luxury / imported materials",
      "Italian & European finishes",
      "Full 3D design walkthrough",
      "10-year structural warranty",
      "Priority execution & support",
    ],
  },
};

const ROOM_BREAKDOWN: { room: string; pct: number }[] = [
  { room: "Living Room", pct: 30 },
  { room: "Master Bedroom", pct: 25 },
  { room: "2nd Bedroom", pct: 20 },
  { room: "Kitchen", pct: 15 },
  { room: "Bathrooms", pct: 10 },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function calcServiceCost(
  id: CalcServiceId,
  pkg: CalcPackage,
  area: number,
): number {
  const rate = CALC_RATES[id][pkg];
  if (id === "modular-kitchen") return rate;
  if (id === "wardrobes") return Math.round(area * 0.3) * rate;
  return area * rate;
}

/* ============================================================
   COST CALCULATOR COMPONENT
   ============================================================ */

const CALC_STEPS = ["Your Space", "Services", "Package"] as const;
type CalcStep = 0 | 1 | 2;

function CostCalculator() {
  const [step, setStep] = useState<CalcStep>(0);
  const [flatType, setFlatType] = useState<CalcFlatType>("2BHK");
  const [customArea, setCustomArea] = useState<number>(1000);
  const [selectedServices, setSelectedServices] = useState<CalcServiceId[]>([
    "full-home",
  ]);
  const [selectedPkg, setSelectedPkg] = useState<CalcPackage>("Standard");

  const area = flatType === "Custom" ? customArea : CALC_FLAT_SIZES[flatType];

  const lineItems = selectedServices.map((id) => {
    const svc = CALC_SERVICES.find((s) => s.id === id)!;
    const cost = calcServiceCost(id, selectedPkg, area);
    return { id, name: svc.name, cost };
  });

  const total = lineItems.reduce((acc, { cost }) => acc + cost, 0);
  const low = Math.round(total * 0.85);
  const high = Math.round(total * 1.15);

  const toggleService = (id: CalcServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const hasFullHome = selectedServices.includes("full-home");

  const stepVariants: Variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <section
      id="calculator"
      className="py-20 lg:py-28 bg-charcoal-mid relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_75/0.07)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.78_0.12_75/0.04)_0%,transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Instant Estimate
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Cost Calculator
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get a real-time estimate for your home renovation based on Delhi NCR
            competitive market rates — similar to HomeLane & Livspace.
          </p>
        </motion.div>

        {/* Step progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-0 mb-10 max-w-lg mx-auto"
        >
          {CALC_STEPS.map((label, idx) => (
            <div key={label} className="flex items-center flex-1">
              <button
                type="button"
                onClick={() => setStep(idx as CalcStep)}
                className="flex flex-col items-center gap-1.5 flex-1 group"
                aria-current={step === idx ? "step" : undefined}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                    step > idx
                      ? "bg-gold border-gold text-charcoal"
                      : step === idx
                        ? "border-gold text-gold bg-gold/10"
                        : "border-border text-muted-foreground bg-background"
                  }`}
                >
                  {step > idx ? <Check size={16} /> : idx + 1}
                </div>
                <span
                  className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                    step >= idx ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </button>
              {idx < CALC_STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-1 mb-4 rounded transition-all duration-500 ${
                    step > idx ? "bg-gold" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Step content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <AnimatePresence mode="wait">
                {/* STEP 0 — Your Space */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-7 sm:p-8"
                  >
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      What's your space?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-7">
                      Choose your flat type or enter a custom area.
                    </p>

                    {/* BHK options */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                      {(
                        [
                          "1BHK",
                          "2BHK",
                          "3BHK",
                          "4BHK",
                          "Custom",
                        ] as CalcFlatType[]
                      ).map((type) => {
                        const size =
                          type !== "Custom"
                            ? CALC_FLAT_SIZES[
                                type as Exclude<CalcFlatType, "Custom">
                              ]
                            : null;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFlatType(type)}
                            className={`relative py-4 px-2 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 hover:scale-[1.02] active:scale-[0.98] ${
                              flatType === type
                                ? "border-gold bg-gold/10 shadow-[0_0_16px_oklch(0.78_0.12_75/0.2)]"
                                : "border-border bg-background hover:border-gold/40"
                            }`}
                          >
                            {flatType === type && (
                              <div className="absolute top-2 right-2 w-4 h-4 bg-gold rounded-full flex items-center justify-center">
                                <Check size={10} className="text-charcoal" />
                              </div>
                            )}
                            <span
                              className={`text-base font-bold ${flatType === type ? "text-gold" : "text-foreground"}`}
                            >
                              {type}
                            </span>
                            {size && (
                              <span className="text-xs text-muted-foreground">
                                {size} sq ft
                              </span>
                            )}
                            {type === "Custom" && (
                              <span className="text-xs text-muted-foreground">
                                any size
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom area controls */}
                    <AnimatePresence>
                      {flatType === "Custom" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-background rounded-xl border border-border p-5 mb-4">
                            <div className="flex items-center justify-between mb-3">
                              <label
                                htmlFor="calc-custom-area"
                                className="text-sm font-semibold text-foreground"
                              >
                                Carpet Area
                              </label>
                              <div className="flex items-center gap-1.5 bg-gold/10 border border-gold/30 rounded-lg px-3 py-1.5">
                                <input
                                  id="calc-custom-area"
                                  type="number"
                                  min={100}
                                  max={5000}
                                  value={customArea}
                                  onChange={(e) =>
                                    setCustomArea(
                                      Math.min(
                                        5000,
                                        Math.max(100, Number(e.target.value)),
                                      ),
                                    )
                                  }
                                  className="w-20 bg-transparent text-gold font-bold text-lg text-right focus:outline-none"
                                />
                                <span className="text-gold/70 text-sm font-medium">
                                  sq ft
                                </span>
                              </div>
                            </div>
                            <input
                              type="range"
                              min={100}
                              max={5000}
                              step={50}
                              value={customArea}
                              onChange={(e) =>
                                setCustomArea(Number(e.target.value))
                              }
                              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-gold"
                              style={{
                                background: `linear-gradient(to right, oklch(0.78 0.12 75) ${((customArea - 100) / 4900) * 100}%, oklch(0.28 0.01 75) ${((customArea - 100) / 4900) * 100}%)`,
                              }}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                              <span>100</span>
                              <span>5000 sq ft</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Area display */}
                    <div className="flex items-center gap-4 bg-gold/5 border border-gold/20 rounded-xl p-5">
                      <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold">
                        <Home size={22} />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                          Selected Area
                        </p>
                        <p className="text-gold font-display text-3xl font-bold leading-tight">
                          {area.toLocaleString()}{" "}
                          <span className="text-base font-normal text-gold/70">
                            sq ft
                          </span>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="mt-6 w-full bg-gold text-charcoal font-bold py-4 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      Choose Services
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {/* STEP 1 — Services */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-7 sm:p-8"
                  >
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      Which services do you need?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-7">
                      Select all that apply. Rates are per sq ft (Delhi NCR
                      market).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {CALC_SERVICES.map((svc) => {
                        const selected = selectedServices.includes(svc.id);
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => toggleService(svc.id)}
                            className={`relative flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left hover:scale-[1.01] active:scale-[0.99] ${
                              selected
                                ? "border-gold bg-gold/8 shadow-[0_0_14px_oklch(0.78_0.12_75/0.15)]"
                                : "border-border bg-background hover:border-gold/30"
                            }`}
                          >
                            {selected && (
                              <div className="absolute top-2.5 right-2.5 w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                                <Check size={11} className="text-charcoal" />
                              </div>
                            )}
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                selected
                                  ? "bg-gold text-charcoal"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {svc.icon}
                            </div>
                            <div className="min-w-0 pr-4">
                              <p
                                className={`font-semibold text-sm leading-tight ${selected ? "text-foreground" : "text-foreground/80"}`}
                              >
                                {svc.name}
                              </p>
                              <p className="text-xs text-gold/80 mt-0.5 font-medium">
                                Starting {svc.startingRate}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(0)}
                        className="flex-1 border border-border text-foreground font-semibold py-3.5 rounded-xl hover:border-gold/40 transition-all duration-200 text-sm"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={selectedServices.length === 0}
                        className="flex-[2] bg-gold text-charcoal font-bold py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Choose Package
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 — Package */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-7 sm:p-8"
                  >
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      Pick your package
                    </h3>
                    <p className="text-muted-foreground text-sm mb-7">
                      Higher packages include better materials and longer
                      warranties.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {(["Basic", "Standard", "Premium"] as CalcPackage[]).map(
                        (pkg) => {
                          const details = PACKAGE_DETAILS[pkg];
                          const isSelected = selectedPkg === pkg;
                          return (
                            <button
                              key={pkg}
                              type="button"
                              onClick={() => setSelectedPkg(pkg)}
                              className={`relative flex flex-col p-5 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                                isSelected
                                  ? "border-gold bg-gold/8 shadow-[0_0_20px_oklch(0.78_0.12_75/0.2)]"
                                  : "border-border bg-background hover:border-gold/30"
                              }`}
                            >
                              {isSelected && (
                                <div className="absolute top-3 right-3 w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                                  <Check size={11} className="text-charcoal" />
                                </div>
                              )}
                              {pkg === "Standard" && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                  POPULAR
                                </div>
                              )}
                              <span className="text-xl mb-2">
                                {details.star}
                              </span>
                              <p
                                className={`font-bold text-base mb-3 ${isSelected ? "text-gold" : "text-foreground"}`}
                              >
                                {details.label}
                              </p>
                              <ul className="space-y-1.5">
                                {details.features.map((feat) => (
                                  <li
                                    key={feat}
                                    className="flex items-start gap-1.5 text-xs text-muted-foreground"
                                  >
                                    <Check
                                      size={12}
                                      className={`mt-0.5 flex-shrink-0 ${isSelected ? "text-gold" : "text-muted-foreground"}`}
                                    />
                                    {feat}
                                  </li>
                                ))}
                              </ul>
                            </button>
                          );
                        },
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-border text-foreground font-semibold py-3.5 rounded-xl hover:border-gold/40 transition-all duration-200 text-sm"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={scrollToContact}
                        className="flex-[2] bg-gold text-charcoal font-bold py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                      >
                        Get Exact Quote
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Live results panel */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-gold/25 p-6 shadow-gold sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gold/15 rounded-lg flex items-center justify-center">
                  <IndianRupee size={16} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Live Estimate
                </h3>
                <span className="ml-auto text-xs bg-gold/10 text-gold border border-gold/30 rounded-full px-2.5 py-0.5 font-semibold">
                  {selectedPkg}
                </span>
              </div>

              {/* Area & Package quick info */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="bg-background rounded-lg p-3 border border-border">
                  <p className="text-muted-foreground text-xs mb-0.5">Area</p>
                  <p className="text-foreground font-bold text-sm">
                    {area.toLocaleString()} sq ft
                  </p>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border">
                  <p className="text-muted-foreground text-xs mb-0.5">
                    Package
                  </p>
                  <p className="text-gold font-bold text-sm">{selectedPkg}</p>
                </div>
              </div>

              {selectedServices.length === 0 ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={22} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Select services to see your estimate
                  </p>
                </div>
              ) : (
                <>
                  {/* Line items */}
                  <div className="space-y-0 mb-4 rounded-xl overflow-hidden border border-border">
                    {lineItems.map(({ id, name, cost }, i) => {
                      const svc = CALC_SERVICES.find((s) => s.id === id)!;
                      return (
                        <div
                          key={id}
                          className={`flex items-center gap-3 px-4 py-3 ${
                            i !== lineItems.length - 1
                              ? "border-b border-border"
                              : ""
                          }`}
                        >
                          <div className="w-7 h-7 bg-gold/10 rounded-md flex items-center justify-center text-gold flex-shrink-0">
                            {svc.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-foreground text-xs font-medium truncate">
                              {name}
                            </p>
                            <p className="text-muted-foreground text-[11px]">
                              {id === "modular-kitchen"
                                ? "Fixed price"
                                : id === "wardrobes"
                                  ? `${Math.round(area * 0.3).toLocaleString()} sq ft`
                                  : `${area.toLocaleString()} sq ft`}
                            </p>
                          </div>
                          <span className="text-foreground font-semibold text-xs ml-1 flex-shrink-0">
                            {formatINR(cost)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Total range */}
                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4">
                    <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                      Estimated Total Range
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-display text-2xl font-bold text-gold">
                        {formatINR(low)}
                      </p>
                      <span className="text-muted-foreground text-sm">—</span>
                      <p className="font-display text-2xl font-bold text-gold">
                        {formatINR(high)}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-[11px] mt-1.5">
                      ±15% based on site conditions & material availability
                    </p>
                  </div>

                  {/* Room-wise breakdown if Full Home selected */}
                  {hasFullHome && (
                    <div className="mb-4">
                      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                        Room-wise Breakdown
                      </p>
                      <div className="space-y-1.5">
                        {ROOM_BREAKDOWN.map(({ room, pct }) => {
                          const roomCost = Math.round(
                            calcServiceCost("full-home", selectedPkg, area) *
                              (pct / 100),
                          );
                          return (
                            <div key={room} className="flex items-center gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between text-[11px] mb-0.5">
                                  <span className="text-foreground/80">
                                    {room}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {formatINR(roomCost)}
                                  </span>
                                </div>
                                <div className="h-1 bg-border rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gold rounded-full transition-all duration-500"
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-muted-foreground italic mb-4 leading-relaxed">
                    Based on Delhi NCR rates for{" "}
                    <strong className="text-foreground not-italic">
                      {selectedPkg}
                    </strong>{" "}
                    package. Actual cost may vary.
                  </p>
                </>
              )}

              {/* CTA buttons */}
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full bg-gold text-charcoal font-bold py-3.5 rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm mb-2"
              >
                Get Exact Quote
                <ChevronRight size={16} />
              </button>
              <a
                href="https://wa.me/918588830091"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] font-semibold py-3 rounded-xl hover:bg-[#25D366]/8 transition-all duration-200 text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp for Quick Quote
              </a>

              <p className="text-center text-[11px] text-muted-foreground mt-3">
                Free consultation &amp; 3D preview included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROOM VISUALIZER — TYPES & DATA
   ============================================================ */

type RoomType = "living" | "bedroom" | "kitchen" | "office";
type DesignStyle = "Modern" | "Classic" | "Luxury" | "Minimalist" | "Bohemian";
type FlooringType =
  | "Wooden Laminate"
  | "Marble"
  | "Vitrified Tile"
  | "Hardwood";

interface WallColor {
  id: string;
  hex: string;
  name: string;
  berger: string;
  pricePerLitre: number;
}

interface AISuggestion {
  label: string;
  style: DesignStyle;
  colorId: string;
  flooring: FlooringType;
}

const WALL_COLORS: WallColor[] = [
  {
    id: "ivory-white",
    hex: "#F5F0E8",
    name: "Ivory White",
    berger: "Berger Magnolia",
    pricePerLitre: 380,
  },
  {
    id: "warm-beige",
    hex: "#E8D5B7",
    name: "Warm Beige",
    berger: "Berger Cashmere",
    pricePerLitre: 380,
  },
  {
    id: "sage-green",
    hex: "#B2C5A8",
    name: "Sage Green",
    berger: "Berger Eucalyptus",
    pricePerLitre: 420,
  },
  {
    id: "dusty-rose",
    hex: "#D4A5A5",
    name: "Dusty Rose",
    berger: "Berger Rose Mist",
    pricePerLitre: 400,
  },
  {
    id: "navy-blue",
    hex: "#2C4A6B",
    name: "Navy Blue",
    berger: "Berger Midnight Sail",
    pricePerLitre: 450,
  },
  {
    id: "charcoal-wall",
    hex: "#3D3D3D",
    name: "Charcoal",
    berger: "Berger Graphite Storm",
    pricePerLitre: 430,
  },
  {
    id: "terracotta",
    hex: "#C4704F",
    name: "Terracotta",
    berger: "Berger Tuscan Sun",
    pricePerLitre: 440,
  },
  {
    id: "mint-aqua",
    hex: "#8FC4C0",
    name: "Mint Aqua",
    berger: "Berger Sea Breeze",
    pricePerLitre: 410,
  },
  {
    id: "lavender",
    hex: "#B8A8C8",
    name: "Lavender",
    berger: "Berger Misty Lilac",
    pricePerLitre: 395,
  },
  {
    id: "gold-ochre",
    hex: "#C9A227",
    name: "Gold Ochre",
    berger: "Berger Golden Harvest",
    pricePerLitre: 460,
  },
];

const FLOORING_PRICES: Record<FlooringType, { min: number; max: number }> = {
  "Wooden Laminate": { min: 85, max: 120 },
  Marble: { min: 150, max: 300 },
  "Vitrified Tile": { min: 60, max: 90 },
  Hardwood: { min: 200, max: 350 },
};

const FLOORING_COLORS: Record<FlooringType, string> = {
  "Wooden Laminate": "#8B6F47",
  Marble: "#E8E8E8",
  "Vitrified Tile": "#C8C0B8",
  Hardwood: "#6B3F1F",
};

const AI_SUGGESTIONS: Record<RoomType, AISuggestion[]> = {
  living: [
    {
      label: "Contemporary Chic",
      style: "Modern",
      colorId: "ivory-white",
      flooring: "Marble",
    },
    {
      label: "Earthy Warmth",
      style: "Bohemian",
      colorId: "warm-beige",
      flooring: "Wooden Laminate",
    },
    {
      label: "Bold Statement",
      style: "Luxury",
      colorId: "navy-blue",
      flooring: "Hardwood",
    },
  ],
  bedroom: [
    {
      label: "Serene Retreat",
      style: "Minimalist",
      colorId: "sage-green",
      flooring: "Wooden Laminate",
    },
    {
      label: "Romantic Haven",
      style: "Classic",
      colorId: "dusty-rose",
      flooring: "Hardwood",
    },
    {
      label: "Urban Sleep",
      style: "Modern",
      colorId: "charcoal-wall",
      flooring: "Vitrified Tile",
    },
  ],
  kitchen: [
    {
      label: "Clean Scandinavian",
      style: "Minimalist",
      colorId: "ivory-white",
      flooring: "Vitrified Tile",
    },
    {
      label: "Warm Country",
      style: "Classic",
      colorId: "warm-beige",
      flooring: "Wooden Laminate",
    },
    {
      label: "Bold Modern",
      style: "Modern",
      colorId: "charcoal-wall",
      flooring: "Marble",
    },
  ],
  office: [
    {
      label: "Executive Power",
      style: "Luxury",
      colorId: "charcoal-wall",
      flooring: "Marble",
    },
    {
      label: "Creative Studio",
      style: "Bohemian",
      colorId: "terracotta",
      flooring: "Wooden Laminate",
    },
    {
      label: "Focused Minimal",
      style: "Minimalist",
      colorId: "ivory-white",
      flooring: "Vitrified Tile",
    },
  ],
};

const ROOM_TABS: { id: RoomType; label: string; emoji: string }[] = [
  { id: "living", label: "Living Room", emoji: "🛋️" },
  { id: "bedroom", label: "Bedroom", emoji: "🛏️" },
  { id: "kitchen", label: "Kitchen", emoji: "🍳" },
  { id: "office", label: "Office", emoji: "💼" },
];

const DESIGN_STYLES: DesignStyle[] = [
  "Modern",
  "Classic",
  "Luxury",
  "Minimalist",
  "Bohemian",
];

const FLOORING_TYPES: FlooringType[] = [
  "Wooden Laminate",
  "Marble",
  "Vitrified Tile",
  "Hardwood",
];

/* Darken a hex color by a given factor (0-1 = 0-100%) */
function darkenHex(hex: string, factor: number): string {
  const r = Math.round(Number.parseInt(hex.slice(1, 3), 16) * (1 - factor));
  const g = Math.round(Number.parseInt(hex.slice(3, 5), 16) * (1 - factor));
  const b = Math.round(Number.parseInt(hex.slice(5, 7), 16) * (1 - factor));
  return `rgb(${r},${g},${b})`;
}

/* Lighten a hex color by mixing with white */
function lightenHex(hex: string, factor: number): string {
  const r = Math.round(
    Number.parseInt(hex.slice(1, 3), 16) +
      (255 - Number.parseInt(hex.slice(1, 3), 16)) * factor,
  );
  const g = Math.round(
    Number.parseInt(hex.slice(3, 5), 16) +
      (255 - Number.parseInt(hex.slice(3, 5), 16)) * factor,
  );
  const b = Math.round(
    Number.parseInt(hex.slice(5, 7), 16) +
      (255 - Number.parseInt(hex.slice(5, 7), 16)) * factor,
  );
  return `rgb(${r},${g},${b})`;
}

/* ============================================================
   CSS 3D ROOM PREVIEW
   ============================================================ */

interface RoomPreviewProps {
  wallColor: string;
  flooringColor: string;
  roomType: RoomType;
}

function RoomFurnitureSilhouette({ roomType }: { roomType: RoomType }) {
  if (roomType === "living") {
    return (
      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
        role="img"
        aria-label="Living room furniture silhouette"
      >
        {/* Sofa */}
        <rect
          x="70"
          y="165"
          width="200"
          height="55"
          rx="6"
          fill="rgba(0,0,0,0.25)"
        />
        <rect
          x="70"
          y="150"
          width="200"
          height="22"
          rx="4"
          fill="rgba(0,0,0,0.22)"
        />
        <rect
          x="65"
          y="148"
          width="18"
          height="72"
          rx="4"
          fill="rgba(0,0,0,0.22)"
        />
        <rect
          x="257"
          y="148"
          width="18"
          height="72"
          rx="4"
          fill="rgba(0,0,0,0.22)"
        />
        {/* Cushions */}
        <rect
          x="82"
          y="155"
          width="55"
          height="20"
          rx="6"
          fill="rgba(255,255,255,0.08)"
        />
        <rect
          x="145"
          y="155"
          width="55"
          height="20"
          rx="6"
          fill="rgba(255,255,255,0.08)"
        />
        <rect
          x="208"
          y="155"
          width="55"
          height="20"
          rx="6"
          fill="rgba(255,255,255,0.08)"
        />
        {/* Coffee table */}
        <rect
          x="135"
          y="232"
          width="110"
          height="35"
          rx="3"
          fill="rgba(0,0,0,0.3)"
        />
        <rect
          x="142"
          y="232"
          width="6"
          height="35"
          rx="2"
          fill="rgba(0,0,0,0.2)"
        />
        <rect
          x="232"
          y="232"
          width="6"
          height="35"
          rx="2"
          fill="rgba(0,0,0,0.2)"
        />
        {/* Floor lamp */}
        <rect
          x="305"
          y="130"
          width="6"
          height="130"
          rx="3"
          fill="rgba(0,0,0,0.3)"
        />
        <ellipse cx="308" cy="130" rx="16" ry="8" fill="rgba(0,0,0,0.25)" />
        {/* TV unit */}
        <rect
          x="130"
          y="95"
          width="150"
          height="12"
          rx="3"
          fill="rgba(0,0,0,0.3)"
        />
        <rect
          x="155"
          y="63"
          width="100"
          height="35"
          rx="2"
          fill="rgba(0,0,0,0.22)"
        />
        {/* Window */}
        <rect
          x="320"
          y="55"
          width="55"
          height="80"
          rx="3"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <line
          x1="347"
          y1="55"
          x2="347"
          y2="135"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <line
          x1="320"
          y1="95"
          x2="375"
          y2="95"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (roomType === "bedroom") {
    return (
      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
        role="img"
        aria-label="Bedroom furniture silhouette"
      >
        {/* Bed frame */}
        <rect
          x="100"
          y="150"
          width="200"
          height="100"
          rx="4"
          fill="rgba(0,0,0,0.25)"
        />
        {/* Headboard */}
        <rect
          x="100"
          y="120"
          width="200"
          height="34"
          rx="6"
          fill="rgba(0,0,0,0.3)"
        />
        {/* Mattress */}
        <rect
          x="108"
          y="155"
          width="184"
          height="80"
          rx="3"
          fill="rgba(255,255,255,0.1)"
        />
        {/* Pillows */}
        <rect
          x="120"
          y="158"
          width="65"
          height="30"
          rx="8"
          fill="rgba(255,255,255,0.14)"
        />
        <rect
          x="215"
          y="158"
          width="65"
          height="30"
          rx="8"
          fill="rgba(255,255,255,0.14)"
        />
        {/* Duvet line */}
        <rect
          x="108"
          y="196"
          width="184"
          height="39"
          rx="3"
          fill="rgba(255,255,255,0.07)"
        />
        {/* Side tables */}
        <rect
          x="50"
          y="160"
          width="45"
          height="40"
          rx="3"
          fill="rgba(0,0,0,0.28)"
        />
        <rect
          x="305"
          y="160"
          width="45"
          height="40"
          rx="3"
          fill="rgba(0,0,0,0.28)"
        />
        {/* Lamps on tables */}
        <rect
          x="68"
          y="140"
          width="10"
          height="22"
          rx="2"
          fill="rgba(0,0,0,0.25)"
        />
        <ellipse cx="73" cy="138" rx="14" ry="7" fill="rgba(0,0,0,0.22)" />
        <rect
          x="322"
          y="140"
          width="10"
          height="22"
          rx="2"
          fill="rgba(0,0,0,0.25)"
        />
        <ellipse cx="327" cy="138" rx="14" ry="7" fill="rgba(0,0,0,0.22)" />
        {/* Window */}
        <rect
          x="165"
          y="50"
          width="70"
          height="55"
          rx="3"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="50"
          x2="200"
          y2="105"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <line
          x1="165"
          y1="76"
          x2="235"
          y2="76"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (roomType === "kitchen") {
    return (
      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
        role="img"
        aria-label="Kitchen furniture silhouette"
      >
        {/* Counter top */}
        <rect
          x="60"
          y="185"
          width="280"
          height="12"
          rx="2"
          fill="rgba(0,0,0,0.35)"
        />
        {/* Lower cabinets */}
        <rect
          x="60"
          y="197"
          width="130"
          height="65"
          rx="2"
          fill="rgba(0,0,0,0.28)"
        />
        <rect
          x="196"
          y="197"
          width="144"
          height="65"
          rx="2"
          fill="rgba(0,0,0,0.28)"
        />
        {/* Cabinet doors */}
        <rect
          x="65"
          y="202"
          width="55"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="126"
          y="202"
          width="58"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="200"
          y="202"
          width="65"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="271"
          y="202"
          width="64"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        {/* Upper cabinets */}
        <rect
          x="60"
          y="85"
          width="280"
          height="75"
          rx="3"
          fill="rgba(0,0,0,0.28)"
        />
        <rect
          x="65"
          y="89"
          width="85"
          height="65"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="156"
          y="89"
          width="85"
          height="65"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="247"
          y="89"
          width="88"
          height="65"
          rx="2"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        {/* Sink */}
        <rect
          x="182"
          y="174"
          width="70"
          height="16"
          rx="3"
          fill="rgba(0,0,0,0.35)"
        />
        <ellipse cx="217" cy="175" rx="20" ry="6" fill="rgba(0,0,0,0.3)" />
        {/* Stove burners */}
        <circle cx="95" cy="170" r="10" fill="rgba(0,0,0,0.3)" />
        <circle cx="130" cy="170" r="10" fill="rgba(0,0,0,0.3)" />
        {/* Handles */}
        <rect
          x="88"
          y="228"
          width="30"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.15)"
        />
        <rect
          x="149"
          y="228"
          width="30"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.15)"
        />
        <rect
          x="220"
          y="228"
          width="30"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.15)"
        />
        <rect
          x="290"
          y="228"
          width="30"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
    );
  }

  // office
  return (
    <svg
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      role="img"
      aria-label="Office furniture silhouette"
    >
      {/* Desk */}
      <rect
        x="80"
        y="175"
        width="240"
        height="12"
        rx="3"
        fill="rgba(0,0,0,0.35)"
      />
      <rect
        x="80"
        y="187"
        width="10"
        height="65"
        rx="2"
        fill="rgba(0,0,0,0.28)"
      />
      <rect
        x="310"
        y="187"
        width="10"
        height="65"
        rx="2"
        fill="rgba(0,0,0,0.28)"
      />
      <rect
        x="85"
        y="187"
        width="230"
        height="5"
        rx="2"
        fill="rgba(0,0,0,0.15)"
      />
      {/* Monitor */}
      <rect
        x="160"
        y="120"
        width="100"
        height="58"
        rx="4"
        fill="rgba(0,0,0,0.4)"
      />
      <rect
        x="164"
        y="124"
        width="92"
        height="50"
        rx="2"
        fill="rgba(30,30,60,0.6)"
      />
      {/* Screen glow */}
      <rect
        x="168"
        y="128"
        width="84"
        height="42"
        rx="1"
        fill="rgba(100,150,255,0.08)"
      />
      <rect
        x="198"
        y="178"
        width="24"
        height="8"
        rx="2"
        fill="rgba(0,0,0,0.35)"
      />
      <rect
        x="188"
        y="184"
        width="44"
        height="4"
        rx="2"
        fill="rgba(0,0,0,0.3)"
      />
      {/* Keyboard */}
      <rect
        x="160"
        y="190"
        width="100"
        height="12"
        rx="3"
        fill="rgba(0,0,0,0.28)"
      />
      {/* Chair */}
      <rect
        x="170"
        y="230"
        width="60"
        height="42"
        rx="8"
        fill="rgba(0,0,0,0.3)"
      />
      <rect
        x="175"
        y="210"
        width="50"
        height="24"
        rx="6"
        fill="rgba(0,0,0,0.28)"
      />
      <rect
        x="166"
        y="228"
        width="8"
        height="35"
        rx="2"
        fill="rgba(0,0,0,0.25)"
      />
      <rect
        x="226"
        y="228"
        width="8"
        height="35"
        rx="2"
        fill="rgba(0,0,0,0.25)"
      />
      <ellipse cx="200" cy="272" rx="25" ry="5" fill="rgba(0,0,0,0.2)" />
      {/* Bookshelf */}
      <rect
        x="305"
        y="100"
        width="60"
        height="90"
        rx="3"
        fill="rgba(0,0,0,0.28)"
      />
      <rect
        x="308"
        y="104"
        width="54"
        height="18"
        rx="1"
        fill="rgba(255,255,255,0.06)"
      />
      <rect
        x="308"
        y="126"
        width="54"
        height="18"
        rx="1"
        fill="rgba(255,255,255,0.06)"
      />
      <rect
        x="308"
        y="148"
        width="54"
        height="18"
        rx="1"
        fill="rgba(255,255,255,0.06)"
      />
      {/* Books */}
      <rect
        x="311"
        y="107"
        width="8"
        height="12"
        rx="1"
        fill="rgba(180,120,60,0.4)"
      />
      <rect
        x="321"
        y="107"
        width="6"
        height="12"
        rx="1"
        fill="rgba(60,120,180,0.4)"
      />
      <rect
        x="329"
        y="107"
        width="9"
        height="12"
        rx="1"
        fill="rgba(120,60,180,0.35)"
      />
      {/* Plant */}
      <rect
        x="40"
        y="185"
        width="16"
        height="30"
        rx="4"
        fill="rgba(0,0,0,0.28)"
      />
      <ellipse cx="48" cy="182" rx="20" ry="18" fill="rgba(0,0,0,0)" />
      <path
        d="M48 182 Q28 160 35 145 Q50 170 48 182Z"
        fill="rgba(40,100,40,0.45)"
      />
      <path
        d="M48 182 Q68 158 62 143 Q48 168 48 182Z"
        fill="rgba(50,120,50,0.45)"
      />
      <path
        d="M48 182 Q22 175 20 158 Q40 172 48 182Z"
        fill="rgba(35,90,35,0.4)"
      />
      <path
        d="M48 182 Q75 172 76 156 Q58 170 48 182Z"
        fill="rgba(45,110,45,0.4)"
      />
      {/* Window */}
      <rect
        x="35"
        y="100"
        width="60"
        height="70"
        rx="3"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
      <line
        x1="65"
        y1="100"
        x2="65"
        y2="170"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1.5"
      />
      <line
        x1="35"
        y1="135"
        x2="95"
        y2="135"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RoomPreview({ wallColor, flooringColor, roomType }: RoomPreviewProps) {
  const leftWallColor = darkenHex(wallColor, 0.18);
  const rightWallColor = darkenHex(wallColor, 0.1);
  const ceilingColor = lightenHex(wallColor, 0.55);

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* Back wall */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: wallColor }}
      />

      {/* Ceiling */}
      <div
        className="absolute top-0 left-0 right-0 transition-colors duration-500"
        style={{
          height: "22%",
          backgroundColor: ceilingColor,
          clipPath: "polygon(0 0, 100% 0, 78% 100%, 22% 100%)",
        }}
      />

      {/* Left wall */}
      <div
        className="absolute top-0 left-0 bottom-0 transition-colors duration-500"
        style={{
          width: "24%",
          backgroundColor: leftWallColor,
          clipPath: "polygon(0 0, 100% 14%, 100% 86%, 0 100%)",
        }}
      />

      {/* Right wall */}
      <div
        className="absolute top-0 right-0 bottom-0 transition-colors duration-500"
        style={{
          width: "24%",
          backgroundColor: rightWallColor,
          clipPath: "polygon(0 14%, 100% 0, 100% 100%, 0 86%)",
        }}
      />

      {/* Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-colors duration-500"
        style={{
          height: "30%",
          backgroundColor: flooringColor,
          clipPath: "polygon(24% 0, 76% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Floor highlight/sheen */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
          clipPath: "polygon(24% 0, 76% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Furniture silhouettes */}
      <RoomFurnitureSilhouette roomType={roomType} />

      {/* Ambient light glow on back wall */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "24%",
          right: "24%",
          bottom: "30%",
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Corner shadows for depth */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "30%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.20) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "30%",
          height: "100%",
          background:
            "linear-gradient(-90deg, rgba(0,0,0,0.15) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ============================================================
   ROOM VISUALIZER COMPONENT
   ============================================================ */

function RoomVisualizer() {
  const [roomType, setRoomType] = useState<RoomType>("living");
  const [style, setStyle] = useState<DesignStyle>("Modern");
  const [selectedColorId, setSelectedColorId] = useState<string>("ivory-white");
  const [flooring, setFlooring] = useState<FlooringType>("Marble");
  const [activeSuggestion, setActiveSuggestion] = useState<number | null>(0);
  const [badge, setBadge] = useState<{
    text: string;
    visible: boolean;
  }>({ text: "", visible: false });
  const badgeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedColor =
    WALL_COLORS.find((c) => c.id === selectedColorId) ?? WALL_COLORS[0];
  const flooringColor = FLOORING_COLORS[flooring];

  // Show a "Design Applied" badge on changes
  const showBadge = (text: string) => {
    if (badgeTimer.current) clearTimeout(badgeTimer.current);
    setBadge({ text, visible: true });
    badgeTimer.current = setTimeout(() => {
      setBadge((prev) => ({ ...prev, visible: false }));
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (badgeTimer.current) clearTimeout(badgeTimer.current);
    };
  }, []);

  const applySuggestion = (suggestion: AISuggestion, idx: number) => {
    setStyle(suggestion.style);
    setSelectedColorId(suggestion.colorId);
    setFlooring(suggestion.flooring);
    setActiveSuggestion(idx);
    showBadge(`${suggestion.label} applied`);
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColorId(colorId);
    setActiveSuggestion(null);
    const c = WALL_COLORS.find((wc) => wc.id === colorId);
    if (c) showBadge(`${c.name} · ${style}`);
  };

  const handleStyleChange = (s: DesignStyle) => {
    setStyle(s);
    setActiveSuggestion(null);
    showBadge(`${s} · ${selectedColor.name}`);
  };

  const handleFlooringChange = (f: FlooringType) => {
    setFlooring(f);
    setActiveSuggestion(null);
    showBadge(`${f} flooring`);
  };

  const handleRoomChange = (r: RoomType) => {
    setRoomType(r);
    setActiveSuggestion(null);
  };

  // Cost estimate for 2BHK (850 sq ft)
  const AREA = 850;
  const paintLitresNeeded = Math.ceil((AREA * 2 * 2) / 40); // ~2 coats, 2 walls factor, ~40 sqft/litre
  const paintCost = paintLitresNeeded * selectedColor.pricePerLitre;
  const flooringMin = FLOORING_PRICES[flooring].min * AREA;
  const flooringMax = FLOORING_PRICES[flooring].max * AREA;
  const falseCeilingArea = Math.round(AREA * 0.4);
  const falseCeilingMin = falseCeilingArea * 85;
  const falseCeilingMax = falseCeilingArea * 130;
  const totalMin = Math.round(
    (paintCost + flooringMin + falseCeilingMin) * 0.85,
  );
  const totalMax = Math.round(
    (paintCost + flooringMax + falseCeilingMax) * 1.15,
  );

  const waMsg = encodeURIComponent(
    `Hi KDI Interior! I used your 3D Visualizer and loved the ${style} + ${selectedColor.name} + ${flooring} design for my ${ROOM_TABS.find((r) => r.id === roomType)?.label}. Please share a quote.`,
  );

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="visualizer"
      className="py-20 lg:py-28 bg-charcoal relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.12_75/0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.12_75/0.04)_0%,transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-2">
            <Wand2 size={14} />
            AI Design Tool
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            3D Room Visualizer
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Visualise your space wall to wall — pick room type, style, wall
            colour & flooring, then get an instant estimate with products used.
          </p>
        </motion.div>

        {/* Main grid: controls left, preview right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ── LEFT PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* A. Room type tabs */}
            <div className="bg-card rounded-xl border border-border p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Room Type
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {ROOM_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleRoomChange(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg border text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      roomType === tab.id
                        ? "border-gold bg-gold/12 text-gold shadow-[0_0_14px_rgba(180,140,60,0.18)]"
                        : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    <span className="text-base">{tab.emoji}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* B. Design style */}
            <div className="bg-card rounded-xl border border-border p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Design Style
              </p>
              <div className="flex flex-wrap gap-2">
                {DESIGN_STYLES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleStyleChange(s)}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                      style === s
                        ? "border-gold bg-gold/12 text-gold"
                        : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* C. Wall color palette */}
            <div className="bg-card rounded-xl border border-border p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Wall Colour
              </p>
              <div className="grid grid-cols-5 gap-3 mb-3">
                {WALL_COLORS.map((color) => (
                  <div key={color.id} className="relative group">
                    <button
                      type="button"
                      onClick={() => handleColorChange(color.id)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                        selectedColorId === color.id
                          ? "border-gold scale-110 shadow-[0_0_10px_rgba(180,140,60,0.5)]"
                          : "border-transparent hover:border-gold/50"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`${color.name} - ${color.berger}`}
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-foreground">
                      {color.name}
                    </div>
                  </div>
                ))}
              </div>
              {/* Selected color info */}
              <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border">
                <div
                  className="w-5 h-5 rounded-full border border-border flex-shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <span className="text-foreground text-sm font-semibold">
                  {selectedColor.berger}
                </span>
                <span className="ml-auto text-gold text-xs font-bold">
                  ₹{selectedColor.pricePerLitre}/L
                </span>
              </div>
            </div>

            {/* D. Flooring */}
            <div className="bg-card rounded-xl border border-border p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Flooring
              </p>
              <div className="flex flex-wrap gap-2">
                {FLOORING_TYPES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => handleFlooringChange(f)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 ${
                      flooring === f
                        ? "border-gold bg-gold/12 text-gold"
                        : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-sm border border-border/50 flex-shrink-0"
                      style={{ backgroundColor: FLOORING_COLORS[f] }}
                    />
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* E. AI Design Suggestions */}
            <div className="bg-card rounded-xl border border-gold/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-gold" />
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">
                  AI Design Suggestions
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {AI_SUGGESTIONS[roomType].map((suggestion, idx) => {
                  const color = WALL_COLORS.find(
                    (c) => c.id === suggestion.colorId,
                  );
                  const isActive = activeSuggestion === idx;
                  return (
                    <button
                      key={suggestion.label}
                      type="button"
                      onClick={() => applySuggestion(suggestion, idx)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 hover:scale-[1.01] ${
                        isActive
                          ? "border-gold bg-gold/10 shadow-[0_0_16px_rgba(180,140,60,0.2)]"
                          : "border-border hover:border-gold/40 bg-background"
                      }`}
                    >
                      {/* Color swatch preview */}
                      <div className="flex gap-1 flex-shrink-0">
                        <div
                          className="w-7 h-10 rounded-l-md border border-border/40"
                          style={{ backgroundColor: color?.hex ?? "#ccc" }}
                        />
                        <div
                          className="w-4 h-10 rounded-r-md border border-border/40"
                          style={{
                            backgroundColor:
                              FLOORING_COLORS[suggestion.flooring],
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-bold text-sm ${isActive ? "text-gold" : "text-foreground"}`}
                        >
                          {suggestion.label}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {suggestion.style} · {color?.name} ·{" "}
                          {suggestion.flooring}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={11} className="text-charcoal" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL: 3D Preview ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Preview wrapper with floating badge */}
            <div className="relative">
              <div className="bg-card rounded-xl border border-border p-3 shadow-card">
                {/* Header bar */}
                <div className="flex items-center justify-between px-1 pb-3">
                  <div className="flex items-center gap-2">
                    <Box size={14} className="text-gold" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      3D Preview
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {selectedColor.name}
                    </span>
                    <span className="text-muted-foreground/40 text-xs mx-1">
                      ·
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {flooring}
                    </span>
                  </div>
                </div>

                {/* Room preview */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${roomType}-${selectedColorId}-${flooring}`}
                    initial={{ opacity: 0.6, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 0.4 }}
                  >
                    <RoomPreview
                      wallColor={selectedColor.hex}
                      flooringColor={flooringColor}
                      roomType={roomType}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Style badge overlay */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/25 text-gold text-xs font-bold px-3 py-1.5 rounded-full">
                    <Sparkles size={11} />
                    {style} Style
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {ROOM_TABS.find((r) => r.id === roomType)?.emoji}{" "}
                    {ROOM_TABS.find((r) => r.id === roomType)?.label}
                  </span>
                </div>
              </div>

              {/* Animated "Design Applied" badge */}
              <AnimatePresence>
                {badge.visible && (
                  <motion.div
                    key="badge"
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-gold text-charcoal text-xs font-bold px-4 py-2 rounded-full shadow-gold whitespace-nowrap pointer-events-none"
                  >
                    ✓ {badge.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Two info cards: Products Used + Cost Estimate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Products Used card */}
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Package size={14} className="text-gold" />
                  <p className="text-xs font-bold text-gold uppercase tracking-widest">
                    Products Used
                  </p>
                </div>
                <div className="space-y-2.5">
                  {[
                    {
                      label: "Wall Paint",
                      value: selectedColor.berger,
                      sub: `Royal Matte · ₹${selectedColor.pricePerLitre}/L`,
                    },
                    {
                      label: "Flooring",
                      value:
                        flooring === "Marble"
                          ? "Italian Marble"
                          : flooring === "Hardwood"
                            ? "Teak Hardwood"
                            : flooring === "Wooden Laminate"
                              ? "Pergo Laminate"
                              : "Johnson Tiles",
                      sub: `₹${FLOORING_PRICES[flooring].min}–${FLOORING_PRICES[flooring].max}/sq ft`,
                    },
                    {
                      label: "False Ceiling",
                      value: "Gyproc Saint-Gobain",
                      sub: "₹85–130/sq ft",
                    },
                    {
                      label: "Wall Putty",
                      value: "Birla White Wallcare",
                      sub: "₹18/kg",
                    },
                    {
                      label: "Hardware",
                      value:
                        style === "Luxury"
                          ? "Hafele Premium"
                          : style === "Classic"
                            ? "Hettich Classic"
                            : "Hettich Standard",
                      sub: "Premium Grade",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 pb-2 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                        {item.label}
                      </span>
                      <span className="text-foreground text-xs font-semibold leading-tight">
                        {item.value}
                      </span>
                      <span className="text-gold text-[10px] font-medium">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Estimate card */}
              <div className="bg-card rounded-xl border border-gold/25 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <IndianRupee size={14} className="text-gold" />
                  <p className="text-xs font-bold text-gold uppercase tracking-widest">
                    Cost Estimate
                  </p>
                </div>
                <p className="text-[10px] text-muted-foreground mb-2.5 font-medium">
                  Based on 2BHK · {AREA} sq ft
                </p>
                <div className="space-y-2 mb-3">
                  {[
                    {
                      label: "Wall Paint",
                      value: `~${formatINR(paintCost)}`,
                      sub: `${paintLitresNeeded}L × ₹${selectedColor.pricePerLitre}`,
                    },
                    {
                      label: "Flooring",
                      value: `${formatINR(flooringMin)}–${formatINR(flooringMax)}`,
                      sub: `${AREA} sq ft`,
                    },
                    {
                      label: "False Ceiling",
                      value: `${formatINR(falseCeilingMin)}–${formatINR(falseCeilingMax)}`,
                      sub: `40% area (${falseCeilingArea} sq ft)`,
                    },
                    {
                      label: "Putty & Primer",
                      value: `~${formatINR(AREA * 18)}`,
                      sub: "₹18/sq ft",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-1 pb-1.5 border-b border-border last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-foreground/80 text-[11px] font-semibold">
                          {row.label}
                        </p>
                        <p className="text-muted-foreground text-[10px]">
                          {row.sub}
                        </p>
                      </div>
                      <span className="text-foreground text-[11px] font-bold flex-shrink-0 text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total range */}
                <div className="bg-gold/10 border border-gold/25 rounded-lg p-3 mb-3">
                  <p className="text-[9px] text-gold font-bold uppercase tracking-widest mb-1">
                    Total Estimate (±15%)
                  </p>
                  <p className="text-gold font-display text-base font-bold leading-tight">
                    {formatINR(totalMin)} – {formatINR(totalMax)}
                  </p>
                </div>

                {/* CTAs */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full bg-gold text-charcoal font-bold py-2.5 rounded-lg hover:bg-gold-light transition-all duration-200 shadow-gold text-xs flex items-center justify-center gap-1.5 mb-2"
                >
                  Get Exact Quote
                  <ChevronRight size={13} />
                </button>
                <a
                  href={`https://wa.me/918588830091?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 border border-[#25D366]/40 text-[#25D366] font-semibold py-2 rounded-lg hover:bg-[#25D366]/8 transition-all duration-200 text-xs"
                >
                  <SiWhatsapp size={13} />
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.20 0.008 60)",
            border: "1px solid oklch(0.28 0.01 75)",
            color: "oklch(0.94 0.015 85)",
          },
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Projects />
        <DesignProcess />
        <Testimonials />
        <CostCalculator />
        <RoomVisualizer />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
