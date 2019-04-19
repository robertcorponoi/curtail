'use strict'

import * as curtail from '../curtail.js';

describe('Resizing Images', () => {

	it('should resize the width of an image keeping the aspect ratio', async () => {

		try {

			const resize = await curtail.resize('../test/assets/1920x1080.png', 'width', 400);

			chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 225 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

	it('should resize the height of an image keeping the aspect ratio', async () => {

		try {

			const resize = await curtail.resize('../test/assets/1920x1080.png', 'height', 225);

			chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 225 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

	it('should resize the width of an image not keeping the aspect ratio', async () => {

		try {

			const resize = await curtail.resize('../test/assets/1920x1080.png', 'width', 400, { preserveAspectRatio: false });

			chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 400, height: 1080 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

	it('should resize the height of an image not keeping the aspect ratio', async () => {

		try {

			const resize = await curtail.resize('../test/assets/1920x1080.png', 'height', 400, { preserveAspectRatio: false });

			chai.expect({ width: resize.width, height: resize.height }).to.deep.equal({ width: 1920, height: 400 });

		}
		catch (err) {

			throw new Error(err);
		}

	});

});
