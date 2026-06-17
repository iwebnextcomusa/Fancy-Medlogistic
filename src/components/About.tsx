import { ShieldCheck, HeartPulse, Sparkles, Navigation, CheckCircle } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      title: "Unyielding Safety & Compliance",
      desc: "Our operations strictly align with HIPAA, OSHA Bloodborne Pathogens regulations, and local Louisiana health directives to prevent medical chain of custody gaps.",
      icon: <ShieldCheck className="text-sky-600" size={22} />
    },
    {
      title: "Patient-Focused Reliability",
      desc: "We recognize that behind every specimen vial or clinical prescription is a patient awaiting vital diagnostics. We deliver with care, diligence, and respect.",
      icon: <HeartPulse className="text-indigo-600" size={22} />
    },
    {
      title: "Local Louisiana Expertise",
      desc: "Based in Marrero, we navigate southern Louisiana highways with speed and safety, bypassing commuter congestion to meet tight statutory laboratory timelines.",
      icon: <Navigation className="text-sky-600" size={22} />
    }
  ];

  const servedParishes = [
    { name: "Jefferson Parish", cities: "Marrero, Harvey, Gretna, Westwego, Metairie, Kenner" },
    { name: "Orleans Parish", cities: "New Orleans (CBD, Uptown, Mid-City, East)" },
    { name: "Plaquemines Parish", cities: "Belle Chasse, Port Sulphur" },
    { name: "St. Bernard Parish", cities: "Chalmette, Meraux" },
    { name: "St. Charles Parish", cities: "Luling, Destrehan" },
    { name: "St. Tammany Parish", cities: "Covington, Mandeville, Slidell" }
  ];

  return (
    <div className="space-y-20 text-left font-sans">
      {/* 1. Header Section */}
      <section id="about-intro" className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-600 rounded-full text-xs font-mono font-bold uppercase">
          Louisiana Registered Medical Transport
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
          Trustworthy Healthcare Courier Loops
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
          Based in Marrero, Louisiana, Fancy Medlogistic LLC was established to provide clinics, reference laboratories, medical supply points, and compounding pharmacies with reliable, secure, temperature-controlled courier solutions.
        </p>
      </section>

      {/* 2. Mission Statement & Story */}
      <section id="mission-story" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-1.5">
            <span className="text-xs text-sky-600 font-mono tracking-widest uppercase font-bold">
              Our Visionary Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Securing the Vital Links of Southern Louisiana Care
            </h2>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our mission is simple: <strong>To serve as the most trustworthy, secure medical logistics partner in Marrero and Southern Louisiana.</strong> We achieve this through meticulous driver screening, HIPAA certification trails, certified biological thermal monitoring, and a state-of-the-art dispatch setup.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3 font-sans">
            <h3 className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase">
              Our Medical Service Commitment
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We understand that clinical outcomes rely heavily on safe specimen transportation. Biological materials are delicate; thermal logs cannot be compromised. That's why we maintain 24/7 client dispatch hotline loops to adapt quickly to last-minute STAT requests.
            </p>
          </div>
        </div>

        {/* Right side graphic citation Card */}
        <div className="lg:col-span-5">
          <div className="glass p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-6 relative overflow-hidden bg-gradient-to-tr from-white to-sky-50 shadow-lg">
            <h3 className="font-display font-bold text-slate-900 text-sm">
              Fancy Medlogistic Compliance Standard
            </h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex gap-2.5 items-center">
                <CheckCircle size={14} className="text-sky-600 flex-shrink-0" />
                <span>OSHA Bloodborne Pathogens Trained</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle size={14} className="text-sky-600 flex-shrink-0" />
                <span>Quarterly Driver Audits & SLA Reports</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle size={14} className="text-sky-600 flex-shrink-0" />
                <span>Double-Contained Biohazard Coolers</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle size={14} className="text-sky-600 flex-shrink-0" />
                <span>Uniformed Couriers with Visible ID Badges</span>
              </div>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-center text-[10px] text-sky-600 font-mono tracking-wider font-semibold">
              Serving Clinics, Hospitals, Labs & Pharmacies
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section id="values-grid-block" className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs text-sky-600 font-mono tracking-widest uppercase font-bold">
            ✦ Foundational Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            What Guides Every Route Turn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, i) => (
            <div key={i} className="glass p-6 rounded-xl border border-slate-100 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900">
                {val.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Served Parishes Panel */}
      <section id="parishes-block" className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs text-sky-600 font-mono tracking-widest uppercase font-bold">
            ✦ Geographic Service Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            Parishes We Coordinate Loops In
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            Our Marrero fleet is optimally positioned in Jefferson Parish, enabling rapid highway integration with major New Orleans clinical centers and adjacent parishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servedParishes.map((parish, idx) => (
            <div key={idx} className="glass p-5 rounded-xl border border-slate-100 hover:border-sky-500/15 hover:shadow-md transition-all text-left">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
                {parish.name}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-mono tracking-wide leading-relaxed">
                {parish.cities}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
