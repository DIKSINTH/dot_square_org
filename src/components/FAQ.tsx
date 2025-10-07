import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

// Define the structure for a single FAQ item
interface FaqItem {
  question: string;
  answer: string;
}

// Data mirroring the content from your images
const faqData: FaqItem[] = [
  {
    question: "How much does website development cost?",
    answer:
      "The cost of building your website depends on a few things, like the size and complexity of your site, the features you want to include, and any specific integrations you need. The best way to get an accurate estimate for your website is to contact us!",
  },
  {
    question: "How long does it take to develop a web app?",
    answer:
      "Just like costs, development timelines depend on the complexity of your vision. A simple app with basic features can take just 3-4 months, while a feature-rich powerhouse might take 8-9 months.",
  },
  {
    question: "Why Choose Dotsquares for Your Web Development Needs?",
    answer:
      "At Dotsquares, we specialise in crafting scalable web applications that seamlessly integrate with modern frameworks and prioritise user-friendliness. As a respected web development company worldwide, we're committed to delivering top-quality development services while keeping costs optimised.",
  },
  {
    question: "In-House Development vs. Outsourcing: Which is Right for You?",
    answer:
      "The decision to develop your website in-house or outsource to a trusted development agency hinges on several factors, such as your budget, in-house expertise, & resources. Outsourcing to a trusted web development company like Dotsquares offers several advantages, including: Access to Specialised Expertise Faster Turnaround Times Cost-Effectiveness.",
  },
  {
    question: "What kind of web projects does Dotsquares specialise in?",
    answer:
      "Dotsquares is a leader in custom web development, leveraging the latest technologies and frameworks to craft high-performing, scalable, and user-friendly web solutions that align with your specific business goals. Custom Web Development E-Commerce Web Development CMS Development Enterprise Web Development. And More!",
  },
];

// --- Sub-component for a single FAQ item ---
interface AccordionItemProps {
  faq: FaqItem;
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  isOpen,
  toggle,
}) => {
  // We use max-h-0 and max-h-[1000px] (a large arbitrary value) to simulate height transition
  const contentHeightClass = isOpen ? "max-h-[1000px]" : "max-h-0";
  const borderStyle = isOpen ? "border-b-0" : "border-b";

  return (
    <div
      className={`border border-gray-200 bg-white rounded-md mb-4 overflow-hidden transition-all duration-300 ${borderStyle}`}
    >
      {/* Question Header */}
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        {/* Icon for open/close state */}
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#064354] transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
        )}
      </button>

      {/* Answer Content - Smooth Transition */}
      <div
        className={`px-4 transition-max-height duration-500 ease-in-out ${contentHeightClass}`}
      >
        <div className="pt-0 pb-4 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

// --- Main FAQ Component ---
const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Starts with the first item open (index 0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Custom utility class for max-height transition (necessary for Tailwind config, but adding here for illustrative purpose)
  // In a real Tailwind setup, you would add a custom utility like this to your tailwind.config.js:
  // theme: { extend: { transitionProperty: { 'max-height': 'max-height' } } }
  // Since I can't modify the config, the transition will work based on max-height properties.

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-[#064354] tracking-wider mb-2">
            FAQS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#064354]">
            We're here to answer all your questions.
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Footer Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
          <div className="flex items-center text-[#064354] mb-4 sm:mb-0 sm:mr-6">
            <HelpCircle className="w-6 h-6 text-[#064354] mr-2" />
            <span className="text-lg font-medium">Got Any more questions?</span>
          </div>

          <a
            href="#contact" // Replace with your actual contact link
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg text-white bg-[#064354] hover:bg-[#064354]/80 transition-colors duration-300 shadow-md w-full sm:w-auto"
          >
            Talk to us
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
