import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              Still not sure what you are looking for?
            </h2>
            <button className="inline-flex items-center gap-2 bg-[#064354] hover:bg-[#064354] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                <div className="w-full h-full flex flex-col gap-1.5">
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                <div className="w-full h-full flex flex-col gap-1.5">
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                </div>
              </div>

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] sm:aspect-[3/2]">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Digital Services Dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="absolute top-4 left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <div className="w-full h-full flex flex-col gap-1.5">
                  <div className="flex-1 bg-white rounded opacity-80"></div>
                  <div className="flex-1 bg-white rounded opacity-80"></div>
                  <div className="flex-1 bg-white rounded opacity-80"></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <div className="w-full h-full flex flex-col gap-1.5">
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                  <div className="flex-1 bg-white rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-32 sm:h-40 lg:h-48 bg-[#064354] rounded-tl-full opacity-90 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-1/4 h-24 sm:h-32 lg:h-40 bg-[#064354] rounded-bl-full opacity-80 pointer-events-none"></div>
    </section>
  );
};

export default CallToAction;
