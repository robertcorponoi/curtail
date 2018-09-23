'use strict'

import { Curtail } from '../curtail.js';
import * as extract from '../extract.js';

// Test the fucionality of Curtail's image manipulation features.
describe('Curtail', () => {

  // Test the crop function which resizes images.
  describe('#crop()', () => {

    // The specified image should be cropped at the origin but with a new dimension of 300x400.
    it('should crop an image at (0, 0) and result in a new dimension of 300x400', async () => {

      const curtail = new Curtail();

      const crop = await curtail.crop('../test/wallpaper.png', 0, 0, 300, 400).catch((err) => console.log(err));

      const cropDimensions = { width: crop.width, height: crop.height };

      chai.expect(cropDimensions).to.deep.equal({ width: 300, height: 400 });

    });

  });

  // Test the convert function which converts images between file types.
  describe('#convert()', () => {

    // The specified image should be changed from wallpaper.png to wallpaper.jpg.
    it('should convert the image from .png to .jpg', async () => {

      const curtail = new Curtail();

      const convert = await curtail.convert('../test/wallpaper.png', curtail.FORMAT.JPG);

    });

  });

  // Test the resize function which resizes images.
  describe('#resize()', () => {

    // It sould resize the image's width and maintain the aspect ratio
    it('it should resize the image\'s width maintaining the aspect ratio resulting in the image being 400x225', async () => {

      const curtail = new Curtail();

      const resize = await curtail.resize('../test/1920x1080.png', 'width', 400).catch((err) => console.log(err));

      const expectedSize = { width: 400, height: 225 };

      const actualSize = { width: resize.width, height: resize.height };

      chai.expect(actualSize).to.deep.equal(expectedSize);

    });

    // It sould resize the image's height and maintain the aspect ratio
    it('it should resize the image\'s height maintaining the aspect ratio resulting in the image being 400x225', async () => {

      const curtail = new Curtail();

      const resize = await curtail.resize('../test/1920x1080.png', 'height', 225).catch((err) => console.log(err));

      const expectedSize = { width: 400, height: 225 };

      const actualSize = { width: resize.width, height: resize.height };

      chai.expect(actualSize).to.deep.equal(expectedSize);

    });

  });

});