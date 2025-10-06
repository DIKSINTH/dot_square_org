import { ArrowRight } from "lucide-react";

const CodeToSuccessSection = () => {
  return (
    <section className="px-4 mb-3 sm:px-6 sm:mb-6 lg:px-8 lg:mb-10">
      <div
        className="relative w-full rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between bg-cover bg-center p-6 sm:p-10 lg:p-14"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1200')",
        }}
      >
        {/* Overlay for dark gradient */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            From Code to Success{" "}
            <span className="inline-block align-middle">📈</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base mt-2">
            We Build More Than Software.
          </p>
        </div>

        {/* Button */}
        <div className="relative z-10">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-5 sm:px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-orange-600 transition-colors">
            Discuss Your Requirement!
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeToSuccessSection;
