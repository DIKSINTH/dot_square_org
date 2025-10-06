import React, { FC, FormEvent } from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Shield, Settings, Headphones } from "lucide-react"; // Icons

const WebDevelopment: FC = () => {
  // ✅ Handle form submit (TypeScript safe)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section - Features */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-semibold text-sm uppercase">
            Web Development Solution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Custom Website Development Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <Code className="w-6 h-6 text-gray-400 mt-1" />
              <p>Custom Web Design & Development</p>
            </div>
            <div className="flex items-start gap-3">
              <Monitor className="w-6 h-6 text-gray-400 mt-1" />
              <p>Responsive and Mobile First Website</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-gray-400 mt-1" />
              <p>Secure and Robust Development</p>
            </div>
            <div className="flex items-start gap-3">
              <Settings className="w-6 h-6 text-gray-400 mt-1" />
              <p>Integration and Migration Services</p>
            </div>
            <div className="flex items-start gap-3">
              <Headphones className="w-6 h-6 text-gray-400 mt-1" />
              <p>Ongoing Support and Maintenance</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <p>Gartner</p>
              <p className="text-yellow-400 font-bold">5.0 ★★★★★</p>
            </div>
            <div className="flex items-center gap-2">
              <p>Clutch</p>
              <p className="text-red-500 font-bold">4.6 ★★★★☆</p>
            </div>
            <div className="flex items-center gap-2">
              <p>HubSpot</p>
              <p className="text-yellow-400 font-bold">5.0 ★★★★★</p>
            </div>
            <div className="flex items-center gap-2">
              <p>Salesforce</p>
              <p className="text-yellow-400 font-bold">5.0 ★★★★★</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="lg:w-1/2 bg-black rounded-2xl p-6 sm:p-10 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-orange-500 font-semibold text-xl mb-2">
            Book Free Consultation
          </h3>
          <p className="text-gray-300 mb-6 text-sm">
            Fill Out the Form and Our Experts Will Contact You Within 24 Hrs.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <textarea
              placeholder="Your Requirement*"
              className="w-full px-4 py-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              Submit Your Requirement!
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        className="mt-12 bg-white rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-black text-center shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-3xl font-bold text-orange-500">600+</p>
          <p className="text-sm">In-House Web/App Developers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-500">70%</p>
          <p className="text-sm">Average Savings on Development Costs</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-500">14K+</p>
          <p className="text-sm">Websites Developed in last 2 decades</p>
        </div>
      </motion.div>
    </section>
  );
};

export default WebDevelopment;
