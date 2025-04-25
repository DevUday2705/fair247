import React from "react";
import whatsappIcon from "../../public/images/whatsapp.svg"; // Use the uploaded PNG or replace with an icon lib

const CTASection = () => {
  return (
    <section className="bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            GET YOUR <span className="text-yellow-400">MASTER PANEL</span> TODAY
            AND <br />
            START MAKING MONEY!
          </h2>
        </div>

        {/* Button */}

        <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4">
          <a
            href="https://wa.me/+919702283897"
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
    </section>
  );
};

export default CTASection;
