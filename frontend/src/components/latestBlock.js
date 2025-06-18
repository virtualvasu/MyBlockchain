import React, { useState, useEffect } from "react";
import axios from "axios";

const GetLatestBlock = () => {
  const [latestBlock, setLatestBlock] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlock = async () => {
      try {
        const response = await axios.get("http://localhost:3005/getLatestBlock");
        setLatestBlock(response.data);
      } catch (err) {
        setError("Failed to fetch the latest block. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlock();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg">{error}</div>;
  }

  return (
    <div className="latest-block bg-gray-100 min-h-screen flex flex-col items-center px-2 py-4 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
        Latest Block
      </h1>
      {latestBlock ? (
        <div className="block-card w-full max-w-screen-sm bg-white border border-gray-300 rounded-lg shadow-lg p-4 overflow-hidden">
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">Block Index:</span> {latestBlock.index}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">Block Timestamp:</span>{" "}
              {new Date(latestBlock.timestamp).toLocaleString()}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">Previous Hash:</span>
            </p>
            <p className="text-xs font-mono text-gray-600 break-all">{latestBlock.prevHash}</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">Hash:</span>
            </p>
            <p className="text-xs font-mono text-gray-600 break-all">{latestBlock.hash}</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">Data:</span>
            </p>
            <p className="text-xs text-gray-800 bg-blue-100 p-2 rounded-md break-all">
              {latestBlock.data}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-700 text-sm">No block data available.</p>
      )}
    </div>
  );
};

export default GetLatestBlock;
