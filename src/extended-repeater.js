const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (str === undefined) return false

    options.separator = options.separator ?? "+";
    options.additionSeparator = options.additionSeparator ?? "|";
    options.repeatTimes = options.repeatTimes ?? 1;
    options.additionRepeatTimes = options.additionRepeatTimes ?? 1;

    options.addition = String(options.addition);
    let temp = ""
    if (options.addition !== "undefined") {
        temp = [];
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            temp.push(options.addition)
        }
        temp = temp.join(options.additionSeparator);
    }
    let newStr = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        newStr.push(str + temp)
    }
    return newStr.join(options.separator);
}

module.exports = {
    repeater
};
