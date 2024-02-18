const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Message and key are required");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const shift = alphabet.indexOf(keyChar);
        const encryptedChar =
          alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Encrypted message and key are required");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i].toUpperCase();
      if (alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const shift = alphabet.indexOf(keyChar);
        const decryptedCharIndex =
          (alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length;
        const decryptedChar = alphabet[decryptedCharIndex];
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
