const express = require('express');
const crypto = require("crypto-js");
const Web3 = require('web3');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World everyone!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})