import React from "react";

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full bg-gray-900 text-white h-20 flex items-center justify-between px-8 shadow-lg font-sans">
      <div
        className="text-xl font-bold cursor-pointer hover:text-purple-400 transition duration-300"
        onClick={scrollToTop}
      >
        Gustavo Bugs
      </div>
      <nav className="flex space-x-8">
        <button className="text-lg font-medium hover:text-purple-400 transition duration-300">
          My Projects
        </button>
        <button className="text-lg font-medium hover:text-purple-400 transition duration-300">
          My Work
        </button>
        <button className="text-lg font-medium hover:text-purple-400 transition duration-300">
          Find Me
        </button>
      </nav>
    </header>
  );
};

export default Header;
