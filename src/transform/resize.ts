'use strict'

/// <reference path="../interfaces/FileInfo.ts" />

import { simplify } from '../utils/math';
import { loadImage } from '../utils/load';
import { extractFileInfo } from '../utils/file';

import CropOptions from '../options/CropOptions';

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
export async function resize(path: string, dimension: string, size: number, options: Object = {}): Promise<HTMLImageElement | Error> {

	const _options: CropOptions = new CropOptions(options);

	const fileInfo: FileInfo = extractFileInfo(path);

	try {

		const image = await loadImage(path, _options.crossOrigin);

		const aspectRatio = simplify(image.width, image.height);

		switch (dimension) {

			case 'width':
				image.width = size;

				if (_options.preserveAspectRatio) image.height = Math.round((aspectRatio.denominator / aspectRatio.numerator) * size);
				break;

			case 'height':
				image.height = size;

				if (_options.preserveAspectRatio) image.width = Math.round((aspectRatio.numerator / aspectRatio.denominator) * size);
				break;

		}

		if (_options.autodownload) {

			const imageLink: HTMLAnchorElement = document.createElement('a');

			imageLink.href = image.src;
			imageLink.download = fileInfo.name + '.' + fileInfo.ext;

			imageLink.click();

		}

		return image;

	}
	catch (error) {

		return new Error('There was a problem loading the image, please check to make sure the path is valid');

	}

}