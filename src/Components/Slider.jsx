import React, { useEffect, useState } from "react";
import slider1 from "/images/slider-1.jpg";
import slider2 from "/images/slider-2.jpg";
import slider3 from "/images/slider-3.jpg";

const images = [slider1, slider2, slider3];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative">
      {images.map((img, idx) => (
        <a href="https://wa.me/+919702283897">
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default ImageSlider;
