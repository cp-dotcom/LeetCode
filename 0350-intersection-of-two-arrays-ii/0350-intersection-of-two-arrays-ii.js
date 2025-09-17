/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let x={};
    let y=[];

    for(let num of nums1){
        x[num] = (x[num] || 0) + 1
    }
    for(let num of  nums2){
        if(x[num]>0){
            y.push(num)
            x[num]--
        }
    }
    return y
};