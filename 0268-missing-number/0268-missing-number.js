/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length
    let exp=(n*(n+1))/2
    let act=nums.reduce((a,b)=>a+b,0)
    return exp-act
};