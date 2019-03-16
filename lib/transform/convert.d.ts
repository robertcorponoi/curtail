/**
 * Convert an image from one format to another format.
 *
 * @since 1.0.0
 *
 * @param {string} path The path to the image to convert to another format.
 * @param {string} format The new format for the image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 *
 * @returns {Promise<HTMLImageElement>} Returns the newly formatted image as an image element.
 */
export declare function convert(path: string, format: string, options?: Object): Promise<HTMLImageElement | Error>;
