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
function count0Number(listOfNumber) {
  var counter0 = 0;
  for (let index = 0; index <= listOfNumber.length; index++) {
    const element = listOfNumber[index];
    if (element == 0) {
      counter0++;
    }
  }
  return counter0;
}

//testcase1
console.log(count0Number([1, 2, 3, 0, 0, 0, 0, 0]));

//testcase2
console.log(count0Number([-1, -5, -10, 0, 0]));

/**
 * Solution:
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
