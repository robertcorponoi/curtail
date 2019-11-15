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
 */
var PadOptions =
/*#__PURE__*/
function (_GeneralOptions) {
  (0, _inherits2["default"])(PadOptions, _GeneralOptions);

  /**
   * The color that the padding will be.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL1BhZE9wdGlvbnMudHMiXSwibmFtZXMiOlsiUGFkT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJHZW5lcmFsT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOzs7SUFHcUJBLFU7Ozs7O0FBRXBCOzs7Ozs7OztBQVNBOzs7QUFHQSxzQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBO0FBRTVCLHNIQUFNQSxPQUFOO0FBRjRCLHFHQUxOLE1BS007QUFJNUJDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxpREFBb0JGLE9BQXBCO0FBSjRCO0FBTTVCOzs7RUFwQnNDRywyQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4vR2VuZXJhbE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuZHMgdGhlIEdlbmVyYWxPcHRpb25zIG9iamVjdCBmb3IgcGFkIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRPcHRpb25zIGV4dGVuZHMgR2VuZXJhbE9wdGlvbnMge1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY29sb3IgdGhhdCB0aGUgcGFkZGluZyB3aWxsIGJlLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG5cdCAqIFxyXG5cdCAqIEBkZWZhdWx0ICcjZmZmJ1xyXG5cdCAqL1xyXG5cdHBhZGRpbmdDb2xvcjogc3RyaW5nID0gJyNmZmYnO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBvYmplY3QncyBpbml0aWFsaXphdGlvbi5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuXHJcblx0XHRzdXBlcihvcHRpb25zKTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cclxuXHR9XHJcblxyXG59Il19