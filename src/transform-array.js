
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
  if (typeof arr === 'undefined' || !Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let newArr = []
  let ignoreIdx = []
  let i = 0
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next':
        if (typeof arr[i+1] !== 'undefined') {
          ignoreIdx.push(i+1)
          i++
        }
        break
      case '--discard-prev':
        if (typeof arr[i-1] !== 'undefined' && ignoreIdx.indexOf(i-1) === -1) {
          newArr.pop()
        }
        break
      case '--double-next':
        if (typeof arr[i+1] !== 'undefined') {
          newArr.push(arr[i+1])
        }
        break;
      case '--double-prev':
        if (typeof arr[i-1] !== 'undefined' && ignoreIdx.indexOf(i-1) === -1) {
          newArr.push(arr[i-1])
        }
        break;
      default:
        newArr.push(arr[i])
    }
    i++
  }
  return newArr
}

module.exports = {
  transform
};
