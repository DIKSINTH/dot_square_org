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

// Data structure to hold all the service details
const services = [
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
      "Empower yourself to easily update and manage your website content with a user-friendly CMS. We'll choose the perfect platform based on your needs, whether it's WordPress, Drupal or a custom solution.",
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
      "Integrate cutting-edge Artificial Intelligence and Machine Learning into your web app to automate tasks, personalize user experiences, and gain valuable insights from your data.",
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

// Define the type for a service
type Service = {
  title: string;
  description: string;
  imageQuery: string;
  details: string[];
};

// Service Card Component
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
        {/* Placeholder for the Image/Icon - Use a bright color like orange for a sample internet image */}
        {/* Note: In a real app, replace this div with an actual <img> tag or an SVG component */}
        <div className="w-12 h-12 flex-shrink-0 mr-4 bg-orange-100 rounded-full flex items-center justify-center">
          {/* Using a simple placeholder text/icon for the sample image */}
          <span className="text-[#064354] font-bold text-xl">S</span>
          {/* Optional: Add an image tag here if you were fetching from an API */}
          {/* <img src={fetchImage(service.imageQuery)} alt={`${service.title} icon`} className="w-8 h-8"/> */}
        </div>
        <h3 className="text-xl font-bold text-[#064354] leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#064354] mb-6 flex-grow text-sm">
        {service.description}
      </p>

      {/* Details/Bullet Points */}
      <div className="space-y-2 mb-6">
        {service.details.map((detail, index) => (
          <div key={index} className="flex items-center">
            {/* The small, colored dot/pill effect from the image */}
            <span className="inline-block h-2 w-2 mr-3 rounded-full bg-[#064354] flex-shrink-0"></span>
            <span className="text-sm font-medium text-gray-700">{detail}</span>
          </div>
        ))}
      </div>

      {/* Bottom Arrow/Link Indicator */}
      {/* Absolute positioning relative to the group container for the arrow at the bottom-right */}
      <div className="flex justify-end mt-auto pt-4">
        <div className="p-3 rounded-full border border-gray-200 text-gray-500 group-hover:border-[#064354] group-hover:text-[#064354] transition duration-300 ease-in-out">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

// Main Component
const WebServicesGrid = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#064354]">
          Services
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Customized Web Development Services for Your Success
        </h1>
      </div>

      {/* Grid Layout with Responsiveness */}
      {/* The grid is set up to display:
          - 1 column on extra small screens (default)
          - 2 columns on tablets (sm:grid-cols-2 or md:grid-cols-2 depending on break point preference)
          - 3 columns on desktops (lg:grid-cols-3)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default WebServicesGrid;
