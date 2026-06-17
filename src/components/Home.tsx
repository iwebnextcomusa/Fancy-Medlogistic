import { useState } from "react";
import { 
  Truck, ShieldCheck, Clock, Layers, Award, 
  MapPin, Check, ChevronDown, ChevronUp, Star,
  DollarSign, Activity, FileCheck, ThermometerSnowflake
} from "lucide-react";
import { motion } from "motion/react";

interface HomeProps {
  onRequestQuote: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function Home({ onRequestQuote, onNavigateTab }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "99.8%", label: "On-Time STAT Response", desc: "For extreme clinical diagnostics and blood bank emergencies." },
    { value: "100%", label: "HIPAA Compliant", desc: "Every courier is certified and retrained quarterly on clinical privacy." },
    { value: "24/7/365", label: "Operations Window", desc: "Round-the-clock live phone dispatch and secure active custody tracking." },
    { value: "Marrero, LA", label: "Local Headquarters", desc: "Deeply familiar with Orleans, Jefferson, and Plaquemines parishes." }
  ];

  const featuredServices = [
    {
      title: "Specimen & Lab Transport",
      desc: "Reliable specimen transit featuring ambient, chilled, and frozen thermal preservation maintaining absolute chain of custody.",
      icon: <ThermometerSnowflake className="text-sky-600" size={24} />,
      badge: "Clinical Specialty"
    },
    {
      title: "STAT Time-Critical Deliveries",
      desc: "Immediate emergency response logistics for operating rooms, ICU units, blood banks, and critical pharmacy supplies.",
      icon: <Clock className="text-indigo-600" size={24} />,
      badge: "STAT Response"
    },
    {
      title: "Medical Courier Services",
      desc: "Secure transport of diagnostics, surgical trays, clinical documents, blood vials, and specialized medical paperwork.",
      icon: <ShieldCheck className="text-sky-700" size={24} />,
      badge: "Highly Secure"
    },
    {
      title: "Scheduled Medical Loops",
      desc: "Daily or weekly inter-office logs, healthcare supply loops, mail, laundry, and pharmaceutical supply cycles.",
      icon: <Truck className="text-indigo-500" size={24} />,
      badge: "Routine Contract"
    }
  ];

  const whyChooseUs = [
    {
      title: "Climate & Temperature Controls",
      desc: "We utilize double-wall insulated container cells and dry ice inserts. All thermal ranges (frozen, refrigerated, ambient) are monitored rigorously from pick-up to clinical handoff.",
      icon: <ThermometerSnowflake className="text-sky-600" />
    },
    {
      title: "Certified Medical Courier Techs",
      desc: "Our drivers are not generic gig-workers. They are Fancy Medlogistic trained professionals, wearing uniforms and badges, certified in HIPAA, OSHA bloodborne pathogen hazards, and specimen safety handling.",
      icon: <Award className="text-indigo-600" />
    },
    {
      title: "Chain of Custody Barcode Integrity",
      desc: "We establish a zero-gap custodial trail. Real-time verification, digital signature confirmations at receipt, and automatic timestamps log every critical milestone.",
      icon: <LayerGridIcon className="text-sky-500" />
    },
    {
      title: "24/7/365 Direct Marrero Dispatch",
      desc: "No outsourced phone trees. When you dial (504) 473-5260, you talk to a Louisiana logistics manager directly, ensuring instant STAT dispatch without coordinate bottlenecks.",
      icon: <Activity className="text-sky-600" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rachel Bourgeois, MD",
      role: "Laboratory Director",
      org: "Gulf South Clinical Lab",
      text: "Fancy Medlogistic LLC has transformed our laboratory loops. Their couriers are always professional, understand specimen viability parameters, and are consistently on time inside Marrero and New Orleans. Truly reliable!",
      rating: 5
    },
    {
      name: "Marcus Thibodeaux",
      role: "Operations Coordinator",
      org: "Jefferson Parish Specialty Clinic",
      text: "When we need surgical equipment or time-critical biological supplies transferred, we rely on Fancy Medlogistic. Their STAT response time is incredible, and the signature tracking gives our surgical team peace of mind.",
      rating: 5
    },
    {
      name: "Sarah Lawson, PharmD",
      role: "Head pharmacist",
      org: "Marrero Community Pharmacy",
      text: "Security and thermal locks are critical for our biological infusions. Fancy Medlogistic LLC provides exactly the rigorous, complaint medical logistics solutions we trust for daily pharmacy distributions.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "What areas in Louisiana does Fancy Medlogistic serve?",
      a: "Our core headquarters is in Marrero, Louisiana. We serve healthcare providers, clinics, hospitals, pharmacies, laboratories, and imaging centers throughout Marrero, Westwego, Harvey, Gretna, New Orleans, Metairie, Kenner, Belle Chasse, and the surrounding Jefferson and Orleans parishes."
    },
    {
      q: "How does the company ensure HIPAA and OSHA compliance?",
      a: "Every courier undergoes formal HIPAA privacy training and OSHA bloodborne pathogens safety certification. We supply all vehicles with certified spill kits, Biohazard secondary containment coolers, absolute temperature seals, and digital chain of custody tools."
    },
    {
      q: "What temperature ranges can you accommodate for specimen transit?",
      a: "We support three primary medical thermal bands: Ambient / Room Temperature (15°C to 25°C), Refrigerated / Chilled (2°C to 8°C using insulated packs), and Frozen (using dry ice containment cells -20°C or below)."
    },
    {
      q: "Are the courier services available for late-night STAT emergencies?",
      a: "Yes. We operate 24/7/365. Medical critical needs do not stick to business hours. Our dispatch team is available at (504) 473-5260 at any hour of the night, weekend, or holiday for immediate response."
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero Section Section */}
      <section id="homepage-hero-section" className="relative min-h-[85vh] flex items-center pt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-mono font-bold tracking-wide uppercase">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
              24/7 Medical Logistics & Dispatch
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
              Reliable Medical <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600">
                Logistics Solutions
              </span><br />
              You Can Trust
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-sans">
              Based in Marrero, Louisiana, Fancy Medlogistic LLC provides trustworthy, compliant, and secure medical transportation services. We support local clinics, labs, hospitals, and pharmacies with temperature-monitored, time-sensitive medical courier loops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center border-0"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigateTab("contact")}
                className="px-8 py-4 rounded-full font-display font-bold text-sm tracking-widest uppercase border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center"
              >
                Contact Us
              </button>
            </div>

            {/* Quick trust metrics row */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg mt-8">
              <div>
                <span className="block text-xl font-extrabold text-slate-900">99.8%</span>
                <span className="block text-[11px] text-slate-500 font-mono tracking-wider uppercase font-semibold">On-time SLA</span>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-slate-900">100%</span>
                <span className="block text-[11px] text-slate-500 font-mono tracking-wider uppercase font-semibold">HIPAA Cert</span>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-slate-900">Active</span>
                <span className="block text-[11px] text-slate-500 font-mono tracking-wider uppercase font-semibold">Thermal Logs</span>
              </div>
            </div>
          </div>

          {/* Right Floating Badge Column */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
            <div className="relative w-72 h-72 rounded-3xl bg-white border border-slate-100 shadow-xl p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl rounded-full"></div>
              
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-mono bg-sky-50 border border-sky-100 text-sky-600 px-2.5 py-1 rounded-full uppercase tracking-widest font-semibold">
                  Secure-Log
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-sky-600 font-mono font-semibold tracking-wider">
                  Marrero Courier Hub
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                  Prompt STAT delivery guarantees in Jefferson parish.
                </h3>
                <p className="text-xs text-slate-500">
                  Reliable chain of custody and specialized insulated transportation.
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 text-[11px] text-slate-500 font-mono font-semibold">
                <span>Dispatch: 24/7 hotline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Showcase Ticker */}
      <section id="trust-ticker-section" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-slate-100 hover:border-sky-500/30 hover:shadow-lg transition-all duration-300 group">
              <span className="text-3xl font-display font-extrabold text-sky-600 block tracking-tight group-hover:scale-105 transition-transform duration-300">
                {st.value}
              </span>
              <span className="text-sm font-bold text-slate-800 block mt-1.5">
                {st.label}
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services Brief Grid */}
      <section id="services-brief-section" className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs text-sky-600 font-mono font-bold tracking-widest uppercase block">
              ✦ Medical Courier & Logistical Prowess
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Our Core Logistics Capabilities
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Fancy Medlogistic LLC adheres to clinical protocols. We manage transportation of patient specimens, pharmaceutical compounds, sterile surgical packs, and diagnostics.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab("services")}
            className="text-xs font-mono font-bold tracking-wider uppercase text-sky-600 hover:text-sky-700 flex items-center gap-1 bg-sky-50 px-4.5 py-2.5 rounded-full border border-sky-100 transition-all cursor-pointer"
          >
            Explore All Services &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((svc, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:scale-[1.02] hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-left relative group">
              <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 uppercase font-semibold">
                {svc.badge}
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-sky-300 transition-colors">
                  {svc.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => onNavigateTab("services")}
                className="text-[11px] font-mono text-sky-600 mt-5 flex items-center gap-1 group-hover:underline transition-all text-left bg-transparent border-0 p-0 cursor-pointer focus:outline-none font-semibold"
              >
                Learn benefits &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us (Compliance Focus) */}
      <section id="why-choose-us-section" className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Graphics card */}
        <div className="lg:col-span-5 order-last lg:order-first">
          <div className="relative glass p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
            <span className="text-[10px] font-mono bg-sky-50 text-sky-600 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold border border-sky-100">
              Quality Compliance Charter
            </span>
            <h3 className="text-xl font-display font-extrabold text-slate-900 text-left">
              Safe. Reliable. 100% HIPAA Logged.
            </h3>
            <div className="space-y-4 text-left text-xs text-slate-600">
              <div className="flex gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/80">
                <div className="text-sky-600 mt-0.5"><Check size={14} /></div>
                <p><strong>Insulated thermal carriers:</strong> Monitored cool packs prevent biological specimen decay inside hot Louisiana weather.</p>
              </div>
              <div className="flex gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/80">
                <div className="text-sky-600 mt-0.5"><Check size={14} /></div>
                <p><strong>Certified spill kits:</strong> Fully outfitted response units for biological hazard spill handling.</p>
              </div>
              <div className="flex gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/80">
                <div className="text-sky-600 mt-0.5"><Check size={14} /></div>
                <p><strong>Lockbox integration:</strong> Structured pickup access protocols for out-of-hours clinic labs collections.</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Marrero Licensing • LLC</span>
              <span>SLA GUARANTEES</span>
            </div>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="space-y-3">
            <span className="text-xs text-sky-600 font-mono font-bold tracking-widest uppercase block">
              ✦ Built On Trustworthy Parameters
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Marrero Healthcare Providers Select Fancy Medlogistic
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Medical logistics requires precision. When a patient's biospecimen or critical oncology prescription is in transit, margin for error is zero. We built our Marrero operational safety protocols around healthcare provider trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-800 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Healthcare Testimonials Carousel */}
      <section id="testimonials-carousel-section" className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs text-sky-600 font-mono font-bold tracking-widest uppercase block">
            ✦ Voices of Excellence in Southern Louisiana
          </span>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Trusted By Healthcare Clinicians
          </h2>
          <p className="text-slate-500 text-sm">
            Discover how laboratories, surgical coordinators, and clinical pharmacists rate our Marrero logistics dispatch services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-slate-100 backdrop-blur-md flex flex-col justify-between text-left space-y-6 hover:scale-[1.01] hover:shadow-lg transition-transform">
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "{test.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-9 h-9 rounded-full bg-sky-100 uppercase text-xs font-mono font-bold text-sky-700 flex items-center justify-center">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900 leading-none">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-sky-600 font-mono mt-1 block font-semibold">
                    {test.role} • {test.org}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Expandable FAQ Section */}
      <section id="faq-accordian-section" className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs text-sky-600 font-mono font-bold tracking-widest uppercase block">
            ✦ Service Information Center
          </span>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Logistics Queries
          </h2>
          <p className="text-slate-500 text-sm">
            Read details about licensing, out of hours response, and specimen preservation methods.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="glass rounded-xl border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4.5 flex justify-between items-center bg-white hover:bg-slate-50/80 transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-sm text-slate-800 hover:text-slate-900 transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-sky-600">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Ready Contact Call To Action Section */}
      <section id="cta-contact-box" className="glass p-8 sm:p-12 rounded-3xl border border-slate-100 max-w-6xl mx-auto text-center space-y-6 relative overflow-hidden bg-gradient-to-tr from-white to-sky-50 shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-sky-500/5 blur-3xl rounded-full"></div>
        <div className="space-y-3 relative">
          <span className="text-xs font-mono font-bold text-sky-600 tracking-widest uppercase">
            Let's Setup Your Courier Loops Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Secure Louisiana Logistics Excellence Now
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Fancy Medlogistic LLC coordinates daily clinic loops, specimen transport routes, and critical STAT responses from our Marrero headquarters. Contact our dispatch desk directly to secure courier slots.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative">
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4.5 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 cursor-pointer transition-all hover:scale-105 duration-300 border-0"
          >
            Get a Logistics Quote
          </button>
          <a
            href="tel:5044735260"
            className="w-full sm:w-auto px-8 py-4.5 rounded-full font-display font-bold text-sm tracking-wider uppercase border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2"
          >
            <Clock size={16} className="text-sky-600 animate-pulse" />
            <span>Call Hotline: (504) 473-5260</span>
          </a>
        </div>
      </section>
    </div>
  );
}

// Compact helper sub-component inside the same file for local styling (Interconnected icon)
function LayerGridIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
