'use strict';

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
 * Crop an image to a specified size by providing the start location of the crop and the dimensions that the product should have.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3JvcC50cyJdLCJuYW1lcyI6WyJjcm9wIiwicGF0aCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJHZW5lcmFsT3B0aW9ucyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJyZXBsYWNlIiwiY3JvcHBlZEltYWdlIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNPLFNBQWVBLElBQWYsQ0FBb0JDLElBQXBCLEVBQWtDQyxDQUFsQyxFQUE2Q0MsQ0FBN0MsRUFBd0RDLEtBQXhELEVBQXVFQyxNQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RkMsVUFBQUEsT0FBdkYsMkRBQXlHLEVBQXpHO0FBRUFDLFVBQUFBLFFBRkEsR0FFMkIsSUFBSUMsMEJBQUosQ0FBbUJGLE9BQW5CLENBRjNCO0FBSUFHLFVBQUFBLE1BSkEsR0FJNEJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUo1QjtBQUtBQyxVQUFBQSxHQUxBLEdBS2dDSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FMaEM7QUFPQUMsVUFBQUEsUUFQQSxHQU9xQiwyQkFBZ0JiLElBQWhCLENBUHJCO0FBQUE7QUFBQTtBQUFBLCtDQVdlLHFCQUFVQSxJQUFWLEVBQWdCTSxRQUFRLENBQUNRLFdBQXpCLENBWGY7O0FBQUE7QUFXQ0MsVUFBQUEsS0FYRDtBQWFMUCxVQUFBQSxNQUFNLENBQUNMLEtBQVAsR0FBZUEsS0FBZjtBQUNBSyxVQUFBQSxNQUFNLENBQUNKLE1BQVAsR0FBZ0JBLE1BQWhCO0FBRUFPLFVBQUFBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjRCxLQUFkLEVBQXFCZCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxNQUFsQyxFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxFQUFnREQsS0FBaEQsRUFBdURDLE1BQXZEO0FBaEJLO0FBQUE7QUFBQSwrQ0FvQnVCLHFCQUFVSSxNQUFNLENBQUNTLFNBQVAsaUJBQTBCSixRQUFRLENBQUNLLEdBQW5DLEdBQTBDQyxPQUExQyxpQkFBMkROLFFBQVEsQ0FBQ0ssR0FBcEUsR0FBMkUsb0JBQTNFLENBQVYsQ0FwQnZCOztBQUFBO0FBb0JFRSxVQUFBQSxZQXBCRjs7QUFzQkosY0FBSWQsUUFBUSxDQUFDZSxZQUFiLEVBQTJCO0FBRXBCQyxZQUFBQSxTQUZvQixHQUVXYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FGWDtBQUkxQlksWUFBQUEsU0FBUyxDQUFDQyxJQUFWLEdBQWlCSCxZQUFZLENBQUNJLEdBQTlCO0FBQ0FGLFlBQUFBLFNBQVMsQ0FBQ0csUUFBVixHQUFxQlosUUFBUSxDQUFDYSxJQUFULEdBQWdCLEdBQWhCLEdBQXNCYixRQUFRLENBQUNLLEdBQXBEO0FBRUFJLFlBQUFBLFNBQVMsQ0FBQ0ssS0FBVjtBQUVBOztBQS9CRywyQ0FpQ0dQLFlBakNIOztBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQXNDRyxJQUFJUSxLQUFKLENBQVUsb0ZBQVYsQ0F0Q0g7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQTZDRSxJQUFJQSxLQUFKLENBQVUsb0ZBQVYsQ0E3Q0Y7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBGaWxlSW5mbyBmcm9tICcuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvJztcclxuXHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzL2xvYWQnO1xyXG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcclxuXHJcbmltcG9ydCBHZW5lcmFsT3B0aW9ucyBmcm9tICcuLi9vcHRpb25zL0dlbmVyYWxPcHRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBDcm9wIGFuIGltYWdlIHRvIGEgc3BlY2lmaWVkIHNpemUgYnkgcHJvdmlkaW5nIHRoZSBzdGFydCBsb2NhdGlvbiBvZiB0aGUgY3JvcCBhbmQgdGhlIGRpbWVuc2lvbnMgdGhhdCB0aGUgcHJvZHVjdCBzaG91bGQgaGF2ZS5cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byBjcm9wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgaG9yaXpvbnRhbCBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgaW1hZ2UgdG8gYmVnaW4gdGhlIGNyb3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB2ZXJ0aWNhbCBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgaW1hZ2UgdG8gYmVpbmcgdGhlIGNyb3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGZpbmFsIGNyb3BwZWQgaW1hZ2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBvZiBvZiB0aGUgZmluYWwgY3JvcHBlZCBpbWFnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Eb3dubG9hZD1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNob3VsZCBkb3dubG9hZCBhZnRlciB0aGUgY3JvcHBpbmcgaXMgY29tcGxldGUgb3Igbm90LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIGltYWdlcyBvcmlnaW5hdGluZyBmcm9tIGV4dGVybmFsIHNvdXJjZXMuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7UHJvbWl6ZTxIVE1MSW1hZ2VFbGVtZW50Pn0gUmV0dXJucyB0aGUgbmV3bHkgY3JvcHBlZCBpbWFnZSBhcyBhbiBpbWFnZSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyb3AocGF0aDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcclxuXHJcblx0Y29uc3QgX29wdGlvbnM6IEdlbmVyYWxPcHRpb25zID0gbmV3IEdlbmVyYWxPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0Y29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcclxuXHJcblx0dHJ5IHtcclxuXHJcblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHRyeSB7XHJcblxyXG5cdFx0XHRjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkucmVwbGFjZShgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCwgJ2ltYWdlL29jdGV0LXN0cmVhbScpKTtcclxuXHJcblx0XHRcdGlmIChfb3B0aW9ucy5hdXRvZG93bmxvYWQpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBjcm9wcGVkSW1hZ2Uuc3JjO1xyXG5cdFx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNyb3BwZWRJbWFnZTtcclxuXHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZXJyb3IpIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRjYXRjaCAoZXJyb3IpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XHJcblxyXG5cdH1cclxuXHJcbn0iXX0=