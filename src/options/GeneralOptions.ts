'use strict'

/**
 * Defines the structure of the general options that are applied to most of the Curtail functions.
 */
export default class GeneralOptions {

	/**
	 * Indicates whether the image should download after the operation is complete  or not.
	 * 
	 * @property {boolean}
	 * 
	 * @default false
	 */
	autodownload: boolean = false;

	/**
	 * Sets the cross-origin property of the image if originating from an external source.
	 * 
	 * @property {string}
	 * 
	 * @default ''
	 */
	crossOrigin: string = '';

	/**
	 * @param {Object} options The options passed to this object's initialization.
	 */
	constructor(options: Object) {

		Object.assign(this, options);

	}

}