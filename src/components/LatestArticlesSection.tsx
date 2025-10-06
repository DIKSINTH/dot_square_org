import React from "react";

// --- Type Definition for Article Data ---
interface Article {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  logo?: string; // Optional logo for the first card
  readMoreLink: string;
}

// --- Sample Data ---
const latestArticles: Article[] = [
  {
    date: "September 29, 2025",
    tag: "Tech",
    title: "How the HubSpot-QuickBooks Integration Drives Business Efficiency",
    excerpt:
      "Stop costly manual data entry. The HubSpot & QuickBooks integration unifies your sales and finance teams, speeds up cash flow, and creates a single, accurate view of your business data.",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
    logo: "HubSpot", // Placeholder for the logo/branding
    readMoreLink: "/articles/hubspot-quickbooks-integration",
  },
  {
    date: "September 23, 2025",
    tag: "Tech",
    title: "Why Most AI Projects Fail (and How to Fix it with Agentic AI)",
    excerpt:
      "Most AI projects fail due to poor data and disconnected tools. Learn how Agentic AI creates proactive, goal-driven systems that deliver real business impact.",
    image:
      "https://images.unsplash.com/photo-1596556102146-24e03740e53f?fit=crop&w=600&q=80",
    readMoreLink: "/articles/ai-projects-fail-agentic-ai",
  },
  {
    date: "September 22, 2025",
    tag: "Tech",
    title: "Why Expo Is Our Go-To for Building React Native Apps at Dotsquares",
    excerpt:
      "Discover how Dotsquares uses Expo for React Native to deliver high-quality mobile apps. It enables OTA updates, simplifies development and builds apps faster.",
    image:
      "https://images.unsplash.com/photo-1550519965-021966a935a6?fit=crop&w=600&q=80",
    readMoreLink: "/articles/expo-react-native",
  },
];

// --- Sub-Component for a Single Article Card ---
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const { date, tag, title, excerpt, image, logo, readMoreLink } = article;

  return (
    <a
      href={readMoreLink}
      // Group hover is applied here for effects on children
      className="group block bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] transform"
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          // Hover effect: slight scale on the image
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tech Tag */}
        <span className="absolute bottom-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
          {tag}
        </span>

        {/* Optional Logo/Branding for the first card */}
        {logo && (
          <div className="absolute top-4 left-4 text-white text-sm font-bold bg-black bg-opacity-70 p-1 px-2 rounded">
            {logo}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg
            className="w-4 h-4 mr-1 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-base mb-6">{excerpt}</p>

        {/* Read More Button */}
        <div className="inline-flex items-center text-white bg-blue-500 px-6 py-2.5 text-sm font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg">
          Keep Reading
          <svg
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

// --- Main Latest Articles Section Component ---
const LatestArticlesSection: React.FC = () => {
  return (
    // The background of the entire section is light grey/off-white to contrast with the white cards
    <section className="bg-gray-50 py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase text-blue-500 tracking-[0.25em] font-semibold mb-2">
            NEWS & INSIGHTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest news, insights, and technology trends.
          </p>
        </div>

        {/* Articles Grid */}
        {/* Responsive grid: 1 column on mobile, 2 columns on tablet, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {latestArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
