// components/WhatsApp_button.jsx
"use client";

export default function WhatsApp_button({ number }) {
  const handleClick = () => {
    if (number) {
      window.open(`https://wa.me/${number}`, "_blank");
    }
  };

  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-4"
      onClick={handleClick}
    >
      Contact Agent
    </button>
  );
}
