/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ')
    .map(text=>text.split('').reverse().join(''))
    .join(' ')
};