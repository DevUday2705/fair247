import React from "react";
import promoImage from "../../public/images/bg.webp"; // Your batsman image
import bgImage from "../../public/images/bg-5.webp"; // The glowing symbols background

const PromoSection = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={promoImage}
            alt="Promo Visual"
            className="max-w-md w-full"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="text-yellow-400 font-semibold uppercase tracking-wider mb-2">
            Play Profits
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
            NO. 1 PLATFORM PROVIDING <br />
            MASTER PANELS ON TOP EXCHANGES
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl">
            We are providing all kind of Master & Super Master Accounts, Agent
            Accounts and Admin & Super Admin Accounts! Our sports exchange
            master, agent & admin accounts make your sports and gaming business
            easy.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/+917045565862"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/whatsapp.svg" // Replace or use icon lib
                alt="WhatsApp"
                className="cursor-pointer"
              />
            </a>

            <a
              href="https://lotus365bet.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold py-2 px-6 rounded inline-block"
            >
              Self DPT & WDL →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
