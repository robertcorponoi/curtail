'use strict'

import { Curtail } from '../curtail.js';

describe('#crop()', function () {

  it('should crop an image at (200, 200) and result in a dimension of 300x400', async function () {
    const curtail = new Curtail();

    const croppedImage = await curtail.crop('../test/wallpaper.png', { locX: 200, locY: 200, size: '300x400' }).catch((err) => console.log(err));

    croppedImage.onload = () => {};

    setTimeout(() => {
      let image = {
        width: croppedImage.width,
        height: croppedImage.height
      };

      let expected = {
        width: 300,
        height: 400
      };

      chai.expect(image).to.deep.equal(expected);
    }, 4);
  });

  it('should crop an image at (0, 0) due to no location being specified and result in a dimension of 1803x895 due to the specified size being larger than the image', async function () {
    const curtail = new Curtail();

    const croppedImage = await curtail.crop('../test/wallpaper.png', { size: '2000x1000' }).catch((err) => console.log(err));

    croppedImage.onload = () => {};

    setTimeout(() => {
      let image = {
        width: croppedImage.width,
        height: croppedImage.height
      };

      let expected = {
        width: 1803,
        height: 895
      };

      chai.expect(image).to.deep.equal(expected);
    }, 4);
  });

});