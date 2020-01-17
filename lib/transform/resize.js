'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resize = resize;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _math = require("../utils/math");

var _load = require("../utils/load");

var _file = require("../utils/file");

var _CropOptions = _interopRequireDefault(require("../options/CropOptions"));

/**
 * Resize an image to a new dimension.
 * 
 * @param {string} path The path to the image to resize.
 * @param {string} dimension Which dimension to resize, either width or height. Keep in mind that if you're preserving the aspect ratio, the other will resize accordingly.
 * @param {number} size The new size to make the specified dimension.
 * @param {Object} [options]
 * @param {boolean} [options.preserveAspectRatio=true] Indicates whether the width and height will resize together to preserve the aspect ratio of the image.
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promise<HTMLImageElement>} Returns the newly resized image as an image element.
 */
function resize(_x, _x2, _x3) {
  return _resize.apply(this, arguments);
}

function _resize() {
  _resize = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, dimension, size) {
    var options,
        _options,
        fileInfo,
        image,
        aspectRatio,
        imageLink,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
            _options = new _CropOptions["default"](options);
            fileInfo = (0, _file.extractFileInfo)(path);
            _context.prev = 3;
            _context.next = 6;
            return (0, _load.loadImage)(path, _options.crossOrigin);

          case 6:
            image = _context.sent;
            aspectRatio = (0, _math.simplify)(image.width, image.height);
            _context.t0 = dimension;
            _context.next = _context.t0 === 'width' ? 11 : _context.t0 === 'height' ? 14 : 17;
            break;

          case 11:
            image.width = size;
            if (_options.preserveAspectRatio) image.height = Math.round(aspectRatio.denominator / aspectRatio.numerator * size);
            return _context.abrupt("break", 17);

          case 14:
            image.height = size;
            if (_options.preserveAspectRatio) image.width = Math.round(aspectRatio.numerator / aspectRatio.denominator * size);
            return _context.abrupt("break", 17);

          case 17:
            if (_options.autodownload) {
              imageLink = document.createElement('a');
              imageLink.href = image.src;
              imageLink.download = fileInfo.name + '.' + fileInfo.ext;
              imageLink.click();
            }

            return _context.abrupt("return", image);

          case 21:
            _context.prev = 21;
            _context.t1 = _context["catch"](3);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 21]]);
  }));
  return _resize.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcmVzaXplLnRzIl0sIm5hbWVzIjpbInJlc2l6ZSIsInBhdGgiLCJkaW1lbnNpb24iLCJzaXplIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiQ3JvcE9wdGlvbnMiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJhc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIk1hdGgiLCJyb3VuZCIsImRlbm9taW5hdG9yIiwibnVtZXJhdG9yIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImV4dCIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7U0Fhc0JBLE07Ozs7Ozs7K0JBQWYsaUJBQXNCQyxJQUF0QixFQUFvQ0MsU0FBcEMsRUFBdURDLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUVDLFlBQUFBLE9BQXJFLDJEQUF1RixFQUF2RjtBQUVBQyxZQUFBQSxRQUZBLEdBRXdCLElBQUlDLHVCQUFKLENBQWdCRixPQUFoQixDQUZ4QjtBQUlBRyxZQUFBQSxRQUpBLEdBSXFCLDJCQUFnQk4sSUFBaEIsQ0FKckI7QUFBQTtBQUFBO0FBQUEsbUJBUWUscUJBQVVBLElBQVYsRUFBZ0JJLFFBQVEsQ0FBQ0csV0FBekIsQ0FSZjs7QUFBQTtBQVFDQyxZQUFBQSxLQVJEO0FBVUNDLFlBQUFBLFdBVkQsR0FVZSxvQkFBU0QsS0FBSyxDQUFDRSxLQUFmLEVBQXNCRixLQUFLLENBQUNHLE1BQTVCLENBVmY7QUFBQSwwQkFZR1YsU0FaSDtBQUFBLDRDQWNDLE9BZEQsd0JBb0JDLFFBcEJEO0FBQUE7O0FBQUE7QUFlSE8sWUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWNSLElBQWQ7QUFFQSxnQkFBSUUsUUFBUSxDQUFDUSxtQkFBYixFQUFrQ0osS0FBSyxDQUFDRyxNQUFOLEdBQWVFLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxXQUFXLENBQUNNLFdBQVosR0FBMEJOLFdBQVcsQ0FBQ08sU0FBdkMsR0FBb0RkLElBQS9ELENBQWY7QUFqQi9COztBQUFBO0FBcUJITSxZQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZVQsSUFBZjtBQUVBLGdCQUFJRSxRQUFRLENBQUNRLG1CQUFiLEVBQWtDSixLQUFLLENBQUNFLEtBQU4sR0FBY0csSUFBSSxDQUFDQyxLQUFMLENBQVlMLFdBQVcsQ0FBQ08sU0FBWixHQUF3QlAsV0FBVyxDQUFDTSxXQUFyQyxHQUFvRGIsSUFBL0QsQ0FBZDtBQXZCL0I7O0FBQUE7QUE0QkwsZ0JBQUlFLFFBQVEsQ0FBQ2EsWUFBYixFQUEyQjtBQUVwQkMsY0FBQUEsU0FGb0IsR0FFV0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJGLGNBQUFBLFNBQVMsQ0FBQ0csSUFBVixHQUFpQmIsS0FBSyxDQUFDYyxHQUF2QjtBQUNBSixjQUFBQSxTQUFTLENBQUNLLFFBQVYsR0FBcUJqQixRQUFRLENBQUNrQixJQUFULEdBQWdCLEdBQWhCLEdBQXNCbEIsUUFBUSxDQUFDbUIsR0FBcEQ7QUFFQVAsY0FBQUEsU0FBUyxDQUFDUSxLQUFWO0FBRUE7O0FBckNJLDZDQXVDRWxCLEtBdkNGOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQTRDRSxJQUFJbUIsS0FBSixDQUFVLG9GQUFWLENBNUNGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBGaWxlSW5mbyBmcm9tICcuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvJztcclxuXHJcbmltcG9ydCB7IHNpbXBsaWZ5IH0gZnJvbSAnLi4vdXRpbHMvbWF0aCc7XHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzL2xvYWQnO1xyXG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcclxuXHJcbmltcG9ydCBDcm9wT3B0aW9ucyBmcm9tICcuLi9vcHRpb25zL0Nyb3BPcHRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBSZXNpemUgYW4gaW1hZ2UgdG8gYSBuZXcgZGltZW5zaW9uLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIHJlc2l6ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGRpbWVuc2lvbiBXaGljaCBkaW1lbnNpb24gdG8gcmVzaXplLCBlaXRoZXIgd2lkdGggb3IgaGVpZ2h0LiBLZWVwIGluIG1pbmQgdGhhdCBpZiB5b3UncmUgcHJlc2VydmluZyB0aGUgYXNwZWN0IHJhdGlvLCB0aGUgb3RoZXIgd2lsbCByZXNpemUgYWNjb3JkaW5nbHkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBuZXcgc2l6ZSB0byBtYWtlIHRoZSBzcGVjaWZpZWQgZGltZW5zaW9uLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJlc2VydmVBc3BlY3RSYXRpbz10cnVlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgd2lkdGggYW5kIGhlaWdodCB3aWxsIHJlc2l6ZSB0b2dldGhlciB0byBwcmVzZXJ2ZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZS5cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvRG93bmxvYWQ9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIGNyb3BwaW5nIGlzIGNvbXBsZXRlIG9yIG5vdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPW51bGxdIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSBvZiBpbWFnZXMgb3JpZ2luYXRpbmcgZnJvbSBleHRlcm5hbCBzb3VyY2VzLlxyXG4gKiBcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudD59IFJldHVybnMgdGhlIG5ld2x5IHJlc2l6ZWQgaW1hZ2UgYXMgYW4gaW1hZ2UgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNpemUocGF0aDogc3RyaW5nLCBkaW1lbnNpb246IHN0cmluZywgc2l6ZTogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IEVycm9yPiB7XHJcblxyXG5cdGNvbnN0IF9vcHRpb25zOiBDcm9wT3B0aW9ucyA9IG5ldyBDcm9wT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0Y29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0gZXh0cmFjdEZpbGVJbmZvKHBhdGgpO1xyXG5cclxuXHR0cnkge1xyXG5cclxuXHRcdGNvbnN0IGltYWdlID0gYXdhaXQgbG9hZEltYWdlKHBhdGgsIF9vcHRpb25zLmNyb3NzT3JpZ2luKTtcclxuXHJcblx0XHRjb25zdCBhc3BlY3RSYXRpbyA9IHNpbXBsaWZ5KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cclxuXHRcdHN3aXRjaCAoZGltZW5zaW9uKSB7XHJcblxyXG5cdFx0XHRjYXNlICd3aWR0aCc6XHJcblx0XHRcdFx0aW1hZ2Uud2lkdGggPSBzaXplO1xyXG5cclxuXHRcdFx0XHRpZiAoX29wdGlvbnMucHJlc2VydmVBc3BlY3RSYXRpbykgaW1hZ2UuaGVpZ2h0ID0gTWF0aC5yb3VuZCgoYXNwZWN0UmF0aW8uZGVub21pbmF0b3IgLyBhc3BlY3RSYXRpby5udW1lcmF0b3IpICogc2l6ZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdoZWlnaHQnOlxyXG5cdFx0XHRcdGltYWdlLmhlaWdodCA9IHNpemU7XHJcblxyXG5cdFx0XHRcdGlmIChfb3B0aW9ucy5wcmVzZXJ2ZUFzcGVjdFJhdGlvKSBpbWFnZS53aWR0aCA9IE1hdGgucm91bmQoKGFzcGVjdFJhdGlvLm51bWVyYXRvciAvIGFzcGVjdFJhdGlvLmRlbm9taW5hdG9yKSAqIHNpemUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XHJcblxyXG5cdFx0XHRjb25zdCBpbWFnZUxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuXHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBpbWFnZS5zcmM7XHJcblx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XHJcblxyXG5cdFx0XHRpbWFnZUxpbmsuY2xpY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGltYWdlO1xyXG5cclxuXHR9XHJcblx0Y2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHR9XHJcblxyXG59Il19