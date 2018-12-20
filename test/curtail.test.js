'use strict'

import * as curtail from '../curtail.js';

describe('Cropping an image', () => {

  it('should crop an image starting at (200, 300) and end up with a new dimension of 450x540', async () => {

    try {

      const crop = await curtail.crop('../test/wallpaper.png', 200, 300, 450, 540);

      chai.expect({ width: crop.width, height: crop.height }).to.deep.equal({ width: 450, height: 540 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

});

describe('Changing the format of an image', () => {

  it('should convert an image from png to jpg', async () => {

    try {

      const convert = await curtail.convert('../test/skeleton.png', 'jpg');

    }
    catch (err) {

      throw new Error(err);
    }

  });

});

describe('Resizing an image', () => {

  it('should resize the width of an image keeping the aspect ratio', async () => {

    try {

      const resize = await curtail.resize('../test/1920x1080.png', 'width', 400);

      chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 225 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

  it('should resize the height of an image keeping the aspect ratio', async () => {

    try {

      const resize = await curtail.resize('../test/1920x1080.png', 'height', 225);

      chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 225 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

  it('should resize the width of an image not keeping the aspect ratio', async () => {

    try {

      const resize = await curtail.resize('../test/1920x1080.png', 'width', 400, { preserveAspectRatio: false });

      chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 1080 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

  it('should resize the height of an image not keeping the aspect ratio', async () => {

    try {

      const resize = await curtail.resize('../test/1920x1080.png', 'height', 400, { preserveAspectRatio: false });

      chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 1920, height: 400 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

});

describe('Padding an image', () => {

  it('should add 20px padding around the image', async () => {

    try {

      const resize = await curtail.pad('../test/1920x1080.png', 20, { paddingColor: 'white ' });

      chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 1960, height: 1120 });

    }
    catch (err) {

      throw new Error(err);
    }

  });

});