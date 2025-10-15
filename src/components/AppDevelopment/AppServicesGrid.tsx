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

// Data structure to hold all the service details from the attached images
const services: Service[] = [
  // --- Services from image_4aec24.png (First Row) ---
  {
    title: "IoT (Internet of Things) Integration",
    description:
      "Connect your app to smart devices and create powerful solutions! We can integrate your app with IoT (Internet of Things) devices, like those used in healthcare, home automation, or even industrial settings. This lets you build apps that enhance connectivity, and manage data effectively.",
    imageQuery: "IoT Integration icon",
    details: [
      "Connect to Smart Devices",
      "Advanced Data Analytics & Management",
      "Improved User Experience",
      "Streamlined Operations",
    ],
  },
  {
    title: "AR and VR Apps",
    description:
      "Develop immersive AR/VR applications for gaming, education, retail, and real estate. Utilising cutting-edge technologies, we create immersive experiences that blend virtual elements with the real world, predefining what’s possible in interactive and engaging apps.",
    imageQuery: "AR VR Apps icon",
    details: [
      "Interactive & Engaging Content",
      "Innovative Product Visualisation",
      "Captivating AR/VR applications",
      "New Marketing & Sales Opportunities",
    ],
  },
  {
    title: "Wearable Application Development",
    description:
      "Want to expand your reach to smartwatches and other wearables? Our developers are pros at creating intuitive companion apps that offer an immersive user experience, perfectly complementing your main app.",
    imageQuery: "Wearable App Development icon",
    details: [
      "Real-Time Data Access",
      "User-Friendly Interfaces",
      "Cross-Platform Support",
      "Custom Wearable Solutions",
    ],
  },

  // --- Services from image_4af07d.png (Second Row) ---
  {
    title: "Cross-Platform App Development",
    description:
      "Build apps that work flawlessly on iPhones, iPads, Android phones, and tablets. We leverage React Native, Flutter, and Xamarin to build a single app that runs smoothly on multiple devices.",
    imageQuery: "Cross-Platform App Development icon",
    details: [
      "Cross-Device Functionality",
      "Cutting-Edge Development Tools",
      "Reduced Development Time and Cost",
      "Wider Market Reach",
    ],
  },
  {
    title: "App Maintenance and Support",
    description:
      "Keep your app running great with our maintenance and support services. We handle updates, security patches, and performance tweaks to make sure your app is always working at its best.",
    imageQuery: "App Maintenance and Support icon",
    details: [
      "Long-Term App Performance",
      "Improved User Engagement",
      "Performance Optimisation",
      "Regular Security patches",
    ],
  },
  {
    title: "Prototyping and MVP Development",
    description:
      "Get your app idea in front of real users fast with rapid prototyping and Minimum Viable Product (MVP) development. This lets you gather valuable feedback and refine your features before investing a lot of time and money.",
    imageQuery: "Prototyping and MVP Development icon",
    details: [
      "Rapid Idea Validation",
      "Minimum Viable Product",
      "Gather valuable feedback",
      "Reduced development risk",
    ],
  },

  // --- Services from image_4aec65.png (Third Row) ---
  {
    title: "E-commerce Mobile App Development",
    description:
      "Get a user-friendly mobile shopping apps for your e-commerce store. We focus on clear interfaces, secure payment options, and a smooth shopping experience to keep your customers happy and coming back for more.",
    imageQuery: "E-commerce Mobile App Development icon",
    details: [
      "Increased Sales",
      "Brand Recognition",
      "Customer Engagement",
      "Secure Transactions",
    ],
  },
  {
    title: "App Store Optimization (ASO)",
    description:
      "Imagine your app being easily found by millions of potential users. Through ASO, we make this a reality. We refine your app’s visibility in the app store, enhance user engagement, and increase organic downloads.",
    imageQuery: "App Store Optimization ASO icon",
    details: [
      "High Visibility",
      "Organic Downloads",
      "Competitive Analysis",
      "Review Management",
    ],
  },
  {
    title: "UI/UX Design for Mobile Apps",
    description:
      "Craft intuitive interfaces that delight users with stunning visuals and effortless navigation. We prioritise user-centered design to make your app a joy to use, boosting engagement and keeping you ahead of the competition.",
    imageQuery: "UI UX Design for Mobile Apps icon",
    details: [
      "Intuitive Interfaces",
      "Visually Appealing Design",
      "Seamless Navigation",
      "User-friendly app",
    ],
  },
];

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
        {/* Placeholder for the Image/Icon - Using the orange color from the image headings */}
        {/* The first div with orange background is for the small line above the title in the image */}
        <div className="flex flex-col">
          <div className="w-10 h-1 flex-shrink-0 mb-4 bg-[#064354]"></div>
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
      {/* Absolute positioning relative to the group container for the arrow at the bottom-right */}
      <div className="flex justify-end mt-auto pt-4">
        <div className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:bg-[#064354] transition duration-300 ease-in-out">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

// Main Component
const AppServicesGrid = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header (from image_4af07d.png) */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#064354]">
          Services
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Our Expertise In Mobile Application Development
        </h1>
      </div>

      {/* Grid Layout with Responsiveness */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          // Adjusted to show 3 columns on desktop as per the image layout
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AppServicesGrid;
