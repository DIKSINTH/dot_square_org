import React from "react";

// You would replace these with actual image imports or URLs
const placeholderImage1 =
  "https://via.placeholder.com/600x400?text=Team+Photo+1";
const placeholderImage2 =
  "https://via.placeholder.com/300x200?text=Office+Event+1";
const placeholderImage3 =
  "https://via.placeholder.com/300x200?text=Office+Event+2";
const placeholderImage4 =
  "https://via.placeholder.com/300x200?text=Team+Photo+2";
const placeholderImage5 =
  "https://via.placeholder.com/300x200?text=Leadership+Team";

// --- Icon Component Placeholders ---
// In a real application, you'd use a library like 'lucide-react' or 'react-icons'
const IconPlaceholder = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xl text-[#064354] p-2 rounded-full border border-[#064354]/50 bg-[#064354]/10 mr-4">
    {children}
  </div>
);

// Mapped data for the features/benefits list
const features = [
  { icon: "⭐️", text: "5+ Years of Average Experience" },
  { icon: "🔗", text: "Integrity & Transparency" },
  { icon: "💰", text: "FREE No Obligation Quote" },
  { icon: "🛡️", text: "ISO 27001 Information Security" },
  { icon: "🎯", text: "Outcome-Focused Approach" },
  { icon: "📄", text: "Transparency is Guaranteed" },
  { icon: "🔒", text: "Focus on Security" },
  { icon: "⭐", text: "4.8/5 Rating on Clutch" },
  { icon: "🧑‍💻", text: "Hire a Team of Your Choice" },
  { icon: "💵", text: "Costs Lower Than Your Local Guy" },
];

const ClientRelationshipsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-[#064354] tracking-wider mb-2">
            WHO WE ARE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#064354] mb-4">
            Built Relationships with 15,000+ Happy Clients!
          </h2>
          <p className="max-w-3xl mx-auto text-[#064354]">
            Companies employ software developers from us because we have a
            proven track record of delivering high-quality projects on time.
          </p>
        </div>

        {/* Content Grid (Features List and Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Features List Section */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-y-6 gap-x-6 sm:gap-x-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                {/* Icon is aligned visually center with text */}
                <IconPlaceholder>{feature.icon}</IconPlaceholder>
                <p className="text-base text-[#064354] font-medium leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          {/* This column adjusts layout for tablet/desktop (lg) view */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1: Large primary image - spans 2 columns on tablet (md) and desktop (lg) */}
            <div className="md:col-span-2">
              <img
                src={placeholderImage1}
                alt="Group of business professionals smiling"
                className="w-full object-cover rounded-lg shadow-lg aspect-[3/2] md:aspect-[5/2]"
              />
            </div>

            {/* Row 2: Two smaller images */}
            {/* On small screens, they stack (col-span-1). On tablet/desktop, they are side-by-side. */}
            <div className="col-span-1">
              <img
                src={placeholderImage2}
                alt="People networking at an event"
                className="w-full object-cover rounded-lg shadow-lg aspect-square md:aspect-[4/3]"
              />
            </div>
            <div className="col-span-1">
              <img
                src={placeholderImage3}
                alt="Another event photo"
                className="w-full object-cover rounded-lg shadow-lg aspect-square md:aspect-[4/3]"
              />
            </div>

            {/* Row 3: Two smaller images */}
            {/* This is adjusted to mimic the layout: one 3/5 image and one 2/5 image (visually) */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  src={placeholderImage4}
                  alt="Team members chatting"
                  className="w-full object-cover rounded-lg shadow-lg aspect-[5/3] md:aspect-[5/2]" // Using aspect ratio for visual sizing
                />
              </div>
              <div className="col-span-1">
                <img
                  src={placeholderImage5}
                  alt="Two employees smiling"
                  className="w-full object-cover rounded-lg shadow-lg aspect-[5/3] md:aspect-[5/2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientRelationshipsSection;
