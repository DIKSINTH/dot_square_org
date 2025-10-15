import React from "react";
import CommonForm from "../components/WebDevelopment/CommonForm.tsx";
import AchievementsSection from "../components/AchievementsSection.tsx";
import WebServicesGrid from "../components/WebDevelopment/WebServicesGrid.tsx";
import CaptivatingPresenceBanner from "../components/WebDevelopment/CaptivatingPresenceBanner.tsx";
import BeyondBasicsFeatures from "../components/WebDevelopment/BeyondBasicsFeatures.tsx";
import TechStackSection from "../components/TechStackSection";
import DotSquaresAdvantages from "../components/DotSquaresAdvantages.tsx";
import HiringAssistanceSection from "../components/HiringAssistanceSection";
import AgileDevelopmentProcess from "../components/WebDevelopment/AgileDevelopmentProcess.tsx";
import ClientRelationshipsSection from "../components/ClientRelationshipsSection";
import Achievements from "../components/Home/Achievements.tsx";
import FAQ from "../components/WebDevelopment/FAQ.tsx";
import PartnerLogos from "../components/PartnersLogos.tsx";
import Portfolio from "../components/WebDevelopment/Portfolio.tsx";
import CallToAction from "../components/WebDevelopment/CallToAction.tsx";

const WebDevelopment: React.FC = () => {
  return (
    <div>
      <CommonForm />
      <PartnerLogos />
      <AchievementsSection />
      <WebServicesGrid />
      <CaptivatingPresenceBanner />
      <BeyondBasicsFeatures />
      <Portfolio />
      <TechStackSection />
      <DotSquaresAdvantages />
      <HiringAssistanceSection />
      <AgileDevelopmentProcess />
      <CallToAction />
      <ClientRelationshipsSection />
      <Achievements />
      <FAQ />
    </div>
  );
};

export default WebDevelopment;
