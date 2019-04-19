'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pad = pad;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _PadOptions = _interopRequireDefault(require("../options/PadOptions"));

/**
 * Adds the specified amount of padding around an image.
 * 
 * Note that the padding will not be even on images that are not square.
 * 
 * @since 2.0.0
 * 
 * @param {string} path The path to the image to add padding to.
 * @param {number} padding The amount of padding to add to the image.
 * @param {Object} [options]
 * @param {string} [options.paddingColor='#fff'] The color that the padding will be. This value can be any valid CSS color value such as white or #FFFFFF.
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promise<HTMLImageElement>} Returns the newly padded image as an image element.
 */
function pad(_x, _x2) {
  return _pad.apply(this, arguments);
}

function _pad() {
  _pad = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, padding) {
    var options,
        _options,
        canvas,
        ctx,
        fileInfo,
        image,
        paddedImage,
        imageLink,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _options = new _PadOptions["default"](options);
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            fileInfo = (0, _file.extractFileInfo)(path);
            _context.prev = 5;
            _context.next = 8;
            return (0, _load.loadImage)(path, _options.crossOrigin);

          case 8:
            image = _context.sent;
            canvas.width = image.width + padding * 2;
            canvas.height = image.height + padding * 2;

            if (_options.paddingColor !== 'transparent') {
              ctx.fillStyle = _options.paddingColor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2, image.width, image.height);
            _context.prev = 13;
            _context.next = 16;
            return (0, _load.loadImage)(canvas.toDataURL("image/".concat(fileInfo.ext)));

          case 16:
            paddedImage = _context.sent;

            if (_options.autodownload) {
              imageLink = document.createElement('a');
              imageLink.href = image.src;
              imageLink.download = fileInfo.name + '.' + fileInfo.ext;
              imageLink.click();
            }

            return _context.abrupt("return", paddedImage);

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](13);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 24:
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](5);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 26], [13, 21]]);
  }));
  return _pad.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0ZS9wYWQudHMiXSwibmFtZXMiOlsicGFkIiwicGF0aCIsInBhZGRpbmciLCJvcHRpb25zIiwiX29wdGlvbnMiLCJQYWRPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0NvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJwYWRkZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztTQWdCc0JBLEc7Ozs7Ozs7K0JBQWYsaUJBQW1CQyxJQUFuQixFQUFpQ0MsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0RDLFlBQUFBLE9BQWxELDJEQUFvRSxFQUFwRTtBQUVBQyxZQUFBQSxRQUZBLEdBRXVCLElBQUlDLHNCQUFKLENBQWVGLE9BQWYsQ0FGdkI7QUFJQUcsWUFBQUEsTUFKQSxHQUk0QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBSjVCO0FBS0FDLFlBQUFBLEdBTEEsR0FLZ0NILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUxoQztBQU9BQyxZQUFBQSxRQVBBLEdBT3FCLDJCQUFnQlYsSUFBaEIsQ0FQckI7QUFBQTtBQUFBO0FBQUEsbUJBV2UscUJBQVVBLElBQVYsRUFBZ0JHLFFBQVEsQ0FBQ1EsV0FBekIsQ0FYZjs7QUFBQTtBQVdDQyxZQUFBQSxLQVhEO0FBYUxQLFlBQUFBLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlRCxLQUFLLENBQUNDLEtBQU4sR0FBZVosT0FBTyxHQUFHLENBQXhDO0FBQ0FJLFlBQUFBLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQkYsS0FBSyxDQUFDRSxNQUFOLEdBQWdCYixPQUFPLEdBQUcsQ0FBMUM7O0FBRUEsZ0JBQUlFLFFBQVEsQ0FBQ1ksWUFBVCxLQUEwQixhQUE5QixFQUE2QztBQUU1Q1AsY0FBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCYixRQUFRLENBQUNZLFlBQXpCO0FBQ0FQLGNBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJaLE1BQU0sQ0FBQ1EsS0FBMUIsRUFBaUNSLE1BQU0sQ0FBQ1MsTUFBeEM7QUFFQTs7QUFFRE4sWUFBQUEsR0FBRyxDQUFDVSxTQUFKLENBQWNOLEtBQWQsRUFBcUJQLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlLENBQWYsR0FBbUJELEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQXRELEVBQXlEUixNQUFNLENBQUNTLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JGLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQTVGLEVBQStGRixLQUFLLENBQUNDLEtBQXJHLEVBQTRHRCxLQUFLLENBQUNFLE1BQWxIO0FBdkJLO0FBQUE7QUFBQSxtQkEyQnNCLHFCQUFVVCxNQUFNLENBQUNjLFNBQVAsaUJBQTBCVCxRQUFRLENBQUNVLEdBQW5DLEVBQVYsQ0EzQnRCOztBQUFBO0FBMkJFQyxZQUFBQSxXQTNCRjs7QUE2QkosZ0JBQUlsQixRQUFRLENBQUNtQixZQUFiLEVBQTJCO0FBRXBCQyxjQUFBQSxTQUZvQixHQUVXakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJnQixjQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJaLEtBQUssQ0FBQ2EsR0FBdkI7QUFDQUYsY0FBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCaEIsUUFBUSxDQUFDaUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQmpCLFFBQVEsQ0FBQ1UsR0FBcEQ7QUFFQUcsY0FBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBdENHLDZDQXdDR1AsV0F4Q0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBNkNHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQTdDSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBb0RFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQXBERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvLnRzXCIgLz5cblxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcblxuaW1wb3J0IFBhZE9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucy9QYWRPcHRpb25zJztcblxuLyoqXG4gKiBBZGRzIHRoZSBzcGVjaWZpZWQgYW1vdW50IG9mIHBhZGRpbmcgYXJvdW5kIGFuIGltYWdlLlxuICogXG4gKiBOb3RlIHRoYXQgdGhlIHBhZGRpbmcgd2lsbCBub3QgYmUgZXZlbiBvbiBpbWFnZXMgdGhhdCBhcmUgbm90IHNxdWFyZS5cbiAqIFxuICogQHNpbmNlIDIuMC4wXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byBhZGQgcGFkZGluZyB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nIFRoZSBhbW91bnQgb2YgcGFkZGluZyB0byBhZGQgdG8gdGhlIGltYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBhZGRpbmdDb2xvcj0nI2ZmZiddIFRoZSBjb2xvciB0aGF0IHRoZSBwYWRkaW5nIHdpbGwgYmUuIFRoaXMgdmFsdWUgY2FuIGJlIGFueSB2YWxpZCBDU1MgY29sb3IgdmFsdWUgc3VjaCBhcyB3aGl0ZSBvciAjRkZGRkZGLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvRG93bmxvYWQ9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIGNyb3BwaW5nIGlzIGNvbXBsZXRlIG9yIG5vdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIG9yaWdpbmF0aW5nIGZyb20gZXh0ZXJuYWwgc291cmNlcy5cbiAqIFxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudD59IFJldHVybnMgdGhlIG5ld2x5IHBhZGRlZCBpbWFnZSBhcyBhbiBpbWFnZSBlbGVtZW50LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFkKHBhdGg6IHN0cmluZywgcGFkZGluZzogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IEVycm9yPiB7XG5cblx0Y29uc3QgX29wdGlvbnM6IFBhZE9wdGlvbnMgPSBuZXcgUGFkT3B0aW9ucyhvcHRpb25zKTtcblxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcblxuXHR0cnkge1xuXG5cdFx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UocGF0aCwgX29wdGlvbnMuY3Jvc3NPcmlnaW4pO1xuXG5cdFx0Y2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGggKyAocGFkZGluZyAqIDIpO1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQgKyAocGFkZGluZyAqIDIpO1xuXG5cdFx0aWYgKF9vcHRpb25zLnBhZGRpbmdDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xuXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gX29wdGlvbnMucGFkZGluZ0NvbG9yO1xuXHRcdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cblx0XHR9XG5cblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCBjYW52YXMud2lkdGggLyAyIC0gaW1hZ2Uud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIGltYWdlLmhlaWdodCAvIDIsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuXG5cdFx0dHJ5IHtcblxuXHRcdFx0Y29uc3QgcGFkZGVkSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkpO1xuXG5cdFx0XHRpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuXHRcdFx0XHRpbWFnZUxpbmsuaHJlZiA9IGltYWdlLnNyYztcblx0XHRcdFx0aW1hZ2VMaW5rLmRvd25sb2FkID0gZmlsZUluZm8ubmFtZSArICcuJyArIGZpbGVJbmZvLmV4dDtcblxuXHRcdFx0XHRpbWFnZUxpbmsuY2xpY2soKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcGFkZGVkSW1hZ2U7XG5cblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKSB7XG5cblx0XHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcblxuXHRcdH1cblxuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xuXG5cdH1cblxufSJdfQ==