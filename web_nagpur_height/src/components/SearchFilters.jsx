'use client';
import { useState } from "react";

const SearchFilters = () => {
  const [location, setLocation] = useState("Select Location");
  const [propertyType, setPropertyType] = useState("All Types");
  const [budget, setBudget] = useState("Any Budget");

  const handleSearch = () => {
    // Your search logic here...

    // Reset all dropdowns to default
    setLocation("Select Location");
    setPropertyType("All Types");
    setBudget("Any Budget");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-8xl -mb-8 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

        {/* Location Dropdown */}
        <div className="group relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between cursor-pointer">
            {location}
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </label>
          <select
            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Select Location</option>
            <option>Civil Lines</option>
            <option>Dharampeth</option>
            <option>Wardha Road</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="group relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between cursor-pointer">
            {propertyType}
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </label>
          <select
            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option>All Types</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="group relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between cursor-pointer">
            {budget}
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </label>
          <select
            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option>Any Budget</option>
            <option>Under 50 L</option>
            <option>50 L - 1 Cr</option>
            <option>1 Cr - 2 Cr</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            onClick={handleSearch}
          >
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
