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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tYXRoLnRzIl0sIm5hbWVzIjpbInNpbXBsaWZ5IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJkaXZpc29yIiwiZ2NkIiwiYXNwZWN0UmF0aW8iLCJudW0xIiwibnVtMiIsInRlbXAiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQXFDQyxXQUFyQyxFQUFvRTtBQUUxRSxNQUFNQyxPQUFlLEdBQUdDLEdBQUcsQ0FBQ0gsU0FBRCxFQUFZQyxXQUFaLENBQTNCO0FBRUEsTUFBTUcsV0FBcUIsR0FBRztBQUFFSixJQUFBQSxTQUFTLEVBQUVBLFNBQVMsR0FBR0UsT0FBekI7QUFBa0NELElBQUFBLFdBQVcsRUFBRUEsV0FBVyxHQUFHQztBQUE3RCxHQUE5QjtBQUVDLFNBQU9FLFdBQVA7QUFFRDtBQUVEOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU0QsR0FBVCxDQUFhRSxJQUFiLEVBQTJCQyxJQUEzQixFQUFpRDtBQUUvQyxTQUFPQSxJQUFJLEtBQUssQ0FBaEIsRUFBbUI7QUFFakIsUUFBSUMsSUFBWSxHQUFHRixJQUFuQjtBQUVBQSxJQUFBQSxJQUFJLEdBQUdDLElBQVA7QUFFQUEsSUFBQUEsSUFBSSxHQUFHQyxJQUFJLEdBQUdELElBQWQ7QUFFRDs7QUFFRCxTQUFPRCxJQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbnRlcmZhY2VzL0ZyYWN0aW9uLnRzXCIgLz5cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBtYXRoIG1ldGhvZHMgbm90IGF2YWlsYWJsZSBmcm9tIHRoZSBzdGFuZGFyZCBKYXZhU2NyaXB0IGxpYnJhcnkuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaVxyXG4gKiBcclxuICogQHZlcnNpb24gMi4wLjBcclxuICovXHJcblxyXG4vKipcclxuICogU2ltcGxpZnkgYSBmcmFjdGlvbiBieSB1c2luZyB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3IgbWV0aG9kLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIFRoZSB0b3AgbnVtYmVyIG9mIHRoZSBmcmFjdGlvbiB0byBzaW1wbGlmeS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIFRoZSBib3R0b20gbnVtYmVyIG9mIHRoZSBmcmFjdGlvbiB0byBzaW1wbGlmeS5cclxuICogXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIG51bWVyYXRvci9kZW5vbWluYXRvciBhcyBwcm9wZXJ0aWVzIGFuZCB0aGUgc2ltcGxpZmllZCByZXN1bHRzIGFzIHRoZSB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnkobnVtZXJhdG9yOiBudW1iZXIsIGRlbm9taW5hdG9yOiBudW1iZXIpOiBGcmFjdGlvbiB7XHJcblxyXG5cdGNvbnN0IGRpdmlzb3I6IG51bWJlciA9IGdjZChudW1lcmF0b3IsIGRlbm9taW5hdG9yKTtcclxuXHRcclxuXHRjb25zdCBhc3BlY3RSYXRpbzogRnJhY3Rpb24gPSB7IG51bWVyYXRvcjogbnVtZXJhdG9yIC8gZGl2aXNvciwgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yIC8gZGl2aXNvciB9O1xyXG5cclxuICByZXR1cm4gYXNwZWN0UmF0aW87XHJcblxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBudW0xIFxyXG4gKiBAcGFyYW0gbnVtMiBcclxuICovXHJcblxyXG4vKipcclxuICogRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3IgYmV0d2VlbiB0d28gbnVtYmVycy5cclxuICogXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTEgVGhlIGZpcnN0IG51bWJlci5cclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTIgVGhlIHNlY29uZCBudW1iZXIuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBncmVhdGVzdCBjb21tb24gZGl2aXNvciBiZXR3ZWVuIHRoZSB0d28gbnVtYmVycy5cclxuICovXHJcbmZ1bmN0aW9uIGdjZChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gIHdoaWxlIChudW0yICE9PSAwKSB7XHJcblxyXG4gICAgbGV0IHRlbXA6IG51bWJlciA9IG51bTE7XHJcblxyXG4gICAgbnVtMSA9IG51bTI7XHJcblxyXG4gICAgbnVtMiA9IHRlbXAgJSBudW0yO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBudW0xO1xyXG5cclxufSJdfQ==