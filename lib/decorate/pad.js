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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0ZS9wYWQudHMiXSwibmFtZXMiOlsicGFkIiwicGF0aCIsInBhZGRpbmciLCJvcHRpb25zIiwiX29wdGlvbnMiLCJQYWRPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0NvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJwYWRkZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztTQWdCc0JBLEc7Ozs7Ozs7K0JBQWYsaUJBQW1CQyxJQUFuQixFQUFpQ0MsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0RDLFlBQUFBLE9BQWxELDJEQUFvRSxFQUFwRTtBQUVBQyxZQUFBQSxRQUZBLEdBRXVCLElBQUlDLHNCQUFKLENBQWVGLE9BQWYsQ0FGdkI7QUFJQUcsWUFBQUEsTUFKQSxHQUk0QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBSjVCO0FBS0FDLFlBQUFBLEdBTEEsR0FLZ0NILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUxoQztBQU9BQyxZQUFBQSxRQVBBLEdBT3FCLDJCQUFnQlYsSUFBaEIsQ0FQckI7QUFBQTtBQUFBO0FBQUEsbUJBV2UscUJBQVVBLElBQVYsRUFBZ0JHLFFBQVEsQ0FBQ1EsV0FBekIsQ0FYZjs7QUFBQTtBQVdDQyxZQUFBQSxLQVhEO0FBYUxQLFlBQUFBLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlRCxLQUFLLENBQUNDLEtBQU4sR0FBZVosT0FBTyxHQUFHLENBQXhDO0FBQ0FJLFlBQUFBLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQkYsS0FBSyxDQUFDRSxNQUFOLEdBQWdCYixPQUFPLEdBQUcsQ0FBMUM7O0FBRUEsZ0JBQUlFLFFBQVEsQ0FBQ1ksWUFBVCxLQUEwQixhQUE5QixFQUE2QztBQUU1Q1AsY0FBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCYixRQUFRLENBQUNZLFlBQXpCO0FBQ0FQLGNBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJaLE1BQU0sQ0FBQ1EsS0FBMUIsRUFBaUNSLE1BQU0sQ0FBQ1MsTUFBeEM7QUFFQTs7QUFFRE4sWUFBQUEsR0FBRyxDQUFDVSxTQUFKLENBQWNOLEtBQWQsRUFBcUJQLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlLENBQWYsR0FBbUJELEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQXRELEVBQXlEUixNQUFNLENBQUNTLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JGLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQTVGLEVBQStGRixLQUFLLENBQUNDLEtBQXJHLEVBQTRHRCxLQUFLLENBQUNFLE1BQWxIO0FBdkJLO0FBQUE7QUFBQSxtQkEyQnNCLHFCQUFVVCxNQUFNLENBQUNjLFNBQVAsaUJBQTBCVCxRQUFRLENBQUNVLEdBQW5DLEVBQVYsQ0EzQnRCOztBQUFBO0FBMkJFQyxZQUFBQSxXQTNCRjs7QUE2QkosZ0JBQUlsQixRQUFRLENBQUNtQixZQUFiLEVBQTJCO0FBRXBCQyxjQUFBQSxTQUZvQixHQUVXakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJnQixjQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJaLEtBQUssQ0FBQ2EsR0FBdkI7QUFDQUYsY0FBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCaEIsUUFBUSxDQUFDaUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQmpCLFFBQVEsQ0FBQ1UsR0FBcEQ7QUFFQUcsY0FBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBdENHLDZDQXdDR1AsV0F4Q0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBNkNHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQTdDSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBb0RFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQXBERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9GaWxlSW5mby50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuLi91dGlscy9sb2FkJztcclxuaW1wb3J0IHsgZXh0cmFjdEZpbGVJbmZvIH0gZnJvbSAnLi4vdXRpbHMvZmlsZSc7XHJcblxyXG5pbXBvcnQgUGFkT3B0aW9ucyBmcm9tICcuLi9vcHRpb25zL1BhZE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIHNwZWNpZmllZCBhbW91bnQgb2YgcGFkZGluZyBhcm91bmQgYW4gaW1hZ2UuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHBhZGRpbmcgd2lsbCBub3QgYmUgZXZlbiBvbiBpbWFnZXMgdGhhdCBhcmUgbm90IHNxdWFyZS5cclxuICogXHJcbiAqIEBzaW5jZSAyLjAuMFxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGFkZCBwYWRkaW5nIHRvLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZyBUaGUgYW1vdW50IG9mIHBhZGRpbmcgdG8gYWRkIHRvIHRoZSBpbWFnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGFkZGluZ0NvbG9yPScjZmZmJ10gVGhlIGNvbG9yIHRoYXQgdGhlIHBhZGRpbmcgd2lsbCBiZS4gVGhpcyB2YWx1ZSBjYW4gYmUgYW55IHZhbGlkIENTUyBjb2xvciB2YWx1ZSBzdWNoIGFzIHdoaXRlIG9yICNGRkZGRkYuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIG9yaWdpbmF0aW5nIGZyb20gZXh0ZXJuYWwgc291cmNlcy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSBwYWRkZWQgaW1hZ2UgYXMgYW4gaW1hZ2UgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYWQocGF0aDogc3RyaW5nLCBwYWRkaW5nOiBudW1iZXIsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcclxuXHJcblx0Y29uc3QgX29wdGlvbnM6IFBhZE9wdGlvbnMgPSBuZXcgUGFkT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0Y29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xyXG5cclxuXHRjb25zdCBmaWxlSW5mbzogRmlsZUluZm8gPSBleHRyYWN0RmlsZUluZm8ocGF0aCk7XHJcblxyXG5cdHRyeSB7XHJcblxyXG5cdFx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UocGF0aCwgX29wdGlvbnMuY3Jvc3NPcmlnaW4pO1xyXG5cclxuXHRcdGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoICsgKHBhZGRpbmcgKiAyKTtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQgKyAocGFkZGluZyAqIDIpO1xyXG5cclxuXHRcdGlmIChfb3B0aW9ucy5wYWRkaW5nQ29sb3IgIT09ICd0cmFuc3BhcmVudCcpIHtcclxuXHJcblx0XHRcdGN0eC5maWxsU3R5bGUgPSBfb3B0aW9ucy5wYWRkaW5nQ29sb3I7XHJcblx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCBjYW52YXMud2lkdGggLyAyIC0gaW1hZ2Uud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIGltYWdlLmhlaWdodCAvIDIsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cclxuXHRcdHRyeSB7XHJcblxyXG5cdFx0XHRjb25zdCBwYWRkZWRJbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShjYW52YXMudG9EYXRhVVJMKGBpbWFnZS8ke2ZpbGVJbmZvLmV4dH1gKSk7XHJcblxyXG5cdFx0XHRpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGltYWdlTGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5ocmVmID0gaW1hZ2Uuc3JjO1xyXG5cdFx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBhZGRlZEltYWdlO1xyXG5cclxuXHRcdH1cclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==