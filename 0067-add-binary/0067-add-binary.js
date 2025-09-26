/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let x=BigInt('0b'+a)
    let y=BigInt('0b'+b)

    const sum=x+y
    return sum.toString(2)
};