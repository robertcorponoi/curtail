/**
 * Adds the specified amount of padding around an image.
 *
 * Note that the padding will not be even on images that are not square.
 *
 * @param {string} path The path to the image to add padding to.
 * @param {number} padding The amount of padding to add to the image.
 * @param {Object} [options]
 * @param {string} [options.paddingColor='#fff'] The color that the padding will be. This value can be any valid CSS color value such as white or #FFFFFF.
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 *
 * @returns {Promise<HTMLImageElement>} Returns the newly padded image as an image element.
 */
export declare function pad(path: string, padding: number, options?: Object): Promise<HTMLImageElement | Error>;
