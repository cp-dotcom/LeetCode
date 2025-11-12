function isPalindrome(x: number): boolean {
   let a=x.toString()
   let y=a.split('').reverse().join('')
   return a===y
};