'use strict';
/**
 * Loads media files as image and video as promises to keep the consuming
 * components cleaner.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */

/**
 * Load an image asynchronously and return a promise containing the loaded
 * image.
 * 
 * @since 0.1.0 
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
  _loadImage = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(path, crossOrigin) {
    var image;
    return _regenerator.default.wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2FkLnRzIl0sIm5hbWVzIjpbImxvYWRJbWFnZSIsInBhdGgiLCJjcm9zc09yaWdpbiIsImltYWdlIiwiSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInNyYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FVc0JBLFM7Ozs7Ozs7NEJBQWYsaUJBQXlCQyxJQUF6QixFQUF1Q0MsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFlBQUFBLEtBRkEsR0FFMEIsSUFBSUMsS0FBSixFQUYxQjtBQUFBLDZDQUlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFFdkNKLGNBQUFBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0IsWUFBTTtBQUVwQ0YsZ0JBQUFBLE9BQU8sQ0FBQ0gsS0FBRCxDQUFQO0FBRUEsZUFKRDtBQU1BQSxjQUFBQSxLQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUUxQ0YsZ0JBQUFBLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOO0FBRUEsZUFKRDtBQU1BTixjQUFBQSxLQUFLLENBQUNPLEdBQU4sR0FBWVQsSUFBWjtBQUVBLGtCQUFJQyxXQUFKLEVBQWlCQyxLQUFLLENBQUNELFdBQU4sR0FBb0JBLFdBQXBCO0FBRWpCLGFBbEJNLENBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIG1lZGlhIGZpbGVzIGFzIGltYWdlIGFuZCB2aWRlbyBhcyBwcm9taXNlcyB0byBrZWVwIHRoZSBjb25zdW1pbmdcclxuICogY29tcG9uZW50cyBjbGVhbmVyLlxyXG4gKiBcclxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cclxuICogXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIExvYWQgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkgYW5kIHJldHVybiBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkXHJcbiAqIGltYWdlLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gbG9hZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtjcm9zc09yaWdpbl0gVGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSB0byBzZXQgZm9yIHRoaXMgaW1hZ2UgaWYgbG9hZGluZyBmcm9tIGFuIGV4dGVybmFsIHJlc291cmNlLlxyXG4gKiBcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudD59IFJldHVybnMgYSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIGltYWdlLiBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2UocGF0aDogc3RyaW5nLCBjcm9zc09yaWdpbj86IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG5cclxuXHRjb25zdCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuXHRcdGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHJcblx0XHRcdHJlc29sdmUoaW1hZ2UpO1xyXG5cdFxyXG5cdFx0fSk7XHJcblx0XHJcblx0XHRpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4ge1xyXG5cclxuXHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcclxuXHRcdGlmIChjcm9zc09yaWdpbikgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcclxuXHJcblx0fSk7XHJcblxyXG59Il19