'use strict'

import FileInfo from '../interfaces/FileInfo';

import { loadImage } from '../utils/load';
import { extractFileInfo } from '../utils/file';

import GeneralOptions from '../options/GeneralOptions';

/**
 * Crop an image to a specified size by providing the start location of the crop and the dimensions that the product should have.
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
export async function crop(path: string, x: number, y: number, width: number, height: number, options: Object = {}): Promise<HTMLImageElement | Error> {

	const _options: GeneralOptions = new GeneralOptions(options);

	const canvas: HTMLCanvasElement = document.createElement('canvas');
	const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

	const fileInfo: FileInfo = extractFileInfo(path);

	try {

		const image = await loadImage(path, _options.crossOrigin);

		canvas.width = width;
		canvas.height = height;

		ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

		try {

			const croppedImage = await loadImage(canvas.toDataURL(`image/${fileInfo.ext}`).replace(`image/${fileInfo.ext}`, 'image/octet-stream'));

			if (_options.autodownload) {

				const imageLink: HTMLAnchorElement = document.createElement('a');

				imageLink.href = croppedImage.src;
				imageLink.download = fileInfo.name + '.' + fileInfo.ext;

				imageLink.click();

			}

			return croppedImage;

		}
		catch (error) {

			return new Error('There was a problem loading the image, please check to make sure the path is valid');

		}

	}
	catch (error) {

		return new Error('There was a problem loading the image, please check to make sure the path is valid');

	}

}