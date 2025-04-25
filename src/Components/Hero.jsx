import React from "react";
import heroImage from "../../public/images/hero.webp"; // Adjust the path if needed
import backgroundImage from "../../public/images/background.webp"; // Adjust the path if needed

const Hero = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Get your sports betting id Casino games and online gaming ipl link
          </h1>
          <p className="text-xl font-medium mb-2">
            Easy entry, big rewards – start your game today!
          </p>
          <p className="text-sm text-gray-300 mb-6">
            Your ultimate destination for sports betting, thrilling casino
            games, and non-stop IPL action – all in one place!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
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

        {/* Right Side */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={heroImage}
            alt="Hero Visual"
            className="max-w-sm relative -bottom-20 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
