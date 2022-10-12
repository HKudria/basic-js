const { NotImplementedError } = require('../extensions/index.js');
// const {c} = require("sinon/lib/sinon/spy-formatters");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrStr = str.split('')
  let output = []
  let count = 0
  let currentEl = arrStr[0]
  arrStr.forEach((el,index) => {
    if (currentEl === el){
      count++
    }
    if(el !== arrStr[index+1]){
      if(count > 1) output.push(count)
      output.push(el)
      count=0
      currentEl = arrStr[index+1]
    }
  })

  return output.join('')
}

console.log(encodeLine('aabbbc'))

module.exports = {
  encodeLine
};
