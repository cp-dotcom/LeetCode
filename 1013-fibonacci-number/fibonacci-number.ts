function fib(n: number): number {
if(n===0) return 0
if(n===1) return 1
let x=0,y=1
for(let i=2;i<=n;i++){
    let z=x+y
    x=y
    y=z
}
return y
};