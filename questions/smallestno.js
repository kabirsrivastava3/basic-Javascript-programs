//-1 of 4,5,3,9,1,-1,5,7
/**
 * 
 * Question: Smallest Number
 */

/**
 *
 * @param {number} Smallest
 * @returns
 * 
 */
 function smallestNumber(listOfNumber) {
  var smallest=listOfNumber[0];
  for (let index = 0; index <= listOfNumber.length; index++) {
    const element = listOfNumber[index];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
//testcase1
console.log(smallestNumber([1,2,3]));
//testcase2
console.log(smallestNumber([-1,-5,-10]));

/**
 * Solution: 
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
