'use strict'

/// <reference path="../interfaces/FileInfo.ts" />

import { loadImage } from '../utils/load';
import { extractFileInfo } from '../utils/file';

import PadOptions from '../options/PadOptions';

/**
 * Adds the specified amount of padding around an image.
 * 
 * Note that the padding will not be even on images that are not square.
 * 
 * @since 2.0.0
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
export async function pad(path: string, padding: number, options: Object = {}): Promise<HTMLImageElement | Error> {

	const _options: PadOptions = new PadOptions(options);

	const canvas: HTMLCanvasElement = document.createElement('canvas');
	const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

	const fileInfo: FileInfo = extractFileInfo(path);

	try {

		const image = await loadImage(path, _options.crossOrigin);

		canvas.width = image.width + (padding * 2);
		canvas.height = image.height + (padding * 2);

		if (_options.paddingColor !== 'transparent') {

			ctx.fillStyle = _options.paddingColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

		}

		ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2, image.width, image.height);

		try {

			const paddedImage = await loadImage(canvas.toDataURL(`image/${fileInfo.ext}`));

			if (_options.autodownload) {

				const imageLink: HTMLAnchorElement = document.createElement('a');

				imageLink.href = image.src;
				imageLink.download = fileInfo.name + '.' + fileInfo.ext;

				imageLink.click();

			}

			return paddedImage;

		}
		catch (error) {

			return new Error('There was a problem loading the image, please check to make sure the path is valid');

		}

	}
	catch (error) {

		return new Error('There was a problem loading the image, please check to make sure the path is valid');

	}

}