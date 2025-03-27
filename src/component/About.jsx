
import React from "react";

const About = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <div className="p-6 bg-gradient-to-r from-[#e7dfb8] to-[#e8e1c4] flex flex-col items-center w-full  shadow-lg flex-grow">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a team of developers
        </p>
        {/* <UserClass name="Allester" location="Chennai" /> */}
      </div>
    </div>
  );
};

export default About;