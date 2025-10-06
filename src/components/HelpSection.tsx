import React from "react";

// You will need to replace 'your-right-side-image.png' with the actual
// path or URL for the image shown on the right side of the original design.
const RIGHT_SIDE_IMAGE_SRC =
  "https://via.placeholder.com/400x300?text=High+Quality+Digital+Services";

// interface HelpSectionProps {}

/**
 * A responsive section component recreating the 'Still not sure' block.
 * It features a dark background, a call-to-action on the left, and a
 * descriptive image card on the right, fully responsive using Tailwind CSS.
 */
const HelpSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Flex container for the two main columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column: Text and Button (Still not sure what you are looking for?) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 max-w-md">
              Still not sure what you are looking for?
            </h2>
            <a
              href="#" // Replace with your actual link
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-black bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300 shadow-xl"
              aria-label="Talk to Our Experts"
            >
              Talk to Our Experts
              <svg
                className="ml-3 w-5 h-5"
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

          {/* Right Column: Image Mockup Card with Abstract Lines */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Abstract lines (Optional: for visual fidelity, position as needed) */}
            {/* The provided image has abstract line elements. These are complex to
            recreate purely with Tailwind without explicit SVG or complex CSS.
            The positioning below is a simplified attempt to suggest the style. */}
            <div className="absolute top-[-40px] right-[-10px] w-12 h-12 md:w-20 md:h-20 hidden lg:block">
              {/* Simplified abstract lines - use an SVG or more complex CSS for 100% accuracy */}
              <div className="space-y-1.5">
                <div className="w-8 h-1 bg-gray-600 rounded"></div>
                <div className="w-12 h-1 bg-gray-600 rounded"></div>
                <div className="w-16 h-1 bg-gray-600 rounded"></div>
              </div>
            </div>

            {/* The main image card area, stylized with an orange background and a slight tilt/perspective */}
            <div className="relative transform lg:rotate-[-5deg] mt-10 lg:mt-0 max-w-sm md:max-w-md w-full">
              {/* This is the large orange/red shape shown in the background of the image card */}
              <div className="absolute inset-0 bg-orange-600 opacity-70 transform scale-110 rounded-xl"></div>

              {/* The actual image content container */}
              <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-2xl">
                {/* The core image content - replace with the actual image component */}
                <div className="text-center">
                  {/* Placeholder image for the 'High Quality Digital Services' card */}
                  <img
                    src={RIGHT_SIDE_IMAGE_SRC}
                    alt="High Quality Digital Services Mockup"
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>

                {/* Text and badges below the main image (simplified) */}
                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-semibold text-lg text-center mb-2">
                    High Quality Digital Services You Really Need
                  </p>
                  {/* Simplified badges/icons from the bottom of the card */}
                  <div className="flex justify-around mt-4">
                    <span className="text-xs text-green-600 border border-green-600 px-2 py-1 rounded-full">
                      Delivery Based
                    </span>
                    <span className="text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded-full">
                      GDPR Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
