const Block = require('./Block.js');

class Chain {
    createGenesisBlock() {
        return new Block(0, Date.now(), "This is a genesis block", "0");
    }

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calcHash();
        this.chain.push(newBlock);
    }

    isValidChain() {

        if (JSON.stringify(this.chain[0]) !== JSON.stringify(this.createGenesisBlock())) {
            return false;
        }

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currentBlock.prevHash !== prevBlock.hash) {
                return false;
            }

            if (currentBlock.hash !== currentBlock.calcHash()) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Chain;
