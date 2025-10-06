import React, { useState } from "react";

// --- Placeholder Logo Component ---
// This component simulates a logo wrapper, ensuring correct size, padding, and hover effect.
const TechLogo = ({ name, imageUrl }) => (
  <div
    className={`flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-100 rounded-lg shadow-sm 
               h-20 w-20 sm:h-24 sm:w-24 transition-all duration-300 transform 
               hover:shadow-lg hover:-translate-y-1 hover:border-blue-500 hover:ring-2 hover:ring-blue-500
               bg-white text-gray-900`}
  >
    {/* Placeholder for the actual logo image */}
    <img
      // Using a key on the image will force React to re-render the image element when the category changes
      key={name}
      src={imageUrl}
      alt={`${name} Logo`}
      // The logo itself needs to be responsive and contained within the box
      className="h-8 w-8 sm:h-10 sm:w-10 object-contain mb-1"
    />
    <span className="text-xs font-medium text-center truncate w-full px-1">
      {name}
    </span>
  </div>
);

// --- Content Data (UPDATED: More descriptive placeholder URLs) ---
// Using a better placeholder service like 'placehold.co' where possible for custom icon simulation.
const technologyData = {
  Frontend: [
    {
      name: "Angular JS",
      imageUrl: "https://placehold.co/100x100/dc3b30/ffffff?text=A",
    }, // Red
    {
      name: "React JS",
      imageUrl: "https://placehold.co/100x100/5ed4f3/000000?text=R",
    }, // Blue
    {
      name: "Vue JS",
      imageUrl: "https://placehold.co/100x100/41b883/ffffff?text=V",
    }, // Green
    {
      name: "JavaScript",
      imageUrl: "https://placehold.co/100x100/f7df1e/000000?text=JS",
    }, // Yellow
    {
      name: "CSS 3",
      imageUrl: "https://placehold.co/100x100/264de4/ffffff?text=CSS",
    }, // Dark Blue
    {
      name: "HTML 5",
      imageUrl: "https://placehold.co/100x100/e34f26/ffffff?text=H5",
    }, // Orange
  ],
  Backend: [
    {
      name: ".Net",
      imageUrl: "https://placehold.co/100x100/5c2d91/ffffff?text=.N",
    }, // Purple
    {
      name: "Php",
      imageUrl: "https://placehold.co/100x100/777bb4/ffffff?text=P",
    }, // Lavender
    {
      name: "Ruby",
      imageUrl: "https://placehold.co/100x100/cc342d/ffffff?text=Ru",
    }, // Red
    {
      name: "Python",
      imageUrl: "https://placehold.co/100x100/3776ab/ffffff?text=Py",
    }, // Blue
    {
      name: "JAVA",
      imageUrl: "https://placehold.co/100x100/007396/ffffff?text=J",
    }, // Teal
    {
      name: "Node JS",
      imageUrl: "https://placehold.co/100x100/68a063/ffffff?text=No",
    }, // Green
    {
      name: "C Sharp",
      imageUrl: "https://placehold.co/100x100/178600/ffffff?text=C%23",
    }, // Dark Green
  ],
  Mobile: [
    {
      name: "Android",
      imageUrl: "https://placehold.co/100x100/3ddc84/ffffff?text=An",
    }, // Bright Green
    {
      name: "iOS",
      imageUrl: "https://placehold.co/100x100/000000/ffffff?text=iO",
    }, // Black
    {
      name: "Swift",
      imageUrl: "https://placehold.co/100x100/fa7343/ffffff?text=Sw",
    }, // Orange
    {
      name: "Flutter",
      imageUrl: "https://placehold.co/100x100/02569b/ffffff?text=Fl",
    }, // Dark Blue
    {
      name: "Ionic",
      imageUrl: "https://placehold.co/100x100/3875dc/ffffff?text=Io",
    }, // Medium Blue
    {
      name: "React Native",
      imageUrl: "https://placehold.co/100x100/5ed4f3/000000?text=RN",
    }, // Blue
    {
      name: "Xamarin",
      imageUrl: "https://placehold.co/100x100/3498db/ffffff?text=Xa",
    }, // Light Blue
  ],
  Database: [
    {
      name: "SQL Server",
      imageUrl: "https://placehold.co/100x100/cc2927/ffffff?text=SQL",
    }, // Red
    {
      name: "MySQL",
      imageUrl: "https://placehold.co/100x100/00758f/ffffff?text=My",
    }, // Teal
    {
      name: "PostgreSQL",
      imageUrl: "https://placehold.co/100x100/336791/ffffff?text=Pg",
    }, // Dark Blue
    {
      name: "MongoDB",
      imageUrl: "https://placehold.co/100x100/47a248/ffffff?text=Mo",
    }, // Green
    {
      name: "SQLite",
      imageUrl: "https://placehold.co/100x100/003b57/ffffff?text=SQ",
    }, // Very Dark Blue
    {
      name: "Firebase",
      imageUrl: "https://placehold.co/100x100/ffca28/000000?text=FB",
    }, // Yellow
  ],
  Cloud: [
    {
      name: "Amazon Web Services",
      imageUrl: "https://placehold.co/100x100/ff9900/ffffff?text=AWS",
    }, // Orange
    {
      name: "Google Cloud Platform",
      imageUrl: "https://placehold.co/100x100/4285f4/ffffff?text=GCP",
    }, // Blue
    {
      name: "Microsoft Azure",
      imageUrl: "https://placehold.co/100x100/008ad7/ffffff?text=Az",
    }, // Light Blue
  ],
  DevOps: [
    {
      name: "Jenkins",
      imageUrl: "https://placehold.co/100x100/d24939/ffffff?text=Jn",
    }, // Red
    {
      name: "Azure DevOps",
      imageUrl: "https://placehold.co/100x100/0078d4/ffffff?text=AzD",
    }, // Blue
    {
      name: "Docker",
      imageUrl: "https://placehold.co/100x100/2496ed/ffffff?text=Do",
    }, // Light Blue
    {
      name: "Kubernetes",
      imageUrl: "https://placehold.co/100x100/326ce5/ffffff?text=K8s",
    }, // Darker Blue
    {
      name: "AWS DevOps",
      imageUrl: "https://placehold.co/100x100/ff9900/ffffff?text=ADo",
    }, // Orange
    {
      name: "Gradle",
      imageUrl: "https://placehold.co/100x100/02303a/ffffff?text=Gr",
    }, // Dark Teal
  ],
  Ecommerce: [
    {
      name: "WooCommerce",
      imageUrl: "https://placehold.co/100x100/96588a/ffffff?text=Woo",
    }, // Purple
    {
      name: "Magento 2",
      imageUrl: "https://placehold.co/100x100/f16624/ffffff?text=M2",
    }, // Orange
    {
      name: "Shopify",
      imageUrl: "https://placehold.co/100x100/96bf48/ffffff?text=Sh",
    }, // Green
    {
      name: "Kentico",
      imageUrl: "https://placehold.co/100x100/f37021/ffffff?text=Ke",
    }, // Orange
    {
      name: "Symfony",
      imageUrl: "https://placehold.co/100x100/000000/ffffff?text=Sy",
    }, // Black
    {
      name: "Opencart",
      imageUrl: "https://placehold.co/100x100/1e83c7/ffffff?text=OC",
    }, // Blue
    {
      name: "VirtueMart",
      imageUrl: "https://placehold.co/100x100/3277ba/ffffff?text=VM",
    }, // Blue
    {
      name: "PrestaShop",
      imageUrl: "https://placehold.co/100x100/dd2c8c/ffffff?text=PS",
    }, // Pink
    {
      name: "Bigcommerce",
      imageUrl: "https://placehold.co/100x100/000000/ffffff?text=BC",
    }, // Black
    {
      name: "NopCommerce",
      imageUrl: "https://placehold.co/100x100/726682/ffffff?text=No",
    }, // Gray
    {
      name: "ZenCart",
      imageUrl: "https://placehold.co/100x100/699c36/ffffff?text=ZC",
    }, // Olive Green
  ],
  CRM: [
    {
      name: "Microsoft Dynamics 365",
      imageUrl: "https://placehold.co/100x100/0078d4/ffffff?text=D365",
    }, // Blue
    {
      name: "Salesforce",
      imageUrl: "https://placehold.co/100x100/1798e4/ffffff?text=SF",
    }, // Light Blue
    {
      name: "Sugar CRM",
      imageUrl: "https://placehold.co/100x100/e61d2d/ffffff?text=SC",
    }, // Red
    {
      name: "Hubspot",
      imageUrl: "https://placehold.co/100x100/ff7a59/000000?text=HS",
    }, // Salmon
    {
      name: "Zoho",
      imageUrl: "https://placehold.co/100x100/ff6b00/ffffff?text=Zo",
    }, // Orange
  ],
  CMS: [
    {
      name: "Drupal",
      imageUrl: "https://placehold.co/100x100/0678be/ffffff?text=Dr",
    }, // Blue
    {
      name: "Wordpress",
      imageUrl: "https://placehold.co/100x100/21759b/ffffff?text=WP",
    }, // Dark Blue
    {
      name: "Joomla",
      imageUrl: "https://placehold.co/100x100/5091cd/ffffff?text=Jo",
    }, // Light Blue
    {
      name: "Sharepoint",
      imageUrl: "https://placehold.co/100x100/0078d4/ffffff?text=Shp",
    }, // Blue
    {
      name: "Umbraco",
      imageUrl: "https://placehold.co/100x100/e33d42/ffffff?text=Um",
    }, // Red
    {
      name: "DNN",
      imageUrl: "https://placehold.co/100x100/f37021/ffffff?text=DNN",
    }, // Orange
    {
      name: "Craft",
      imageUrl: "https://placehold.co/100x100/e5422b/ffffff?text=Cr",
    }, // Red
  ],
};

const categoryOrder = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Cloud",
  "DevOps",
  "Ecommerce",
  "CRM",
  "CMS",
];

// --- Main Component ---
const TechStackSection = () => {
  // Initial state is set to 'Frontend' as a sensible default
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Tab Button Component
  const TabButton = ({ category }) => {
    const isActive = category === activeCategory;

    // Tailwind classes for active (black) and inactive (light gray) states
    const activeClasses = "bg-black text-white shadow-lg";
    const inactiveClasses = "bg-gray-50 text-gray-800 hover:bg-gray-100";

    return (
      <button
        className={`px-4 py-2 sm:px-5 sm:py-3 text-sm font-semibold rounded transition-colors duration-200 whitespace-nowrap ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    );
  };

  // Get the technologies for the active tab
  const activeTechnologies = technologyData[activeCategory] || [];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
          OTHER TECHNOLOGIES WE WORK ON
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Tailored Technologies to Conquer Your Development Challenges
        </h2>
        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Harness the power of our advanced technologies to elevate user
          interaction and drive engagement.
        </p>

        {/* Tab Navigation */}
        {/* Scrollable on small screens, centered on large screens */}
        <div className="mt-12 mb-12 sm:mt-16 sm:mb-20">
          <div className="flex justify-center flex-wrap gap-2 md:flex-nowrap md:overflow-x-auto p-1">
            {categoryOrder.map((category) => (
              <TabButton key={category} category={category} />
            ))}
          </div>
        </div>

        {/* Technology Logos Grid */}
        <div className="min-h-[150px] transition-all duration-300">
          <div
            // Responsive grid columns: 3 on mobile, 5 on sm, 6 on md, 8 on lg, 9 on xl
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 
                       gap-4 sm:gap-6 justify-items-center"
          >
            {activeTechnologies.map((tech) => (
              <TechLogo
                key={tech.name}
                name={tech.name}
                imageUrl={tech.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
