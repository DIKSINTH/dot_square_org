import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Example icons, you might need to install 'lucide-react'

// Define the data structure for the process steps
const processSteps = [
  {
    id: 1,
    title: "Planning & Consultation",
    mobileTitle: "Planning & Consultation",
    content: {
      mainDescription:
        "Our journey begins with understanding your vision. Based on your vision, we collaboratively create a project roadmap with clear milestones. We'll consult about your ideas, target audience, and desired outcomes.",
      details: [
        {
          heading: "Vision and Goals Discussion",
          text: "Initiate discussions to understand your objectives, target audience, and desired outcomes.",
        },
        {
          heading: "Project Roadmap Creation",
          text: "Collaboratively create a detailed project plan with clear milestones and deadlines.",
        },
        {
          heading: "Scope Definition",
          text: "Outline the key features, functionalities, and requirements.",
        },
        {
          heading: "Resource Allocation",
          text: "Allocate team roles, tools, and budgets to ensure effective project management.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Design",
    mobileTitle: "Design",
    content: {
      mainDescription:
        "Our skilled designers translate your vision into a user-friendly and visually appealing solution. They focus on creating a positive user experience that keeps users engaged and coming back for more.",
      details: [
        {
          heading: "Wireframing",
          text: "Develop wireframes to outline the structure and layout.",
        },
        {
          heading: "UI/UX Design",
          text: "Craft the user interface and user experience, focusing on aesthetics and functionality.",
        },
        {
          heading: "Prototype Creation",
          text: "Create interactive prototypes for user feedback and refinement.",
        },
        {
          heading: "Design Approval",
          text: "Present the design for your review and approval, making necessary adjustments based on feedback.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Development",
    mobileTitle: "Development",
    content: {
      mainDescription:
        "Our expert developers take your design and turn it into reality. We keep you informed throughout the process with regular progress reports and milestone deliverables. This ensures you have complete transparency and control over the development phase.",
      details: [
        {
          heading: "Frontend Development",
          text: "Code the client-side interface, ensuring responsiveness and compatibility.",
        },
        {
          heading: "Backend Development",
          text: "Build the server-side logic, integration, and functionalities.",
        },
        {
          heading: "Regular Updates",
          text: "Provide progress reports and milestone deliverables to keep you informed.",
        },
        {
          heading: "Quality Assurance",
          text: "Conduct initial testing and debugging to ensure the development functions as intended.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Testing",
    mobileTitle: "Testing",
    content: {
      mainDescription:
        "Before launch, our dedicated QA specialists meticulously test every aspect of your product. They identify and fix any potential issues to guarantee a smooth and flawless user experience.",
      details: [
        {
          heading: "Functionality Testing",
          text: "Test all features and functionalities to ensure they work correctly.",
        },
        {
          heading: "Usability Testing",
          text: "Evaluate the user interface and user experience for ease of use and navigation.",
        },
        {
          heading: "Performance Testing",
          text: "Assess the speed, load time, and responsiveness under various conditions.",
        },
        {
          heading: "Security Testing",
          text: "Conduct thorough security checks to identify and fix vulnerabilities.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Deployment",
    mobileTitle: "Deployment",
    content: {
      mainDescription:
        "Once everything is finalised, our team strategically chooses the most suitable deployment methods and services. Now, your project is live for everyone to see and interact with!",
      details: [
        {
          heading: "Hosting Selection",
          text: "Recommend and set up the most suitable services based on your needs.",
        },
        {
          heading: "Final Preparations",
          text: "Perform final checks and configurations before going live.",
        },
        {
          heading: "Launch Strategy",
          text: "Develop a launch plan, including marketing and promotional strategies.",
        },
        {
          heading: "Go Live",
          text: "Deploy the product, ensuring everything is functional and optimised for performance.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Maintenance",
    mobileTitle: "Maintenance",
    content: {
      mainDescription:
        "Our commitment doesn't end at launch. We provide ongoing support to ensure your product stays up-to-date, secure, and bug-free.",
      details: [
        {
          heading: "Regular Updates",
          text: "Implement software and security updates to keep the website current.",
        },
        {
          heading: "Monitoring",
          text: "Continuously monitor performance and security to prevent issues.",
        },
        {
          heading: "Bug Fixes",
          text: "Address any technical issues or bugs that arise post-launch.",
        },
        {
          heading: "Performance Optimization",
          text: "Optimise speed and functionality based on user feedback and analytics.",
        },
      ],
    },
  },
];

const AgileDevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0].id);

  // Helper component for the content section (Details)
  const DetailItem = ({ heading, text }) => (
    <div className="mb-6 md:mb-8 last:mb-0">
      <h3 className="font-bold text-lg text-gray-800 leading-snug">
        {heading}
      </h3>
      <p className="text-gray-600 mt-1 text-sm">{text}</p>
    </div>
  );

  // Find the content for the currently active step
  const activeContent = processSteps.find(
    (step) => step.id === activeStep
  )?.content;
  const activeTitle = processSteps.find(
    (step) => step.id === activeStep
  )?.title;

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
            OTHER TECHNOLOGIES WE WORK ON
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Agile Development Process
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
            Companies employ developers from us because we have a proven track
            record of delivering high-quality projects on time.
          </p>
        </div>

        {/* Navigation Tabs (Desktop/Tablet View) */}
        <div className="hidden md:block border-b border-gray-200 mb-10 md:mb-16">
          <nav className="flex justify-between space-x-0 sm:space-x-2 lg:space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`py-4 px-2 lg:px-4 text-base font-semibold transition-colors duration-200 border-b-4 
                  ${
                    activeStep === step.id
                      ? "text-gray-900 border-blue-500"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                <span className="text-gray-400 mr-2">{step.id}.</span>
                {step.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section (Desktop/Tablet View) */}
        {activeContent && (
          <div className="hidden md:grid md:grid-cols-3 gap-8 p-6 lg:p-10 bg-white shadow-xl rounded-lg border border-gray-100">
            {/* Main Description Column */}
            <div className="col-span-1 border-r pr-6 border-gray-200">
              <h3 className="text-3xl font-bold text-blue-500 mb-4 transition-all duration-300">
                {activeTitle}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {activeContent.mainDescription}
              </p>
            </div>

            {/* Details Column 1 */}
            <div className="col-span-1 pr-6">
              {activeContent.details.slice(0, 2).map((detail, index) => (
                <DetailItem
                  key={index}
                  heading={detail.heading}
                  text={detail.text}
                />
              ))}
            </div>

            {/* Details Column 2 */}
            <div className="col-span-1">
              {activeContent.details.slice(2, 4).map((detail, index) => (
                <DetailItem
                  key={index + 2}
                  heading={detail.heading}
                  text={detail.text}
                />
              ))}
            </div>
          </div>
        )}

        {/* Accordion (Mobile View) */}
        <div className="md:hidden">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 divide-y divide-gray-200">
            {processSteps.map((step) => (
              <div key={step.id} className="p-4 sm:p-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() =>
                    setActiveStep(activeStep === step.id ? null : step.id)
                  }
                >
                  <span className="text-xl font-bold text-gray-900">
                    <span className="text-blue-500 mr-2">{step.id}.</span>
                    {step.mobileTitle}
                  </span>
                  {activeStep === step.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {activeStep === step.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {step.content.mainDescription}
                    </p>
                    <div className="space-y-4">
                      {step.content.details.map((detail, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-base text-gray-800">
                            {detail.heading}
                          </h4>
                          <p className="text-gray-600 text-sm mt-0.5">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgileDevelopmentProcess;
