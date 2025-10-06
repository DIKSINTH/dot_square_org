import React from "react";

const DrivingSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6 md:p-8 lg:p-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DRIVING SUCCESS
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-light">
            Optimise Savings for Exponential Growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Cost Savings */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-4">
              70%
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-200">
              Cost Savings
            </div>
          </div>

          {/* Productivity Boost */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
              80%
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-200">
              Productivity Boost
            </div>
          </div>

          {/* Threat Prevention */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-400 mb-4">
              95%
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-200">
              Threat Prevention
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Security Feature */}
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
              Enterprise-Grade Security
            </h3>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              Our robust security framework, backed by industry best practices,
              safeguards your solutions from evolving cyber threats, ensuring
              data integrity and compliance.
            </p>
          </div>

          {/* Investments Feature */}
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-300">
              Smart Investments
            </h3>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              Our strategic development model offers cost-effective solutions,
              balancing on-premise and nearshore resources to reduce expenses
              while maintaining top-tier quality.
            </p>
          </div>

          {/* Performance Feature */}
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
              Enhanced Efficiency & Performance
            </h3>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              Leverage our agile development approach and skilled team to
              accelerate workflows, streamline operations, and increase overall
              productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingSuccess;
