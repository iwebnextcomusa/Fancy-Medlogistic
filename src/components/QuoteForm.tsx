import { useState, ChangeEvent, FormEvent } from "react";
import { X, Calendar, MapPin, Shield, CheckCircle, Clock } from "lucide-react";

interface QuoteFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function QuoteForm({ isModal = false, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Specimen and Laboratory Transport",
    urgencyLevel: "Same Day Response",
    pickupLocation: "",
    deliveryLocation: "",
    tempReq: "Ambient (Room Temp)",
    additionalDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const keyServices = [
    "Medical Courier Services",
    "Specimen and Laboratory Transport",
    "Time-Critical Deliveries",
    "Pharmaceutical Deliveries",
    "Healthcare Supply Transportation",
    "Scheduled Medical Logistics Routes",
    "Specialized Healthcare Logistics",
  ];

  const urgencyLevels = [
    "STAT / Immediate Critical",
    "Same Day Response",
    "Next Day Priority",
    "Scheduled / Reoccurring Contract",
  ];

  const thermalProfiles = [
    "Ambient (Room Temp)",
    "Refrigerated (2°C - 8°C)",
    "Frozen (-20°C or below)",
    "No thermal restriction",
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable secure dispatch processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const formElement = (
    <div className={`p-6 bg-white rounded-3xl relative ${!isModal ? "border border-slate-100 shadow-md" : ""}`}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-12 px-4 space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-sky-50 border-2 border-sky-600 flex items-center justify-center mx-auto text-sky-600">
            <CheckCircle size={36} className="animate-pulse" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Quote Request Transmitted
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="text-sky-600 font-semibold">{formData.name}</span>. 
              Our Marrero dispatch coordinators have received your request for{" "}
              <span className="text-sky-600 font-semibold">{formData.serviceType}</span>.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto border border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Urgency Level:</span>
              <span className="font-semibold text-sky-600">{formData.urgencyLevel}</span>
            </div>
            <div className="flex justify-between">
              <span>Marrero Dispatch Phone:</span>
              <span className="font-semibold text-slate-900">(504) 473-5260</span>
            </div>
            <div className="flex justify-between">
              <span>Reference Code:</span>
              <span className="font-mono text-[10px] text-sky-600 font-bold">FM-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            A confirmation receipt has been scheduled to email: {formData.email}.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  serviceType: "Specimen and Laboratory Transport",
                  urgencyLevel: "Same Day Response",
                  pickupLocation: "",
                  deliveryLocation: "",
                  tempReq: "Ambient (Room Temp)",
                  additionalDetails: "",
                });
                if (isModal && onClose) onClose();
              }}
              className="px-6 py-2 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Get an Instant Logistics Quote
            </h3>
            <p className="text-xs text-slate-500">
              Submit your logistics specifications for Louisiana clinic, laboratory, or pharmacy loops. We respond with pricing and ETA details promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name-input" className="block text-xs font-semibold text-slate-700">
                Contact Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Dr. John Doe / Nurse Smith"
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="company-input" className="block text-xs font-semibold text-slate-700">
                Clinic, Lab, or Facility Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="company-input"
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Marrero Clinical Lab / Ochsner clinic"
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email-input" className="block text-xs font-semibold text-slate-700">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="comms@yourfacility.com"
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone-input" className="block text-xs font-semibold text-slate-700">
                Contact Phone <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(504) 555-0199"
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="service-select" className="block text-xs font-semibold text-slate-700">
                Logistics Service Required
              </label>
              <select
                id="service-select"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-200"
              >
                {keyServices.map((svc, idx) => (
                  <option key={idx} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="urgency-select" className="block text-xs font-semibold text-slate-700">
                Urgency Tier
              </label>
              <select
                id="urgency-select"
                name="urgencyLevel"
                value={formData.urgencyLevel}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-200"
              >
                {urgencyLevels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="temp-select" className="block text-xs font-semibold text-slate-700">
                Thermal Profile Requirement
              </label>
              <select
                id="temp-select"
                name="tempReq"
                value={formData.tempReq}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-200"
              >
                {thermalProfiles.map((p, idx) => (
                  <option key={idx} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="pickup-input" className="block text-xs font-semibold text-slate-700">
                Pickup Address / Town
              </label>
              <div className="relative">
                <MapPin size={14} className="text-sky-600 absolute left-3 top-3.5" />
                <input
                  id="pickup-input"
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="e.g., Marrero, Louisiana"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="delivery-input" className="block text-xs font-semibold text-slate-700">
                Delivery Address / Destination
              </label>
              <div className="relative">
                <MapPin size={14} className="text-sky-600 absolute left-3 top-3.5" />
                <input
                  id="delivery-input"
                  type="text"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  placeholder="e.g., New Orleans Medical Center"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="details-textarea" className="block text-xs font-semibold text-slate-700">
              Additional Handling instructions / Lockbox Access notes
            </label>
            <textarea
              id="details-textarea"
              name="additionalDetails"
              rows={2}
              value={formData.additionalDetails}
              onChange={handleInputChange}
              placeholder="Specify specimen preservation requirements, critical hours, special instructions..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200 resize-none font-sans"
            />
          </div>

          <div className="bg-sky-50 p-3 rounded-xl border border-sky-100 flex items-center gap-3 text-xs text-slate-600 font-sans">
            <Shield size={24} className="text-sky-600 flex-shrink-0" />
            <span>
              By requesting a logistics quote, your data is transmitted over SSL encryption directly to our secure Marrero dispatch log. No public storage or tracking.
            </span>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-slate-250 text-slate-500 hover:text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-display font-bold text-xs tracking-wider uppercase cursor-pointer hover:scale-[1.01] active:scale-95 transition-all duration-200 disabled:opacity-50 border-0"
            >
              {isSubmitting ? "Processing Dispatch..." : "Submit Logistics Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
        <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
          {formElement}
        </div>
      </div>
    );
  }

  return formElement;
}
