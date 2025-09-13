/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let x={} 
    for(let a of magazine) x[a]=(x[a]||0)+1
    for(let a of ransomNote){
         if(!x[a])   return false
    x[a]--
    }
   return true

};