import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const services = [
    { icon: "💻", name: "Software Development", nav: "/softwaredevelopment" },
    {
      icon: "📱",
      name: "Mobile App Development",
      nav: "/mobileappdevelopment",
    },
    { icon: "🌐", name: "Web Development", nav: "/websitedevelopment" },
    { icon: "🛒", name: "E-commerce Services", nav: "/ecommerceservices" },
    { icon: "🤖", name: "AI/ML Solutions", nav: "/aimlsolutions" },
    { icon: "📊", name: "HubSpot", nav: "/hubspot" },
    { icon: "⚙️", name: "Zoho Solutions", nav: "/zohosolutions" },
    { icon: "☁️", name: "Salesforce Solutions", nav: "/salesforcesolutions" },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Businesses With
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-[#064354] to-[#064354] bg-clip-text text-transparent">
            AI, Data Analytics & Cloud
          </h2>

          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-8">
              Key Areas of Our Expertise
            </h3>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {services.map((service, index) => (
                <a // Changed from <button> to <a>
                  key={index}
                  href={service.nav} // Added href attribute
                  className="bg-transparent border border-gray-600 hover:border-[#064354] hover:bg-[#064354] hover:bg-opacity-10 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 group inline-flex items-center justify-center text-center" // Adjusted class for <a> tag styling
                >
                  <span className="mr-2 text-lg">{service.icon}</span>
                  <span className="group-hover:text-[#064354]">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#064354] hover:bg-[#064354] text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Let's Talk About Your Business</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
