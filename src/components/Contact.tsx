import { useState, ChangeEvent, FormEvent } from "react";
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  Send, CheckCircle, Info, ExternalLink 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const businessHours = [
    { days: "STAT On-Call Emergency", hours: "24 Hours / 7 Days / 365" },
    { days: "Administrative Dispatch", hours: "Mon - Fri: 8:00 AM - 6:00 PM" },
    { days: "Courier Loops Pickup", hours: "Custom Scheduled (Standard loops run Mon-Sun)" },
    { days: "Louisiana Holidays", hours: "Active for pre-committed contracts" }
  ];

  return (
    <div className="space-y-16 text-left font-sans">
      {/* Contact Introduction Header */}
      <section id="contact-header" className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-600 rounded-full text-xs font-mono font-bold uppercase">
          Marrero Logistics Dispatch Center
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
          Establish Contact with Our Dispatch
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl font-sans">
          Do you need immediate STAT specimen collection or want to establish scheduled inter-office loops for your Marrero medical clinics? Connect with our logistics operators right away.
        </p>
      </section>

      {/* Grid: Contact Info & Form */}
      <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Coordinates details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass p-6.5 rounded-2xl border border-slate-100 bg-white shadow-sm space-y-6">
            <h3 className="font-display font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
              Fancy Medlogistic LLC
            </h3>

            {/* Direct connection anchors */}
            <div className="space-y-4 text-xs select-text">
              <a 
                href="tel:5044735260" 
                className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-300 transition-all cursor-pointer block shadow-sm group"
              >
                <Phone className="text-sky-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <span className="block font-semibold text-slate-700">Dispatch Telephone</span>
                  <span className="block text-slate-900 font-mono text-sm mt-0.5 font-bold group-hover:text-sky-600">
                    (504) 473-5260
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Available 24/7/365 for medical emergency response
                  </span>
                </div>
              </a>

              <a 
                href="mailto:treshawndawson410@gmail.com"
                className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-300 transition-all cursor-pointer block shadow-sm group"
              >
                <Mail className="text-sky-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <span className="block font-semibold text-slate-700">Administrative Email</span>
                  <span className="block text-slate-900 font-mono text-xs mt-0.5 group-hover:underline break-all uppercase tracking-wide">
                    treshawndawson410@gmail.com
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    For billing, request for proposals, or contract audits
                  </span>
                </div>
              </a>

              <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                <MapPin className="text-sky-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <span className="block font-semibold text-slate-700">Corporate Address</span>
                  <span className="block text-slate-900 mt-0.5 font-semibold">
                    Marrero, Louisiana
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Optimized highway alignment serving Jefferson & Orleans clinical clusters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours block */}
          <div className="glass p-6.5 rounded-2xl border border-slate-100 bg-white shadow-sm space-y-4">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <Clock className="text-sky-600" size={16} />
              Operating Hours
            </h3>
            <div className="space-y-3 text-xs">
              {businessHours.map((bh, i) => (
                <div key={i} className="flex justify-between items-start gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0 font-sans">
                  <span className="text-slate-700 font-semibold">{bh.days}</span>
                  <span className="text-slate-500 text-right">{bh.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass p-7 rounded-2xl border border-slate-100 bg-white shadow-md relative">
            {submitted ? (
              <div className="text-center py-12 px-2 space-y-4 animate-fade-in text-slate-800">
                <div className="w-14 h-14 rounded-full bg-sky-50 border-2 border-sky-600 flex items-center justify-center mx-auto text-sky-600">
                  <CheckCircle size={30} className="animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Message Logs Transmitted
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-sky-600 font-semibold">{formData.name}</span>. Your message was processed. A Marrero dispatch supervisor will review and respond to <span className="text-sky-600 font-semibold">{formData.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm transition-colors cursor-pointer"
                >
                  Message Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Write Directly to Administration
                  </h3>
                  <p className="text-xs text-slate-500">
                    Use this form for administrative inquiries, contracting questions, or driver audits. For STAT logistics courier deployment, please dial (504) 473-5260 immediately.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700">
                      Primary Contact Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Dr. Jane Bourgeois"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700">
                      Medical Facility / Clinic
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., Ochsner Clinical Loop"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., coordinator@yourfacility.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700">
                      Direct Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., (504) 555-1234"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
                    Your Inquiries Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about volume requirements, preferred schedules, or special lockbox access protocol setup needs..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200 resize-none font-sans"
                  />
                </div>

                <div className="bg-sky-50 p-3 rounded-xl border border-sky-100 flex gap-2.5 items-start text-xs text-slate-600">
                  <Info size={16} className="text-sky-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-sans">
                    If you submit this form, our secure email gateway transfers cataloged copy directly to administrative dispatch logs. Patient data confidentiality is secured under SSL tunnels.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-sky-600/10 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 border-0"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                    {!isSubmitting && <Send size={13} />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 3. High Fidelity Stylized Map Container Section */}
      <section id="embedded-map-section" className="space-y-6">
        <div className="space-y-1.5 text-left">
          <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            📍 Marrero Operations Coverage Grid
          </h3>
          <p className="text-xs text-slate-500 font-sans">
            Below is our primary dispatch radius centering Marrero, Louisiana. This highlights instant-SLA STAT transit access to clinics, laboratories, and regional healthcare corridors.
          </p>
        </div>

        {/* Embedded Interactive Stylized map container representing West-bank / New Orleans metropolitan area */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden p-3 relative h-80 sm:h-96 shadow-inner bg-slate-100">
          <div className="absolute inset-0 bg-[#f8fafc] opacity-95 -z-10"></div>
          
          {/* Stylized vector graphics layout inside map */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none">
            {/* Compass vector / grid nodes indicating logistics */}
            <div className="w-[500px] h-[500px] rounded-full border border-dashed border-sky-500/30 flex items-center justify-center animate-spin-slow">
              <div className="w-[350px] h-[350px] rounded-full border border-dashed border-sky-500/20 flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full border border-dashed border-sky-500/10"></div>
              </div>
            </div>
          </div>

          {/* Interactive grid locations */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between select-none">
            {/* Top row Parish logs */}
            <div className="flex justify-between text-[11px] font-mono text-slate-400 font-bold">
              <span>N 29° 54' • W 90° 06'</span>
              <span>JEFFERSON PARISH SECTOR</span>
            </div>

            {/* Custom Central Map pins and interactive indicators */}
            <div className="relative flex-1 flex items-center justify-center">
              {/* Marrero Hub Center */}
              <div className="absolute flex flex-col items-center">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60"></span>
                  <div className="relative rounded-full h-4.5 w-4.5 bg-gradient-to-tr from-sky-500 to-indigo-500 border border-white shadow-lg flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="bg-slate-900 text-[10px] font-bold text-white px-2.5 py-1.5 rounded-full border border-slate-800 font-mono mt-1 whitespace-nowrap tracking-wide select-none shadow-lg">
                  📍 Fancy Medlogistic HQ, Marrero LA
                </div>
              </div>

              {/* Transit vectors branches representing Ochsner or West-bank loops */}
              <div className="absolute top-1/4 left-1/4 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">Westwego Core</span>
              </div>

              <div className="absolute bottom-1/4 right-1/4 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">Belle Chasse Clinic</span>
              </div>

              <div className="absolute top-1/3 right-1/3 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">New Orleans CBD Labs</span>
              </div>

              <div className="absolute bottom-1/3 left-1/3 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">Harvey Medical Hub</span>
              </div>
            </div>

            {/* Bottom row Parish logs */}
            <div className="flex justify-between items-center bg-white/90 p-3 rounded-xl border border-slate-200 select-text shadow-sm">
              <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                🌐 Louisiana GIS Coordinates mapping is active • SLA Dispatch Core
              </span>
              <a 
                href="https://google.com/maps?q=Marrero,+Louisiana"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-mono font-bold text-sky-600 hover:text-sky-700 hover:underline flex items-center gap-0.5"
              >
                <span>Google Map Direct</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
