import React, { useState, useEffect } from "react";
import axios from "axios";

const Chain = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockchain = async () => {
      try {
        const response = await axios.get("http://localhost:3005/getChain"); 
        setBlockchain(response.data);
      } catch (err) {
        setError("Failed to fetch blockchain data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlockchain();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600">Loading blockchain...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Blockchain</h1>

      {/* Vertical Chain Container */}
      <div className="flex flex-col items-center space-y-6">
        {blockchain.map((block, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Block */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-80">
              <p>
                <strong>Index:</strong> {block.index}
              </p>
              <p>
                <strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}
              </p>
              <p>
                <strong>Previous Hash:</strong>{" "}
                <span className="break-all text-gray-600">{block.prevHash}</span>
              </p>
              <p>
                <strong>Hash:</strong>{" "}
                <span className="break-all text-gray-600">{block.hash}</span>
              </p>
              <p>
                <strong>Data:</strong> {block.data}
              </p>
            </div>

            {/* Link between blocks */}
            {index < blockchain.length - 1 && (
              <div className="flex flex-col items-center">
                <div className="h-12 w-1 bg-blue-500 my-2"></div>
                <div className="text-gray-500 text-xl">↓</div>
                <div className="h-12 w-1 bg-blue-500 my-2"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chain;
