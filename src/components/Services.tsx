import { useState } from "react";
import { 
  Building2, Sparkles, ThermometerSnowflake, ShieldAlert,
  CalendarCheck2, ShieldCheck, ClipboardCheck, ArrowRight, CheckCircle2,
  Clock3, PackageOpen, HelpCircle, PhoneCall
} from "lucide-react";

interface ServicesProps {
  onRequestQuote: () => void;
}

export default function Services({ onRequestQuote }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const servicesList = [
    {
      id: "specimen",
      title: "Specimen and Laboratory Transport",
      category: "diagnostic",
      icon: <ThermometerSnowflake className="text-sky-600" size={26} />,
      desc: "Temperature-regulated courier loops for biological specimens, blood cultures, plasma vials, pathological tissues, and diagnostic slides.",
      benefits: [
        "Rigorous thermal monitoring: frozen (dry ice cells), refrigerated (chilled packs), and ambient.",
        "Triple-packaging compliance in alignment with OSHA biohazard transport directives.",
        "Real-time custodial signature and coordinate logs during handovers."
      ],
      temp: "Ambient / Refrigerated / Frozen",
      badge: "Clinical Priority"
    },
    {
      id: "stat",
      title: "Time-Critical Deliveries (STAT)",
      category: "urgent",
      icon: <Clock3 className="text-indigo-600" size={26} />,
      desc: "Emergency logistics for hospitals, operating theaters, and diagnostic clinics when timing directly influences patient diagnostics or surgery.",
      benefits: [
        "Immediate pickup dispatch within 15 minutes of calling.",
        "Direct point-to-point transit bypassing normal logistics queues.",
        "Instant delivery alert confirmation via email/sms with dispatcher callback."
      ],
      temp: "All Thermal Scales",
      badge: "Immediate Dispatch"
    },
    {
      id: "courier",
      title: "Medical Courier Services",
      category: "admin",
      icon: <ShieldCheck className="text-sky-700" size={26} />,
      desc: "Secure transport of sterile surgical trays, medical implants, dental laboratory casts, confidential healthcare files, and sensitive imaging scans.",
      benefits: [
        "Surgical tray sterilization lockboxes maintaining safe sterile environments.",
        "Uniformed, badged couriers verified under HIPAA security guidelines.",
        "Careful shock-monitored driving practices to protect fragile medical scopes."
      ],
      temp: "Ambient (Room Temp)",
      badge: "SLA Guaranteed"
    },
    {
      id: "pharmacy",
      title: "Pharmaceutical Deliveries",
      category: "pharmaceutical",
      icon: <PackageOpen className="text-indigo-500" size={26} />,
      desc: "Distribution of custom prescription compounding, oncology drugs, routine medical refills, and clinical supplies to pharmacies and residences.",
      benefits: [
        "Lockbox security guidelines for high-value biological products.",
        "Proof of Delivery (POD) signature locks ensuring correct patient delivery.",
        "Rigid temperature protection preventing active drug degradation."
      ],
      temp: "Refrigerated / Ambient",
      badge: "Controlled Secure"
    },
    {
      id: "supply",
      title: "Healthcare Supply Transportation",
      category: "admin",
      icon: <Building2 className="text-sky-600" size={26} />,
      desc: "Bulk shipping of clinical PPE, medical syringes, sterilized fluids, diagnostic test kits, and inter-office linen loads.",
      benefits: [
        "Spacious dry transit vans equipped for heavy-duty hospital warehouse deliveries.",
        "Custom scheduled distribution routes ensuring timely replenishment cycle.",
        "Rigid loading docks handling protocols and cataloged packing slips verification."
      ],
      temp: "No Climate Limit",
      badge: "Bulk / Volume"
    },
    {
      id: "routes",
      title: "Scheduled Medical Logistics Routes",
      category: "routine",
      icon: <CalendarCheck2 className="text-indigo-600" size={26} />,
      desc: "Reliable and consistent daily or weekly inter-facility loops for postal correspondence, medical records archives, files, and standard lab loops.",
      benefits: [
        "Pre-scheduled routing offering significant cost efficiency.",
        "Same dedicated courier option for route continuity and clinic trust.",
        "Seamless lockbox access protocols for secure out-of-hours pickups."
      ],
      temp: "All Thermal Scales",
      badge: "Routine Contract"
    },
    {
      id: "specialized",
      title: "Specialized Healthcare Logistics Solutions",
      category: "diagnostic",
      icon: <Sparkles className="text-sky-500" size={26} />,
      desc: "Custom project coordination for clinical trials, hazardous bio-specimen containment, and specialized medical hardware calibration setups.",
      benefits: [
        "Bespoke logistics plan tailored with specialized consulting teams.",
        "Adherence to Louisiana DHH (Department of Health and Hospitals) specifications.",
        "Full transit asset insurance and absolute liability documentation cataloging."
      ],
      temp: "Custom Specifics",
      badge: "Custom Managed"
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "urgent", label: "STAT / Urgent" },
    { id: "diagnostic", label: "Laboratory & Biospecimen" },
    { id: "routine", label: "Routine loops & Scheduled" },
    { id: "pharmaceutical", label: "Pharmacy Delivery" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? servicesList 
    : servicesList.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-20 text-left">
      {/* Services Header Section */}
      <section id="services-page-header" className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-600 rounded-full text-xs font-mono font-bold uppercase">
          Louisiana HIPAA Compliant Operations
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
          Comprehensive Medical Logistics
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl font-sans">
          At Fancy Medlogistic LLC, we specialize in HIPAA-compliant transportation. All vehicles are equipped with medical spill containment kits, high-density insulated secondary containers, and real-time electronic chain of custody tracking systems. 
        </p>
      </section>

      {/* Category Filter Pills */}
      <div id="services-filter-row" className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none ${
              selectedCategory === cat.id
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/15"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Structured Services Grid */}
      <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((svc) => (
          <div 
            key={svc.id} 
            className="glass rounded-2xl p-6.5 border border-slate-100 flex flex-col justify-between space-y-6 hover:border-sky-200 transition-all duration-300 group hover:shadow-lg"
          >
            <div className="space-y-5">
              {/* Card Title Row */}
              <div className="flex justify-between items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-sky-200 transition-colors">
                  {svc.icon}
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase py-0.5 px-2.5 bg-slate-50 text-slate-500 rounded-full border border-slate-200">
                    {svc.badge}
                  </span>
                  <span className="text-[10px] text-sky-600 font-mono font-semibold flex items-center gap-1">
                    ❄️ {svc.temp}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {svc.desc}
                </p>
              </div>

              {/* Specific handling benefits */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  Clinical Protocols
                </h4>
                <ul className="space-y-2">
                  {svc.benefits.map((b, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-500 leading-relaxed font-sans">
                      <CheckCircle2 size={13} className="text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full py-3 rounded-full bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 hover:border-sky-200 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none"
              >
                <span>Request Quote for this loop</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Logistics compliance section */}
      <section id="compliance-block" className="glass p-8 sm:p-10 rounded-2xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-tr from-white to-sky-50 text-left shadow-lg">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-1 px-2 text-[10px] font-mono text-sky-600 bg-sky-50 rounded border border-sky-100 font-bold uppercase">
              Regulatory SLA
            </span>
            <span className="text-xs text-slate-500 font-semibold">• OSHA & HIPAA Compliant</span>
          </div>
          <h3 className="font-display font-bold text-xl text-slate-900">
            Secure Lockbox & Out-of-Hours Specimen Pickups
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-2xl font-sans">
            Do you need laboratory specimen collection early in the morning before regular clinic hours? We coordinate secure lockbox retrieval using dual-verification token keys. No keys are left on site, and scanning of biospecimen tags occurs at the pickup lockbox to confirm storage conditions instantly.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <a
            href="tel:5044735260"
            className="w-full py-4 text-center bg-sky-600 hover:bg-sky-700 text-white rounded-full font-display font-bold text-xs tracking-wider uppercase shadow-md shadow-sky-600/15 cursor-pointer transition-colors block border-0"
          >
            Dispatch Desk: (504) 473-5260
          </a>
          <button
            onClick={onRequestQuote}
            className="w-full py-4 text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-full font-display font-semibold text-xs tracking-wide uppercase cursor-pointer transition-colors"
          >
            Request secure Loops Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
