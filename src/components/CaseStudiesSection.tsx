import React from "react";

// --- Type Definitions ---

/**
 * Defines the structure for a single Case Study object.
 */
interface CaseStudy {
  title: string;
  category: string;
  flags: string[];
  tech: string[];
  image: string;
}

/**
 * Defines the props for the CaseStudyCard component.
 */
interface CaseStudyCardProps {
  study: CaseStudy;
}

// --- Sample Data ---
const caseStudies: CaseStudy[] = [
  {
    title: "From YII to Drupal 10: A Smooth Website Migration Journey",
    category: "WEBSITE UPGRADATION",
    flags: ["US"],
    tech: ["Drupal"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Empowering StructSight with a Real-Time Investment Platform",
    category: "WEBSITE DEVELOPMENT",
    flags: ["US"],
    tech: ["Drupal"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Transforming Chandhan Travel with a Custom Drupal Solution",
    category: "WEBSITE UPGRADATION",
    flags: ["India"],
    tech: ["Drupal"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Dotsquares Enhances Networking Opportunities for GonnaHappen",
    category: "WEBSITE & ENTERPRISE APPLICATION DEVELOPMENT",
    flags: ["GB"],
    tech: ["Drupal"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title:
      "State Wide Logistics: Delivering Excellence with Precision and Innovation",
    category: "APP DEVELOPMENT",
    flags: ["AU"],
    tech: ["Microsoft .Net 6"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Seamless Drupal Upgrade: From 8.9 to 10.3",
    category: "WEBSITE UPGRADATION",
    flags: ["GB"],
    tech: ["Drupal", "React", "Elastic Search"],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

// Helper function to get flag emoji based on country code (simplified)
const getFlagEmoji = (countryCode: string): string => {
  switch (countryCode) {
    case "US":
      return "🇺🇸";
    case "India":
      return "🇮🇳";
    case "GB":
      return "🇬🇧";
    case "AU":
      return "🇦🇺";
    default:
      return "🌐";
  }
};

// Component for a single Case Study Card
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const { title, category, flags, tech, image } = study;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] sm:aspect-video md:aspect-[4/3] lg:aspect-video">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          // The attractive hovering effect for image zoom
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        {/* Category & Title */}
        <div>
          <p className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-widest opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {category}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug transition-transform duration-300 group-hover:translate-y-[-5px]">
            {title}
          </h3>
        </div>

        {/* Footer: Flags and Tech */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
          {/* Flags */}
          {flags.map((flag) => (
            <span
              key={flag}
              className="text-2xl transition-transform duration-300 group-hover:scale-110"
              title={`Client location: ${flag}`}
            >
              {getFlagEmoji(flag)}
            </span>
          ))}
          {/* Tech/Keywords */}
          {tech.map((item) => (
            <span
              key={item}
              className="text-white text-sm border border-white border-opacity-30 px-3 py-1 rounded-full opacity-70 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-opacity-0 group-hover:opacity-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Case Studies Section Component
const CaseStudiesSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase text-blue-400 tracking-[0.25em] font-semibold mb-2">
            CASE STUDIES
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Read Our Client Success Stories
          </h2>
          <p className="text-lg text-gray-400">
            Grow your business with a team that wants to see you win
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>

        {/* "Read All" Button */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/success-stories" // Replace with your actual link
            className="inline-flex items-center text-white bg-transparent border border-white px-8 py-3 text-sm font-medium rounded-sm tracking-wider transition-all duration-300 hover:bg-white hover:text-black group"
          >
            Read All Our Success Stories
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
