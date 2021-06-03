/**
 * Question: Pythagoras Theorem
 
 */

/**
 *
 * @param {positive number} sides
 * @returns
 *
 */

function calculateHypotenuse(sideA, sideB) {
  var sideAsquare = Math.pow(sideA, 2);
  var sideBsquare = Math.pow(sideB, 2);
  var sideCsquare = Math.sqrt(sideAsquare + sideBsquare);

  return sideCsquare;
}

// TestCase 1

console.log(calculateHypotenuse(3, 4));

/**
 * Solution:
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
