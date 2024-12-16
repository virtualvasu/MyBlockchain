import { useState } from "react";
import axios from "axios";

const AddBlock = () => {

    
    const [blockData, setBlockData] = useState("");
    const [blockMsg, setBlockMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDataInput = (e) => {

        setBlockData(e.target.value)
    }

    const handleAddBlock = async () => {

        if (!blockData) {
            setBlockMsg("Add some text as block data");
        }

        setLoading(true);

        try {
            const response = await axios.post("https://myblockchain-backend.onrender.com/addBlock", {
                data: blockData,
            });

            setBlockMsg(`Block added successfully! Block Hash: ${response.data.block.hash}`);
        } catch (error) {
            setBlockMsg("Failed to add block. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Add New Block
                </h1>

                <input
                    type="text"
                    placeholder="Enter text data for the block"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={blockData}
                    onChange={handleDataInput}
                />

                <button
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                    onClick={handleAddBlock}
                    disabled={loading}
                >
                    {loading ? "Adding Block..." : "Add Block"}
                </button>
            </div>

            {blockMsg && (
                <p className="text-center mt-4 text-lg text-green-600 font-semibold">
                    {blockMsg}
                </p>
            )}
        </div>


    );

};

export default AddBlock;