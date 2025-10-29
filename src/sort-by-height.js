const {NotImplementedError} = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const positions = [];
    const heights = [];
    arr.forEach((val, i) => {
        if (val === -1) {
            positions.push(i);
        } else {
            heights.push(val);
        }
    });
    heights.sort((a, b) => a - b);
    for (const pos of positions) {
        heights.splice(pos, 0, -1);
    }
    return heights;
}

module.exports = {
    sortByHeight
};
