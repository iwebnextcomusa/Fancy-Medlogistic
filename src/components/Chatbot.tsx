import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Hourglass, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! I am your Fancy Medlogistic Assistant. How can I assist you with your medical transport, STAT specimen logistics, or pharmaceutical delivery needs today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts with instant responses via Gemini API
  const quickPrompts = [
    "Are you available 24/7?",
    "Do you handle refrigerated lab specimens?",
    "Service areas in Louisiana",
    "How do I request a quote?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setUnreadCount((prev) => prev + 1);
    }
  }, [messages, isOpen]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsgId = "user-" + Date.now();
    const newUserMessage: ChatMessage = {
      id: userMsgId,
      role: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Build request context payload
      const payloadMessages = [...messages, newUserMessage].map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        text: msg.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error("Logistics server connection issues");
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: "assistant-" + Date.now(),
        role: "model",
        text: data.reply || "For secure booking, please call dispatch at (504) 473-5260.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: ChatMessage = {
        id: "err-" + Date.now(),
        role: "model",
        text: "I am experiencing details loading speed issues, but you can get immediate logistics scheduling by calling our 24/7 Marrero dispatch center directly at (504) 473-5260.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="fancy-chatbot-container" className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[360px] sm:w-[400px] h-[480px] sm:h-[510px] max-h-[calc(100vh-100px)] bg-white rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-slate-150 mb-4"
          >
            {/* Chatbot Header */}
            <div className="bg-white px-4 py-4 border-b border-slate-100 flex justify-between items-center text-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100">
                  <Bot size={18} className="text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm tracking-wide flex items-center gap-1.5">
                    Fancy Logistics AI
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-505"></span>
                    </span>
                  </h4>
                  <p className="text-[11px] text-sky-600 font-mono tracking-wider font-semibold">
                    24/7 Secure Medical Dispatch
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Disclaimer Bar */}
            <div className="bg-sky-50/50 px-3 py-1.5 border-b border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-600">
              <ShieldCheck size={12} className="text-sky-600 flex-shrink-0" />
              <span>HIPAA Compliant Assistant. Do not submit patient PHI.</span>
            </div>

            {/* Chat History View */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                      msg.role === "user"
                        ? "bg-sky-600 text-white"
                        : "bg-slate-200 text-slate-600 border border-slate-300"
                    }`}
                  >
                    {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                  </div>

                  {/* Message Bubble */}
                  <div className="max-w-[75%] space-y-1">
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed break-words ${
                        msg.role === "user"
                          ? "bg-sky-600 text-white rounded-tr-none shadow-sm"
                          : "bg-white border border-slate-150 text-slate-800 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-400 block px-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
						minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center flex-shrink-0">
                    <Hourglass size={12} className="animate-spin text-sky-600" />
                  </div>
                  <div className="bg-white border border-slate-150 text-slate-500 px-3.5 py-2 rounded-2xl flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1.5">
                {quickPrompts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(p)}
                    className="text-[11px] bg-white hover:bg-sky-50 hover:text-sky-600 border border-slate-200 hover:border-sky-300 text-slate-600 px-2.5 py-1 rounded-full transition-all cursor-pointer text-left focus:outline-none"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-white border-t border-slate-100 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about STAT dispatch, labs..."
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white text-sm px-3 py-2 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 disabled:hover:bg-sky-600 text-white flex items-center justify-center transition-colors shadow-md shadow-sky-600/10 cursor-pointer focus:outline-none border-0"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Icon */}
      <div className="relative">
        <button
          onClick={handleOpenToggle}
          className="w-14 h-14 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-lg shadow-sky-600/20 hover:scale-105 transition-transform duration-300 pointer-events-auto cursor-pointer border border-sky-500/10"
          aria-label="Open support chat"
        >
          {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        </button>

        {/* Pulse unread badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
            {unreadCount}
          </span>
        )}
      </div>
    </div>
  );
}
