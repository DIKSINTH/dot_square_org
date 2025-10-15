import React from "react";

// Placeholder URLs for company logos. Replace these with actual image paths.
// For demonstration, I'm using various aspect ratios and sizes, you'd adjust based on actual logos.
const logoImages = [
  "https://via.placeholder.com/120x120/FFDDC1/808080?text=Forbes", // Forbes
  "https://via.placeholder.com/120x120/D1EDFF/808080?text=Clutch+Champion", // Clutch Champion
  "https://via.placeholder.com/150x50/E6FFD1/808080?text=Microsoft", // Microsoft Partner
  "https://via.placeholder.com/150x50/F1D1FF/808080?text=Adobe", // Adobe Solution Partner
  "https://via.placeholder.com/150x50/D1FFF1/808080?text=eCommerce", // 3DCommerce Partner
  "https://via.placeholder.com/150x50/FFF1D1/808080?text=Keyfactor", // Keyfactor
  "https://via.placeholder.com/150x50/D1E1FF/808080?text=Salesforce", // Salesforce Summit Partner
  "https://via.placeholder.com/120x120/FFDCDC/808080?text=Clutch+1000", // Clutch 1000
  "https://via.placeholder.com/150x50/DCD1FF/808080?text=Liquidium", // Liqudium
  "https://via.placeholder.com/100x100/FFFAD1/808080?text=YXT", // YXT
  "https://via.placeholder.com/100x100/D1FFD1/808080?text=GoodFirms", // GoodFirms
  "https://via.placeholder.com/100x100/D1F1FF/808080?text=Google", // Google Partner
  "https://via.placeholder.com/150x50/F1FFD1/808080?text=AWS+Select", // AWS Select Partner
  "https://via.placeholder.com/150x50/D1D1FF/808080?text=Shopify", // Shopify Partner
  "https://via.placeholder.com/120x120/FFD1F1/808080?text=eCommerce+Awards", // ECommerce Awards 2022
  "https://via.placeholder.com/150x50/D1FFF1/808080?text=HubSpot", // HubSpot Platinum Partner
  "https://via.placeholder.com/150x50/F1FFD1/808080?text=Zoho", // Zoho Premium Partner
  "https://via.placeholder.com/150x50/D1D1F1/808080?text=Pantheon", // Pantheon
];

const Achievements: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-[#064354] tracking-wider mb-2">
            ACHIEVEMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#064354] mb-4">
            Leading Technology Partners and Achievements
          </h2>
          <p className="max-w-3xl mx-auto text-[#064354]">
            With a history of excellence and innovation, we've been honored with
            several significant awards and partnered with leading technologies.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="p-6 md:p-8 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-8 gap-x-4 justify-items-center items-center">
            {logoImages.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-20 w-32 sm:h-24 sm:w-40"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  // Added max-h-full and max-w-full to ensure logos scale down
                  // object-contain ensures the image fits within the div without cropping
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
