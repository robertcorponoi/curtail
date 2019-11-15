/**
 * Make sure that location chosen on the image is within the bounds of the image.
 *
 * @param {number} x The x location chosen by the user.
 * @param {number} y The y location chosen by the user.
 * @param {HTMLImageElement} image The image element being evaluated.
 */
export declare function validateLocation(x: number, y: number, image: HTMLImageElement): boolean;
/**
 * Make sure that the dimensions chosen by the user along with the location is within the bounds of the image.
 *
 * @param {number} x The x location chosen by the user.
 * @param {number} y The y location chosen by the user.
 * @param {number} width The width of the new image.
 * @param {number} height The height of the new image.
 * @param {HTMLImageElement} image The image element being evaluated.
 */
export declare function validateDimensions(x: number, y: number, width: number, height: number, image: HTMLImageElement): boolean;
