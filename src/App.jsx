import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CTASection from "./Components/CTASection";
import ExchangeGrid from "./Components/ExchangeGrid";
import Promotion from "./Components/Promotion";
import WhyChooseUs from "./Components/WhyChooseUs";
import StepsToGetAccount from "./Components/StepsToGetAccount";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTASection />
      <ExchangeGrid />
      <Promotion />
      <WhyChooseUs />
      <StepsToGetAccount />
    </div>
  );
};

export default App;
