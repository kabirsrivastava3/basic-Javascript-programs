/**
 *
 * Question: Heron's Formula
 */

/**
 *
 * @param {positive number} sideA,sideB,sideC
 * @returns
 */
function AreaUsingHeron(sideA, sideB, sideC) {
  var s = (sideA + sideB + sideC) / 2;
  var value = (s - sideA) * (s - sideB) * (s - sideC);
  var area = Math.sqrt(s * value);

  return area;
}
// TestCase 1
console.log(areaUsingHeron(3, 4, 5));

/**
 * Solution:
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */
