
function repeatString(first, second) {
  let result = ''
  let firstLen = first.length
  let it = 0
  for (let i = 0; i < second.length; i++) {
    if (i % firstLen === 0) {
      it = 0
    }
    result += first[it]
    it++
  }
  return result
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = Boolean(direct)
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.alphaLen = this.alpha.length
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    let result = ''
    const msg = message.toUpperCase()
    const k = repeatString(key, message).toUpperCase()
    let kIdx = 0

    for (let it = 0; it < msg.length; it++) {
      const i = this.alpha.indexOf(msg[it])
      if (i === -1) {
        result += msg[it]
      }
      else {
        const j = this.alpha.indexOf(k[kIdx])
        const val = j + i
        let letIdx = 0
        if (val > 0) {
          letIdx = val % this.alphaLen
        }
        result += this.alpha[letIdx]
        kIdx++
      }
    }
    return this.direct ? result : reverseString(result)
  }

  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }

    let result = ''
    const msg = message.toUpperCase()
    const k = repeatString(key, message).toUpperCase()
    let kIdx = 0

    for (let it = 0; it < msg.length; it++) {
      const i = this.alpha.indexOf(msg[it])
      if (i === -1) {
        result += msg[it]
      }
      else {
        const j = this.alpha.indexOf(k[kIdx])
        const val = (i - j) % this.alphaLen
        let letIdx = 0
        letIdx = val > 0 ? val : (val + this.alphaLen) % this.alphaLen
        result += this.alpha[letIdx]
        kIdx++
      }
    }
    return this.direct ? result : reverseString(result)
  }

}

module.exports = {
  VigenereCipheringMachine
};
