function sortArrayByParity(nums: number[]): number[] {
    const x=[]
    nums.forEach(y=>{
        y%2===0? x.unshift(y) : x.push(y)
    })
    return x
};