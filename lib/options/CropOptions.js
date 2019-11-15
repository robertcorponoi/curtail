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
 */
var CropOptions =
/*#__PURE__*/
function (_GeneralOptions) {
  (0, _inherits2["default"])(CropOptions, _GeneralOptions);

  /**
   * Indicates whether the image should scale proportionally or not.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0Nyb3BPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkNyb3BPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIkdlbmVyYWxPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7OztJQUdxQkEsVzs7Ozs7QUFFcEI7Ozs7Ozs7O0FBU0E7OztBQUdBLHVCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUE7QUFFNUIsdUhBQU1BLE9BQU47QUFGNEIsNEdBTEUsSUFLRjtBQUk1QkMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLGlEQUFvQkYsT0FBcEI7QUFKNEI7QUFNNUI7OztFQXBCdUNHLDJCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi9HZW5lcmFsT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogRXh0ZW5kcyB0aGUgR2VuZXJhbE9wdGlvbnMgb2JqZWN0IGZvciBjcm9wIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wT3B0aW9ucyBleHRlbmRzIEdlbmVyYWxPcHRpb25zIHtcclxuXHJcblx0LyoqXHJcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNob3VsZCBzY2FsZSBwcm9wb3J0aW9uYWxseSBvciBub3QuXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxyXG5cdCAqIFxyXG5cdCAqIEBkZWZhdWx0IHRydWVcclxuXHQgKi9cclxuXHRwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgb2JqZWN0J3MgaW5pdGlhbGl6YXRpb24uXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcblxyXG5cdFx0c3VwZXIob3B0aW9ucyk7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==