const { NotImplementedError } = require('../extensions/index.js');

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

  letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(mode) {
    this.mode = mode ?? true
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    let result = ''
    let offset = 0
    for (let i = 0; i < message.length; i++) {
      let s = message[((i >= message.length) ? i % message.length : i)].toUpperCase()
      let mi = this.letter.indexOf(s);
      if (mi === -1) {
        result += s
        offset++
        continue
      }
      let ki_s = key[((i - offset >= key.length) ? (i - offset) % key.length : i - offset)]
      let ki = this.letter.indexOf(ki_s.toUpperCase())
      let c = this.letter[(((this.letter.length + (mi + ki)) % this.letter.length))]
      result += c;
    }
    if (this.mode) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split("").reverse().join("")
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    let result = ''
    let offset = 0
    for (let i = 0; i < encryptedMessage.length; i++) {
      let s = encryptedMessage[((i >= encryptedMessage.length) ? i % encryptedMessage.length : i)].toUpperCase()
      let mi = this.letter.indexOf(s)
      if (mi === -1) {
        result += s
        offset++
        continue
      }
      let ki_s = key[((i - offset >= key.length) ? (i - offset) % key.length : i - offset)]
      let ki = -this.letter.indexOf(ki_s.toUpperCase())
      let c = this.letter[(((this.letter.length + (mi + ki)) % this.letter.length))]
      result += c
    }
    if (this.mode) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split("").reverse().join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
