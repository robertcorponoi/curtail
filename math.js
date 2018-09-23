'use strict'

/**
 * The functions in math deal with any mathematical operations not
 * supported by native JavaScript.
 * 
 * @since 0.1.0
 */

/**
 * Simplify a fraction using the greatest common divisor.
 * 
 * @since 0.1.0
 * 
 * @param {number} numerator The top number of the original fraction.
 * @param {number} denominator The bottom number of the original fraction.
 * 
 * @returns {Array} An array consisting of the two values representing the numerator and denominator of the simplified fraction.
 */
export function simplify(numerator, denominator) {

  const num = gcd(numerator, denominator);

  return [numerator / num, denominator / num];

}

/**
 * Find the greatest common divisor between two numbers.
 * 
 * @since 0.1.0
 * 
 * @param {number} a The first number.
 * @param {number} b The second number.
 * 
 * @returns {number} The GCD between the two numbers.
 */
function gcd(a, b) {

  while (b !== 0) {

    let temp = a;

    a = b;

    b = temp % b;

  }

  return a;

}