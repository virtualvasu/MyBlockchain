const sha256 = require('crypto-js/sha256');

// index: creates immutability for each Block
// timestamp: obvious
// data: can be any type of data in a JSON format
// prevHash: hash of the previous block -> used to calculate the hash of the new block -> maintaining the chained structure 
// hash: hash of the current block

// calcHash: calculates hash from all the above parameters and outputs a new hash for this block using SHA256

class Block {
    constructor(index, timestamp, data, prevHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calcHash();
        //Object.freeze(this); // imposes immutability on each block
    }

    calcHash() {
        return sha256(this.index + this.timestamp + this.prevHash + JSON.stringify(this.data)).toString();
    }
}

module.exports = Block;
