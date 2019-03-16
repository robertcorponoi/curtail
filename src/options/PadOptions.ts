'use strict'

import GeneralOptions from './GeneralOptions';

/**
 * Extends the GeneralOptions object for pad specific options.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */
export default class PadOptions extends GeneralOptions {

	/**
	 * The color that the padding will be.
	 * 
	 * @since 0.1.0
	 * 
	 * @property {string}
	 * 
	 * @default '#fff'
	 */
	paddingColor: string = '#fff';

	/**
	 * @param {Object} options The options passed to this object's initialization.
	 */
	constructor(options: Object) {

		super(options);

		Object.assign(this, options);

	}

}