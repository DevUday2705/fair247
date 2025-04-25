import React from "react";
import bgImage from "../../public/images/bg-2.webp"; // Replace with your provided background
import whatsappIcon from "../../public/images/whatsapp.svg"; // WhatsApp icon

// Example icon paths (update as you upload)
import iconSupport from "/images/ic1.webp";
import iconPanels from "/images/ic2.webp";
import iconTrusted from "/images/ic3.webp";
import iconSecure from "/images/ic4.webp";

const features = [
  { icon: iconSupport, title: "24/7 CUSTOMER SUPPORT" },
  { icon: iconPanels, title: "ONLINE MASTER & ADMIN PANELS" },
  { icon: iconTrusted, title: "100% TRUSTED SERVICE" },
  { icon: iconSecure, title: "HIGHLY SECURED" },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Title & CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase text-gray-300 mb-1">Why Choose</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
            PLAY PROFITS?
          </h2>

          <div className="flex flex-col items-start sm:flex-row sm:justify-center lg:justify-start gap-4">
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

        {/* Right Side: Feature Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-80 rounded-md p-5 flex items-start gap-4"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-6 h-6 mt-1"
              />
              <p className="font-medium text-sm sm:text-base">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
