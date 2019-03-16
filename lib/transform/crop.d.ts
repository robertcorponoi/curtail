/**
 * Crop an image to a specified size by providing the start location of the crop and
 * the dimensions that the product should have.
 *
 * @version 1.0.0
 *
 * @param {string} path The path to the image to crop.
 * @param {number} x The horizontal location in the original image to begin the crop.
 * @param {number} y The vertical location in the original image to being the crop.
 * @param {number} width The width of the final cropped image.
 * @param {number} height The height of of the final cropped image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 *
 * @returns {Promize<HTMLImageElement>} Returns the newly cropped image as an image element.
 */
export declare function crop(path: string, x: number, y: number, width: number, height: number, options?: Object): Promise<HTMLImageElement | Error>;
