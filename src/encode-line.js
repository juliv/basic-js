
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
  let out = ''
  let char = ''
  let charCnt = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      charCnt++
    } else {
      out += (charCnt > 1 ? charCnt : '') + char
      char = str[i]
      charCnt = 1
    }
  }
  out += (charCnt > 1 ? charCnt : '') + char
  return out
}

module.exports = {
  encodeLine
};
