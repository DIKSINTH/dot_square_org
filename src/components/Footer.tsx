import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section: Newsletter and Main Links */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start border-b border-gray-800 pb-10">
          {/* Newsletter / CTA */}
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get insights from the experts
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your mail id"
                className="w-full sm:w-2/3 p-3 bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full sm:w-1/3 p-3 bg-blue-600 text-white font-semibold hover:bg-orange-500 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="text-xs text-gray-400">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mr-2 mt-1 accent-blue-600"
                  defaultChecked
                />
                <span className="leading-relaxed">
                  I agree to receive promotional emails and updates from
                  Dotsquares.
                  <a href="#" className="underline hover:text-blue-500">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm lg:pl-16">
            {["Our Company", "Press", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="mb-2 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
            {["Careers", "Partnership", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="mb-2 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
            {["Expertise", "Contact us", "SDG 2023"].map((item) => (
              <a
                key={item}
                href="#"
                className="mb-2 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* --- Location and Capability Center Section --- */}

        {/* Structure: 2-column layout on large screens, stacked on small/medium */}
        <div className="flex flex-col lg:flex-row pt-10 pb-8 gap-8">
          {/* Left Column: Global Offices (4 locations) */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 pr-0 lg:pr-10">
            {/* Office Block Component (repeated 4 times) */}
            {[
              {
                title: "BRIGHTON, UK",
                address:
                  "Unit 2, Allbourne Court, Henfield Road, Albourne, West Sussex, BN6 9FF",
                phone: "+44 1273 575190",
              },
              {
                title: "LONDON, UK",
                address: "Unit 2 Hobbs Court, 2 Jacob Street, London SE1 2BG",
                phone: "+44 208 0901819",
              },
              {
                title: "DUBAI UAE",
                address: "10, Ibcyti 22, Street 35, Al Safa 2 Dubai, UAE",
                phone: "+91 97899 16555",
              },
              {
                title: "USA",
                address: "6701 Democracy Blvd. Suite 300, Bethesda, MD 20817",
                phone: "+1 301 563 9488",
              },
              {
                title: "AUSTRALIA",
                address: "11/475 Blackburn Road, Mount Waverley, VIC 3149",
                phone: "+61 3 9511 5598",
              },
            ].map((office, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-lg font-bold mb-1 text-gray-100">
                  {office.title}
                </h3>
                <p className="text-sm text-gray-400">{office.address}</p>
                <p className="text-sm font-semibold text-gray-300">
                  {office.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: India Capability Center */}
          <div className="lg:w-2/5 pl-0 lg:pl-8 lg:border-l border-gray-800">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                INDIA
                <br />
                Dotsquares Global Capability Center
              </h3>

              <p className="text-sm text-gray-400">
                CP4-228, 229, Apparel Park, Mahal Road (Hare Krishna Marg)
                Jagatpura, Jaipur, Rajasthan, India 302017
              </p>

              <p className="text-sm font-semibold text-gray-300">
                +91 98290 29555
              </p>

              <h4 className="text-sm font-bold mt-4">
                For Job & Internship enquiry
              </h4>
              <p className="text-sm font-semibold text-gray-300">
                +91 97899 32555
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Legal and Certification Section --- */}

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
            {/* Left/Top Legal Links and Registration Info */}
            <div className="mb-4 lg:mb-0 text-sm">
              <div className="flex flex-wrap gap-x-4 mb-2 font-semibold text-gray-300">
                <a href="#" className="hover:text-blue-500">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-blue-500">
                  Privacy
                </a>
                <a href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:text-blue-500">
                  Shipping Policy
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Registered in England & Wales No. 04381390 | VAT Reg. 858 8551
                51
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Dotsquares and the Dotsquares logo are trademarks of Dotsquares
                Ltd., with the UK Trademark number (UK0000306651)
              </p>
            </div>

            {/* Right/Bottom Certifications */}
            <div className="flex items-center space-x-4 flex-wrap gap-y-4 justify-start lg:justify-end">
              {/* Image placeholders for the logos. For a real site, these would be proper <img> tags. */}
              <div className="h-16 w-16 bg-gray-900 flex items-center justify-center text-xs text-gray-500 border border-gray-700">
                ISO 27001
              </div>
              <div className="h-16 w-16 bg-gray-900 flex items-center justify-center text-xs text-gray-500 border border-gray-700">
                ISO 9001
              </div>

              <div className="text-right space-y-0.5">
                <p className="text-xs font-semibold text-gray-400">
                  CMMI DEV LML 3
                </p>
                <p className="text-sm font-bold text-gray-200">APPRAISED</p>
                <p className="text-xs text-gray-500">
                  Appraisal #61873 | Exp. Oct 14, 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 text-center text-xs text-gray-500 pt-4 border-t border-gray-900">
          &copy; 2002 - {new Date().getFullYear()} Dotsquares Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
