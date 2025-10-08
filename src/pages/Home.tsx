import React from "react";
import Hero from "../components/Home/Hero.tsx";
import DrivingSuccess from "../components/Home/DrivingSuccess.tsx";
import ServicesSection from "../components/Home/ServicesSection.tsx";
import AboutSection from "../components/Home/AboutSection.tsx";
import AISolutionsSection from "../components/Home/AISolutionsSection.tsx";
import CodeToSuccessSection from "../components/Home/CodeToSuccessSection.tsx";
import TechnologyStack from "../components/Home/TechnologyStack.tsx";
import PartnersSection from "../components/Home/PartnersSection.tsx";
import SolutionsSection from "../components/Home/SolutionsSection.tsx";
import CaseStudiesSection from "../components/Home/CaseStudiesSection.tsx";
import ContactSection from "../components/Home/ContactSection.tsx";
import LatestArticlesSection from "../components/Home/LatestArticlesSection.tsx";
import FAQSection from "../components/Home/FAQSection.tsx";
import ClientTestimonials from "../components/Home/ClientTestimonials.tsx";
import IndustrySolutions from "../components/Home/IndustrySolutions.tsx";
import PartnersLogos from "../components/PartnersLogos.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <PartnersLogos />
      <DrivingSuccess />
      <ServicesSection />
      <AISolutionsSection />
      <CodeToSuccessSection />
      <AboutSection />
      <PartnersSection />
      <TechnologyStack />
      <IndustrySolutions />
      <SolutionsSection />
      <CaseStudiesSection />
      <ClientTestimonials />
      <ContactSection />
      <LatestArticlesSection />
      <FAQSection />
    </div>
  );
};

export default Home;
