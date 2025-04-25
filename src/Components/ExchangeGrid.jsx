import React from "react";
import bgImage from "../../public/images/bg-4.webp"; // Replace with your background image path

// Example data structure
const exchanges = [
  { name: "Sky Exch", logo: "/images/logo1.webp" },
  { name: "World777", logo: "/images/logo2.webp" },
  { name: "Diamond Exch", logo: "/images/logo3.webp" },
  { name: "Radhe Exch", logo: "/images/logo4.webp" },
  { name: "SS Exchange", logo: "/images/logo5.webp" },
  { name: "Lotus Book", logo: "/images/logo6.webp" },
  { name: "PP Exch 9", logo: "/images/logo7.webp" },
];

const ExchangeGrid = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-16 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#988100]/60 " />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          GET MASTER, AGENT & ADMIN ACCOUNTS <br />
          <span className="text-white">PREMIUM SPORTS EXCHANGES</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exchanges.map((exchange, index) => (
            <a href="https://wa.me/+919702283897" target="_blank">
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-[#1a1a1a] shadow-md"
              >
                {/* Image section - fills width and keeps height consistent */}
                <div className="h-[150px] w-full">
                  <img
                    src={exchange.logo}
                    alt={exchange.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Text section */}
                <div className="bg-[#1a1a1a] text-center py-3">
                  <p className="text-white font-medium">{exchange.name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeGrid;
