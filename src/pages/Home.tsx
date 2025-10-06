import React from "react";
import Hero from "../components/Hero";
import PartnerLogoCarousel from "../components/PartnerLogoCarousel.tsx";
import DrivingSuccess from "../components/DrivingSuccess";
import ServicesSection from "../components/ServicesSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import AISolutionsSection from "../components/AISolutionsSection.tsx";
import CodeToSuccessSection from "../components/CodeToSuccessSection.tsx";
import TechnologyStack from "../components/TechnologyStack.tsx";
import PartnersSection from "../components/PartnersSection.tsx";
import SolutionsSection from "../components/SolutionsSection.tsx";
import CaseStudiesSection from "../components/CaseStudiesSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import LatestArticlesSection from "../components/LatestArticlesSection.tsx";
import FAQSection from "../components/FAQSection.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <PartnerLogoCarousel />
      <DrivingSuccess />
      <ServicesSection />
      <AISolutionsSection />
      <CodeToSuccessSection />
      <AboutSection />
      <PartnersSection />
      <TechnologyStack />
      <SolutionsSection />
      <CaseStudiesSection />
      <ContactSection />
      <LatestArticlesSection />
      <FAQSection />
    </div>
  );
};

export default Home;
