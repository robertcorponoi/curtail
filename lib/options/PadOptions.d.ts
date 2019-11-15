import GeneralOptions from './GeneralOptions';
/**
 * Extends the GeneralOptions object for pad specific options.
 */
export default class PadOptions extends GeneralOptions {
    /**
     * The color that the padding will be.
     *
     * @property {string}
     *
     * @default '#fff'
     */
    paddingColor: string;
    /**
     * @param {Object} options The options passed to this object's initialization.
     */
    constructor(options: Object);
}
