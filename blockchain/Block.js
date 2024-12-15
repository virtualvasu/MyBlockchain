import sha256 from 'crypto-js/sha256';

// index: creates immutability for each Block
// timestamp: obvious
// data: can be any type of data in a json format
// prevHash: hash of prev block -> used to calc hash of new block -> maintaining chained structure 
// hash: hash of current block

// calcHash: calculates hash from all the above params and outputs a new hash for this block using SHA256


class Block{

    constructor(index, timestamp, data, prevHash)
    {
        this.index = index; 
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calcHash();
        Object.freeze(this); // imposes immutability on eaach block
    }

    
    calcHash()
    {
        return sha256(this.index + this.timestamp + this.prevHash + JSON.stringify(this.data)).toString();
    }
}

export default Block;