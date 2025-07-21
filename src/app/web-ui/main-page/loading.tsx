import React from 'react';

const WebUILoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Loading AISEO...
        </h2>
        <p className="text-slate-600">
          Preparing your AI-powered SEO platform
        </p>
      </div>
    </div>
  );
};

export default WebUILoading; 