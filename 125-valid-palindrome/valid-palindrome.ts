function isPalindrome(s: string): boolean {
      let str=s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return str===str.split('').reverse().join('')
};