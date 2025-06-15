/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sMap ={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let sum=0;
    for(let i=0;i<s.length;i++){
        const x=sMap[s[i]];
        const y=sMap[s[i+1]];
        if(y>x){
            sum+=(y-x);
            i++
        }else
        sum+=x;
    }
    return sum;
    
};