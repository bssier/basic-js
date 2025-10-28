const { NotImplementedError } = require('../lib');

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
  str = String(str);
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeat = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const fullAddition = Array(additionRepeat).fill(addition).join(additionSeparator);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const fullStr = Array(repeatTimes).fill(str + fullAddition).join(separator);
  return fullStr;
}

module.exports = {
  repeater
};
