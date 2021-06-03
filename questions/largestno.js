//9 of 4,5,3,9,1,0,5,7
/**
 *
 * Question: Largest Number
 */

/**
 *
 * @param {positive or negative number} numbers
 * @returns
 *
 */

function largestNumber(listOfNumber) {
  var largest = 0;
  for (let index = 0; index <= listOfNumber.length; index++) {
    const element = listOfNumber[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest ;
}

//Testcase1
console.log(largestNumber([1, 1, 2]));

/**
 * Solution:
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */
