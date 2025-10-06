import {
  Monitor,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
  Users,
  ArrowRight,
  Share2,
  Database,
  Shield,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Software Development",
      description:
        "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Whether you're looking to create a custom app from scratch or modernise an existing one to match the latest technology trends, we can develop it according to your preferences.",
      image:
        "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Your doorway to the world of the web. Get a customized and user-friendly website loaded with the latest technology stack.",
      image:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Get ready to sell! We develop robust and user-friendly E-Commerce platforms to streamline your online sales and maximize your reach.",
      image:
        "https://images.pexels.com/photos/4705599/pexels-photo-4705599.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Effortlessly streamline your operations and enhance security with our comprehensive cloud implementation and migration services.",
      image:
        "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Users,
      title: "CRM",
      description:
        "We develop custom CRM software designed to streamline and enhance your business operations, boosting customer loyalty and efficiency.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Share2,
      title: "API Dev & Integration",
      description:
        "We build robust, scalable APIs for seamless data exchange. Our expertise includes RESTful, GraphQL, and third-party integrations, delivering secure and efficient solutions.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "We ensure seamless data processing and management, enabling accurate and efficient insights from your business data.",
      image:
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protect your digital assets with our cyber security services. We offer comprehensive security solutions that safeguard your data and systems from threats.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-500 text-sm sm:text-base font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            SERVICES
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 leading-tight">
            Bridging Innovation & Excellence With Modern Tech Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto px-4">
            We develop cutting-edge solutions and transform existing ones
            through collaborative development that prioritises your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                      <Icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed mb-5 transition-opacity duration-300 group-hover:opacity-0">
                    {service.description}
                  </p>

                  {/* Hover Buttons - Hidden by default, shown on hover */}
                  <div className="absolute bottom-5 sm:bottom-6 lg:bottom-8 left-5 sm:left-6 lg:left-8 right-5 sm:right-6 lg:right-8 flex flex-wrap gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-transparent border-2 border-white text-white rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-blue-500 text-white rounded-full text-sm sm:text-base font-medium hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
