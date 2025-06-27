import React from "react";

export default function PostPropertyBanner() {
  return (
    <div className="bg-blue-100 rounded-lg flex items-center justify-between px-8 py-6 max-w-7xl mx-auto mt-8">
      {/* Left Text */}
      <div>
        <h2 className="text-xl font-medium text-gray-800">
          Post your Property for <span className="italic font-semibold">free</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          List it on Magicbricks and get genuine leads
        </p>
      </div>

      {/* Right Button */}
      <button className="flex items-center bg-blue-400 text-black font-medium px-6 py-3 rounded-full hover:bg-blue-300 transition">
        Post Property
        <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded-full">
          FREE
        </span>
      </button>
    </div>
  );
}
