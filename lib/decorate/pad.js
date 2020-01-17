'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pad = pad;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _PadOptions = _interopRequireDefault(require("../options/PadOptions"));

var _load = require("../utils/load");

var _file = require("../utils/file");

/**
 * Adds the specified amount of padding around an image.
 * 
 * Note that the padding will not be even on images that are not square.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0ZS9wYWQudHMiXSwibmFtZXMiOlsicGFkIiwicGF0aCIsInBhZGRpbmciLCJvcHRpb25zIiwiX29wdGlvbnMiLCJQYWRPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0NvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJwYWRkZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQUdBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztTQWNzQkEsRzs7Ozs7OzsrQkFBZixpQkFBbUJDLElBQW5CLEVBQWlDQyxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrREMsWUFBQUEsT0FBbEQsMkRBQW9FLEVBQXBFO0FBRUFDLFlBQUFBLFFBRkEsR0FFdUIsSUFBSUMsc0JBQUosQ0FBZUYsT0FBZixDQUZ2QjtBQUlBRyxZQUFBQSxNQUpBLEdBSTRCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FKNUI7QUFLQUMsWUFBQUEsR0FMQSxHQUtnQ0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBTGhDO0FBT0FDLFlBQUFBLFFBUEEsR0FPcUIsMkJBQWdCVixJQUFoQixDQVByQjtBQUFBO0FBQUE7QUFBQSxtQkFXZSxxQkFBVUEsSUFBVixFQUFnQkcsUUFBUSxDQUFDUSxXQUF6QixDQVhmOztBQUFBO0FBV0NDLFlBQUFBLEtBWEQ7QUFhTFAsWUFBQUEsTUFBTSxDQUFDUSxLQUFQLEdBQWVELEtBQUssQ0FBQ0MsS0FBTixHQUFlWixPQUFPLEdBQUcsQ0FBeEM7QUFDQUksWUFBQUEsTUFBTSxDQUFDUyxNQUFQLEdBQWdCRixLQUFLLENBQUNFLE1BQU4sR0FBZ0JiLE9BQU8sR0FBRyxDQUExQzs7QUFFQSxnQkFBSUUsUUFBUSxDQUFDWSxZQUFULEtBQTBCLGFBQTlCLEVBQTZDO0FBRTVDUCxjQUFBQSxHQUFHLENBQUNRLFNBQUosR0FBZ0JiLFFBQVEsQ0FBQ1ksWUFBekI7QUFDQVAsY0FBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQlosTUFBTSxDQUFDUSxLQUExQixFQUFpQ1IsTUFBTSxDQUFDUyxNQUF4QztBQUVBOztBQUVETixZQUFBQSxHQUFHLENBQUNVLFNBQUosQ0FBY04sS0FBZCxFQUFxQlAsTUFBTSxDQUFDUSxLQUFQLEdBQWUsQ0FBZixHQUFtQkQsS0FBSyxDQUFDQyxLQUFOLEdBQWMsQ0FBdEQsRUFBeURSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixDQUFoQixHQUFvQkYsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBNUYsRUFBK0ZGLEtBQUssQ0FBQ0MsS0FBckcsRUFBNEdELEtBQUssQ0FBQ0UsTUFBbEg7QUF2Qks7QUFBQTtBQUFBLG1CQTJCc0IscUJBQVVULE1BQU0sQ0FBQ2MsU0FBUCxpQkFBMEJULFFBQVEsQ0FBQ1UsR0FBbkMsRUFBVixDQTNCdEI7O0FBQUE7QUEyQkVDLFlBQUFBLFdBM0JGOztBQTZCSixnQkFBSWxCLFFBQVEsQ0FBQ21CLFlBQWIsRUFBMkI7QUFFcEJDLGNBQUFBLFNBRm9CLEdBRVdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FGWDtBQUkxQmdCLGNBQUFBLFNBQVMsQ0FBQ0MsSUFBVixHQUFpQlosS0FBSyxDQUFDYSxHQUF2QjtBQUNBRixjQUFBQSxTQUFTLENBQUNHLFFBQVYsR0FBcUJoQixRQUFRLENBQUNpQixJQUFULEdBQWdCLEdBQWhCLEdBQXNCakIsUUFBUSxDQUFDVSxHQUFwRDtBQUVBRyxjQUFBQSxTQUFTLENBQUNLLEtBQVY7QUFFQTs7QUF0Q0csNkNBd0NHUCxXQXhDSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0E2Q0csSUFBSVEsS0FBSixDQUFVLG9GQUFWLENBN0NIOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FvREUsSUFBSUEsS0FBSixDQUFVLG9GQUFWLENBcERGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBGaWxlSW5mbyBmcm9tICcuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvJztcclxuaW1wb3J0IFBhZE9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucy9QYWRPcHRpb25zJztcclxuXHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzL2xvYWQnO1xyXG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBzcGVjaWZpZWQgYW1vdW50IG9mIHBhZGRpbmcgYXJvdW5kIGFuIGltYWdlLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwYWRkaW5nIHdpbGwgbm90IGJlIGV2ZW4gb24gaW1hZ2VzIHRoYXQgYXJlIG5vdCBzcXVhcmUuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gYWRkIHBhZGRpbmcgdG8uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nIFRoZSBhbW91bnQgb2YgcGFkZGluZyB0byBhZGQgdG8gdGhlIGltYWdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wYWRkaW5nQ29sb3I9JyNmZmYnXSBUaGUgY29sb3IgdGhhdCB0aGUgcGFkZGluZyB3aWxsIGJlLiBUaGlzIHZhbHVlIGNhbiBiZSBhbnkgdmFsaWQgQ1NTIGNvbG9yIHZhbHVlIHN1Y2ggYXMgd2hpdGUgb3IgI0ZGRkZGRi5cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvRG93bmxvYWQ9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIGNyb3BwaW5nIGlzIGNvbXBsZXRlIG9yIG5vdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPW51bGxdIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSBvZiBpbWFnZXMgb3JpZ2luYXRpbmcgZnJvbSBleHRlcm5hbCBzb3VyY2VzLlxyXG4gKiBcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudD59IFJldHVybnMgdGhlIG5ld2x5IHBhZGRlZCBpbWFnZSBhcyBhbiBpbWFnZSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhZChwYXRoOiBzdHJpbmcsIHBhZGRpbmc6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xyXG5cclxuXHRjb25zdCBfb3B0aW9uczogUGFkT3B0aW9ucyA9IG5ldyBQYWRPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0Y29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcclxuXHJcblx0dHJ5IHtcclxuXHJcblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG5cdFx0Y2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGggKyAocGFkZGluZyAqIDIpO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodCArIChwYWRkaW5nICogMik7XHJcblxyXG5cdFx0aWYgKF9vcHRpb25zLnBhZGRpbmdDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xyXG5cclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IF9vcHRpb25zLnBhZGRpbmdDb2xvcjtcclxuXHRcdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIGNhbnZhcy53aWR0aCAvIDIgLSBpbWFnZS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gaW1hZ2UuaGVpZ2h0IC8gMiwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHJcblx0XHRcdGNvbnN0IHBhZGRlZEltYWdlID0gYXdhaXQgbG9hZEltYWdlKGNhbnZhcy50b0RhdGFVUkwoYGltYWdlLyR7ZmlsZUluZm8uZXh0fWApKTtcclxuXHJcblx0XHRcdGlmIChfb3B0aW9ucy5hdXRvZG93bmxvYWQpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBpbWFnZS5zcmM7XHJcblx0XHRcdFx0aW1hZ2VMaW5rLmRvd25sb2FkID0gZmlsZUluZm8ubmFtZSArICcuJyArIGZpbGVJbmZvLmV4dDtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmNsaWNrKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcGFkZGVkSW1hZ2U7XHJcblxyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0Y2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHR9XHJcblxyXG59Il19