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

        <img src={whatsappIcon} alt="WhatsApp" />
      </div>
    </section>
  );
};

export default CTASection;
