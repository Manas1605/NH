"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Properties } from "../data/properties.json";

const ProminentProjects = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  // Auto-scroll horizontally only (no vertical jump)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (centerIndex + 1) % Properties.length;
      animateScrollToCard(nextIndex);
      setCenterIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [centerIndex]);

  const animateScrollToCard = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index];
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const boxCenter =
          child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - boxCenter);
        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      });

      setCenterIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Prominent Projects to Explore
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Best projects to look out for in Nagpur
        </p>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* ✅ Mobile Carousel with Peek & Blur */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
      >
        {Properties.map((property, index) => {
          const isCenter = index === centerIndex;
          const slug = `${property.id}-${property.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")}`;

          return (
            <Link
              key={property.id}
              href={`/property/${slug}`}
              className={`shrink-0 snap-center w-[85vw] transition-all duration-300 overflow-hidden relative ${
                isCenter
                  ? "scale-100 blur-0 z-10"
                  : "scale-90 blur-sm opacity-60"
              }`}
            >
              <div className="rounded-xl overflow-hidden border shadow-md bg-white">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
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
              </div>
            </Link>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {Properties.map((_, index) => (
          <span
            key={index}
            onClick={() => animateScrollToCard(index)}
            className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
              index === centerIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 opacity-70"
            }`}
          ></span>
        ))}
      </div>

      {/* 💻 Desktop Full-Width Marquee */}
      <div className="hidden md:block relative overflow-hidden group mt-20">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6">
          {Properties.slice(0, 8).map((property) => {
            const slug = `${property.id}-${property.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")}`;

            return (
              <div
                key={property.id}
                className="group/card w-80 bg-white rounded-lg shadow-md border hover:shadow-xl transition-all duration-300 overflow-hidden relative"
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

      {/* Marquee Keyframes */}
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
