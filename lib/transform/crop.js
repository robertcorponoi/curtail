'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crop = crop;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Crop an image to a specified size by providing the start location of the crop and
 * the dimensions that the product should have.
 * 
 * @version 1.0.0
 * 
 * @param {string} path The path to the image to crop.
 * @param {number} x The horizontal location in the original image to begin the crop.
 * @param {number} y The vertical location in the original image to being the crop.
 * @param {number} width The width of the final cropped image.
 * @param {number} height The height of of the final cropped image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promize<HTMLImageElement>} Returns the newly cropped image as an image element.
 */
function crop(path, x, y, width, height) {
  var options,
      _options,
      canvas,
      ctx,
      fileInfo,
      image,
      croppedImage,
      imageLink,
      _args = arguments;

  return _regenerator["default"].async(function crop$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};
          _options = new _GeneralOptions["default"](options);
          canvas = document.createElement('canvas');
          ctx = canvas.getContext('2d');
          fileInfo = (0, _file.extractFileInfo)(path);
          _context.prev = 5;
          _context.next = 8;
          return _regenerator["default"].awrap((0, _load.loadImage)(path, _options.crossOrigin));

        case 8:
          image = _context.sent;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
          _context.prev = 12;
          _context.next = 15;
          return _regenerator["default"].awrap((0, _load.loadImage)(canvas.toDataURL("image/".concat(fileInfo.ext)).replace("image/".concat(fileInfo.ext), 'image/octet-stream')));

        case 15:
          croppedImage = _context.sent;

          if (_options.autodownload) {
            imageLink = document.createElement('a');
            imageLink.href = croppedImage.src;
            imageLink.download = fileInfo.name + '.' + fileInfo.ext;
            imageLink.click();
          }

          return _context.abrupt("return", croppedImage);

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](12);
          return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

        case 23:
          _context.next = 28;
          break;

        case 25:
          _context.prev = 25;
          _context.t1 = _context["catch"](5);
          return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 25], [12, 20]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3JvcC50cyJdLCJuYW1lcyI6WyJjcm9wIiwicGF0aCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJHZW5lcmFsT3B0aW9ucyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJyZXBsYWNlIiwiY3JvcHBlZEltYWdlIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBZUEsSUFBZixDQUFvQkMsSUFBcEIsRUFBa0NDLENBQWxDLEVBQTZDQyxDQUE3QyxFQUF3REMsS0FBeEQsRUFBdUVDLE1BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVGQyxVQUFBQSxPQUF2RiwyREFBeUcsRUFBekc7QUFFQUMsVUFBQUEsUUFGQSxHQUUyQixJQUFJQywwQkFBSixDQUFtQkYsT0FBbkIsQ0FGM0I7QUFJQUcsVUFBQUEsTUFKQSxHQUk0QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBSjVCO0FBS0FDLFVBQUFBLEdBTEEsR0FLZ0NILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUxoQztBQU9BQyxVQUFBQSxRQVBBLEdBT3FCLDJCQUFnQmIsSUFBaEIsQ0FQckI7QUFBQTtBQUFBO0FBQUEsK0NBV2UscUJBQVVBLElBQVYsRUFBZ0JNLFFBQVEsQ0FBQ1EsV0FBekIsQ0FYZjs7QUFBQTtBQVdDQyxVQUFBQSxLQVhEO0FBYUxQLFVBQUFBLE1BQU0sQ0FBQ0wsS0FBUCxHQUFlQSxLQUFmO0FBQ0FLLFVBQUFBLE1BQU0sQ0FBQ0osTUFBUCxHQUFnQkEsTUFBaEI7QUFFQU8sVUFBQUEsR0FBRyxDQUFDSyxTQUFKLENBQWNELEtBQWQsRUFBcUJkLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQkMsS0FBM0IsRUFBa0NDLE1BQWxDLEVBQTBDLENBQTFDLEVBQTZDLENBQTdDLEVBQWdERCxLQUFoRCxFQUF1REMsTUFBdkQ7QUFoQks7QUFBQTtBQUFBLCtDQW9CdUIscUJBQVVJLE1BQU0sQ0FBQ1MsU0FBUCxpQkFBMEJKLFFBQVEsQ0FBQ0ssR0FBbkMsR0FBMENDLE9BQTFDLGlCQUEyRE4sUUFBUSxDQUFDSyxHQUFwRSxHQUEyRSxvQkFBM0UsQ0FBVixDQXBCdkI7O0FBQUE7QUFvQkVFLFVBQUFBLFlBcEJGOztBQXNCSixjQUFJZCxRQUFRLENBQUNlLFlBQWIsRUFBMkI7QUFFcEJDLFlBQUFBLFNBRm9CLEdBRVdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZYO0FBSTFCWSxZQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILFlBQVksQ0FBQ0ksR0FBOUI7QUFDQUYsWUFBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCWixRQUFRLENBQUNhLElBQVQsR0FBZ0IsR0FBaEIsR0FBc0JiLFFBQVEsQ0FBQ0ssR0FBcEQ7QUFFQUksWUFBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBL0JHLDJDQWlDR1AsWUFqQ0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBc0NHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQXRDSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBNkNFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQTdDRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRmlsZUluZm8udHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XHJcbmltcG9ydCB7IGV4dHJhY3RGaWxlSW5mbyB9IGZyb20gJy4uL3V0aWxzL2ZpbGUnO1xyXG5cclxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvR2VuZXJhbE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIENyb3AgYW4gaW1hZ2UgdG8gYSBzcGVjaWZpZWQgc2l6ZSBieSBwcm92aWRpbmcgdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBjcm9wIGFuZFxyXG4gKiB0aGUgZGltZW5zaW9ucyB0aGF0IHRoZSBwcm9kdWN0IHNob3VsZCBoYXZlLlxyXG4gKiBcclxuICogQHZlcnNpb24gMS4wLjBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byBjcm9wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgaG9yaXpvbnRhbCBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgaW1hZ2UgdG8gYmVnaW4gdGhlIGNyb3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB2ZXJ0aWNhbCBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgaW1hZ2UgdG8gYmVpbmcgdGhlIGNyb3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGZpbmFsIGNyb3BwZWQgaW1hZ2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBvZiBvZiB0aGUgZmluYWwgY3JvcHBlZCBpbWFnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Eb3dubG9hZD1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNob3VsZCBkb3dubG9hZCBhZnRlciB0aGUgY3JvcHBpbmcgaXMgY29tcGxldGUgb3Igbm90LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIGltYWdlcyBvcmlnaW5hdGluZyBmcm9tIGV4dGVybmFsIHNvdXJjZXMuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7UHJvbWl6ZTxIVE1MSW1hZ2VFbGVtZW50Pn0gUmV0dXJucyB0aGUgbmV3bHkgY3JvcHBlZCBpbWFnZSBhcyBhbiBpbWFnZSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyb3AocGF0aDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcclxuXHJcblx0Y29uc3QgX29wdGlvbnM6IEdlbmVyYWxPcHRpb25zID0gbmV3IEdlbmVyYWxPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0Y29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcclxuXHJcblx0dHJ5IHtcclxuXHJcblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHRyeSB7XHJcblxyXG5cdFx0XHRjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkucmVwbGFjZShgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCwgJ2ltYWdlL29jdGV0LXN0cmVhbScpKTtcclxuXHJcblx0XHRcdGlmIChfb3B0aW9ucy5hdXRvZG93bmxvYWQpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBjcm9wcGVkSW1hZ2Uuc3JjO1xyXG5cdFx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNyb3BwZWRJbWFnZTtcclxuXHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZXJyb3IpIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRjYXRjaCAoZXJyb3IpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XHJcblxyXG5cdH1cclxuXHJcbn0iXX0=