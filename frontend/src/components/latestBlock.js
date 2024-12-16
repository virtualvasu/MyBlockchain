import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you use Axios to fetch data from your API

const GetLatestBlock = () => {
    const [latestBlock, setLatestBlock] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the function to fetch the latest block
        const fetchLatestBlock = async () => {
            try {
                const response = await axios.get("http://localhost:3005/getLatestBlock"); // Replace with your actual API endpoint
                setLatestBlock(response.data); // Update the state with the block data
            } catch (err) {
                setError("Failed to fetch the latest block. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchLatestBlock();
    }, []); // Empty dependency array ensures it runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="latest-block">
            <h1>Latest Block</h1>
            {latestBlock ? (
                <div className="block-card w-full max-w-2xl bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6">
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-blue-600">Block Index:</span> {latestBlock.index}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-blue-600">Block Timestamp:</span> {new Date(latestBlock.timestamp).toLocaleString()}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-blue-600">Previous Hash:</span>
                        </p>
                        <p className="text-sm font-mono text-gray-600 break-words">{latestBlock.prevHash}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-blue-600">Hash:</span>
                        </p>
                        <p className="text-sm font-mono text-gray-600 break-words">{latestBlock.hash}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-blue-600">Data:</span>
                        </p>
                        <p className="text-sm text-gray-800 bg-blue-100 p-3 rounded-md whitespace-pre-wrap">
                            {latestBlock.data}
                        </p>
                    </div>
                </div>

            ) : (
                <p>No block data available.</p>
            )}
        </div>
    );
};

export default GetLatestBlock;
