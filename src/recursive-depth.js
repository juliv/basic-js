
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let curDepth = depth
    let newDepth = depth
    for (const key in arr) {
      if (Array.isArray(arr[key])) {
        curDepth = this.calculateDepth(arr[key], depth+1)
        if (curDepth > newDepth) {
          newDepth = curDepth
        }
      }
    }
    return newDepth
  }
}

module.exports = {
  DepthCalculator
};
