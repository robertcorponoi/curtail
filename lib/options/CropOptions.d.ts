import GeneralOptions from './GeneralOptions';
/**
 * Extends the GeneralOptions object for crop specific options.
 *
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 *
 * @version 0.1.0
 */
export default class CropOptions extends GeneralOptions {
    /**
     * Indicates whether the image should scale proportionally or not.
     *
     * @since 0.1.0
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
