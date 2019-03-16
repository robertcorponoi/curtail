'use strict'

import * as curtail from '../../curtail.js';

describe('Cropping Images', () => {

	it('should take a 1803x895 image and starting at the location (200, 300) it should crop the image down to a size of 450x540', async () => {

		try {

			const crop = await curtail.crop('../test/assets/wallpaper.png', 200, 300, 450, 540);

			chai.expect({ width: crop.width, height: crop.height }).to.deep.equal({ width: 450, height: 540 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

	it('should take a 1920x1080 image and starting at the origin (0, 0) it should crop it to 1000x1000', async () => {

		try {

			const crop = await curtail.crop('../test/assets/1920x1080.png', 0, 0, 1000, 1000);

			chai.expect({ width: crop.width, height: crop.height }).to.deep.equal({ width: 1000, height: 1000 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

});