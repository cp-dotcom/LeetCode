/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=x.toString()
    let y=a.split('').reverse().join('')
    return y===a
};