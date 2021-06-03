/**
 *
 * Question: Fahrenheit to Celcius Conversion
 */

/**
 *
 * @param {number} celcius
 * @returns
 */

function convertfahrenheitTocelcius(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return { fahrenheit };
}

// TestCase 1

console.log(convertfahrenheitTocelcius(40));

/**
 * Solution:
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
