import React from "react";

// NOTE: Replace these with your actual logo images/components
const LOGOS = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Just Eat",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Allurion",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Comodo",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Fridays",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Dreams",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "Fujitsu",
  },
  {
    id: 7,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    alt: "NHS",
  },
  { id: 8, src: "/path-to-your/logo-money.svg", alt: "Money" },
  // Add more logos to fill space and ensure smooth loop
];

// The list of logos is duplicated to create the seamless infinite scroll effect.
const logosToDisplay = [...LOGOS, ...LOGOS];

const PartnerLogoCarousel = () => {
  return (
    <div className="py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title/Description section (Based on the video content) */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Partnered With Startups And Fortune 500
          </h2>
        </div>

        {/* Logo Carousel Container */}
        <div
          className="relative flex overflow-x-hidden group 
                     [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)]"
        >
          {/* Logo Track - Applies the continuous animation */}
          <div
            className="flex flex-nowrap animate-slide-left-infinite 
                       group-hover:[animation-play-state:paused] w-max"
            // The w-max ensures the content takes its necessary width, not 100% of the parent
          >
            {logosToDisplay.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 
                           md:w-40 md:h-20 lg:w-48 lg:h-24" // Responsive logo size
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 
                             transition-filter duration-300" // Hover effect
                />
              </div>
            ))}
          </div>

          {/* This section duplicates the entire track for the seamless loop illusion */}
          <div
            className="flex flex-nowrap animate-slide-left-infinite 
                       group-hover:[animation-play-state:paused] w-max"
            aria-hidden="true" // Hide duplicate for screen readers
          >
            {logosToDisplay.map((logo, index) => (
              <div
                key={`duplicate-${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 
                           md:w-40 md:h-20 lg:w-48 lg:h-24" // Responsive logo size
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 
                             transition-filter duration-300" // Hover effect
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel;
