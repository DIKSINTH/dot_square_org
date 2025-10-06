import React, { useState } from "react";

// Define the interface for form data (optional but good practice for TSX)
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  requirement: string;
}

const ContactSection: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    requirement: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send formData to an API endpoint
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    // Optionally reset the form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      requirement: "",
    });
  };

  // --- Sub-component for a single text input field ---
  const FormInput: React.FC<{
    name: keyof FormData;
    placeholder: string;
    required?: boolean;
  }> = ({ name, placeholder, required = false }) => (
    <input
      type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
      name={name}
      placeholder={placeholder}
      value={formData[name] as string}
      onChange={handleChange}
      required={required}
      className="w-full bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 placeholder-gray-500"
      style={{ borderRadius: 0 }} // Ensure sharp corners as in the image
    />
  );

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout: 1 column on mobile/tablet, 2 columns on desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          {/* --- Left Column: Text Content --- */}
          <div className="text-white mb-12 lg:mb-0">
            <p className="text-sm uppercase text-blue-500 tracking-[0.2em] font-semibold mb-4">
              CONTACT US
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Get Customized Solutions, Recommendations, and Estimates for Your
              Requirements.
            </h1>

            {/* Confidentiality and NDA section */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row sm:gap-8">
              <div className="flex items-center text-lg text-green-500 font-medium mb-3 sm:mb-0">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center text-lg text-green-500 font-medium">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>We sign NDA</span>
              </div>
            </div>

            {/* Email Contact Section */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex items-center">
              <svg
                className="w-8 h-8 text-white mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"
                ></path>
              </svg>
              <div>
                <p className="text-sm text-gray-400">Or Reach Out To Us At</p>
                <a
                  href="mailto:office@dotsquares.com"
                  className="text-white text-xl font-bold hover:text-blue-500 transition-colors duration-200"
                >
                  office@dotsquares.com
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="w-full">
            <p className="text-white text-lg font-medium mb-6">
              Fill out the form and we will contact you
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Two-column layout for name/email and phone/company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput name="fullName" placeholder="Full Name*" required />
                <FormInput name="email" placeholder="Email*" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput name="phone" placeholder="Phone Number*" required />
                <FormInput name="companyName" placeholder="Company Name" />
              </div>

              {/* Requirement Textarea */}
              <div>
                <textarea
                  name="requirement"
                  placeholder="Your Requirement*"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows={8} // Provides a large input area as seen in the image
                  required
                  className="w-full bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 placeholder-gray-500 resize-none"
                  style={{ borderRadius: 0 }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white border border-white text-lg font-medium py-3 tracking-wider transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  style={{ borderRadius: 0 }}
                >
                  BOOK A Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
