'use strict'

import * as curtail from '../../curtail.js';

describe('Converting Images', () => {

	it('take a png and convert it to a jpg', async () => {

		try {

			const convert = await curtail.convert('../test/assets/wallpaper.png', 'jpg');

			chai.expect(convert.src.includes('data:image/jpeg')).to.be.true;

		}
		catch (err) {

			throw new Error(err);
		}

	});

	it('take a png with transparency and convert it to a jpg with a white background', async () => {

		try {

			const convert = await curtail.convert('../test/assets/skeleton.png', 'jpg');
			const canvas = document.createElement('canvas');

			canvas.width = convert.width;
			canvas.height = convert.height;

			canvas.getContext('2d').drawImage(convert, 0, 0, convert.width, convert.height);

			const pixelData = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;

			chai.expect(pixelData[3]).to.equal(255);
		}
		catch (err) {

			throw new Error(err);
		}

	});


});