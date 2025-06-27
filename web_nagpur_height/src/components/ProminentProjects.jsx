"use client";
import Link from "next/link";
import { useState } from "react";
import { Properties } from "../data/properties.json";

const ProminentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % Properties.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Properties.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Prominent Projects to Explore
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Best projects to look out for in Nagpur
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative w-full flex items-center justify-center">
          <button
            onClick={prevCard}
            className="absolute left-3 z-10 bg-white/80 text-blue-600 font-bold px-3 py-2 rounded-full shadow-md"
            aria-label="Previous"
          >
            ◀
          </button>

          <Link
            href={`/property/${Properties[currentIndex].id}-${Properties[
              currentIndex
            ].title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")}`}
            className="w-[90%] max-w-sm bg-white rounded-lg shadow-md border transition-all duration-300 overflow-hidden relative z-0"
          >
            <img
              src={Properties[currentIndex].images[0]}
              alt={Properties[currentIndex].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-800">
                {Properties[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-500">
                {Properties[currentIndex].area}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {Properties[currentIndex].location}
              </p>
              <p className="text-blue-600 text-sm font-bold mt-2">
                {Properties[currentIndex].price}
              </p>
            </div>
          </Link>

          <button
            onClick={nextCard}
            className="absolute right-3 z-10 bg-white/80 text-blue-600 font-bold px-3 py-2 rounded-full shadow-md"
            aria-label="Next"
          >
            ▶
          </button>
        </div>

        {/* Desktop Marquee Scroll */}
        <div className="hidden md:block relative overflow-hidden group mt-12">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6">
            {Properties.slice(0, 8).map((property) => {
              const slug = `${property.id}-${property.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")}`;

              return (
                <div
                  key={property.id}
                  className="group/card w-72 min-w-[18rem] bg-white rounded-lg shadow-md border hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  <img
                    loading="lazy"
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-blue-800">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-500">{property.area}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {property.location}
                    </p>
                    <p className="text-blue-600 text-sm font-bold mt-2">
                      {property.price}
                    </p>
                  </div>
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover/card:opacity-100 transition duration-300 z-10 flex items-center justify-center">
                    <Link href={`/property/${slug}`} passHref>
                      <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProminentProjects;
