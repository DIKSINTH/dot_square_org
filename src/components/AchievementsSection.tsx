import React from "react";

interface Award {
  name: string;
  image: string;
}

const AchievementsSection: React.FC = () => {
  const awards: Award[] = [
    {
      name: "Forbes Technology Council",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Forbes_logo.svg/2560px-Forbes_logo.svg.png",
    },
    {
      name: "Clutch Champion Spring 2024",
      image:
        "https://static.clutch.co/static/images/badges/champion_spring_2024.svg",
    },
    {
      name: "Clutch 1000 2023",
      image: "https://static.clutch.co/static/images/badges/top1000_2023.svg",
    },
    {
      name: "G2 Leader Spring 2024",
      image: "https://www.g2.com/static/g2leader_badge.png",
    },
    {
      name: "CMMI Appraised",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/CMMI_logo.svg/2560px-CMMI_logo.svg.png",
    },
    {
      name: "Ecommerce Awards 2022",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ecommerce_award_logo.svg/2560px-Ecommerce_award_logo.svg.png",
    },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small Title */}
        <p className="text-[#064354] font-semibold text-sm md:text-base mb-2">
          ACHIEVEMENTS
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#064354] mb-4">
          Recognised for Excellence in Web Development
        </h2>

        {/* Description */}
        <p className="text-[#064354] max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Dotsquares, a recognised industry leader, is the preferred partner for
          Fortune 500 firms, SMEs agencies, and startups seeking access to the
          top 1% of developers. We specialise in developing bespoke IT solutions
          with cutting-edge technologies, that help you achieve your business
          objectives.
        </p>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <img
                src={award.image}
                alt={award.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
