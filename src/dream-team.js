
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members === 'undefined' || !Array.isArray(members)) {
    return false
  }
  let letters = []
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      const name = members[i].trim()
      letters.push(name[0].toUpperCase())
    }
  }
  letters.sort()
  return letters.join('')
}

module.exports = {
  createDreamTeam
};
