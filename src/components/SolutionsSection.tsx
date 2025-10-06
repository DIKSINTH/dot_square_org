import React from "react";
import { Rocket, Building2, Briefcase } from "lucide-react"; // sample icons
import { ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Startup Launchpad",
      description:
        "Conquer the challenges of rapid scaling, budget constraints, and market validation with our expertise.",
      points: [
        "Get to market fast and cost-effectively with our MVP and SaaS development services.",
        "Align technology with business goals with our CTO-as-a-service offering.",
        "Make informed choices using our Data Analytics and DevOps services.",
        "Avoid costly mistakes with our Technology Consulting, ensuring long-term success.",
      ],
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      button: "Explore More",
    },
    {
      title: "Enterprise Evolution",
      description:
        "Overcome challenges related to scalability, security, maintenance, and cost-effectiveness as your business scales.",
      points: [
        "Revitalize outdated systems with our Application Modernization expertise.",
        "Our Custom Software Development services deliver secure, scalable solutions.",
        "Ensure exceptional performance with our thorough QA & Testing services.",
        "Unlock enhanced scalability, security, and cost-efficiency with Cloud Development.",
      ],
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      button: "Explore More",
    },
    {
      title: "Agency Acceleration",
      description:
        "We guide agencies through complex tech landscapes to deliver exceptional, tailored software solutions.",
      points: [
        "Access top-tier tech talent through Software Consulting & Development.",
        "Deliver the highest-quality software with our rigorous QA & Testing.",
        "Adapt to project demands with our Staff Augmentation solutions.",
        "Expand your portfolio without in-house development through White Label services.",
      ],
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      button: "Explore More",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section heading */}
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold uppercase tracking-wide">
          Solutions For All
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Leading the Industry With Excellence
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Dotsquares craft transformative software solutions to empower
          businesses of all sizes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              {item.icon}
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {item.description}
            </p>
            <ul className="space-y-2 mb-6">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                >
                  <span className="text-blue-500">›</span>
                  {point}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition">
              {item.button} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
