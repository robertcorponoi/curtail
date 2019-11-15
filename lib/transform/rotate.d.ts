/**
 * Rotate an image to a specified angle.
 *
 * @param {string} path The path to the image to rotate.
 * @param {number} angle The degree angle to rotate the image to, clockwise.
 * @param {Object} [options]
 * @param {boolean} [options.autodownload=false] Indicates whether the image should download after the rotation is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of the image which is needed if the image is from a different domain.
 */
export declare function rotate(path: string, angle: number, options?: Object): Promise<HTMLImageElement | Error>;
