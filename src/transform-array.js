const { NotImplementedError } = require('../extensions/index.js');
const {countCats} = require("./count-cats");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }
  let copyArr = [...arr]
  let count = 0
  let lastModIndex = -1000
  arr.forEach((el,index) => {
    switch (el){
      case '--double-next':
        if(copyArr[index+1]){
          copyArr[index+count] = copyArr[index+1+count]
          lastModIndex = index
        } else {
          copyArr.splice(index,1)
        }
        break
      case '--discard-prev':
        if(copyArr[index-1] ){
          if(lastModIndex === index-1){
            copyArr.splice(index+count , 1)
            count--
          } else {
            copyArr.splice(index + count - 1,2)
            count -=2
            lastModIndex = index
          }
        } else {
          copyArr.splice(index , 1)
          count--
        }
        break
      case '--discard-next':
        if(copyArr[index+1]) {
          copyArr.splice(index + count, 2)
          count -= 2
          lastModIndex = index+1
        } else {
          copyArr.splice(index,1)
        }
        break
      case '--double-prev':
        if(copyArr[index-1+count]) {
          if(lastModIndex>index-1+count){
            copyArr.splice(index+count , 1)
            count--
          } else {
            copyArr[index+count] = copyArr[index - 1+count]
            lastModIndex = index
          }

        } else {
          copyArr.splice(index+count , 1)
          count--
        }
        break
    }
  })

  return copyArr
}

module.exports = {
  transform
};
