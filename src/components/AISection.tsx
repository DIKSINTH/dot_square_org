import { useState } from "react";
import { CheckCircle2, Lightbulb, LineChart, ArrowRight } from "lucide-react";
import aiNetworkImage from "@/assets/ai-network.jpg";

type TabType = "automation" | "intelligence" | "strategy";

interface TabConfig {
  id: TabType;
  icon: React.ReactNode;
  label: string;
  description: string;
  benefits: string[];
}

const AISection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("automation");

  const tabs: TabConfig[] = [
    {
      id: "automation",
      icon: <CheckCircle2 className="w-5 h-5" />,
      label: "AI Powered Automation",
      description:
        "Our solutions reduce repetitive work, simplify tasks, and improve overall workflow. By streamlining processes and enhancing productivity, we help businesses save time, reduce errors, and focus on growth and innovation.",
      benefits: [
        "Automated workflows",
        "Faster decision-making",
        "Seamless system integration",
        "Cost-efficient operations",
      ],
    },
    {
      id: "intelligence",
      icon: <Lightbulb className="w-5 h-5" />,
      label: "Decision Intelligence",
      description:
        "Transform data into actionable insights with our advanced AI analytics. Make informed decisions faster with predictive modeling and real-time intelligence that drives business growth.",
      benefits: [
        "Predictive analytics",
        "Real-time insights",
        "Data-driven strategies",
        "Risk mitigation",
      ],
    },
    {
      id: "strategy",
      icon: <LineChart className="w-5 h-5" />,
      label: "Strategy & Development",
      description:
        "Build comprehensive AI strategies tailored to your business goals. From roadmap creation to implementation, we guide your digital transformation journey with expert consulting.",
      benefits: [
        "Custom AI roadmaps",
        "Implementation support",
        "Technology consulting",
        "Scalable solutions",
      ],
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-10">
            Creating Future-Ready AI Solutions with{" "}
            <span className="text-accent">Cutting-Edge Technology</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full
                  font-medium text-sm md:text-base transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }
                `}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {currentTab.description}
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {currentTab.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center bg-[#0059ff] hover:bg-[#0059ff] text-white font-semibold px-8 py-4 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              Know More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src={aiNetworkImage}
                alt="AI Network Visualization"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
