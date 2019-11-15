'use strict';
/**
 * Defines the structure of the general options that are applied to most of the Curtail functions.
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
 * Indicates whether the image should download after the operation is complete  or not.
 * 
 * @property {boolean}
 * 
 * @default false
 */

/**
 * Sets the cross-origin property of the image if originating from an external source.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL0dlbmVyYWxPcHRpb25zLnRzIl0sIm5hbWVzIjpbIkdlbmVyYWxPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxjO0FBRXBCOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7QUFHQSx3QkFBWUMsT0FBWixFQUE2QjtBQUFBO0FBQUEseURBZEwsS0FjSztBQUFBLHdEQUxQLEVBS087QUFFNUJDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBRUEsQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZ2VuZXJhbCBvcHRpb25zIHRoYXQgYXJlIGFwcGxpZWQgdG8gbW9zdCBvZiB0aGUgQ3VydGFpbCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmFsT3B0aW9ucyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZSAgb3Igbm90LlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuXHQgKiBcclxuXHQgKiBAZGVmYXVsdCBmYWxzZVxyXG5cdCAqL1xyXG5cdGF1dG9kb3dubG9hZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgdGhlIGltYWdlIGlmIG9yaWdpbmF0aW5nIGZyb20gYW4gZXh0ZXJuYWwgc291cmNlLlxyXG5cdCAqIFxyXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG5cdCAqIFxyXG5cdCAqIEBkZWZhdWx0ICcnXHJcblx0ICovXHJcblx0Y3Jvc3NPcmlnaW46IHN0cmluZyA9ICcnO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhpcyBvYmplY3QncyBpbml0aWFsaXphdGlvbi5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cclxuXHR9XHJcblxyXG59Il19