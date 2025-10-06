import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const companyLogos = [
    { name: "Gartner", rating: "5.0", stars: 5 },
    { name: "Google", rating: "4.6", stars: 4.5 },
    { name: "Trustpilot", rating: "4.8", stars: 5 },
    { name: "HubSpot", rating: "5.0", stars: 5 },
    { name: "Clutch", rating: "4.6", stars: 4.5 },
    { name: "Salesforce", rating: "5.0", stars: 5 },
    { name: "G2", rating: "4.5", stars: 4.5 },
  ];

  const services = [
    { icon: "💻", name: "Software Development" },
    { icon: "📱", name: "Mobile App Development" },
    { icon: "🌐", name: "Web Development" },
    { icon: "🛒", name: "E-commerce Services" },
    { icon: "🤖", name: "AI/ML Solutions" },
    { icon: "📊", name: "HubSpot" },
    { icon: "⚙️", name: "Zoho Solutions" },
    { icon: "☁️", name: "Salesforce Solutions" },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ⭐
        </span>
      );
    }
    return stars;
  };

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
        {/* Company Logos */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-8">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="font-bold text-sm mb-1">{company.name}</div>
                  <div className="text-xs text-blue-400 font-semibold">
                    {company.rating}
                  </div>
                  <div className="flex justify-center text-xs">
                    {renderStars(company.stars)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Businesses With
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AI, Data Analytics & Cloud
          </h2>

          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-8">
              Key Areas of Our Expertise
            </h3>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="bg-transparent border border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="mr-2 text-lg">{service.icon}</span>
                  <span className="group-hover:text-blue-400">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Let's Talk About Your Business</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
