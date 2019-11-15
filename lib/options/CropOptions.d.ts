import GeneralOptions from './GeneralOptions';
/**
 * Extends the GeneralOptions object for crop specific options.
 */
export default class CropOptions extends GeneralOptions {
    /**
     * Indicates whether the image should scale proportionally or not.
     *
     * @property {boolean}
     *
     * @default true
     */
    preserveAspectRatio: boolean;
    /**
     * @param {Object} options The options passed to this object's initialization.
     */
    constructor(options: Object);
}
