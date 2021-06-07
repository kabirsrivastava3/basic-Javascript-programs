/**
 * Question: 
 
 */

/**
 *
 * @param {number} number,
 * @returns
 *
 */

function sumofDigits(number) {
  var remainder, sum =0;
  do {
    remainder = number % 10;

    sum += remainder;
    number = Math.floor(number / 10);

  } while (number != 0);
  return sum
}

// TestCase 1
console.log(sumofDigits(24));
// TestCase 2
console.log(sumofDigits(84));

/**
 * Solution:
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */
