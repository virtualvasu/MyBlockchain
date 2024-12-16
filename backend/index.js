const express = require('express');
const Block = require('./blockchain/Block.js');
const Chain = require('./blockchain/Chain.js');
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.port || 3005;

app.use(express.json());

let chain = new Chain();

app.get('/', (req, res) => {
    res.send("blockchain home page");
});

app.post('/addBlock', (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).send("Data is required to create a new block");
    }

    const newBlock = new Block(
        chain.getLatestBlock().index + 1, 
        Date.now(), 
        data, 
        chain.getLatestBlock().hash
    );

    chain.addBlock(newBlock);

    res.status(200).json({
        message: "Block added to the chain successfully",
        block: newBlock
    });
});

app.get('/getChain', (req, res) => {
    res.status(200).send(chain.chain);
});

app.get('/getLatestBlock', (req, res) => {
    res.status(200).send(chain.getLatestBlock());
});

app.listen(port, () => {
    console.log(`Blockchain API running on port: ${port}`);
});
