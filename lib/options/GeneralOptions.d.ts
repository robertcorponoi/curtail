/**
 * Defines the structure of the general options that are applied to most of the
 * Curtail functions.
 *
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 *
 * @version 0.1.0
 */
export default class GeneralOptions {
    /**
     * Indicates whether the image should download after the operation is complete
     * or not.
     *
     * @since 0.1.0
     *
     * @property {boolean}
     *
     * @default false
     */
    autodownload: boolean;
    /**
     * Sets the cross-origin property of the image if originating from an external
     * source.
     *
     * @since 0.1.0
     *
     * @property {string}
     *
     * @default ''
     */
    crossOrigin: string;
    /**
     * @param {Object} options The options passed to this object's initialization.
     */
    constructor(options: Object);
}
