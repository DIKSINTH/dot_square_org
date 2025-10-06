import React, { useState } from "react";

// --- Icons ---
const IconSearch = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconLock = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconPackage = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12.89 1.45l6.59 6.59a2 2 0 0 1 0 2.83l-6.59 6.59a2 2 0 0 1-2.83 0l-6.59-6.59a2 2 0 0 1 0-2.83l6.59-6.59a2 2 0 0 1 2.83 0z"></path>
    <path d="M9.34 4.51L3.95 9.9l5.66 5.66M18.05 14.24l5.39-5.39-5.66-5.66"></path>
  </svg>
);

const IconGraph = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3v18h18"></path>
    <path d="M18.7 8l-5.3 5.3L9.7 9.7L4.7 14.7"></path>
  </svg>
);

// Checkmark icon
const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-blue-500 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Content Data ---
const featureData = {
  seo: {
    title: "SEO Optimisation",
    description:
      "We ensure that your website is optimised for search engines right from the start. We optimise meta tags, headers, content, and images to improve search engine visibility and enhance website speed and mobile responsiveness for better search rankings.",
    details: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Page-Speed Optimisation",
    ],
    imageAlt: "Laptop showing SEO analytics dashboard.",
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    Icon: IconSearch,
  },
  security: {
    title: "Security",
    description:
      "Protecting your website and user data is our top priority. We implement SSL certificates to encrypt data transmitted between your website and users, ensuring privacy and security. Our team conducts regular security audits to identify and fix vulnerabilities.",
    details: [
      "SSL Certificates",
      "Secure Coding Practices",
      "Firewalls & DDoS Protection",
      "Regular Security Audits",
    ],
    imageAlt: "Laptop with digital security icons on screen.",
    imageSrc:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    Icon: IconLock,
  },
  ecommerce: {
    title: "E-Commerce Integration",
    description:
      "We specialise in creating robust e-commerce platforms that drive sales and enhance user experience. We design user-friendly shopping experiences with intuitive product pages, shopping carts, and checkout processes.",
    details: [
      "Secure Payment Gateways",
      "Inventory Management",
      "User-Friendly Shopping Experience",
      "Analytics and Reporting",
    ],
    imageAlt: "Shopping cart and laptop representing e-commerce setup.",
    imageSrc:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    Icon: IconPackage,
  },
  cro: {
    title: "Conversion Rate Optimisation",
    description:
      "At our core, we are dedicated to maximising your website's conversion rates through meticulous analysis and proven testing methodologies.",
    details: [
      "A/B Testing",
      "UX Design",
      "Conversion Funnel Analysis",
      "Performance Metrics Tracking",
    ],
    imageAlt: "Analytics chart on computer screen showing growth.",
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    Icon: IconGraph,
  },
};

// --- Sub-Components ---
const FeatureTab = ({ featureKey, activeKey, onClick, title, Icon }) => {
  const isActive = featureKey === activeKey;

  const baseClasses =
    "flex items-center p-4 sm:p-5 cursor-pointer transition-all duration-300 group";
  const activeClasses = "bg-black text-white rounded-lg shadow-lg";
  const inactiveClasses =
    "bg-white text-gray-800 hover:bg-gray-50 border-b border-gray-100";

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => onClick(featureKey)}
    >
      <Icon
        className={`h-6 w-6 mr-4 transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-600 group-hover:text-black"
        }`}
      />
      <span
        className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

const FeatureContent = ({ activeKey }) => {
  const content = featureData[activeKey];

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Text Content Area */}
      <div className="p-6 sm:p-10 lg:w-1/2 flex flex-col justify-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-500 mb-1">
          TAILORED EXCELLENCE
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {content.title}
        </h3>
        <p className="text-gray-600 mb-6 text-base">{content.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {content.details.map((detail, index) => (
            <div key={index} className="flex items-start">
              <Checkmark />
              <span className="ml-2 text-sm text-gray-700">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Area */}
      <div className="lg:w-1/2 min-h-[300px] lg:min-h-0">
        <img
          src={content.imageSrc}
          alt={content.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// --- Main Component ---
const BeyondBasicsFeatures = () => {
  const [activeTab, setActiveTab] = useState("security");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            WE ARE THE EXPERTS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            We Go Beyond the Basics
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 bg-white border border-gray-100 rounded-lg shadow-sm">
            {Object.keys(featureData).map((key) => (
              <FeatureTab
                key={key}
                featureKey={key}
                activeKey={activeTab}
                onClick={setActiveTab}
                title={featureData[key].title}
                Icon={featureData[key].Icon}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <FeatureContent activeKey={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondBasicsFeatures;
