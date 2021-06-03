/**
 *
 * Question: Pythagoras Triplets
 */

/**
 *
 * @param {number} sideA,sideB,sideC
 * @returns
 *
 * */

function checkIfPyTriplet(sideA, sideB, sideC) {
  var cSquare = sideC * sideC;
  var bSquare = sideB * sideB;
  var aSquare = sideA * sideA;
  if (cSquare > aSquare +bSquare || cSquare < aSquare + bSquare) {
    return false;
  } else {
    return true;
  }
}
//testcase1
console.log(checkIfPyTriplet(3, 4, 5));
//testcase2
console.log(checkIfPyTriplet(4, 7, 11));
/**
 * Solution:
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
