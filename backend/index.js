const express = require('express');
const Block = require('./blockchain/Block.js');
const Chain = require('./blockchain/Chain.js');
const cors = require("cors");



const app = express();
app.use(cors());
const port = 3005;

// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// Use JSON middleware for POST requests
app.use(express.json());

// Initialize blockchain
let chain = new Chain();

// Route for the homepage (index.ejs)
app.get('/', (req, res) => {
    res.send("blockchain home page");
});

// Route to add a block to the chain
app.post('/addBlock', (req, res) => {
    const { data } = req.body; // Extract only the data from the request body

    if (!data) {
        return res.status(400).send("Data is required to create a new block");
    }

    // Create a new block using the Chain's methods
    const newBlock = new Block(
        chain.getLatestBlock().index + 1, 
        Date.now(), 
        data, 
        chain.getLatestBlock().hash
    );

    chain.addBlock(newBlock);

    // Respond with the newly added block
    res.status(200).json({
        message: "Block added to the chain successfully",
        block: newBlock
    });
});


// Route to get the entire blockchain
app.get('/getChain', (req, res) => {
    res.status(200).send(chain.chain );
});

app.get('/getLatestBlock', (req,res)=>{

    res.status(200).send(chain.getLatestBlock());
})

// Start the server
app.listen(port, () => {
    console.log(`Blockchain API running on port: ${port}`);
});
