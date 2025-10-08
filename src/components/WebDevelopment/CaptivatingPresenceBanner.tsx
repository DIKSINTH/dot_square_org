import React from "react";

// Arrow icon
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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

const CaptivatingPresenceBanner = () => {
  return (
    <div className="relative bg-black py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-xl mx-auto max-w-7xl">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            Craft a Captivating Online <br className="hidden sm:inline" />{" "}
            Presence for Your Brand!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            Our custom web development services turn your vision into a
            compelling online presence.
          </p>
          <button
            className="group flex items-center justify-center lg:justify-start px-5 py-2.5 border-2 border-white text-white rounded-full text-base font-semibold
                       hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-md hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          >
            Request a Free Quote
            <ArrowRight />
          </button>
        </div>

        {/* Right Section: Single Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <img
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
            alt="Laptop showing a web application"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaptivatingPresenceBanner;
