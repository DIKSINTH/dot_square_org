import React from "react";
import ConsultationModal from "./ConsultationModal.tsx";
import { ArrowRight } from "lucide-react";

const PromotionalBanner: React.FC = () => {
  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      triggerButtonRef.current?.focus();
    }, 100);
  };
  return (
    <>
      {/* Promotional Banner */}
      <button
        ref={triggerButtonRef}
        onClick={handleOpenModal}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-l-lg shadow-lg z-30 hidden lg:block transition-colors duration-200"
      >
        <div className="text-center">
          <div className="text-2xl mb-2">💡</div>
          <div className="font-bold">Unlock</div>
          <div className="font-bold">Savings —</div>
          <div className="text-sm">10% Off On</div>
          <div className="text-sm">First</div>
          <div className="text-sm">Invoice</div>
          <ArrowRight className="w-4 h-4 mx-auto mt-2" />
        </div>
      </button>
      {/* Mobile Promotional Banner */}
      <button
        onClick={handleOpenModal}
        className="lg:hidden fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg z-30 transition-colors duration-200"
      >
        <div className="text-xs font-bold">10% Off First Invoice!</div>
      </button>
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default PromotionalBanner;
