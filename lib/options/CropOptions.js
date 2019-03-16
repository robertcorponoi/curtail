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
 * Extends the GeneralOptions object for crop specific options.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */
var CropOptions =
/*#__PURE__*/
function (_GeneralOptions) {
  (0, _inherits2.default)(CropOptions, _GeneralOptions);

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

    (0, _classCallCheck2.default)(this, CropOptions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CropOptions).call(this, options));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "preserveAspectRatio", true);
    Object.assign((0, _assertThisInitialized2.default)(_this), options);
    return _this;
  }

  return CropOptions;
}(_GeneralOptions2.default);

exports.default = CropOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0Nyb3BPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkNyb3BPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIkdlbmVyYWxPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7SUFPcUJBLFc7Ozs7O0FBRXBCOzs7Ozs7Ozs7O0FBV0E7OztBQUdBLHVCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUE7QUFFNUIsaUhBQU1BLE9BQU47QUFGNEIsc0dBTEUsSUFLRjtBQUk1QkMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLDhDQUFvQkYsT0FBcEI7QUFKNEI7QUFNNUI7OztFQXRCdUNHLHdCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi9HZW5lcmFsT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogRXh0ZW5kcyB0aGUgR2VuZXJhbE9wdGlvbnMgb2JqZWN0IGZvciBjcm9wIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMC4xLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BPcHRpb25zIGV4dGVuZHMgR2VuZXJhbE9wdGlvbnMge1xyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIHNjYWxlIHByb3BvcnRpb25hbGx5IG9yIG5vdC5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcblx0ICogXHJcblx0ICogQGRlZmF1bHQgdHJ1ZVxyXG5cdCAqL1xyXG5cdHByZXNlcnZlQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBvYmplY3QncyBpbml0aWFsaXphdGlvbi5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuXHJcblx0XHRzdXBlcihvcHRpb25zKTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cclxuXHR9XHJcblxyXG59Il19