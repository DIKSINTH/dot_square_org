import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Industry {
  id: number;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: 1,
    title: "Education",
    description:
      "Building innovative education solutions to personalise learning experiences, empower educators, and make quality education accessible to all.",
  },
  {
    id: 2,
    title: "Financial Services",
    description:
      "Engineering next-generation solutions to help financial institutions enhance customer experiences, optimise risk management, and drive growth across all channels.",
  },
  {
    id: 3,
    title: "Retail",
    description:
      "Crafting transformative retail solutions to personalise customer experiences, optimise inventory management, and drive profitable growth across all channels.",
  },
  {
    id: 4,
    title: "Travel & Hospitality",
    description:
      "Developing cutting-edge solutions to help travel and hospitality businesses optimise operations, expand their customer base, and thrive in today's dynamic market.",
  },
  {
    id: 5,
    title: "Utilities",
    description:
      "Developing innovative solutions to help utility companies optimise resource management, deliver exceptional customer service, and navigate the evolving energy landscape.",
  },
  {
    id: 6,
    title: "Automotive Solutions",
    description:
      "Engineering next-generation automotive solutions to enhance efficiency, safety, and connectivity for a smarter and more sustainable future.",
  },
  {
    id: 7,
    title: "Consumer Packaged Goods",
    description:
      "Boosting efficiency and visibility to ensure your products reach the market swiftly and satisfy customers.",
  },
  {
    id: 8,
    title: "FMCG",
    description:
      "Streamlining operations and optimising supply chains to ensure that your fast-moving goods are always readily available.",
  },
  {
    id: 9,
    title: "Industrial & Manufacturing",
    description:
      "Optimising production and enhancing efficiency for smarter, more sustainable manufacturing.",
  },
  {
    id: 10,
    title: "Media & Publishing",
    description:
      "Revolutionising publishing with tools that increase audience reach, monetise content, and effortlessly engage readers.",
  },
  {
    id: 11,
    title: "Aviation",
    description:
      "Developing cutting-edge aviation solutions to improve passenger experience, optimise flight operations, and ensure the safety and efficiency of the skies.",
  },
];

const IndustrySolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, industries.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      prevSlide();
    } else {
      nextSlide();
    }
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#064354] text-sm font-semibold tracking-wide uppercase mb-3">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#064354] mb-4">
            Bespoke Solutions for Your Industry's Needs
          </h2>
          <p className="text-[#064354] text-sm md:text-base max-w-4xl mx-auto">
            Explore our bespoke solutions, thoughtfully designed to address the
            unique challenges and requirements of diverse industries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Background Image Container */}
          <div
            className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Navigation Buttons */}
            <button
              onClick={() => handleManualNavigation("prev")}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous industries"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => handleManualNavigation("next")}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Next industries"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Industries Slider */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="h-full flex transition-transform duration-[1200ms] ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsPerView
                  }%)`,
                  width: `${(industries.length * 100) / itemsPerView}%`,
                }}
              >
                {industries.map((industry) => (
                  <div
                    key={industry.id}
                    className="relative flex flex-col justify-end p-6 md:p-8 h-full border-r border-white border-opacity-20"
                    style={{
                      width: `${100 / industries.length}%`,
                      flexShrink: 0,
                    }}
                  >
                    {/* Orange accent line */}
                    <div className="w-16 h-1 bg-[#064354] mb-4" />

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-white text-sm md:text-base mb-6 leading-relaxed opacity-90">
                      {industry.description}
                    </p>
                    <button className="text-[#064354] font-semibold hover:text-[#146379] transition-colors self-start text-sm md:text-base">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-[#064354] w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Unlock Savings Badge (Optional - based on image) */}
        {/* <div className="fixed right-0 top-1/3 z-30 hidden lg:block">
          <div className="bg-orange-500 text-white px-4 py-6 rounded-l-full shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-xl">🏷️</span>
              </div>
              <div className="text-xs font-semibold">
                <div>Unlock</div>
                <div>Savings</div>
                <div className="text-base">10% Off On</div>
                <div>First</div>
                <div>Invoice</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default IndustrySolutions;
