'use strict'

import FileInfo from '../interfaces/FileInfo';

import { loadImage } from '../utils/load';
import { extractFileInfo } from '../utils/file';

import GeneralOptions from '../options/GeneralOptions';

/**
 * Convert an image from one format to another format.
 * 
 * @param {string} path The path to the image to convert to another format.
 * @param {string} format The new format for the image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promise<HTMLImageElement>} Returns the newly formatted image as an image element.
 */
export async function convert(path: string, format: string, options: Object = {}): Promise<HTMLImageElement | Error> {

	const fileInfo: FileInfo = extractFileInfo(path);

	const _options: GeneralOptions = new GeneralOptions(options);

	const canvas: HTMLCanvasElement = document.createElement('canvas');
	const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

	const nonTransparentFormats = ['jpg', 'jpeg', 'gif', 'bmp'];

	try {

		const image = await loadImage(path, _options.crossOrigin);

		canvas.width = image.width;
		canvas.height = image.height;

		if (nonTransparentFormats.includes(format)) {

			ctx.fillStyle = '#FFF';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

		}

		ctx.drawImage(image, 0, 0);

		try {

			const f = format === 'png' ? 'png' : 'jpeg';

			const convertedImage = await loadImage(canvas.toDataURL(`image/${f}`));

			if (_options.autodownload) {

				const imageLink: HTMLAnchorElement = document.createElement('a');

				imageLink.href = convertedImage.src;
				imageLink.download = fileInfo.name + '.' + format;

				imageLink.click();

			}

			return convertedImage;

		}
		catch (error) {

			return new Error('There was a problem loading the image, please check to make sure the path is valid');

		}

	}
	catch (error) {

		return new Error('There was a problem loading the image, please check to make sure the path is valid');

	}

}