
/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source: any): object {
    if (!source && typeof source !== 'object') {
      throw new Error('error arguments deepClone')
    }
    const targetObj: any = source.constructor === Array ? [] : {}
    Object.keys(source).forEach((keys) => {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    })
    return targetObj
  }
export function createKey () {
    let id = ''
    const randomArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < 7; i++) {
        id += randomArr[Number((Math.random() * 34).toFixed(0))]
    }
    return id;
}