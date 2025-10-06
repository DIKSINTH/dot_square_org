import React, { useEffect, useRef, useState } from "react";
import { X, DollarSign, TrendingUp, Award, Users, Star } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    companyEmail: "",
    companyName: "",
    industry: "",
    budget: "",
    projectBrief: "",
  });

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50);

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Your <span className="text-blue-500">Growth Partner</span> in
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              Digital Innovation
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            {/* Back to page button */}
            <button
              onClick={onClose}
              className="px-3 py-2 text-sm rounded hover:bg-gray-100 transition"
            >
              ← Back to page
            </button>

            {/* X Close button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            {/* Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-blue-500 text-2xl font-bold">💰</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Save Up to 35% on Development Costs
                </h4>
                <p className="text-gray-600 text-sm">
                  Get high-quality solutions without the high overheads —
                  efficient delivery at a fraction of traditional costs.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-blue-500 text-2xl font-bold">📊</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  55% Faster Time-to-Market
                </h4>
                <p className="text-gray-600 text-sm">
                  Our streamlined processes and agile approach ensure your
                  projects go live faster, keeping you ahead of the competition.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-blue-500 text-2xl font-bold">🏆</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  End-to-End Services Under One Roof
                </h4>
                <p className="text-gray-600 text-sm">
                  From ideation to deployment and support we manage the complete
                  development cycle with in-house experts.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-blue-500 text-2xl font-bold">⭐</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  15000+ Clients. 20+ Years. 1000+ Developers.
                </h4>
                <p className="text-gray-600 text-sm">
                  Trusted by businesses of all sizes to deliver measurable
                  outcomes — backed by decades of experience.
                </p>
              </div>
            </div>

            {/* Trustpilot Reviews */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">
                  Excellent
                </div>
                <div className="flex text-green-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Based on 512 reviews
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <div className="flex text-green-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  The Dotsquares team came on the jou...
                </p>
                <p className="text-xs text-gray-600">
                  The Dotsquares team (Surbhi, Navdeep, Subhraj, Ravi and
                  Khushboo) have been brilliant to work with. They are...
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Turn Your Idea Into Reality
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're scaling up or starting fresh, our experts are
                ready to guide you through strategy, design, development, and
                beyond. Reach out — we respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number*"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="companyEmail"
                      placeholder="Company Email*"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                    >
                      <option value="">Industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                    >
                      <option value="">Budget</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="projectBrief"
                    placeholder="Project Brief"
                    value={formData.projectBrief}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-bold text-lg transition-colors duration-200"
                >
                  BOOK A FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
