
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
  let max = 0
  let s = String(n)
  for (let i = 0; i < s.length ; i++) {
    let sliced = s.slice(0, i)
    sliced += (typeof s[i+1] !== 'undefined') ? s.slice(i+1) : ''
    if (Number(sliced) > max) {
      max = Number(sliced)
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
