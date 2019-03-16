'use strict';
/**
 * Defines the structure of the general options that are applied to most of the
 * Curtail functions.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var GeneralOptions =
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

/**
 * @param {Object} options The options passed to this object's initialization.
 */
function GeneralOptions(options) {
  (0, _classCallCheck2.default)(this, GeneralOptions);
  (0, _defineProperty2.default)(this, "autodownload", false);
  (0, _defineProperty2.default)(this, "crossOrigin", '');
  Object.assign(this, options);
};

exports.default = GeneralOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0dlbmVyYWxPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkdlbmVyYWxPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUJBLGM7QUFFcEI7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7O0FBWUE7OztBQUdBLHdCQUFZQyxPQUFaLEVBQTZCO0FBQUE7QUFBQSxzREFqQkwsS0FpQks7QUFBQSxxREFMUCxFQUtPO0FBRTVCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVBLEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdlbmVyYWwgb3B0aW9ucyB0aGF0IGFyZSBhcHBsaWVkIHRvIG1vc3Qgb2YgdGhlXHJcbiAqIEN1cnRhaWwgZnVuY3Rpb25zLlxyXG4gKiBcclxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cclxuICogXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmFsT3B0aW9ucyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZSBcclxuXHQgKiBvciBub3QuXHJcblx0ICogXHJcblx0ICogQHNpbmNlIDAuMS4wXHJcblx0ICogXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxyXG5cdCAqIFxyXG5cdCAqIEBkZWZhdWx0IGZhbHNlXHJcblx0ICovXHJcblx0YXV0b2Rvd25sb2FkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSBvZiB0aGUgaW1hZ2UgaWYgb3JpZ2luYXRpbmcgZnJvbSBhbiBleHRlcm5hbFxyXG5cdCAqIHNvdXJjZS5cclxuXHQgKiBcclxuXHQgKiBAc2luY2UgMC4xLjBcclxuXHQgKiBcclxuXHQgKiBAcHJvcGVydHkge3N0cmluZ31cclxuXHQgKiBcclxuXHQgKiBAZGVmYXVsdCAnJ1xyXG5cdCAqL1xyXG5cdGNyb3NzT3JpZ2luOiBzdHJpbmcgPSAnJztcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgcGFzc2VkIHRvIHRoaXMgb2JqZWN0J3MgaW5pdGlhbGl6YXRpb24uXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==