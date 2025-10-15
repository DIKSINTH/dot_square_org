import React from "react";
import CommonForm from "../components/AppDevelopment/CommonForm";
import PartnerLogos from "../components/PartnersLogos";
import AchievementsSection from "../components/AchievementsSection";
import AppServicesGrid from "../components/AppDevelopment/AppServicesGrid";
import AdvancedMobileAppsBanner from "../components/AppDevelopment/AdvancedMobileAppsBanner";
import ExpertiseSection from "../components/AppDevelopment/ExpertiseSection";
import Portfolio from "../components/AppDevelopment/Portfolio";
import TechStackSection from "../components/TechStackSection";
const AppDevelopment: React.FC = () => {
  return (
    <div>
      <CommonForm />
      <PartnerLogos />
      <AchievementsSection />
      <AppServicesGrid />
      <AdvancedMobileAppsBanner />
      <ExpertiseSection />
      <Portfolio />
      <TechStackSection />
    </div>
  );
};

export default AppDevelopment;
