
/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let repeats = {}
  let files = []
  for (let i = 0; i < names.length; i++) {
    let name = names[i]
    if (typeof repeats[name] === 'undefined') {
      files.push(name)
      repeats[name] = 0
    }
    else {
      repeats[name]++
      let name2 = name + '(' + repeats[name] + ')'
      files.push(name2)
      if (typeof repeats[name2] === 'undefined') {
        //files.push(name2)
        repeats[name2] = 0
      }
    }

  }
  return files
}

module.exports = {
  renameFiles
};
