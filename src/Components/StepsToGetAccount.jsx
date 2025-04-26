import React from "react";
import whatsappIcon from "../../public/images/whatsapp.svg"; // WhatsApp icon

// Replace these with your icons (upload and update paths)
import icon1 from "/images/step-1.webp";
import icon2 from "/images/step-2.webp";
import icon3 from "/images/step-3.webp";
import icon4 from "/images/step-4.webp";

const steps = [
  {
    icon: icon1,
    text: (
      <>
        Tap <strong>'Whatsapp'</strong> button or <br />
        <span className="text-yellow-400 font-semibold">Tap Here</span> to start
        a Whatsapp chat with our team.
      </>
    ),
  },
  {
    icon: icon2,
    text: "Our dedicated team will assist you, answer questions, and guide you through the process.",
  },
  {
    icon: icon3,
    text: "We’ll work closely with you to understand your specific requirements.",
  },
  {
    icon: icon4,
    text: "Upon successful deal, we'll swiftly provide you with the requested betting exchange account ID.",
  },
];

const StepsToGetAccount = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-400 mb-1">
          Get Master, Agent & Admin Accounts
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          HOW TO GET YOUR MASTER ACCOUNT?
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}

              <img
                src={step.icon}
                alt={`Step ${index + 1}`}
                className="w-24 h-24"
              />

              <p className="text-sm leading-relaxed max-w-[250px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-center gap-4 items-center">
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
            href="https://t.me/lotus365bet_co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/telegram.png" // Replace or use icon lib
              alt="WhatsApp"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepsToGetAccount;
