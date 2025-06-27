'use client'
import { useEffect, useState } from 'react';

const RouteLoader = () => {
  const [loadingText, setLoadingText] = useState('Loading premium properties');
  
  useEffect(() => {
    const texts = [
      'Securing exclusive listings',
      'Verifying property details',
      'Preparing virtual tours',
      'Loading high-resolution images'
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center">
      {/* Elegant animated logo/mark */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-2 border-blue-700 rounded-full animate-ping opacity-20" />
        <div className="absolute inset-4 border-t-2 border-blue-700 rounded-full animate-spin" />
        <div className="absolute inset-6 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-8 h-8 text-blue-700"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 animate-progress" />
      </div>

      {/* Dynamic loading text */}
      <p className="text-gray-700 font-medium mb-2 text-center max-w-md">
        {loadingText}
        <span className="animate-pulse">...</span>
      </p>

      {/* Estimated time (optional) */}
      <p className="text-xs text-gray-400">Estimated time: &lt; 3 seconds</p>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; left: 0%; right: 100% }
          50% { width: 100%; left: 0%; right: 0% }
          100% { width: 0%; left: 100%; right: 0% }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default RouteLoader;