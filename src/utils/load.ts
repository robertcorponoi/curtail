'use strict'

/**
 * Load an image asynchronously and return a promise containing the loaded image.
 * 
 * @param {string} path The path to the image to load.
 * @param {string} [crossOrigin] The cross-origin property to set for this image if loading from an external resource.
 * 
 * @returns {Promise<HTMLImageElement>} Returns a promise containing the image. 
 */
export async function loadImage(path: string, crossOrigin?: string): Promise<HTMLImageElement> {

	const image: HTMLImageElement = new Image();

	return new Promise((resolve, reject) => {

		image.addEventListener('load', () => {
	
			resolve(image);
	
		});
	
		image.addEventListener('error', (error) => {

			reject(error);

		});
		
		image.src = path;
	
		if (crossOrigin) image.crossOrigin = crossOrigin;

	});

}