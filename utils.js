'use strict'

/**
 * Utilities that help Curtail handle aspect ratio sizes and extracting information
 * from file names.
 * 
 * @since 0.1.0
 */

/**
 * Extract the name of the file and the file's extension from the provided file path.
 * 
 * @since 1.0.0
 * 
 * @param {string} path The user provided path to the image file.
 * 
 * @returns {Object} Returns an object with the file name and extension as properties and the results as the values.
 */
export function extractFileInfo(path) {

  let nameIndex = 0;
  let extIndex = 0;

  const fileInfo = { name: null, ext: null };

  if (path.lastIndexOf('/') > -1) {

    nameIndex = path.lastIndexOf('/');

  }

  extIndex = path.lastIndexOf('.');

  fileInfo.name = path.slice(nameIndex + 1, extIndex);
  fileInfo.ext = path.slice(extIndex + 1);

  return fileInfo;

}

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
export function simplify(numerator, denominator) {

  const divisor = gcd(numerator, denominator);

  return { numerator: numerator / divisor, denominator: denominator / divisor };

}

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

    let temp = num1;

    num1 = num2;

    num2 = temp % num2;

  }

  return num1;

}