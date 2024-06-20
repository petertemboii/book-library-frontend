import React from "react";

const Footer = () => {
  const currentDate = new Date().getFullYear(); // Get the current year for dynamic year display

  return (
    <footer className="justify-center  text-center fixed bottom-0 w-full bg-gray-200 py-2">
      <div className="flex flex-row justify-center">
        <p>Peter Tembo II {currentDate}</p>
      </div>
    </footer>
  );
};

export default Footer;
