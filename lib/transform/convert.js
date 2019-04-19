'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = convert;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Convert an image from one format to another format.
 * 
 * @since 1.0.0
 * 
 * @param {string} path The path to the image to convert to another format.
 * @param {string} format The new format for the image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promise<HTMLImageElement>} Returns the newly formatted image as an image element.
 */
function convert(_x, _x2) {
  return _convert.apply(this, arguments);
}

function _convert() {
  _convert = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, format) {
    var options,
        fileInfo,
        _options,
        canvas,
        ctx,
        nonTransparentFormats,
        image,
        f,
        convertedImage,
        imageLink,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            fileInfo = (0, _file.extractFileInfo)(path);
            _options = new _GeneralOptions["default"](options);
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            nonTransparentFormats = ['jpg', 'jpeg', 'gif', 'bmp'];
            _context.prev = 6;
            _context.next = 9;
            return (0, _load.loadImage)(path, _options.crossOrigin);

          case 9:
            image = _context.sent;
            canvas.width = image.width;
            canvas.height = image.height;

            if (nonTransparentFormats.includes(format)) {
              ctx.fillStyle = '#FFF';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            ctx.drawImage(image, 0, 0);
            _context.prev = 14;
            f = format === 'png' ? 'png' : 'jpeg';
            _context.next = 18;
            return (0, _load.loadImage)(canvas.toDataURL("image/".concat(f)));

          case 18:
            convertedImage = _context.sent;

            if (_options.autodownload) {
              imageLink = document.createElement('a');
              imageLink.href = convertedImage.src;
              imageLink.download = fileInfo.name + '.' + format;
              imageLink.click();
            }

            return _context.abrupt("return", convertedImage);

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](14);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 26:
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](6);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 28], [14, 23]]);
  }));
  return _convert.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udmVydC50cyJdLCJuYW1lcyI6WyJjb252ZXJ0IiwicGF0aCIsImZvcm1hdCIsIm9wdGlvbnMiLCJmaWxlSW5mbyIsIl9vcHRpb25zIiwiR2VuZXJhbE9wdGlvbnMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwibm9uVHJhbnNwYXJlbnRGb3JtYXRzIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5jbHVkZXMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImYiLCJ0b0RhdGFVUkwiLCJjb252ZXJ0ZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztTQWFzQkEsTzs7Ozs7OzsrQkFBZixpQkFBdUJDLElBQXZCLEVBQXFDQyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcURDLFlBQUFBLE9BQXJELDJEQUF1RSxFQUF2RTtBQUVBQyxZQUFBQSxRQUZBLEdBRXFCLDJCQUFnQkgsSUFBaEIsQ0FGckI7QUFJQUksWUFBQUEsUUFKQSxHQUkyQixJQUFJQywwQkFBSixDQUFtQkgsT0FBbkIsQ0FKM0I7QUFNQUksWUFBQUEsTUFOQSxHQU00QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBTjVCO0FBT0FDLFlBQUFBLEdBUEEsR0FPZ0NILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQVBoQztBQVNBQyxZQUFBQSxxQkFUQSxHQVN3QixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLENBVHhCO0FBQUE7QUFBQTtBQUFBLG1CQWFlLHFCQUFVWCxJQUFWLEVBQWdCSSxRQUFRLENBQUNRLFdBQXpCLENBYmY7O0FBQUE7QUFhQ0MsWUFBQUEsS0FiRDtBQWVMUCxZQUFBQSxNQUFNLENBQUNRLEtBQVAsR0FBZUQsS0FBSyxDQUFDQyxLQUFyQjtBQUNBUixZQUFBQSxNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLEtBQUssQ0FBQ0UsTUFBdEI7O0FBRUEsZ0JBQUlKLHFCQUFxQixDQUFDSyxRQUF0QixDQUErQmYsTUFBL0IsQ0FBSixFQUE0QztBQUUzQ1EsY0FBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FSLGNBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJaLE1BQU0sQ0FBQ1EsS0FBMUIsRUFBaUNSLE1BQU0sQ0FBQ1MsTUFBeEM7QUFFQTs7QUFFRE4sWUFBQUEsR0FBRyxDQUFDVSxTQUFKLENBQWNOLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUF6Qks7QUE2QkVPLFlBQUFBLENBN0JGLEdBNkJNbkIsTUFBTSxLQUFLLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkIsTUE3QmpDO0FBQUE7QUFBQSxtQkErQnlCLHFCQUFVSyxNQUFNLENBQUNlLFNBQVAsaUJBQTBCRCxDQUExQixFQUFWLENBL0J6Qjs7QUFBQTtBQStCRUUsWUFBQUEsY0EvQkY7O0FBaUNKLGdCQUFJbEIsUUFBUSxDQUFDbUIsWUFBYixFQUEyQjtBQUVwQkMsY0FBQUEsU0FGb0IsR0FFV2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZYO0FBSTFCZ0IsY0FBQUEsU0FBUyxDQUFDQyxJQUFWLEdBQWlCSCxjQUFjLENBQUNJLEdBQWhDO0FBQ0FGLGNBQUFBLFNBQVMsQ0FBQ0csUUFBVixHQUFxQnhCLFFBQVEsQ0FBQ3lCLElBQVQsR0FBZ0IsR0FBaEIsR0FBc0IzQixNQUEzQztBQUVBdUIsY0FBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBMUNHLDZDQTRDR1AsY0E1Q0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBaURHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQWpESDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBd0RFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQXhERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvLnRzXCIgLz5cblxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcblxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvR2VuZXJhbE9wdGlvbnMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gaW1hZ2UgZnJvbSBvbmUgZm9ybWF0IHRvIGFub3RoZXIgZm9ybWF0LlxuICogXG4gKiBAc2luY2UgMS4wLjBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGNvbnZlcnQgdG8gYW5vdGhlciBmb3JtYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IFRoZSBuZXcgZm9ybWF0IGZvciB0aGUgaW1hZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Eb3dubG9hZD1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNob3VsZCBkb3dubG9hZCBhZnRlciB0aGUgY3JvcHBpbmcgaXMgY29tcGxldGUgb3Igbm90LlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPW51bGxdIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSBvZiBpbWFnZXMgb3JpZ2luYXRpbmcgZnJvbSBleHRlcm5hbCBzb3VyY2VzLlxuICogXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pn0gUmV0dXJucyB0aGUgbmV3bHkgZm9ybWF0dGVkIGltYWdlIGFzIGFuIGltYWdlIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0KHBhdGg6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcblxuXHRjb25zdCBmaWxlSW5mbzogRmlsZUluZm8gPSBleHRyYWN0RmlsZUluZm8ocGF0aCk7XG5cblx0Y29uc3QgX29wdGlvbnM6IEdlbmVyYWxPcHRpb25zID0gbmV3IEdlbmVyYWxPcHRpb25zKG9wdGlvbnMpO1xuXG5cdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cblx0Y29uc3Qgbm9uVHJhbnNwYXJlbnRGb3JtYXRzID0gWydqcGcnLCAnanBlZycsICdnaWYnLCAnYm1wJ107XG5cblx0dHJ5IHtcblxuXHRcdGNvbnN0IGltYWdlID0gYXdhaXQgbG9hZEltYWdlKHBhdGgsIF9vcHRpb25zLmNyb3NzT3JpZ2luKTtcblxuXHRcdGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cblx0XHRpZiAobm9uVHJhbnNwYXJlbnRGb3JtYXRzLmluY2x1ZGVzKGZvcm1hdCkpIHtcblxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcblx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0fVxuXG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG5cblx0XHR0cnkge1xuXG5cdFx0XHRjb25zdCBmID0gZm9ybWF0ID09PSAncG5nJyA/ICdwbmcnIDogJ2pwZWcnO1xuXG5cdFx0XHRjb25zdCBjb252ZXJ0ZWRJbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShjYW52YXMudG9EYXRhVVJMKGBpbWFnZS8ke2Z9YCkpO1xuXG5cdFx0XHRpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuXHRcdFx0XHRpbWFnZUxpbmsuaHJlZiA9IGNvbnZlcnRlZEltYWdlLnNyYztcblx0XHRcdFx0aW1hZ2VMaW5rLmRvd25sb2FkID0gZmlsZUluZm8ubmFtZSArICcuJyArIGZvcm1hdDtcblxuXHRcdFx0XHRpbWFnZUxpbmsuY2xpY2soKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY29udmVydGVkSW1hZ2U7XG5cblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKSB7XG5cblx0XHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcblxuXHRcdH1cblxuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xuXG5cdH1cblxufSJdfQ==