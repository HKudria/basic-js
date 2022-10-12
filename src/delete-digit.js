const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = []
  for (let i = 0; i < n.toString().length; i++) {
    let temp = n.toString().split('')
    temp.splice(i,1)
    numbers.push(parseInt(temp.join('')))
  }
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
