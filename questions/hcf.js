/**
 *
 * Question: HCF
 */

/**
 *
 * @param {number} hcf,num1,num2
 * @returns
 */

function calculatehcF(number1, number2) {
  var hcf;

  var limit = number1 < number2 ? number1 : number2;

  for (let index = 1; index <= limit; index++) {
    if (number1 % index == 0 && number2 % index == 0) {
      hcf = index;
    }
  }
  return hcf;
}

// TestCase 1

console.log(calculatehcF(8, 12));
// TestCase 2
console.log(calculatehcF(12, 18));

/**
 * Solution:
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */
