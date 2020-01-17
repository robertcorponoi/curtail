'use strict';
/**
 * Load an image asynchronously and return a promise containing the loaded image.
 * 
 * @param {string} path The path to the image to load.
 * @param {string} [crossOrigin] The cross-origin property to set for this image if loading from an external resource.
 * 
 * @returns {Promise<HTMLImageElement>} Returns a promise containing the image. 
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImage = loadImage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function loadImage(_x, _x2) {
  return _loadImage.apply(this, arguments);
}

function _loadImage() {
  _loadImage = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, crossOrigin) {
    var image;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            image = new Image();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              image.addEventListener('load', function () {
                resolve(image);
              });
              image.addEventListener('error', function (error) {
                reject(error);
              });
              image.src = path;
              if (crossOrigin) image.crossOrigin = crossOrigin;
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadImage.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2FkLnRzIl0sIm5hbWVzIjpbImxvYWRJbWFnZSIsInBhdGgiLCJjcm9zc09yaWdpbiIsImltYWdlIiwiSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInNyYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FRc0JBLFM7Ozs7Ozs7K0JBQWYsaUJBQXlCQyxJQUF6QixFQUF1Q0MsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFlBQUFBLEtBRkEsR0FFMEIsSUFBSUMsS0FBSixFQUYxQjtBQUFBLDZDQUlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFFdkNKLGNBQUFBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0IsWUFBTTtBQUVwQ0YsZ0JBQUFBLE9BQU8sQ0FBQ0gsS0FBRCxDQUFQO0FBRUEsZUFKRDtBQU1BQSxjQUFBQSxLQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUUxQ0YsZ0JBQUFBLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOO0FBRUEsZUFKRDtBQU1BTixjQUFBQSxLQUFLLENBQUNPLEdBQU4sR0FBWVQsSUFBWjtBQUVBLGtCQUFJQyxXQUFKLEVBQWlCQyxLQUFLLENBQUNELFdBQU4sR0FBb0JBLFdBQXBCO0FBRWpCLGFBbEJNLENBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIExvYWQgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkgYW5kIHJldHVybiBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkIGltYWdlLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGxvYWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY3Jvc3NPcmlnaW5dIFRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgdG8gc2V0IGZvciB0aGlzIGltYWdlIGlmIGxvYWRpbmcgZnJvbSBhbiBleHRlcm5hbCByZXNvdXJjZS5cclxuICogXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIGEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBpbWFnZS4gXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEltYWdlKHBhdGg6IHN0cmluZywgY3Jvc3NPcmlnaW4/OiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcclxuXHJcblx0Y29uc3QgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcblx0XHRpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cdFxyXG5cdFx0XHRyZXNvbHZlKGltYWdlKTtcclxuXHRcclxuXHRcdH0pO1xyXG5cdFxyXG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyb3IpID0+IHtcclxuXHJcblx0XHRcdHJlamVjdChlcnJvcik7XHJcblxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHJcblx0XHRpZiAoY3Jvc3NPcmlnaW4pIGltYWdlLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XHJcblxyXG5cdH0pO1xyXG5cclxufSJdfQ==