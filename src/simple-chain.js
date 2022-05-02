
/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    const val = (typeof value === 'undefined') ? '( )' : `( ${String(value)} )`
    this.chain.push(val)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.emptyChain()
      throw new Error('You can\'t remove incorrect link!')
    }
    const pos = position-1
    if (!(pos in this.chain)) {
      this.emptyChain()
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(pos, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const out = this.chain.join('~~')
    this.emptyChain()
    return out
  },
  emptyChain() {
    this.chain = []
  }
};

module.exports = {
  chainMaker
};
