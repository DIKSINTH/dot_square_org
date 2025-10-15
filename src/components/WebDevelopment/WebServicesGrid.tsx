import React from "react";

// Sample SVG for the arrow icon to match the design
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

// Define the type for a service
type Service = {
  title: string;
  description: string;
  imageQuery: string; // Placeholder for potential image use
  details: string[];
};

// Data structure to hold all the service details from the attached Web Development images
const services: Service[] = [
  // --- Services from image_4a709a.png ---
  {
    title: "Website Design & Development",
    description:
      "We don't just build websites; we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.",
    imageQuery: "Website design and development icon",
    details: [
      "Custom Design",
      "Responsive Layout",
      "SEO Friendly",
      "User-Centric",
    ],
  },
  {
    title: "CMS Development",
    description:
      "Empower yourself to easily update and manage your website content with a user-friendly CMS. We'll choose the perfect platform based on your needs, whether it's WordPress, Drupal, or a custom solution.",
    imageQuery: "CMS development icon",
    details: [
      "Multi-User Support",
      "Integrated SEO tools",
      "Analytics Integration",
      "Flexibility and scalability",
    ],
  },
  {
    title: "API Development & Integration",
    description:
      "Connect your web application to external data sources and services with our expert API development and integration. This allows for a more powerful and dynamic user experience.",
    imageQuery: "API development icon",
    details: [
      "Custom API Solutions",
      "Third-Party Integration",
      "Secure and Reliable",
      "Real-Time Data Access",
    ],
  },
  // --- Services from image_4a7041.png ---
  {
    title: "Web 3.0 Development",
    description:
      "Be at the forefront of the next generation of the web with our Web 3.0 development expertise. Build applications that prioritise user data ownership, enhanced privacy, and a more open and connected web.",
    imageQuery: "Web 3.0 development icon",
    details: [
      "NFT Development",
      "Smart Contracts",
      "Data Privacy",
      "Interoperability",
    ],
  },
  {
    title: "AI/ML Web Solutions",
    description:
      "Integrate cutting-edge Artificial Intelligence and Machine Learning into your web app to automate tasks, personalise user experiences, and gain valuable insights from your data.",
    imageQuery: "AI ML web solutions icon",
    details: [
      "Natural Language Processing",
      "Image and Video Analysis",
      "AI-driven security",
      "Predictive Analytics",
    ],
  },
  {
    title: "Bespoke Web Development",
    description:
      "Have a unique vision for your web project? We can bring it from the ground up. Our team can handle everything from custom web development to legacy system migration and front-end functionality improvements.",
    imageQuery: "Bespoke web development icon",
    details: [
      "Requirement Analysis",
      "Tailored Solutions",
      "Agile Methodology",
      "Post-Launch support",
    ],
  },
  // --- Services from image_4a6fe9.png ---
  {
    title: "Headless Development",
    description:
      "Craft exceptional user experiences with the freedom and flexibility of headless development. Our headless development services empower you to build dynamic and future-proof web applications.",
    imageQuery: "Headless development icon",
    details: [
      "Rapid Development",
      "API-Driven",
      "Enhanced Security",
      "Seamless Integration",
    ],
  },
  {
    title: "Upgrade & Migration",
    description:
      "Need to upgrade your existing website or migrate to a new platform? We handle the entire process smoothly and efficiently, minimising downtime and disruption.",
    imageQuery: "Upgrade and migration icon",
    details: [
      "Data Integrity Assurance",
      "Platform Migration",
      "Identify and mitigate risks",
      "Performance Optimization",
    ],
  },
  {
    title: "Maintenance & Support",
    description:
      "We don't just build it; we maintain it. Our ongoing support ensures your web application continues to run smoothly and securely and deliver optimal performance. We'll handle bug fixes, updates, security patches, and server monitoring.",
    imageQuery: "Maintenance and support icon",
    details: [
      "Proactive Maintenance",
      "Backup and Recovery",
      "Bug Fixes and Updates",
      "Continuous Optimisation",
    ],
  },
];

// Service Card Component (Kept the styling consistent with the previous version and images)
const ServiceCard = ({ service }: { service: Service }) => {
  return (
    // Card container with responsive padding, border, shadow, and attractive hover effect
    <div
      className="group flex flex-col p-6 md:p-8 lg:p-10 border border-gray-100 rounded-lg shadow-sm bg-white 
             hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer 
             hover:border-transparent hover:ring-2 hover:ring-[#064354]" // Attractive hover effect
    >
      {/* Title Section (Mimics the layout from the image) */}
      <div className="flex items-start mb-4">
        {/* The div with orange background is for the small line above the title in the image */}
        <div className="flex flex-col">
          <div className="w-10 h-1 flex-shrink-0 mb-4 bg-["></div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6 flex-grow text-sm">
        {service.description}
      </p>

      {/* Details/Pill Buttons (Mimics the highlighted background detail style from the image) */}
      <div className="space-y-3 mb-6">
        {service.details.map((detail, index) => (
          <div
            key={index}
            // Pill-like design with soft orange background
            className="inline-block px-4 py-2 text-sm font-medium text-gray-800 bg-orange-50 rounded-full shadow-sm"
          >
            {detail}
          </div>
        ))}
      </div>

      {/* Bottom Arrow/Link Indicator (Mimics the circled arrow) */}
      <div className="flex justify-end mt-auto pt-4">
        <div className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:bg-[#064354] transition duration-300 ease-in-out">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

// Main Component
const WebServicesGrid = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header (Updated from image_4a709a.png) */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#064354]">
          SERVICES
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Customized Web Development Services for Your Success
        </h1>
      </div>

      {/* Grid Layout with Responsiveness */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default WebServicesGrid;
