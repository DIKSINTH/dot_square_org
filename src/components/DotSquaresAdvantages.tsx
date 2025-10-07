import React from "react";

// --- Icons (Placeholders matching the design's style/concept) ---

// Icon 1: Competitive Rates (People/Team Icon)
const IconCompetitiveRates = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// Icon 2: Quality (Checkmark in Clock/Badge Icon)
const IconQuality = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M12 2v10.5h4"></path>
    <polyline points="22 4 12 14 9 11"></polyline>
  </svg>
);

// Icon 3: In-House Expertise (Briefcase/Team Icon)
const IconInHouseExpertise = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <path d="M6 12h.01"></path>
    <path d="M18 12h.01"></path>
  </svg>
);

// Icon 4: Security & Confidentiality (Shield/Lock Icon)
const IconSecurity = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

// Icon 5: On-Time Delivery (Delivery Box with Clock Icon)
const IconOnTimeDelivery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 2v6h6"></path>
    <path d="M16 13l-4 4-2-2"></path>
  </svg>
);

// Icon 6: Flexible Engagement Models (Gears/Circle with money icon)
const IconFlexibleModels = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9.09A1.65 1.65 0 0 0 12 4.6a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V12h.09a1.65 1.65 0 0 0 1.51 1 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0-1.51 1H21v.09z"></path>
  </svg>
);

// --- Content Data ---
const advantageData = [
  {
    icon: IconCompetitiveRates,
    title: "Competitive Rates",
    description:
      "Our rates are highly competitive, ensuring that you receive excellent value for your money. With us, you can be confident that you are getting the best possible rates without compromising on quality.",
  },
  {
    icon: IconQuality,
    title: "Quality",
    description:
      "We take pride in delivering exceptional results. Our CMMI level 3 appraisal and membership in the Agile Alliance demonstrate our commitment to strong processes and quality control. This ensures you get a polished, high-quality product every single time.",
  },
  {
    icon: IconInHouseExpertise,
    title: "In-House Expertise",
    description:
      "Our 1,000+ designers, developers, and project managers are all directly employed by us and work in our own offices across the US, India, and globally. This ensures seamless collaboration and control over your project.",
  },
  {
    icon: IconSecurity,
    title: "Security & Confidentiality",
    description:
      "Unlike many offshore companies, security is our top priority. Your data and intellectual property remain completely confidential, and all source code rights belong to you, always.",
  },
  {
    icon: IconOnTimeDelivery,
    title: "On-Time Delivery",
    description:
      "We use cutting-edge project management tools and agile development practices to keep your project on track. This means you’ll get high-quality products delivered exactly when you expect them.",
  },
  {
    icon: IconFlexibleModels,
    title: "Flexible Engagement Models",
    description:
      "We understand that your needs can change. That’s why we offer flexible engagement options. Choose the model that works best for you now, and switch seamlessly if your needs evolve. We’re committed to building a long-term, reliable partnership with you.",
  },
];

// --- Sub-Component for each Card ---
const AdvantageCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="bg-gray-800 p-6 sm:p-8 rounded-lg transition-all duration-300 transform 
                 hover:shadow-xl hover:bg-gray-700/90 border border-transparent hover:border-[#064354]"
    >
      {/* Icon and Title */}
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0">
          <Icon className="h-10 w-10 text-[#064354]" />
        </div>
        <h3 className="ml-4 text-xl font-bold text-white pt-1">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  );
};

// --- Main Component ---
const DotSquaresAdvantages = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase tracking-wider text-[#064354]">
          WHY CHOOSE US
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          The Advantages of Working with Dotsquares for Web Development
        </h2>
        <p className="mt-4 text-base text-gray-400 max-w-3xl mx-auto mb-16">
          We don't just build websites - we craft solutions that transform your
          business. Here's what sets us apart.
        </p>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageData.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DotSquaresAdvantages;
