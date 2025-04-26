import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <a href="/">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>

          {/* Button */}
          <div>
            <a
              href="https://wa.me/+917045565862"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Chat Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
