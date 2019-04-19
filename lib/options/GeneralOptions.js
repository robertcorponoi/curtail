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
exports["default"] = void 0;

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
  (0, _classCallCheck2["default"])(this, GeneralOptions);
  (0, _defineProperty2["default"])(this, "autodownload", false);
  (0, _defineProperty2["default"])(this, "crossOrigin", '');
  Object.assign(this, options);
};

exports["default"] = GeneralOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0dlbmVyYWxPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkdlbmVyYWxPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUJBLGM7QUFFcEI7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7O0FBWUE7OztBQUdBLHdCQUFZQyxPQUFaLEVBQTZCO0FBQUE7QUFBQSx5REFqQkwsS0FpQks7QUFBQSx3REFMUCxFQUtPO0FBRTVCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVBLEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdlbmVyYWwgb3B0aW9ucyB0aGF0IGFyZSBhcHBsaWVkIHRvIG1vc3Qgb2YgdGhlXG4gKiBDdXJ0YWlsIGZ1bmN0aW9ucy5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cbiAqIFxuICogQHZlcnNpb24gMC4xLjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhbE9wdGlvbnMge1xuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGUgXG5cdCAqIG9yIG5vdC5cblx0ICogXG5cdCAqIEBzaW5jZSAwLjEuMFxuXHQgKiBcblx0ICogQHByb3BlcnR5IHtib29sZWFufVxuXHQgKiBcblx0ICogQGRlZmF1bHQgZmFsc2Vcblx0ICovXG5cdGF1dG9kb3dubG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgdGhlIGltYWdlIGlmIG9yaWdpbmF0aW5nIGZyb20gYW4gZXh0ZXJuYWxcblx0ICogc291cmNlLlxuXHQgKiBcblx0ICogQHNpbmNlIDAuMS4wXG5cdCAqIFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ31cblx0ICogXG5cdCAqIEBkZWZhdWx0ICcnXG5cdCAqL1xuXHRjcm9zc09yaWdpbjogc3RyaW5nID0gJyc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIHBhc3NlZCB0byB0aGlzIG9iamVjdCdzIGluaXRpYWxpemF0aW9uLlxuXHQgKi9cblx0Y29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG5cdH1cblxufSJdfQ==