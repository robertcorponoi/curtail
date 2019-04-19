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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2FkLnRzIl0sIm5hbWVzIjpbImxvYWRJbWFnZSIsInBhdGgiLCJjcm9zc09yaWdpbiIsImltYWdlIiwiSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInNyYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FVc0JBLFM7Ozs7Ozs7K0JBQWYsaUJBQXlCQyxJQUF6QixFQUF1Q0MsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFlBQUFBLEtBRkEsR0FFMEIsSUFBSUMsS0FBSixFQUYxQjtBQUFBLDZDQUlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFFdkNKLGNBQUFBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0IsWUFBTTtBQUVwQ0YsZ0JBQUFBLE9BQU8sQ0FBQ0gsS0FBRCxDQUFQO0FBRUEsZUFKRDtBQU1BQSxjQUFBQSxLQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUUxQ0YsZ0JBQUFBLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOO0FBRUEsZUFKRDtBQU1BTixjQUFBQSxLQUFLLENBQUNPLEdBQU4sR0FBWVQsSUFBWjtBQUVBLGtCQUFJQyxXQUFKLEVBQWlCQyxLQUFLLENBQUNELFdBQU4sR0FBb0JBLFdBQXBCO0FBRWpCLGFBbEJNLENBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIExvYWRzIG1lZGlhIGZpbGVzIGFzIGltYWdlIGFuZCB2aWRlbyBhcyBwcm9taXNlcyB0byBrZWVwIHRoZSBjb25zdW1pbmdcbiAqIGNvbXBvbmVudHMgY2xlYW5lci5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cbiAqIFxuICogQHZlcnNpb24gMC4xLjBcbiAqL1xuXG4vKipcbiAqIExvYWQgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkgYW5kIHJldHVybiBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkXG4gKiBpbWFnZS5cbiAqIFxuICogQHNpbmNlIDAuMS4wIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGxvYWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Nyb3NzT3JpZ2luXSBUaGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IHRvIHNldCBmb3IgdGhpcyBpbWFnZSBpZiBsb2FkaW5nIGZyb20gYW4gZXh0ZXJuYWwgcmVzb3VyY2UuXG4gKiBcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIGEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBpbWFnZS4gXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2UocGF0aDogc3RyaW5nLCBjcm9zc09yaWdpbj86IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuXG5cdGNvbnN0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuXHRcdGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdFxuXHRcdFx0cmVzb2x2ZShpbWFnZSk7XG5cdFxuXHRcdH0pO1xuXHRcblx0XHRpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4ge1xuXG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXG5cdFx0fSk7XG5cdFx0XG5cdFx0aW1hZ2Uuc3JjID0gcGF0aDtcblx0XG5cdFx0aWYgKGNyb3NzT3JpZ2luKSBpbWFnZS5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuXG5cdH0pO1xuXG59Il19