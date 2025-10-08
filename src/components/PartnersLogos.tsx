import React from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    {
      name: "TUI Travel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/TUI_Logo.svg/320px-TUI_Logo.svg.png",
      alt: "TUI Travel PLC",
    },
    {
      name: "Away Resorts",
      logo: "https://www.awayresorts.co.uk/content/themes/away-resorts/dist/images/logo.svg",
      alt: "Away Resorts",
    },
    {
      name: "Community Fibre",
      logo: "https://communityfibre.co.uk/wp-content/themes/comf/img/community-fibre-logo.svg",
      alt: "Community Fibre",
    },
    {
      name: "Just Eat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Just_Eat_logo.svg/320px-Just_Eat_logo.svg.png",
      alt: "Just Eat",
    },
    {
      name: "Allurion",
      logo: "https://www.allurion.com/wp-content/uploads/2022/03/allurion-logo.svg",
      alt: "Allurion",
    },
    {
      name: "Well Pharmacy",
      logo: "https://www.well.co.uk/media/logo/stores/1/well-logo.svg",
      alt: "Well Pharmacy",
    },
    {
      name: "Azets",
      logo: "https://www.azets.co.uk/globalassets/azets-uk-logo.svg",
      alt: "Azets",
    },
    {
      name: "Comodo",
      logo: "https://www.comodo.com/images/comodo-logo.svg",
      alt: "Comodo",
    },
    {
      name: "TGI Fridays",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TGI_Fridays_logo.svg/320px-TGI_Fridays_logo.svg.png",
      alt: "TGI Fridays",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png",
      alt: "Microsoft",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
      alt: "Google",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png",
      alt: "Amazon",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png",
      alt: "Apple",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png",
      alt: "Meta",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png",
      alt: "Netflix",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png",
      alt: "Spotify",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.svg/320px-Adobe_Corporate_Logo.svg.png",
      alt: "Adobe",
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/320px-Tesla_logo.png",
      alt: "Tesla",
    },
    {
      name: "Uber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/320px-Uber_logo_2018.svg.png",
      alt: "Uber",
    },
    {
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/320px-Airbnb_Logo_B%C3%A9lo.svg.png",
      alt: "Airbnb",
    },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="w-full py-12 px-4 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 md:mb-16">
          Partnered with Startups and{" "}
          <span className="text-[#064354]">Fortune 500</span>
        </h2>

        <div className="relative">
          <style>{`
            @keyframes scroll-right {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 3));
              }
            }

            .animate-scroll {
              animation: scroll-right 60s linear infinite;
            }
          `}</style>

          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 mx-3 px-6 py-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<span class="text-gray-400 text-xs text-center font-medium">${partner.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
