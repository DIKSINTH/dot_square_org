import {
  Users,
  Star,
  CheckCircle,
  Trophy,
  Lightbulb,
  Globe,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Us */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-blue-500 text-sm font-semibold tracking-wider uppercase">
                ABOUT US
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Built Relationships With 15,000+ Happy Clients
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Trusted by more than 15,000+ satisfied clients, we consistently
                deliver proven results through timely execution and exceptional
                service.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
              {/* Stat 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    1,000+
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Full Time Technical Team
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    15,000+
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Happy Clients
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-8 h-8 text-white"
                    strokeWidth={1.5}
                  />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    27,000+
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Successful Projects
                </p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    95%
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Customer Satisfaction
                </p>
              </div>

              {/* Stat 5 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    23+
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Years of Experience
                </p>
              </div>

              {/* Stat 6 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">
                    6+
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Offices Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - TechSquares */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-blue-500 text-sm font-semibold tracking-wider uppercase">
                TECHSQUARES
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Unveiling the Digital Landscape
              </h2>
              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-lg font-semibold group">
                <BookOpen className="w-5 h-5" />
                <span>Read Now</span>
              </button>
            </div>

            {/* Magazine/Book Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="TechSquares 2024 Magazine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="text-blue-500 font-bold text-lg">
                  TECHSQUARES
                </div>
                <div className="text-white font-bold text-5xl sm:text-6xl lg:text-7xl">
                  2024
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-white text-right">
                <p className="text-xl sm:text-2xl font-bold">Challenges,</p>
                <p className="text-xl sm:text-2xl font-bold">opportunities &</p>
                <p className="text-xl sm:text-2xl font-bold">
                  a look towards 2024
                </p>
              </div>
            </div>

            {/* Explore More Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-md text-base sm:text-lg font-semibold group">
                <span>Explore More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
