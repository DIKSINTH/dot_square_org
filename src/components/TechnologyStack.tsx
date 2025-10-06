import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface Technology {
  name: string;
  icon: string;
}

const row1Technologies: Technology[] = [
  {
    name: "Wordpress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "Drupal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
  },
  {
    name: "Craft CMS",
    icon: "https://cdn.worldvectorlogo.com/logos/craft-cms.svg",
  },
  {
    name: "Adobe Commerce",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  },
  {
    name: "Shopify",
    icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "Symfony",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  },
  {
    name: "Woo Commerce",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Bigcommerce",
    icon: "https://cdn.worldvectorlogo.com/logos/bigcommerce.svg",
  },
  {
    name: "Acquia",
    icon: "https://www.vectorlogo.zone/logos/acquia/acquia-icon.svg",
  },
  {
    name: "Joomla",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
  },
];

const row2Technologies: Technology[] = [
  {
    name: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  { name: "MEAN", icon: "https://cdn.worldvectorlogo.com/logos/mean.svg" },
  {
    name: "MERN",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Unreal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
  },
  {
    name: "Blender",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  {
    name: "Autodesk MAYA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg",
  },
  {
    name: "3ds Max",
    icon: "https://www.vectorlogo.zone/logos/autodesk/autodesk-icon.svg",
  },
  {
    name: "Magento",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  },
  {
    name: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
];

const row3Technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Xamarin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
  },
  {
    name: "GO Lang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "AR/VR",
    icon: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
  },
  {
    name: "Blockchain",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg",
  },
  {
    name: "Php",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const TechnologyBadge = ({ name, icon }: Technology) => (
  <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap min-w-fit">
    <img src={icon} alt={name} className="w-6 h-6 object-contain" />
    <span className="text-gray-900 font-medium text-base">{name}</span>
  </div>
);

const ScrollingRow = ({
  technologies,
  direction,
}: {
  technologies: Technology[];
  direction: "left" | "right";
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (direction === "right") {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      } else {
        scrollContainer.scrollLeft -= 1;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [direction]);

  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <TechnologyBadge
            key={`${tech.name}-${index}`}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </div>
  );
};

const TechnologyStack = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-100vw mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-semibold tracking-wide uppercase mb-3">
            TECHNOLOGIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Technology Stack and Platforms
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Over 1,000 experts with 23+ years of experience in over 50
            cutting-edge technologies.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <ScrollingRow technologies={row1Technologies} direction="right" />
          <ScrollingRow technologies={row2Technologies} direction="left" />
          <ScrollingRow technologies={row3Technologies} direction="right" />
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group">
            Book a FREE Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
