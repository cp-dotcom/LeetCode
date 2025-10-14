/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let x=0
    let y=s.length -1

    while(x<y){
        if(s[x] !== s[y]) return isTruePalindrome(s,x+1,y) || isTruePalindrome(s,x,y -1)
    x++;
    y--

    }
    return true
};
function isTruePalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}