/**
 * Resize an image to a new dimension.
 *
 * @since 1.0.0
 *
 * @param {string} path The path to the image to resize.
 * @param {string} dimension Which dimension to resize, either width or height. Keep in mind that if you're preserving the aspect ratio, the other will resize accordingly.
 * @param {number} size The new size to make the specified dimension.
 * @param {Object} [options]
 * @param {boolean} [options.preserveAspectRatio=true] Indicates whether the width and height will resize together to preserve the aspect ratio of the image.
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 *
 * @returns {Promise<HTMLImageElement>} Returns the newly resized image as an image element.
 */
export declare function resize(path: string, dimension: string, size: number, options?: Object): Promise<HTMLImageElement | Error>;
