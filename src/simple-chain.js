const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value === undefined ? "( )" : `( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("Invalid position");
    }

    if (
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join("~~");
    this.chain = []; // Reset the chain after finishing
    return result;
  },
};

module.exports = {
  chainMaker,
};
