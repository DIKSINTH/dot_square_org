import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IndustrySlide {
  id: number;
  title: string;
  description: string;
  category: string;
}

const industries: IndustrySlide[] = [
  {
    id: 1,
    title: "Utilities",
    category: "INDUSTRIES WE SERVE",
    description:
      "Developing innovative solutions to help utility companies optimise resource management, deliver exceptional customer service, and navigate the evolving energy landscape.",
  },
  {
    id: 2,
    title: "Automotive Solutions",
    category: "INDUSTRIES WE SERVE",
    description:
      "Engineering next-generation automotive solutions to enhance efficiency, safety, and connectivity for a smarter and more sustainable future.",
  },
  {
    id: 3,
    title: "Consumer Packaged Goods",
    category: "INDUSTRIES WE SERVE",
    description:
      "Boosting efficiency and visibility to ensure your products reach the market swiftly and satisfy customers.",
  },
  {
    id: 4,
    title: "FMCG",
    category: "INDUSTRIES WE SERVE",
    description:
      "Streamlining operations and accelerating delivery to meet your fast-moving goods demands.",
  },
];

export default function IndustrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % industries.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + industries.length) % industries.length
    );
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getSlidePosition = (index: number) => {
    const diff = (index - currentIndex + industries.length) % industries.length;
    return diff;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="text-center pt-12 pb-8 px-4">
          <p className="text-white text-sm font-semibold tracking-wider mb-3">
            {industries[currentIndex].category}
          </p>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-5xl mx-auto">
            Bespoke Solutions for Your Industry's Needs
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-4xl mx-auto">
            Explore our bespoke solutions, thoughtfully designed to address the
            unique challenges and requirements of diverse industries.
          </p>
        </div>

        <div className="flex-1 relative flex items-center justify-center px-4 md:px-8 lg:px-16">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 md:left-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="relative w-full max-w-7xl h-[400px] md:h-[450px] lg:h-[500px]">
            {industries.map((industry, index) => {
              const position = getSlidePosition(index);
              const isActive = position === 0;
              const isNext = position === 1;
              const isPrev = position === industries.length - 1;
              const isVisible = isActive || isNext || isPrev;

              return (
                <div
                  key={industry.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    !isVisible ? "opacity-0 pointer-events-none" : ""
                  }`}
                  style={{
                    transform: `translateX(${
                      isActive ? "0%" : isNext ? "100%" : "-100%"
                    }) scale(${isActive ? "1" : "0.85"})`,
                    opacity: isActive ? "1" : "0",
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  {/* from-slate-900/80 to-slate-800/80 */}
                  <div className="w-full h-full bg-gradient-to-br  backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="h-1 w-20 bg-[#064354]-500 mb-6" />
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      {industry.title}
                    </h2>
                    <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
                      {industry.description}
                    </p>
                    <button className="text-[#064354] font-semibold text-base md:text-lg hover:text-[#064354]/60 transition-colors duration-300 self-start group">
                      Learn More
                      <span className="inline-block ml-2 group-hover:ml-3 transition-all duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="pb-12 flex justify-center items-center gap-3">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-[#064354]"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
