import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Shield, Activity } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeTab, setActiveTab, onRequestQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Banner Contact Information */}
      <div id="top-contact-banner" className="bg-[#f1f5f9] border-b border-slate-200 text-slate-600 text-xs py-2 px-4 transition-all duration-300 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:5044735260" className="flex items-center gap-1.5 hover:text-sky-600 transition-colors font-medium">
              <Phone size={12} className="text-sky-600" />
              <span>(504) 473-5260</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="mailto:treshawndawson410@gmail.com" className="flex items-center gap-1.5 hover:text-sky-600 transition-colors font-medium">
              <Mail size={12} className="text-sky-600" />
              <span>treshawndawson410@gmail.com</span>
            </a>
          </div>
          <div className="text-sky-600 font-semibold tracking-wide text-[10px] sm:text-xs">
            ✨ Louisiana Certified Medical Courier & Logistics • Marrero, LA
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-sticky-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-200"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Brand Brand */}
          <button
            id="logo-button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-500 flex items-center justify-center shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform duration-300">
              <Shield size={20} className="text-white absolute transition-opacity group-hover:opacity-0 duration-300" />
              <Activity size={20} className="text-white opacity-0 absolute transition-opacity group-hover:opacity-100 duration-300" />
            </div>
            <div>
              <div className="font-display font-extrabold tracking-tight text-xl leading-none flex items-center gap-1">
                <span className="text-slate-900">Fancy</span>
                <span className="text-sky-600">Medlogistic</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block mt-1 font-semibold">
                Secure Logistics LLC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-semibold tracking-wide text-sm transition-all duration-200 cursor-pointer relative py-1.5 focus:outline-none ${
                  activeTab === item.id
                    ? "text-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:block">
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 rounded-full font-display font-bold text-sm tracking-wide bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/10 cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-sky-500/10"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-100 text-slate-700 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Overlay Menu */}
        {mobileMenuOpen && (
          <div id="mobile-dropdown-menu" className="md:hidden absolute top-full left-0 right-0 glass border-b border-slate-200 p-5 space-y-4 shadow-xl flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl font-semibold transition-all ${
                  activeTab === item.id
                    ? "bg-sky-50 text-sky-600 border-l-4 border-sky-500"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3.5 rounded-full font-display font-bold text-center bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/10 focus:outline-none cursor-pointer text-sm"
              >
                Request a Quote
              </button>
            </div>
            <div className="flex flex-col gap-2 items-center text-xs text-slate-500 pt-4 font-mono">
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                📞 (504) 473-5260
              </span>
              <span>📍 Marrero, Louisiana</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
