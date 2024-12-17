import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl text-center">
        
        <p className="text-gray-600 leading-relaxed">
          This is a simple blockchain network implemented using JavaScript. 
          <span className="block mt-2">
            MyBlockchain adheres to the core principles of a conventional blockchain network.
          </span>
          <span className="block mt-2">
            You can interact with the live blockchain using the features listed below.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
