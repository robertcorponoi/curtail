'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
  (0, _inherits2["default"])(PadOptions, _GeneralOptions);

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

    (0, _classCallCheck2["default"])(this, PadOptions);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PadOptions).call(this, options));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "paddingColor", '#fff');
    Object.assign((0, _assertThisInitialized2["default"])(_this), options);
    return _this;
  }

  return PadOptions;
}(_GeneralOptions2["default"]);

exports["default"] = PadOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL1BhZE9wdGlvbnMudHMiXSwibmFtZXMiOlsiUGFkT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJHZW5lcmFsT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7O0lBT3FCQSxVOzs7OztBQUVwQjs7Ozs7Ozs7OztBQVdBOzs7QUFHQSxzQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBO0FBRTVCLHNIQUFNQSxPQUFOO0FBRjRCLHFHQUxOLE1BS007QUFJNUJDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxpREFBb0JGLE9BQXBCO0FBSjRCO0FBTTVCOzs7RUF0QnNDRywyQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi9HZW5lcmFsT3B0aW9ucyc7XG5cbi8qKlxuICogRXh0ZW5kcyB0aGUgR2VuZXJhbE9wdGlvbnMgb2JqZWN0IGZvciBwYWQgc3BlY2lmaWMgb3B0aW9ucy5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cbiAqIFxuICogQHZlcnNpb24gMC4xLjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkT3B0aW9ucyBleHRlbmRzIEdlbmVyYWxPcHRpb25zIHtcblxuXHQvKipcblx0ICogVGhlIGNvbG9yIHRoYXQgdGhlIHBhZGRpbmcgd2lsbCBiZS5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9XG5cdCAqIFxuXHQgKiBAZGVmYXVsdCAnI2ZmZidcblx0ICovXG5cdHBhZGRpbmdDb2xvcjogc3RyaW5nID0gJyNmZmYnO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBvYmplY3QncyBpbml0aWFsaXphdGlvbi5cblx0ICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xuXG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG5cdH1cblxufSJdfQ==