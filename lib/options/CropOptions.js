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
 * Extends the GeneralOptions object for crop specific options.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */
var CropOptions =
/*#__PURE__*/
function (_GeneralOptions) {
  (0, _inherits2["default"])(CropOptions, _GeneralOptions);

  /**
   * Indicates whether the image should scale proportionally or not.
   * 
   * @since 0.1.0
   * 
   * @property {boolean}
   * 
   * @default true
   */

  /**
   * @param {Object} options The options passed to this object's initialization.
   */
  function CropOptions(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, CropOptions);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CropOptions).call(this, options));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "preserveAspectRatio", true);
    Object.assign((0, _assertThisInitialized2["default"])(_this), options);
    return _this;
  }

  return CropOptions;
}(_GeneralOptions2["default"]);

exports["default"] = CropOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0Nyb3BPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkNyb3BPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIkdlbmVyYWxPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7SUFPcUJBLFc7Ozs7O0FBRXBCOzs7Ozs7Ozs7O0FBV0E7OztBQUdBLHVCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUE7QUFFNUIsdUhBQU1BLE9BQU47QUFGNEIsNEdBTEUsSUFLRjtBQUk1QkMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLGlEQUFvQkYsT0FBcEI7QUFKNEI7QUFNNUI7OztFQXRCdUNHLDJCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBHZW5lcmFsT3B0aW9ucyBmcm9tICcuL0dlbmVyYWxPcHRpb25zJztcblxuLyoqXG4gKiBFeHRlbmRzIHRoZSBHZW5lcmFsT3B0aW9ucyBvYmplY3QgZm9yIGNyb3Agc3BlY2lmaWMgb3B0aW9ucy5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cbiAqIFxuICogQHZlcnNpb24gMC4xLjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcE9wdGlvbnMgZXh0ZW5kcyBHZW5lcmFsT3B0aW9ucyB7XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgc2NhbGUgcHJvcG9ydGlvbmFsbHkgb3Igbm90LlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XG5cdCAqIFxuXHQgKiBAZGVmYXVsdCB0cnVlXG5cdCAqL1xuXHRwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgb2JqZWN0J3MgaW5pdGlhbGl6YXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcblxuXHRcdHN1cGVyKG9wdGlvbnMpO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblxuXHR9XG5cbn0iXX0=