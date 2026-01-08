function sumOfUnique(nums: number[]): number {
    const x = nums.filter(num =>nums.indexOf(num)=== nums.lastIndexOf(num))
    let sum=0
    for(let i=0;i<x.length;i++){
        sum += x[i]
    }
    return sum
};