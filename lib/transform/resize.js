'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

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
 * @since 1.0.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcmVzaXplLnRzIl0sIm5hbWVzIjpbInJlc2l6ZSIsInBhdGgiLCJkaW1lbnNpb24iLCJzaXplIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiQ3JvcE9wdGlvbnMiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJhc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIk1hdGgiLCJyb3VuZCIsImRlbm9taW5hdG9yIiwibnVtZXJhdG9yIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImV4dCIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7U0Flc0JBLE07Ozs7Ozs7K0JBQWYsaUJBQXNCQyxJQUF0QixFQUFvQ0MsU0FBcEMsRUFBdURDLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUVDLFlBQUFBLE9BQXJFLDJEQUF1RixFQUF2RjtBQUVBQyxZQUFBQSxRQUZBLEdBRXdCLElBQUlDLHVCQUFKLENBQWdCRixPQUFoQixDQUZ4QjtBQUlBRyxZQUFBQSxRQUpBLEdBSXFCLDJCQUFnQk4sSUFBaEIsQ0FKckI7QUFBQTtBQUFBO0FBQUEsbUJBUWUscUJBQVVBLElBQVYsRUFBZ0JJLFFBQVEsQ0FBQ0csV0FBekIsQ0FSZjs7QUFBQTtBQVFDQyxZQUFBQSxLQVJEO0FBVUNDLFlBQUFBLFdBVkQsR0FVZSxvQkFBU0QsS0FBSyxDQUFDRSxLQUFmLEVBQXNCRixLQUFLLENBQUNHLE1BQTVCLENBVmY7QUFBQSwwQkFZR1YsU0FaSDtBQUFBLDRDQWNDLE9BZEQsd0JBb0JDLFFBcEJEO0FBQUE7O0FBQUE7QUFlSE8sWUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWNSLElBQWQ7QUFFQSxnQkFBSUUsUUFBUSxDQUFDUSxtQkFBYixFQUFrQ0osS0FBSyxDQUFDRyxNQUFOLEdBQWVFLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxXQUFXLENBQUNNLFdBQVosR0FBMEJOLFdBQVcsQ0FBQ08sU0FBdkMsR0FBb0RkLElBQS9ELENBQWY7QUFqQi9COztBQUFBO0FBcUJITSxZQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZVQsSUFBZjtBQUVBLGdCQUFJRSxRQUFRLENBQUNRLG1CQUFiLEVBQWtDSixLQUFLLENBQUNFLEtBQU4sR0FBY0csSUFBSSxDQUFDQyxLQUFMLENBQVlMLFdBQVcsQ0FBQ08sU0FBWixHQUF3QlAsV0FBVyxDQUFDTSxXQUFyQyxHQUFvRGIsSUFBL0QsQ0FBZDtBQXZCL0I7O0FBQUE7QUE0QkwsZ0JBQUlFLFFBQVEsQ0FBQ2EsWUFBYixFQUEyQjtBQUVwQkMsY0FBQUEsU0FGb0IsR0FFV0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJGLGNBQUFBLFNBQVMsQ0FBQ0csSUFBVixHQUFpQmIsS0FBSyxDQUFDYyxHQUF2QjtBQUNBSixjQUFBQSxTQUFTLENBQUNLLFFBQVYsR0FBcUJqQixRQUFRLENBQUNrQixJQUFULEdBQWdCLEdBQWhCLEdBQXNCbEIsUUFBUSxDQUFDbUIsR0FBcEQ7QUFFQVAsY0FBQUEsU0FBUyxDQUFDUSxLQUFWO0FBRUE7O0FBckNJLDZDQXVDRWxCLEtBdkNGOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQTRDRSxJQUFJbUIsS0FBSixDQUFVLG9GQUFWLENBNUNGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRmlsZUluZm8udHNcIiAvPlxuXG5pbXBvcnQgeyBzaW1wbGlmeSB9IGZyb20gJy4uL3V0aWxzL21hdGgnO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcblxuaW1wb3J0IENyb3BPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvQ3JvcE9wdGlvbnMnO1xuXG4vKipcbiAqIFJlc2l6ZSBhbiBpbWFnZSB0byBhIG5ldyBkaW1lbnNpb24uXG4gKiBcbiAqIEBzaW5jZSAxLjAuMFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gcmVzaXplLlxuICogQHBhcmFtIHtzdHJpbmd9IGRpbWVuc2lvbiBXaGljaCBkaW1lbnNpb24gdG8gcmVzaXplLCBlaXRoZXIgd2lkdGggb3IgaGVpZ2h0LiBLZWVwIGluIG1pbmQgdGhhdCBpZiB5b3UncmUgcHJlc2VydmluZyB0aGUgYXNwZWN0IHJhdGlvLCB0aGUgb3RoZXIgd2lsbCByZXNpemUgYWNjb3JkaW5nbHkuXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbmV3IHNpemUgdG8gbWFrZSB0aGUgc3BlY2lmaWVkIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJlc2VydmVBc3BlY3RSYXRpbz10cnVlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgd2lkdGggYW5kIGhlaWdodCB3aWxsIHJlc2l6ZSB0b2dldGhlciB0byBwcmVzZXJ2ZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIGltYWdlcyBvcmlnaW5hdGluZyBmcm9tIGV4dGVybmFsIHNvdXJjZXMuXG4gKiBcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSByZXNpemVkIGltYWdlIGFzIGFuIGltYWdlIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNpemUocGF0aDogc3RyaW5nLCBkaW1lbnNpb246IHN0cmluZywgc2l6ZTogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IEVycm9yPiB7XG5cblx0Y29uc3QgX29wdGlvbnM6IENyb3BPcHRpb25zID0gbmV3IENyb3BPcHRpb25zKG9wdGlvbnMpO1xuXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcblxuXHR0cnkge1xuXG5cdFx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UocGF0aCwgX29wdGlvbnMuY3Jvc3NPcmlnaW4pO1xuXG5cdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBzaW1wbGlmeShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcblxuXHRcdHN3aXRjaCAoZGltZW5zaW9uKSB7XG5cblx0XHRcdGNhc2UgJ3dpZHRoJzpcblx0XHRcdFx0aW1hZ2Uud2lkdGggPSBzaXplO1xuXG5cdFx0XHRcdGlmIChfb3B0aW9ucy5wcmVzZXJ2ZUFzcGVjdFJhdGlvKSBpbWFnZS5oZWlnaHQgPSBNYXRoLnJvdW5kKChhc3BlY3RSYXRpby5kZW5vbWluYXRvciAvIGFzcGVjdFJhdGlvLm51bWVyYXRvcikgKiBzaXplKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2hlaWdodCc6XG5cdFx0XHRcdGltYWdlLmhlaWdodCA9IHNpemU7XG5cblx0XHRcdFx0aWYgKF9vcHRpb25zLnByZXNlcnZlQXNwZWN0UmF0aW8pIGltYWdlLndpZHRoID0gTWF0aC5yb3VuZCgoYXNwZWN0UmF0aW8ubnVtZXJhdG9yIC8gYXNwZWN0UmF0aW8uZGVub21pbmF0b3IpICogc2l6ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdFx0aWYgKF9vcHRpb25zLmF1dG9kb3dubG9hZCkge1xuXG5cdFx0XHRjb25zdCBpbWFnZUxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cdFx0XHRpbWFnZUxpbmsuaHJlZiA9IGltYWdlLnNyYztcblx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XG5cblx0XHRcdGltYWdlTGluay5jbGljaygpO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGltYWdlO1xuXG5cdH1cblx0Y2F0Y2ggKGVycm9yKSB7XG5cblx0XHRyZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XG5cblx0fVxuXG59Il19