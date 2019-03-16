'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _GeneralOptions2 = _interopRequireDefault(require("./GeneralOptions"));

/**
 * Extends the GeneralOptions object for pad specific options.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */
var PadOptions =
/*#__PURE__*/
function (_GeneralOptions) {
  (0, _inherits2.default)(PadOptions, _GeneralOptions);

  /**
   * The color that the padding will be.
   * 
   * @since 0.1.0
   * 
   * @property {string}
   * 
   * @default '#fff'
   */

  /**
   * @param {Object} options The options passed to this object's initialization.
   */
  function PadOptions(options) {
    var _this;

    (0, _classCallCheck2.default)(this, PadOptions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PadOptions).call(this, options));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "paddingColor", '#fff');
    Object.assign((0, _assertThisInitialized2.default)(_this), options);
    return _this;
  }

  return PadOptions;
}(_GeneralOptions2.default);

exports.default = PadOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL1BhZE9wdGlvbnMudHMiXSwibmFtZXMiOlsiUGFkT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJHZW5lcmFsT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7O0lBT3FCQSxVOzs7OztBQUVwQjs7Ozs7Ozs7OztBQVdBOzs7QUFHQSxzQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBO0FBRTVCLGdIQUFNQSxPQUFOO0FBRjRCLCtGQUxOLE1BS007QUFJNUJDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCw4Q0FBb0JGLE9BQXBCO0FBSjRCO0FBTTVCOzs7RUF0QnNDRyx3QiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4vR2VuZXJhbE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuZHMgdGhlIEdlbmVyYWxPcHRpb25zIG9iamVjdCBmb3IgcGFkIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMC4xLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZE9wdGlvbnMgZXh0ZW5kcyBHZW5lcmFsT3B0aW9ucyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBjb2xvciB0aGF0IHRoZSBwYWRkaW5nIHdpbGwgYmUuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9XHJcblx0ICogXHJcblx0ICogQGRlZmF1bHQgJyNmZmYnXHJcblx0ICovXHJcblx0cGFkZGluZ0NvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIHBhc3NlZCB0byB0aGlzIG9iamVjdCdzIGluaXRpYWxpemF0aW9uLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuXHRcdHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblxyXG5cdH1cclxuXHJcbn0iXX0=