/**
 * 
 * Question: n Prime Number
 */

/**
 *
 * @param {number} n
 * @returns
 * 
 */
 function isPrime(numb) {
    for (let index = 2; index <= numb - 1; index++) {
        if (numb % index === 0) return false;
    }
    return true;
}
function nPrime(n){
for (let newindex = 2; newindex < n; newindex++) {
    if (isPrime(newindex) == true) 
{
   return n;
}
}  
} 
//testcase1
  console.log(nPrime([20]));
  //testcase2
  console.log(nPrime([98]));
  
  /**
   * Solution: 
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
