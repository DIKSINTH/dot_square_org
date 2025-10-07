import React from "react";

// --- Types ---
interface HiringModel {
  type: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
  footerText: string;
}

interface ModelCardProps {
  model: HiringModel;
  isDedicated: boolean;
}

// --- Icons (Placeholders) ---
const IconBucketHours: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconDedicatedHiring: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const ArrowPointer: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-[#064354] flex-shrink-0 mt-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- Content Data ---
const hiringModels: HiringModel[] = [
  {
    type: "Bucket hours",
    Icon: IconBucketHours,
    imageSrc:
      "https://placehold.co/600x400/1a1a1a/ffffff?text=Developer+Working+on+Clock",
    imageAlt: "A person working on a laptop with an alarm clock next to them.",
    description:
      "When you buy bucket hours, you purchase a set number of hours upfront.",
    features: [
      "Your purchased bucket hours remain valid for 8 months, during this time frame, you can utilize our services until your hours are exhausted or until the 8-month period expires.",
      "For example, if you invest in 40 bucket hours and use 10 hours within the first month, you will have a remaining 30 hours to utilize over the next 5 months.",
      "In this case, the developer will work for other projects simultaneously as you have opted for bucket hours and not dedicated hiring.",
    ],
    footerText:
      "It’s a convenient and efficient way to manage your developer needs on your schedule.",
  },
  {
    type: "Dedicated/Regular Hiring",
    Icon: IconDedicatedHiring,
    imageSrc:
      "https://placehold.co/600x400/000000/ffffff?text=Development+Team+Meeting",
    imageAlt:
      "A team of developers collaborating around a laptop in an office.",
    description:
      "In dedicated hiring, the number of hours are not fixed like the bucket hours but instead, you are reserving the developer exclusively for your project.",
    features: [
      "The developer will work only on your project for a set amount of time.",
      "You can choose to hire the developer for a week or a month, depending on what your project needs.",
      "This means our developer will focus exclusively on meeting the needs of your project, without any distractions from other commitments.",
    ],
    footerText:
      "Whether you need help for a short time or a longer period, our dedicated hiring option ensures your project gets the attention it deserves.",
  },
];

// --- Sub-Component ---
const ModelCard: React.FC<ModelCardProps> = ({ model, isDedicated }) => {
  const { Icon, type, imageSrc, imageAlt, description, features, footerText } =
    model;

  const ribbon = isDedicated ? (
    <div className="absolute top-0 right-0 overflow-hidden w-28 h-28">
      <div
        className="absolute top-8 -right-8 w-40 transform rotate-45 
                   bg-green-500 text-center text-white font-semibold py-1 shadow-md"
        style={{ fontSize: "0.6rem" }}
      >
        SAVE UPTO 20%
      </div>
    </div>
  ) : null;

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full relative border border-gray-200">
      {ribbon}

      {/* Image */}
      <div className="h-48 sm:h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="h-6 w-6 text-[#064354]" />
          <h3 className="ml-3 text-xl font-bold text-[#064354]">{type}</h3>
        </div>
        <p className="text-sm text-[#064354] mb-6">{description}</p>
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ArrowPointer />
              <p className="ml-3 text-sm text-[#064354]">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-[#064354] mb-4">{footerText}</p>
          <a
            href="#"
            className="flex items-center text-sm font-semibold text-[#064354] hover:text-[#064354] transition-colors"
          >
            Explore more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const HiringAssistanceSection: React.FC = () => {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center pb-12 sm:pb-16 text-white">
          <span className="text-sm font-semibold uppercase tracking-wider text-white">
            HIRE AS PER YOUR REQUIREMENT
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Get Our Assistance for Your Business Needs
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-4xl mx-auto">
            At Dotsquares, we provide flexible options for accessing our
            development team, allowing you to choose the duration and frequency
            of their availability based on your specific requirements.
          </p>
        </div>

        <div className="relative -mt-8 sm:-mt-10 lg:-mt-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ModelCard model={hiringModels[0]} isDedicated={false} />
            <ModelCard model={hiringModels[1]} isDedicated={true} />
          </div>
        </div>
      </div>

      <div className="h-32 sm:h-40 bg-white -mt-32 sm:-mt-40 z-0"></div>
    </section>
  );
};

export default HiringAssistanceSection;
