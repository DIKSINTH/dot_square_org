import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  Search,
  X,
  Code,
  Settings,
  Headphones,
  Megaphone,
  Database,
  Cpu,
  Plane,
  Home,
  Video,
  Truck,
  Sun,
  Utensils,
  Car,
  Trophy,
  Wallet,
  Building2,
  ShoppingCart,
  Camera,
  Droplet,
  ShoppingBag,
  Heart,
  Gamepad2,
  Smartphone,
  Box,
  Layers,
  Cloud as CloudIcon,
  Wrench,
} from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const servicesMenu = {
    title: "Design & Development",
    icon: Code,
    items: [
      "Website Development",
      "Mobile App Development",
      "E-commerce Development",
      "Software Development",
      "Game Development",
      "Bespoke Development",
      "API Development",
      "Custom Software Integration",
    ],
  };

  const enterpriseMenu = {
    title: "Enterprise Services",
    icon: Settings,
    items: [
      "CRM Solutions",
      "Cloud Solutions",
      "IoT Solutions",
      "Data Engineering",
      "AI/ML",
      "Salesforce",
      "HubSpot",
      "Zoho",
      "ServiceNow",
      "MS Dynamics",
    ],
  };

  const supportMenu = {
    title: "Support Services",
    icon: Headphones,
    items: [
      "Services",
      "Hosting",
      "Server Support",
      "Development Support",
      "Staff Augmentation",
      "Digital Fulfilment",
      "IT Support Services",
      "DevOps",
    ],
  };

  const marketingMenu = {
    title: "Digital Marketing",
    icon: Megaphone,
    items: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Pay Per Click",
      "ORM",
      "Performance Optimization",
    ],
  };

  const cloudMenu = ["AWS", "Azure", "Google Cloud", "DevOps"];

  const dataAiMenu = {
    data: {
      title: "Data",
      icon: Database,
      items: [
        "Strategy Consulting",
        "Processing",
        "Governance Solution",
        "Storage Solution",
        "Quality Management",
        "Modelling Design",
        "Architecture",
        "Analytics & Visualization",
        "Cloud Data Migration",
      ],
    },
    ai: {
      title: "AI",
      icon: Cpu,
      items: [
        "Custom AI Development",
        "AI Consulting Strategy",
        "AI Business Intelligence",
        "Large Language Models Solutions",
        "AI Personalized Customer Experience",
        "Blockchain",
      ],
    },
  };

  const securityMenu = [
    "Web Application Security",
    "Mobile Application Services",
    "API Security",
    "Cloud Security Services",
    "Network Penetration Testing",
  ];

  const industriesMenu = [
    { name: "Travel & Hospitality", icon: Plane },
    { name: "Mortgage & Lending", icon: Home },
    { name: "Finance", icon: Wallet },
    { name: "E-Learning & Education", icon: Building2 },
    { name: "Real Estate", icon: Home },
    { name: "Media & Entertainment", icon: Video },
    { name: "Food & Beverage", icon: Utensils },
    { name: "Banking & Payment", icon: Building2 },
    { name: "Oil & Gas", icon: Droplet },
    { name: "Healthcare", icon: Heart },
    { name: "Logistics", icon: Truck },
    { name: "Automotive", icon: Car },
    { name: "Aviation", icon: Plane },
    { name: "Publishing", icon: Camera },
    { name: "Retail/FMCG", icon: ShoppingBag },
    { name: "Energy & Utilities", icon: Sun },
    { name: "Sports", icon: Trophy },
    { name: "Construction", icon: Building2 },
    { name: "Fintech", icon: Wallet },
  ];

  const technologiesMenu = {
    mobileApps: {
      title: "Mobile Apps",
      icon: Smartphone,
      items: [
        "Android",
        "React Native",
        "iOS",
        "Flutter",
        "Swift",
        "Kotlin",
        "Xamarin",
      ],
    },
    ecommerce: {
      title: "Ecommerce",
      icon: ShoppingCart,
      items: [
        "Adobe Commerce",
        "Shopify",
        "Symfony",
        "WooCommerce",
        "BigCommerce",
        "Magento",
      ],
    },
    cms: {
      title: "CMS",
      icon: Box,
      items: [
        "Wordpress",
        "Drupal",
        "Craft",
        "Acquia",
        "Joomla",
        "SharePoint",
        "Umbraco",
        "Sitecore",
        "Pantheon",
        "AEM Development",
        "Sitefinity",
      ],
    },
    customDevelopment: {
      title: "Custom Development",
      icon: Code,
      items: [
        "PHP",
        "Laravel",
        "ROR",
        "Power Platform",
        "HTML5",
        "JavaScript",
        "Zoho Creator",
      ],
    },
    fullStack: {
      title: "Full Stack Development",
      icon: Layers,
      items: ["MEAN", "Full Stack", "MERN", "Java", "React JS"],
    },
    crm: {
      title: "CRM",
      icon: Settings,
      items: [
        "ServiceNow",
        "Salesforce",
        "Odoo",
        "HubSpot",
        "Zoho",
        "MS Dynamics",
      ],
    },
    games: {
      title: "Games",
      icon: Gamepad2,
      items: ["Unity", "Unreal", "Maya", "3DS MAX", "Blender"],
    },
    cloud: {
      title: "Cloud",
      icon: CloudIcon,
      items: ["AWS", "Azure", "Google Cloud", "DevOps"],
    },
    other: {
      title: "Other",
      icon: Wrench,
      items: [
        "Python",
        "DotNet",
        "NodeJS",
        "Angular",
        "Spring",
        "C#",
        "Golang",
        "AR/VR",
      ],
    },
  };

  const successStoriesMenu = ["Case Studies", "Portfolio"];

  const hamburgerMenuItems = [
    "Our Company",
    "Sustainability",
    "Meet the Team",
    "Partnership",
    "Awards & Recognition",
    "Global Capability Center",
    "Press & Events",
  ];

  return (
    <header className="w-full bg-black text-white relative">
      {/* Top Bar with Phone Numbers */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <a
                href="tel:+13015639488"
                className="hover:text-blue-500 transition-colors hidden md:inline"
              >
                <span className="text-blue-500 font-semibold">US</span> +1 301
                563 9488
              </a>
              <a
                href="tel:+919829029555"
                className="hover:text-blue-500 transition-colors hidden lg:inline"
              >
                <span className="text-blue-500 font-semibold">IND</span> +91
                98290 29555
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-blue-500 w-1.5 h-1.5 rounded-sm"></div>
              </div>
              <span className="text-xl sm:text-2xl font-light">Dotsquares</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("services")}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div
                  className="absolute left-0 top-full pt-2 w-screen max-w-5xl -ml-32 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Code className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {servicesMenu.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {servicesMenu.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Settings className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {enterpriseMenu.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {enterpriseMenu.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Headphones className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {supportMenu.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {supportMenu.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Megaphone className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {marketingMenu.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {marketingMenu.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("cloud")}
              >
                Cloud <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "cloud" && (
                <div
                  className="absolute left-0 top-full pt-2 w-64 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-6">
                    <ul className="space-y-3">
                      {cloudMenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-sm hover:text-blue-500 transition-colors block"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("dataai")}
              >
                Data & AI <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "dataai" && (
                <div
                  className="absolute left-0 top-full pt-2 w-screen max-w-3xl -ml-32 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Database className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {dataAiMenu.data.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {dataAiMenu.data.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Cpu className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {dataAiMenu.ai.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {dataAiMenu.ai.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("security")}
              >
                Security <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "security" && (
                <div
                  className="absolute left-0 top-full pt-2 w-72 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-6">
                    <ul className="space-y-3">
                      {securityMenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-sm hover:text-blue-500 transition-colors block"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("industries")}
              >
                Industries <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "industries" && (
                <div
                  className="absolute left-0 top-full pt-2 w-screen max-w-4xl -ml-64 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-4 gap-4">
                      {industriesMenu.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                          <Link
                            key={idx}
                            to={
                              "/" +
                              industry.name.toLowerCase().replace(/\s+/g, "")
                            }
                            className="flex items-center gap-2 px-3 py-2 hover:text-blue-500 transition-colors group"
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{industry.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="px-3 py-2 text-sm hover:text-blue-500 transition-colors"
            >
              On-Demand Developer
            </a>

            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("technologies")}
              >
                Technologies <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "technologies" && (
                <div
                  className="absolute left-0 top-full pt-2 w-screen max-w-6xl -ml-96 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Smartphone className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.mobileApps.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.mobileApps.items.map(
                            (item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={
                                    "/" + item.toLowerCase().replace(/\s+/g, "")
                                  }
                                  className="text-sm hover:text-blue-500 transition-colors block"
                                >
                                  {item}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <ShoppingCart className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.ecommerce.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.ecommerce.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Box className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.cms.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.cms.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Code className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.customDevelopment.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.customDevelopment.items.map(
                            (item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={
                                    "/" + item.toLowerCase().replace(/\s+/g, "")
                                  }
                                  className="text-sm hover:text-blue-500 transition-colors block"
                                >
                                  {item}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Layers className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.fullStack.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.fullStack.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Settings className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.crm.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.crm.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Gamepad2 className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.games.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.games.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <CloudIcon className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.cloud.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.cloud.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500">
                          <Wrench className="w-5 h-5 text-blue-500" />
                          <h3 className="text-blue-500 font-semibold">
                            {technologiesMenu.other.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {technologiesMenu.other.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={
                                  "/" + item.toLowerCase().replace(/\s+/g, "")
                                }
                                className="text-sm hover:text-blue-500 transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onMouseEnter={() => setActiveDropdown("success")}
              >
                Success Stories <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "success" && (
                <div
                  className="absolute left-0 top-full pt-2 w-48 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-black border border-gray-800 rounded-lg shadow-2xl p-4">
                    <ul className="space-y-3">
                      {successStoriesMenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-sm hover:text-blue-500 transition-colors block"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:text-blue-500 transition-colors hidden lg:block"
              onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-blue-500 transition-colors hidden lg:block"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Contact us
            </button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hamburger Menu Panel */}
      {hamburgerMenuOpen && (
        <div className="absolute top-full right-0 w-80 bg-black border-l border-gray-800 z-50 shadow-2xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button
                onClick={() => setHamburgerMenuOpen(false)}
                className="hover:text-blue-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-4">
              {hamburgerMenuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                    className="text-sm hover:text-blue-500 transition-colors block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Services{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 py-2 space-y-4">
                  <div>
                    <h4 className="text-blue-500 font-semibold text-sm mb-2">
                      {servicesMenu.title}
                    </h4>
                    <ul className="space-y-2">
                      {servicesMenu.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-xs block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-semibold text-sm mb-2">
                      {enterpriseMenu.title}
                    </h4>
                    <ul className="space-y-2">
                      {enterpriseMenu.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-xs block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("cloud")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Cloud{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "cloud" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "cloud" && (
                <div className="pl-4 py-2">
                  <ul className="space-y-2">
                    {cloudMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                          className="text-xs block py-1"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("dataai")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Data & AI{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "dataai" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "dataai" && (
                <div className="pl-4 py-2 space-y-4">
                  <div>
                    <h4 className="text-blue-500 font-semibold text-sm mb-2">
                      {dataAiMenu.data.title}
                    </h4>
                    <ul className="space-y-2">
                      {dataAiMenu.data.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-xs block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-semibold text-sm mb-2">
                      {dataAiMenu.ai.title}
                    </h4>
                    <ul className="space-y-2">
                      {dataAiMenu.ai.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-xs block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("security")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Security{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "security" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "security" && (
                <div className="pl-4 py-2">
                  <ul className="space-y-2">
                    {securityMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                          className="text-xs block py-1"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("industries")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Industries{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "industries" && (
                <div className="pl-4 py-2">
                  <ul className="space-y-2">
                    {industriesMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={"/" + item.name.toLowerCase().replace(/\s+/g, "")}
                          className="text-xs block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-2 text-sm hover:text-blue-500 transition-colors"
            >
              On-Demand Developer
            </a>

            <div>
              <button
                onClick={() => toggleDropdown("technologies")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Technologies{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "technologies" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "technologies" && (
                <div className="pl-4 py-2 space-y-4">
                  <div>
                    <h4 className="text-blue-500 font-semibold text-sm mb-2">
                      {technologiesMenu.mobileApps.title}
                    </h4>
                    <ul className="space-y-2">
                      {technologiesMenu.mobileApps.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                            className="text-xs block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("success")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:text-blue-500 transition-colors"
              >
                Success Stories{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "success" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "success" && (
                <div className="pl-4 py-2">
                  <ul className="space-y-2">
                    {successStoriesMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={"/" + item.toLowerCase().replace(/\s+/g, "")}
                          className="text-xs block py-1"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="w-full mt-4 p-2 hover:text-blue-500 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" /> Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
