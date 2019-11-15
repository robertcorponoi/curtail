'use strict'

import FileInfo from '../interfaces/FileInfo';

import { loadImage } from '../utils/load';
import { extractFileInfo } from '../utils/file';

import GeneralOptions from '../options/GeneralOptions';

/**
 * Rotate an image to a specified angle.
 *
 * @param {string} path The path to the image to rotate.
 * @param {number} angle The degree angle to rotate the image to, clockwise.
 * @param {Object} [options]
 * @param {boolean} [options.autodownload=false] Indicates whether the image should download after the rotation is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of the image which is needed if the image is from a different domain.
 */
export async function rotate(path: string, angle: number, options: Object = {}): Promise<HTMLImageElement | Error> {

  const _options: GeneralOptions = new GeneralOptions(options);

  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

  const fileInfo: FileInfo = extractFileInfo(path);

  try {

    const image: HTMLImageElement = await loadImage(path, _options.crossOrigin);

    let largestSide: number = image.width;

    if (image.height > image.width) largestSide = image.height;

    canvas.width, canvas.height = largestSide;

    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.rotate(angle * Math.PI / 180);

    ctx.translate(-(canvas.width / 2), -(canvas.height / 2));

    ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2);

    ctx.restore();

    try {

      const rotatedImage: HTMLImageElement = await loadImage(canvas.toDataURL(`image/${fileInfo.ext}`).replace(`image/${fileInfo.ext}`, 'image/octet-stream'));

      if (_options.autodownload) {

        const imageLink: HTMLAnchorElement = document.createElement('a');

        imageLink.href = rotatedImage.src;
        imageLink.download = fileInfo.name + '.' + fileInfo.ext;

        imageLink.click();

      }

      return rotatedImage;

    }
    catch (error) {

      return new Error('There was a problem loading the image, please check to make sure the path is valid');

    }

  }
  catch (error) {

    throw new Error('There was an error loading the image, please check to make sure the path is valid and try again.');

  }

}
