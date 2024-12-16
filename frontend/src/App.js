import React, { useState } from "react";
import GetLatestBlock from "./components/latestBlock";

const App = () => {

  const [latestBlockState, setLatestBlockState] = useState(false);

  const toggleFunction = () => {

    setLatestBlockState((latestBlockState) => !latestBlockState);
  }
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">MyBlockchain</h1>

      <div className="flex space-x-4">
        {/* Add Block Button */}
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          onClick={() => {/* Add your logic for adding a block */ }}
        >
          Add Block
        </button>

        {/* Get Latest Block Button */}
        <button
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          onClick={toggleFunction}
        >

          {latestBlockState ? "Hide Latest Block" : "Get Latest Block"}
        </button>

      </div>
      {latestBlockState &&  <GetLatestBlock/> }
    </div>

  );
};

export default App;
