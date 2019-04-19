'use strict'; /// <reference path="../interfaces/Fraction.ts" />

/**
 * Contains math methods not available from the standard JavaScript library.
 * 
 * @author Robert Corponoi
 * 
 * @version 2.0.0
 */

/**
 * Simplify a fraction by using the greatest common divisor method.
 * 
 * @since 0.1.0
 * 
 * @param {number} numerator The top number of the fraction to simplify.
 * @param {number} denominator The bottom number of the fraction to simplify.
 * 
 * @returns {Object} Returns an object with the numerator/denominator as properties and the simplified results as the values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplify = simplify;

function simplify(numerator, denominator) {
  var divisor = gcd(numerator, denominator);
  var aspectRatio = {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
  return aspectRatio;
}
/**
 * 
 * @param num1 
 * @param num2 
 */

/**
 * Find the greatest common divisor between two numbers.
 * 
 * @since 0.1.0
 * 
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * 
 * @returns {number} Returns the greatest common divisor between the two numbers.
 */


function gcd(num1, num2) {
  while (num2 !== 0) {
    var temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }

  return num1;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tYXRoLnRzIl0sIm5hbWVzIjpbInNpbXBsaWZ5IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJkaXZpc29yIiwiZ2NkIiwiYXNwZWN0UmF0aW8iLCJudW0xIiwibnVtMiIsInRlbXAiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQXFDQyxXQUFyQyxFQUFvRTtBQUUxRSxNQUFNQyxPQUFlLEdBQUdDLEdBQUcsQ0FBQ0gsU0FBRCxFQUFZQyxXQUFaLENBQTNCO0FBRUEsTUFBTUcsV0FBcUIsR0FBRztBQUFFSixJQUFBQSxTQUFTLEVBQUVBLFNBQVMsR0FBR0UsT0FBekI7QUFBa0NELElBQUFBLFdBQVcsRUFBRUEsV0FBVyxHQUFHQztBQUE3RCxHQUE5QjtBQUVDLFNBQU9FLFdBQVA7QUFFRDtBQUVEOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU0QsR0FBVCxDQUFhRSxJQUFiLEVBQTJCQyxJQUEzQixFQUFpRDtBQUUvQyxTQUFPQSxJQUFJLEtBQUssQ0FBaEIsRUFBbUI7QUFFakIsUUFBSUMsSUFBWSxHQUFHRixJQUFuQjtBQUVBQSxJQUFBQSxJQUFJLEdBQUdDLElBQVA7QUFFQUEsSUFBQUEsSUFBSSxHQUFHQyxJQUFJLEdBQUdELElBQWQ7QUFFRDs7QUFFRCxTQUFPRCxJQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRnJhY3Rpb24udHNcIiAvPlxuXG4vKipcbiAqIENvbnRhaW5zIG1hdGggbWV0aG9kcyBub3QgYXZhaWxhYmxlIGZyb20gdGhlIHN0YW5kYXJkIEphdmFTY3JpcHQgbGlicmFyeS5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2lcbiAqIFxuICogQHZlcnNpb24gMi4wLjBcbiAqL1xuXG4vKipcbiAqIFNpbXBsaWZ5IGEgZnJhY3Rpb24gYnkgdXNpbmcgdGhlIGdyZWF0ZXN0IGNvbW1vbiBkaXZpc29yIG1ldGhvZC5cbiAqIFxuICogQHNpbmNlIDAuMS4wXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgVGhlIHRvcCBudW1iZXIgb2YgdGhlIGZyYWN0aW9uIHRvIHNpbXBsaWZ5LlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIFRoZSBib3R0b20gbnVtYmVyIG9mIHRoZSBmcmFjdGlvbiB0byBzaW1wbGlmeS5cbiAqIFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgbnVtZXJhdG9yL2Rlbm9taW5hdG9yIGFzIHByb3BlcnRpZXMgYW5kIHRoZSBzaW1wbGlmaWVkIHJlc3VsdHMgYXMgdGhlIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5KG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyKTogRnJhY3Rpb24ge1xuXG5cdGNvbnN0IGRpdmlzb3I6IG51bWJlciA9IGdjZChudW1lcmF0b3IsIGRlbm9taW5hdG9yKTtcblx0XG5cdGNvbnN0IGFzcGVjdFJhdGlvOiBGcmFjdGlvbiA9IHsgbnVtZXJhdG9yOiBudW1lcmF0b3IgLyBkaXZpc29yLCBkZW5vbWluYXRvcjogZGVub21pbmF0b3IgLyBkaXZpc29yIH07XG5cbiAgcmV0dXJuIGFzcGVjdFJhdGlvO1xuXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gbnVtMSBcbiAqIEBwYXJhbSBudW0yIFxuICovXG5cbi8qKlxuICogRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3IgYmV0d2VlbiB0d28gbnVtYmVycy5cbiAqIFxuICogQHNpbmNlIDAuMS4wXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0xIFRoZSBmaXJzdCBudW1iZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMiBUaGUgc2Vjb25kIG51bWJlci5cbiAqIFxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3IgYmV0d2VlbiB0aGUgdHdvIG51bWJlcnMuXG4gKi9cbmZ1bmN0aW9uIGdjZChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG5cbiAgd2hpbGUgKG51bTIgIT09IDApIHtcblxuICAgIGxldCB0ZW1wOiBudW1iZXIgPSBudW0xO1xuXG4gICAgbnVtMSA9IG51bTI7XG5cbiAgICBudW0yID0gdGVtcCAlIG51bTI7XG5cbiAgfVxuXG4gIHJldHVybiBudW0xO1xuXG59Il19