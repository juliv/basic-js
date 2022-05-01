
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = /@([\w\.-]+)$/
  let res = reg.exec(email)
  return (typeof res[1] !== 'undefined') ? res[1] : ''
}

module.exports = {
  getEmailDomain
};
