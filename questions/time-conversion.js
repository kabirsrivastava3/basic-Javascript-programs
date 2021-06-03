/**
 * Question: 
 
 */

/**
 *
 * @param {number} minutes
 * @returns
 * 
 */
function convertMinutesToHours(tMinutes) {
  var hours = Math.floor(tMinutes / 60);
  var minutes = tMinutes - hours * 60;
  return { hours: hours, minutes: minutes };
}

// TestCase 1

console.log(convertMinutesToHours(130));

/**
 * Solution: 
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
