/**
 *
 * Question: HCF
 */

/**
 *
 * @param {number} hcf,num1,num2
 * @returns
 */

function calculateLCM(number1, number2) {
  var lcm;  
  var product = number1 * number2;

  var limit = number1 < number2 ? number1 : number2;

  for (let index = limit; index <= product; index++) {
    if (number1 % index == 0 && number2 % index == 0) {
      lcm = index;
    }
  }
  return lcm;
}

// TestCase 1

console.log(calculateLCM(7, 14));
// TestCase 2
console.log(calculateLCM(2, 4));

/**
 * Solution:
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */
