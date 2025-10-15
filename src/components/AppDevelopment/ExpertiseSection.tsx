import React from "react";

// You would replace these with actual paths to your logo images
// Example: import SwiftLogo from './assets/swift-logo.png';
// For now, these are simple placeholder URLs or just styled divs.
const expertiseLogos = {
  // iOS Logos
  swift: "https://via.placeholder.com/40x40/FF7A00/FFFFFF?text=Swift",
  objectiveC: "https://via.placeholder.com/40x40/C0C0C0/FFFFFF?text=Obj-C",
  xcode: "https://via.placeholder.com/40x40/007AFF/FFFFFF?text=Xcode",
  apple: "https://via.placeholder.com/40x40/A3A3A3/FFFFFF?text=Apple",
  appleWatch: "https://via.placeholder.com/40x40/00C4FF/FFFFFF?text=Watch",
  appleTv: "https://via.placeholder.com/40x40/000000/FFFFFF?text=TV",

  // Android Logos
  android: "https://via.placeholder.com/40x40/3DDC84/FFFFFF?text=Android",
  kotlin: "https://via.placeholder.com/40x40/7F52FF/FFFFFF?text=Kotlin",
  java: "https://via.placeholder.com/40x40/EA2D2E/FFFFFF?text=Java",
  reactNativeAndroid:
    "https://via.placeholder.com/40x40/61DAFB/FFFFFF?text=React",
  flutterAndroid:
    "https://via.placeholder.com/40x40/02569B/FFFFFF?text=Flutter",
  androidStudio: "https://via.placeholder.com/40x40/3DDC84/FFFFFF?text=Studio",

  // Hybrid & PWA Logos (often similar for cross-platform)
  javascript: "https://via.placeholder.com/40x40/F7DF1E/000000?text=JS",
  react: "https://via.placeholder.com/40x40/61DAFB/FFFFFF?text=React",
  flutter: "https://via.placeholder.com/40x40/02569B/FFFFFF?text=Flutter",
  angular: "https://via.placeholder.com/40x40/DD0031/FFFFFF?text=Angular",
  vue: "https://via.placeholder.com/40x40/4FC08D/FFFFFF?text=Vue",
  ionic: "https://via.placeholder.com/40x40/3880FF/FFFFFF?text=Ionic",
};

// Data structure for each expertise category
const appDevelopmentExpertise = [
  {
    title: "iOS Application Development",
    description:
      "Get a feature-rich, high-performing iOS app that caters to both startups and established businesses.",
    features: [
      "iPhone App Development",
      "iPad App Development",
      "Apple Watch App Development",
      "Apple TV App Development",
      "App Clips Development",
    ],
    logos: [
      expertiseLogos.swift,
      expertiseLogos.objectiveC,
      expertiseLogos.xcode,
      expertiseLogos.apple,
      expertiseLogos.appleWatch,
      expertiseLogos.appleTv,
    ],
  },
  {
    title: "Android Application Development",
    description:
      "We build feature-rich, custom Android applications that leverage the full potential of the Android operating system.",
    features: [
      "Android Mobile App Development",
      "Android TV App Development",
      "Android Tablet App Development",
      "Android Wear App Development",
    ],
    logos: [
      expertiseLogos.android,
      expertiseLogos.kotlin,
      expertiseLogos.java,
      expertiseLogos.reactNativeAndroid,
      expertiseLogos.flutterAndroid,
      expertiseLogos.androidStudio,
    ],
  },
  {
    title: "Hybrid App Development",
    description:
      "Develop robust, cross-platform apps that seamlessly blend native features with web technologies.",
    features: [
      "Hybrid Mobile App Development",
      "Hybrid Tablet App Development",
      "Hybrid TV App Development",
    ],
    logos: [
      expertiseLogos.javascript,
      expertiseLogos.react,
      expertiseLogos.flutter,
      expertiseLogos.angular,
      expertiseLogos.ionic,
      expertiseLogos.vue,
    ],
  },
  {
    title: "PWA Application Development",
    description:
      "Bridge the gap between web and mobile with a Progressive web app! Our developers will create an app-like experience accessible directly from a web browser, boosting user engagement and driving results.",
    features: [
      "Cross-browser Web App Development",
      "Responsive Web App Development",
      "Offline Web App Development",
    ],
    logos: [
      expertiseLogos.javascript,
      expertiseLogos.react,
      expertiseLogos.flutter,
      expertiseLogos.angular,
      expertiseLogos.ionic,
      expertiseLogos.vue,
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-[#064354] font-semibold text-sm sm:text-base mb-2 uppercase">
            WE ARE THE EXPERTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Expertise With Major Mobile App Development Technologies
          </h2>
        </div>

        {/* Expertise Cards */}
        <div className="space-y-8 sm:space-y-10">
          {appDevelopmentExpertise.map((expertise, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between"
            >
              {/* Left Content (Title, Description, Features) */}
              <div className="flex-grow mb-6 lg:mb-0 lg:pr-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-5">
                  {expertise.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                  {expertise.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-700 text-sm sm:text-base"
                    >
                      {/* Checkmark Icon */}
                      <svg
                        className="w-4 h-4 text-[#064354] mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content (Logos) */}
              <div className="flex-shrink-0 grid grid-cols-3 gap-4 lg:gap-5 w-full sm:w-auto mt-6 lg:mt-0 justify-items-center lg:justify-items-end">
                {expertise.logos.map((logoUrl, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 sm:w-18 sm:h-18 p-2 flex items-center justify-center"
                  >
                    {/* Using <img> tag for logos as requested, with placeholder URLs */}
                    <img
                      src={logoUrl}
                      alt={`Logo ${idx + 1}`}
                      className="w-full h-full object-contain rounded-md" // Added rounded-md for the slight rounded corners
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
