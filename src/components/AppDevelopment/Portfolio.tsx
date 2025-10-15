import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technology: string;
  region: string;
  badge: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mithree Trading",
      description:
        "Mithree Trading is a one-stop shop for restaurants and grocery stores looking for authentic Thai food supplies. They specialise in a wide range of ingredients, including coconut milk, rice and flour, sauces and pastes, dried foods, oils, and frozen and fresh options. Additionally, they provide packaging and cleaning supplies, ensuring a convenient experience for their customers.",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "WordPress",
      region: "Australia",
      badge: "App Development",
      link: "https://mithreetrading.com",
    },
    {
      id: 2,
      title: "3 Peaks",
      description:
        "3 Peaks, an Australian company with over 15 years of experience, focuses on offering performance clothing and accessories at accessible prices. Their products cater to outdoor enthusiasts and those seeking comfortable, functional clothing for everyday wear.",
      image:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "WordPress",
      region: "Australia",
      badge: "App Development",
      link: "https://3peaks.com",
    },
    {
      id: 3,
      title: "Wolf Properties",
      description:
        "Wolf Properties is a leading real estate and rental marketplace dedicated to serving the Brooklyn community. They offer expert services to assist with buying, selling, or renting property in the area. Their focus on the local community suggests a commitment to providing personalised and knowledgeable assistance.",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "WordPress",
      region: "USA",
      badge: "App Development",
      link: "https://wolfproperties.com",
    },
    {
      id: 4,
      title: "Cycology Gear",
      description:
        "This project tackles the creation of an online store catering specifically to cyclists. They offer a broad selection of cycling apparel and accessories for both men and women, making it a one-stop shop for cyclists of all levels.",
      image:
        "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "Shopify",
      region: "Australia",
      badge: "App Development",
      link: "https://cycologygear.com",
    },
    {
      id: 5,
      title: "Tutormate",
      description:
        "Tutormate is an e-learning platform built using CakePHP, a popular web development framework. Their mission is to provide students with high-quality tutoring at accessible prices. They connect students with friendly and approachable tutors who can answer their questions, help them develop study plans, and guide them towards achieving their academic goals.",
      image:
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "CakePHP",
      region: "UK",
      badge: "App Development",
      link: "https://tutormate.com",
    },
    {
      id: 6,
      title: "Wilderness Wear",
      description:
        "Wilderness Wear stands out from the competition by offering premium, self-manufactured outdoor clothing designed and produced in Australia. They cater to discerning customers who value internationally recognised standards and quality.",
      image:
        "https://images.pexels.com/photos/551652/pexels-photo-551652.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technology: "WordPress",
      region: "Australia",
      badge: "App Development",
      link: "https://wildernesswear.com",
    },
  ];

  const totalSlides = Math.ceil(projects.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleProjects = () => {
    const startIndex = currentSlide * 2;
    return projects.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white uppercase tracking-wider text-sm font-medium mb-3">
            PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What we have done
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            We've highlights some of the impressive apps we've developed,
            showcasing our versatility and ability to bring diverse ideas to
            life.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
            {getVisibleProjects().map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="lg:hidden mb-12">
            {getVisibleProjects().map((project, index) => (
              <div key={project.id} className={index > 0 ? "mt-8" : ""}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#064354] w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-[#064354] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="p-6 sm:p-8">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 sm:p-8 mb-6 overflow-hidden relative">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white rounded px-3 py-1 text-xs text-[#064354] inline-block">
                  {project.title.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <span className="inline-block bg-[#064354] text-white px-6 py-2 rounded-full text-sm font-medium">
            {project.badge}
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold text-black">
            {project.title}
          </h3>

          <p className="text-[#064354] leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>

          <div className="flex gap-8 pt-2">
            <div>
              <p className="text-[#064354] text-xs font-semibold uppercase tracking-wider mb-1">
                TECHNOLOGY
              </p>
              <p className="text-black font-medium">{project.technology}</p>
            </div>
            <div>
              <p className="text-[#064354] text-xs font-semibold uppercase tracking-wider mb-1">
                REGION
              </p>
              <p className="text-black font-medium">{project.region}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
