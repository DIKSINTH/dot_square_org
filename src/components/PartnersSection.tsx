import React, { useState } from "react";

/**
 * PartnersSection
 * - Two tabs: "Partnerships" and "Awards"
 * - Click a tab to switch the grid of images
 * - Responsive: mobile -> 2 cols, sm -> 3, md -> 4, lg -> 6, xl -> 8
 * - Uses sample internet images (replace with your own URLs if needed)
 */
const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState("partners"); // "partners" | "awards"

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/09/HubSpot_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Shopify_logo_2018.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Salesforce.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Zoho-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Adobe_Corporate_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/BigCommerce_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Keyfactor_logo.png",
  ];

  const awards = [
    // sample award / trophy images from stock sources
    "https://images.pexels.com/photos/267948/pexels-photo-267948.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/296541/pexels-photo-296541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/164632/pexels-photo-164632.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/210981/pexels-photo-210981.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/287231/pexels-photo-287231.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const logosToShow = activeTab === "partners" ? partners : awards;

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Small header */}
      <p className="text-blue-500 font-semibold uppercase tracking-wide">
        Achievements
      </p>

      {/* Main heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
        Leading Technology Partners and Achievements
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
        With a history of excellence and innovation, we’ve been honored with
        several significant awards and partnered with leading technologies.
      </p>

      {/* Tabs (Partnerships / Awards) */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab("partners")}
          aria-pressed={activeTab === "partners"}
          className={`px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ${
            activeTab === "partners"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          Partnerships
        </button>

        <button
          onClick={() => setActiveTab("awards")}
          aria-pressed={activeTab === "awards"}
          className={`px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ${
            activeTab === "awards"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          Awards
        </button>
      </div>

      {/* Logos grid */}
      <div
        key={
          activeTab
        } /* remounts grid on tab change; keeps layout consistent */
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-items-center"
      >
        {logosToShow.map((src, i) => (
          <div
            key={src + i}
            className="flex items-center justify-center w-full max-h-20"
            aria-hidden={false}
          >
            <img
              loading="lazy"
              src={src}
              alt={
                activeTab === "partners"
                  ? `partner-logo-${i + 1}`
                  : `award-image-${i + 1}`
              }
              className="max-h-10 md:max-h-12 lg:max-h-14 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
