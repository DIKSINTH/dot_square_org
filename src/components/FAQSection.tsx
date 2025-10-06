import React, { useState } from "react";

// --- Type Definition for FAQ Data ---
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// --- Sample FAQ Data (including content from all provided images) ---
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Why choose Dotsquares as an IT software service provider?",
    answer:
      "Over two decades of experience and a team of 1,000+ skilled developers have helped us build a network of over 20,000 satisfied clients globally. We achieve this by prioritising a deep understanding of your needs and a commitment to delivering exceptional results.",
  },
  {
    id: 2,
    question: "What different hiring models do you offer?",
    answer:
      "At Dotsquares, we understand that every project has unique requirements. That's why we offer two flexible hiring models to best suit your needs: **Staff Augmentation Model** – This model allows you to seamlessly integrate experienced developers into your existing team. **Fixed Price Model** – This model offers a transparent and predictable cost for your entire project.",
  },
  {
    id: 3,
    question: "How quickly can you start a new project?",
    answer:
      "Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2–3 business hours to discuss your project confidentially.",
  },
  {
    id: 4,
    question:
      "What is the process for hiring a dedicated developer and development team?",
    answer:
      "Streamline your project launch. Simply share your project requirements through our website or email. We'll work with you to identify the optimal solution, then carefully select a dedicated developer or development team to ensure a smooth and efficient onboarding process.",
  },
  {
    id: 5,
    question: "Do you provide post-development support and maintenance?",
    answer:
      "Yes, we provide comprehensive post-development support and maintenance packages. This includes bug fixes, security updates, feature enhancements, and performance optimisation to ensure your solution runs smoothly long-term.",
  },
  {
    id: 6,
    question: "How do you ensure the security of our data?",
    answer:
      "Data security is paramount. We adhere to industry-leading security standards, sign NDAs, employ secure coding practices, and use encrypted communication protocols to protect your intellectual property and confidential data.",
  },
  {
    id: 7,
    question: "How do you handle project management and timelines?",
    answer:
      "We use agile methodologies (Scrum/Kanban) and transparent project management tools (Jira/Trello) to manage timelines. Our dedicated project managers provide regular updates, ensuring projects are delivered on time and within budget.",
  },
];

// --- Sub-Component for a Single Accordion Item (FAQ Card) ---
const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}> = ({ item, isOpen, toggle }) => {
  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden mb-3 bg-white cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
      onClick={toggle}
    >
      {/* Question Header */}
      <div className="flex justify-between items-center p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-medium text-gray-800 select-none">
          {item.question}
        </h3>
        {/* Chevron Icon - Rotates based on open state */}
        <svg
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* Answer Content - Smooth Transition (The core of the smooth movement) */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-0" : "max-h-0 opacity-0"
        }`}
        style={{
          // This is the key for smooth, controlled transition.
          // max-h-96 is a large enough height to contain the content.
          paddingBottom: isOpen ? "1rem" : "0",
          paddingTop: isOpen ? "1rem" : "0",
        }}
      >
        <div className="px-4 sm:px-5 text-gray-600 leading-relaxed text-base">
          {/* The div below is to correctly apply padding only when open */}
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      </div>
    </div>
  );
};

// --- Main FAQ Section Component ---
const FAQSection: React.FC = () => {
  // State to track which item is open (stores the ID)
  const [openId, setOpenId] = useState<number | null>(1); // Default to first item open

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header/Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase text-blue-500 tracking-[0.25em] font-semibold mb-2">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            We're Here to Answer All Your Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 md:mt-16 flex justify-center items-center">
          {/* Question Mark Icon & Text */}
          <div className="flex items-center text-gray-600 mr-6">
            <div className="bg-gray-200 rounded-full p-2 mr-3">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c0-3.5 2.5-6 6.5-6s6.5 2.5 6.5 6-2.5 6-6.5 6h-1c-1.5 0-3 1.5-3 3v.5h3"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18v3m0 0h3m-3 0h-3"
                ></path>
              </svg>
            </div>
            <p className="font-medium text-lg">Got Any more questions?</p>
          </div>

          {/* Talk to Us Button */}
          <a
            href="/contact" // Replace with actual contact link
            className="inline-flex items-center text-white bg-blue-500 px-8 py-3 text-lg font-semibold rounded transition-all duration-300 hover:bg-blue-600"
          >
            Talk to Us
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
