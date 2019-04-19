'use strict'

import * as curtail from '../curtail.js';

describe('Rotating Images', () => {

  it('should take an image and rotate it 90 degrees', async () => {

    try {

      const rotate = await curtail.rotate('../test/assets/skeleton.png', 90);

      document.body.appendChild(rotate);

    }
    catch (err) {

      throw new Error(err);

    }

  });

});
