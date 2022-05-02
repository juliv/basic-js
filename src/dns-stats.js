
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {}
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse()
    let domainDns = []
    for (let j = 0; j < domain.length; j++) {
      domainDns.push('.' + domain.slice(0, j+1).join('.'))
    }
    for (let j = 0; j < domainDns.length; j++) {
      if (!(domainDns[j] in dns)) {
        dns[domainDns[j]] = 1
      } else {
        dns[domainDns[j]]++
      }
    }
  }
  return dns
}

module.exports = {
  getDNSStats
};
