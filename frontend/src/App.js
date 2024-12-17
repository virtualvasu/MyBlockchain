import React, { useState } from "react";
import GetLatestBlock from "./components/latestBlock";
import AddBlock from "./components/addBlock";
import Chain from "./components/chain";
import Intro from "./components/intro";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleAddBlock = () => {
    setActiveComponent("AddBlock");
  };

  const toggleLatestBlock = () => {
    setActiveComponent((prev) => (prev === "GetLatestBlock" ? null : "GetLatestBlock"));
  };

  const toggleChain = () => {
    setActiveComponent((prev) => (prev === "Chain" ? null : "Chain"));
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-start p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4"> <b>MyBlockchain</b> </h1>

      {/* Intro Component */}
      <div className="mb-4">
        <Intro />
      </div>

      {/* Buttons for interacting with blockchain */}
      <div className="flex space-x-2 mb-4">
        {/* Add Block Button */}
        <button
          className="bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          onClick={handleAddBlock}
        >
          Add Block
        </button>

        {/* Get Latest Block Button */}
        <button
          className="bg-green-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
          onClick={toggleLatestBlock}
        >
          {activeComponent === "GetLatestBlock" ? "Hide Latest Block" : "Get Latest Block"}
        </button>

        {/* View Chain Button */}
        <button
          className="bg-purple-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
          onClick={toggleChain}
        >
          {activeComponent === "Chain" ? "Hide Chain" : "View Chain"}
        </button>
      </div>

      {/* Conditionally Render Components */}
      <div className="mt-0">
        {activeComponent === "GetLatestBlock" && <GetLatestBlock />}
        {activeComponent === "AddBlock" && <AddBlock />}
        {activeComponent === "Chain" && <Chain />}
      </div>
    </div>
  );
};

export default App;
