import React from "react";

const AdvancedMobileAppsBanner = () => {
  return (
    <div className="bg-white py-10 sm:py-16 lg:py-24">
      {/* Main black container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black rounded-lg shadow-xl">
        {/*
          KEY CHANGE 1: Reduced vertical padding on the inner content
          Original: py-12 sm:py-16 lg:py-20
          New: py-8 sm:py-10 lg:py-12
        */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-10 lg:py-12">
          {/* Left Section: Text and Button */}
          <div className="text-center lg:text-left p-4 lg:p-0">
            {/* Reduced bottom margin on the heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Boost Your Business with <br className="hidden sm:inline" />
              Advanced Mobile Apps
            </h1>

            {/* Contact Us Button - Adjusted padding to match the reduced height feel */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white text-base sm:text-lg font-medium py-2.5 px-6 transition duration-300 ease-in-out hover:bg-white hover:text-black group w-full sm:w-auto"
              style={{ paddingRight: "2rem" }} // Reduced extra padding for the arrow spacing
            >
              Contact us today!
              {/* Arrow Icon - Slightly smaller */}
              <svg
                className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Section: Mobile App Mockups */}
          {/*
            KEY CHANGE 2: Reduced height for the mockup section. This directly
            controls the visual height of the right side and, thus, the black container.
            Original: h-[300px] sm:h-[400px] lg:h-[500px]
            New: h-[250px] sm:h-[300px] lg:h-[350px]
          */}
          <div className="mt-8 lg:mt-0 flex justify-center items-center relative h-[250px] sm:h-[300px] lg:h-[350px] w-full lg:w-auto overflow-hidden">
            {/* Placeholder Image */}
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center"
              style={{
                // Transform kept to mimic the stacked phone effect
                transform: "scale(1.2) translateX(10%)",
              }}
            >
              <span className="text-white text-center p-4 text-sm"></span>
            </div>

            {/* Utility div to force proportional container size */}
            {/* Also reduced width to match the smaller height proportion */}
            <div
              className="w-[250px] sm:w-[350px] h-full relative"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMobileAppsBanner;
