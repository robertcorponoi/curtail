'use strict'

import * as curtail from '../../curtail.js';

describe('Padding an image', () => {

  it('should add 20px padding around the image', async () => {

    try {

      const pad = await curtail.pad('../test/assets/1920x1080.png', 20);

      chai.expect({ width: pad.width, height: pad.height }).to.deep.equal({ width: 1960, height: 1120 });

    }
    catch (err) {

			throw new Error(err);
			
    }

  });

});