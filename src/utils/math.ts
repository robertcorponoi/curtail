'use strict'

import Fraction from '../interfaces/Fraction';

/**
 * Simplify a fraction by using the greatest common divisor method.
 * 
 * @param {number} numerator The top number of the fraction to simplify.
 * @param {number} denominator The bottom number of the fraction to simplify.
 * 
 * @returns {Object} Returns an object with the numerator/denominator as properties and the simplified results as the values.
 */
export function simplify(numerator: number, denominator: number): Fraction {

	const divisor: number = gcd(numerator, denominator);
	
	const aspectRatio: Fraction = { numerator: numerator / divisor, denominator: denominator / divisor };

  return aspectRatio;

}

/**
 * Find the greatest common divisor between two numbers.
 * 
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * 
 * @returns {number} Returns the greatest common divisor between the two numbers.
 */
function gcd(num1: number, num2: number): number {

  while (num2 !== 0) {

    let temp: number = num1;

    num1 = num2;

    num2 = temp % num2;

  }

  return num1;

}