import { useState, useEffect } from "react";
import { Check, ArrowRight, RefreshCw, Lightbulb, Heart } from "lucide-react";

type TabType = "automation" | "intelligence" | "strategy";

interface TabContent {
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const tabData: Record<TabType, TabContent> = {
  automation: {
    description:
      "Our solutions reduce repetitive work, simplify tasks, and improve overall workflow. By streamlining processes and enhancing productivity, we help businesses save time, reduce errors, and focus on growth and innovation.",
    features: [
      "Automated workflows",
      "Faster decision-making",
      "Seamless system integration",
      "Cost-efficient operations",
    ],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "AI Technology Network",
  },
  intelligence: {
    description:
      "Transform data into actionable insights with advanced analytics and AI-driven intelligence. Our decision intelligence platform empowers organizations to make informed choices, predict outcomes, and optimize strategies in real-time.",
    features: [
      "Real-time data analytics",
      "Predictive modeling & forecasting",
      "Risk assessment & mitigation",
      "Performance optimization",
    ],
    image:
      "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Data Analytics Dashboard",
  },
  strategy: {
    description:
      "Build comprehensive AI strategies tailored to your business goals. From initial consultation to deployment, we guide organizations through digital transformation with innovative solutions that drive sustainable growth and competitive advantage.",
    features: [
      "Custom AI roadmap development",
      "Technology stack consultation",
      "Scalable architecture design",
      "Implementation & deployment",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Strategic Planning",
  },
};

const rotatingTexts = [
  "Innovative Intelligence",
  "Cutting-Edge Technology",
  "Advanced Automation",
  "Seamless Integration",
];

const AISolutionsSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("automation");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentContent = tabData[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-blue-500 text-sm font-semibold tracking-wide uppercase mb-4">
            CUSTOM AI SOLUTIONS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Creating Future-Ready AI
            <br />
            Solutions with{" "}
            <span className="text-blue-500 transition-opacity duration-500">
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveTab("automation")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === "automation"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <RefreshCw className="w-5 h-5" />
            AI Powered Automation
          </button>
          <button
            onClick={() => setActiveTab("intelligence")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === "intelligence"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Decision Intelligence
          </button>
          <button
            onClick={() => setActiveTab("strategy")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === "strategy"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <Heart className="w-5 h-5" />
            Strategy & Development
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentContent.description}
            </p>

            <div className="space-y-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors group">
              Know More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentContent.image}
                alt={currentContent.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
