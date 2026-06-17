import { useState, useEffect } from "react";
import { ArrowUp, Award, Calendar, ExternalLink, HelpCircle, ShieldAlert } from "lucide-react";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Chatbot from "./components/Chatbot.tsx";
import QuoteForm from "./components/QuoteForm.tsx";
import ThreeCanvas from "./components/ThreeCanvas.tsx";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor page scroll to highlight scroll-to-top button
  useEffect(() => {
    const handleScrollToggle = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollToggle);
    return () => window.removeEventListener("scroll", handleScrollToggle);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRequestQuoteToggle = () => {
    setShowQuoteModal(!showQuoteModal);
  };

  return (
    <div id="fancy-app-root" className="min-h-screen flex flex-col justify-between relative text-slate-800 overflow-x-hidden bg-[#f8fafc]">
      {/* Interactive 3D Nodes Grid Background */}
      <ThreeCanvas />

      {/* Navigation Header bar and Top Contacts banner */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onRequestQuote={handleRequestQuoteToggle} 
      />

      {/* Primary Dynamic Tab Render Module */}
      <main id="main-content-flow" className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10 w-full animate-fade-in">
        {activeTab === "home" && (
          <Home 
            onRequestQuote={handleRequestQuoteToggle} 
            onNavigateTab={setActiveTab} 
          />
        )}
        {activeTab === "services" && (
          <Services 
            onRequestQuote={handleRequestQuoteToggle} 
          />
        )}
        {activeTab === "about" && (
          <About />
        )}
        {activeTab === "contact" && (
          <Contact />
        )}
      </main>

      {/* Centered Professional Footer */}
      <footer id="app-footer" className="relative z-10 border-t border-slate-200 bg-white py-12 px-4 text-slate-500 mt-20 text-xs text-center shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          
          {/* Footer Logo logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="font-display font-black text-xl text-slate-900 tracking-tight flex items-center gap-1">
              <span>Fancy</span>
              <span className="text-sky-600">Medlogistic</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest leading-none mt-1 font-semibold">
              Secure Medical Logistics • Marrero, Louisiana
            </p>
          </div>

          {/* Quick links loops */}
          <div className="flex flex-wrap justify-center gap-6 font-semibold text-slate-600">
            <button 
              onClick={() => { setActiveTab("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
              className="hover:text-sky-600 cursor-pointer focus:outline-none transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => { setActiveTab("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
              className="hover:text-sky-600 cursor-pointer focus:outline-none transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => { setActiveTab("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
              className="hover:text-sky-600 cursor-pointer focus:outline-none transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => { setActiveTab("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
              className="hover:text-sky-600 cursor-pointer focus:outline-none transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="text-[11px] text-slate-500 space-y-1.5 max-w-md leading-relaxed select-text mt-4">
            <p className="font-medium text-slate-700">
              Dispatch Center: (504) 473-5260 • Email: treshawndawson410@gmail.com
            </p>
            <p>
              © {new Date().getFullYear()} Fancy Medlogistic LLC. Operating in full compliance with local regulatory SLA standards. All rights reserved. Registered medical transport solutions inside Orleans and Jefferson Parish corridors.
            </p>
          </div>

          {/* REQUIRED iWebNext Credit Lines Link */}
          <div className="border-t border-slate-100 pt-6 w-full max-w-sm mt-2 font-semibold">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline font-semibold transition-colors">iWebNext</a>
          </div>
        </div>
      </footer>

      {/* Secure Request Quote Overlay modal */}
      {showQuoteModal && (
        <QuoteForm isModal={true} onClose={handleRequestQuoteToggle} />
      )}

      {/* Collapsible Floating secure AI bot assistant */}
      <Chatbot />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-button"
          onClick={handleScrollToTop}
          className="fixed bottom-24 right-6 w-10 h-10 rounded-full bg-white hover:bg-sky-600 hover:text-white text-sky-600 border border-slate-200 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-35 focus:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}
