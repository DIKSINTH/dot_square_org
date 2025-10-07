import React from "react";
import CommonForm from "../components/CommonForm";
import AchievementsSection from "../components/AchievementsSection";
import WebServicesGrid from "../components/WebServicesGrid";
import CaptivatingPresenceBanner from "../components/CaptivatingPresenceBanner";
import BeyondBasicsFeatures from "../components/BeyondBasicsFeatures";
import TechStackSection from "../components/TechStackSection";
import DotSquaresAdvantages from "../components/DotSquaresAdvantages";
import HiringAssistanceSection from "../components/HiringAssistanceSection";
import AgileDevelopmentProcess from "../components/AgileDevelopmentProcess";
import ClientRelationshipsSection from "../components/ClientRelationshipsSection";
import Achievements from "../components/Achievements";
import FAQ from "../components/FAQ";

const WebDevelopment: React.FC = () => {
  return (
    <div>
      <CommonForm />
      <AchievementsSection />
      <WebServicesGrid />
      <CaptivatingPresenceBanner />
      <BeyondBasicsFeatures />
      <TechStackSection />
      <DotSquaresAdvantages />
      <HiringAssistanceSection />
      <AgileDevelopmentProcess />
      <ClientRelationshipsSection />
      <Achievements />
      <FAQ />
    </div>
  );
};

export default WebDevelopment;
