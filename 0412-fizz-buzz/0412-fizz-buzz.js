/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

        let x=[];
        for(let i=1; i<=n;i++){
            if(i%3==0&& i%5==0){
                x.push("FizzBuzz");
            }else if(i%3==0){
                x.push("Fizz");
            }else if(i%5==0){
                x.push("Buzz");
            }else{
                x.push(i.toString())
            }
        }
        return x
};