'use strict'

export function Curtail() {
}

/**
 * Crop an image down to a specified size by providing the starting location
 * in terms of (x, y) and the dimension of the image ('1920x1080') to return.
 * 
 * @since 0.1.0
 * @param {string} image A path to a local image to perform the crop operation. 
 * @param {Object} options 
 * @param {number} [options.locX=0] The x location of the original image to begin the crop.
 * @param {number} [options.locY=0] The y location of the original image to being the crop.
 * @param {string} [options.size='0x0'] The dimensions of the image to crop out from the starting location.
 * @returns {Element}
 */
Curtail.prototype.crop = (image, options = {}) => {
  if (!image) throw new Error('An image to crop must be specified');

  if (!options.locX) options.locX = 0;
  if (!options.locY) options.locY = 0;
  if (!options.size) options.size = '0x0';

  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  let crop = new Image();
  crop.src = image;

  const dimensions = options.size.split('x');
  let x = dimensions[0];
  let y = dimensions[1];

  const fileType = image.split('.')[1];

  return new Promise((resolve, reject) => {
    crop.onload = () => {
      const maxWidth = crop.width - options.locX;
      if (x > maxWidth) x = maxWidth;

      const maxHeight = crop.height - options.locY;
      if (y > maxHeight) y = maxHeight;

      canvas.width = x;
      canvas.height = y;

      ctx.drawImage(crop, options.locX, options.locY, x, y, 0, 0, x, y);

      let cropped = new Image();
      cropped.src = canvas.toDataURL(`image/${fileType}`).replace(`image/${fileType}`, 'image/octet-stream');

      resolve(cropped);
    }

    crop.onerror = (err) => {
      reject(err);
    }
  });
};