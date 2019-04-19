'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Rotate an image to a specified angle.
 *
 * @since 0.0.0
 *
 * @param {string} path The path to the image to rotate.
 * @param {number} angle The degree angle to rotate the image to, clockwise.
 * @param {Object} [options]
 * @param {boolean} [options.autodownload=false] Indicates whether the image should download after the rotation is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of the image which is needed if the image is from a different domain.
 */
function rotate(_x, _x2) {
  return _rotate.apply(this, arguments);
}

function _rotate() {
  _rotate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, angle) {
    var options,
        _options,
        canvas,
        ctx,
        fileInfo,
        image,
        largestSide,
        rotatedImage,
        imageLink,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _options = new _GeneralOptions["default"](options);
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            fileInfo = (0, _file.extractFileInfo)(path);
            _context.prev = 5;
            _context.next = 8;
            return (0, _load.loadImage)(path, _options.crossOrigin);

          case 8:
            image = _context.sent;
            largestSide = image.width;
            if (image.height > image.width) largestSide = image.height;
            canvas.width, canvas.height = largestSide;
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(angle * Math.PI / 180);
            ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
            ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2);
            ctx.restore();
            _context.prev = 18;
            _context.next = 21;
            return (0, _load.loadImage)(canvas.toDataURL("image/".concat(fileInfo.ext)).replace("image/".concat(fileInfo.ext), 'image/octet-stream'));

          case 21:
            rotatedImage = _context.sent;

            if (_options.autodownload) {
              imageLink = document.createElement('a');
              imageLink.href = rotatedImage.src;
              imageLink.download = fileInfo.name + '.' + fileInfo.ext;
              imageLink.click();
            }

            return _context.abrupt("return", rotatedImage);

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](18);
            return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t1 = _context["catch"](5);
            throw new Error('There was an error loading the image, please check to make sure the path is valid and try again.');

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 31], [18, 26]]);
  }));
  return _rotate.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcm90YXRlLnRzIl0sIm5hbWVzIjpbInJvdGF0ZSIsInBhdGgiLCJhbmdsZSIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIkdlbmVyYWxPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsImxhcmdlc3RTaWRlIiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwidHJhbnNsYXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsInRvRGF0YVVSTCIsImV4dCIsInJlcGxhY2UiLCJyb3RhdGVkSW1hZ2UiLCJhdXRvZG93bmxvYWQiLCJpbWFnZUxpbmsiLCJocmVmIiwic3JjIiwiZG93bmxvYWQiLCJuYW1lIiwiY2xpY2siLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUVBOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O1NBV3NCQSxNOzs7Ozs7OytCQUFmLGlCQUFzQkMsSUFBdEIsRUFBb0NDLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbURDLFlBQUFBLE9BQW5ELDJEQUFxRSxFQUFyRTtBQUVDQyxZQUFBQSxRQUZELEdBRTRCLElBQUlDLDBCQUFKLENBQW1CRixPQUFuQixDQUY1QjtBQUlDRyxZQUFBQSxNQUpELEdBSTZCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FKN0I7QUFLQ0MsWUFBQUEsR0FMRCxHQUtpQ0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBTGpDO0FBT0NDLFlBQUFBLFFBUEQsR0FPc0IsMkJBQWdCVixJQUFoQixDQVB0QjtBQUFBO0FBQUE7QUFBQSxtQkFXbUMscUJBQVVBLElBQVYsRUFBZ0JHLFFBQVEsQ0FBQ1EsV0FBekIsQ0FYbkM7O0FBQUE7QUFXR0MsWUFBQUEsS0FYSDtBQWFDQyxZQUFBQSxXQWJELEdBYXVCRCxLQUFLLENBQUNFLEtBYjdCO0FBZUgsZ0JBQUlGLEtBQUssQ0FBQ0csTUFBTixHQUFlSCxLQUFLLENBQUNFLEtBQXpCLEVBQWdDRCxXQUFXLEdBQUdELEtBQUssQ0FBQ0csTUFBcEI7QUFFaENWLFlBQUFBLE1BQU0sQ0FBQ1MsS0FBUCxFQUFjVCxNQUFNLENBQUNVLE1BQVAsR0FBZ0JGLFdBQTlCO0FBRUFMLFlBQUFBLEdBQUcsQ0FBQ1EsSUFBSjtBQUVBUixZQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY1osTUFBTSxDQUFDUyxLQUFQLEdBQWUsQ0FBN0IsRUFBZ0NULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixDQUFoRDtBQUVBUCxZQUFBQSxHQUFHLENBQUNULE1BQUosQ0FBV0UsS0FBSyxHQUFHaUIsSUFBSSxDQUFDQyxFQUFiLEdBQWtCLEdBQTdCO0FBRUFYLFlBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjLEVBQUVaLE1BQU0sQ0FBQ1MsS0FBUCxHQUFlLENBQWpCLENBQWQsRUFBbUMsRUFBRVQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWxCLENBQW5DO0FBRUFQLFlBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjUixLQUFkLEVBQXFCUCxNQUFNLENBQUNTLEtBQVAsR0FBZSxDQUFmLEdBQW1CRixLQUFLLENBQUNFLEtBQU4sR0FBYyxDQUF0RCxFQUF5RFQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWhCLEdBQW9CSCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUE1RjtBQUVBUCxZQUFBQSxHQUFHLENBQUNhLE9BQUo7QUE3Qkc7QUFBQTtBQUFBLG1CQWlDNEMscUJBQVVoQixNQUFNLENBQUNpQixTQUFQLGlCQUEwQlosUUFBUSxDQUFDYSxHQUFuQyxHQUEwQ0MsT0FBMUMsaUJBQTJEZCxRQUFRLENBQUNhLEdBQXBFLEdBQTJFLG9CQUEzRSxDQUFWLENBakM1Qzs7QUFBQTtBQWlDS0UsWUFBQUEsWUFqQ0w7O0FBbUNELGdCQUFJdEIsUUFBUSxDQUFDdUIsWUFBYixFQUEyQjtBQUVuQkMsY0FBQUEsU0FGbUIsR0FFWXJCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZaO0FBSXpCb0IsY0FBQUEsU0FBUyxDQUFDQyxJQUFWLEdBQWlCSCxZQUFZLENBQUNJLEdBQTlCO0FBQ0FGLGNBQUFBLFNBQVMsQ0FBQ0csUUFBVixHQUFxQnBCLFFBQVEsQ0FBQ3FCLElBQVQsR0FBZ0IsR0FBaEIsR0FBc0JyQixRQUFRLENBQUNhLEdBQXBEO0FBRUFJLGNBQUFBLFNBQVMsQ0FBQ0ssS0FBVjtBQUVEOztBQTVDQSw2Q0E4Q01QLFlBOUNOOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQW1ETSxJQUFJUSxLQUFKLENBQVUsb0ZBQVYsQ0FuRE47O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTBERyxJQUFJQSxLQUFKLENBQVUsa0dBQVYsQ0ExREg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9GaWxlSW5mby50c1wiIC8+XG5cbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzL2xvYWQnO1xuaW1wb3J0IHsgZXh0cmFjdEZpbGVJbmZvIH0gZnJvbSAnLi4vdXRpbHMvZmlsZSc7XG5cbmltcG9ydCBHZW5lcmFsT3B0aW9ucyBmcm9tICcuLi9vcHRpb25zL0dlbmVyYWxPcHRpb25zJztcblxuLyoqXG4gKiBSb3RhdGUgYW4gaW1hZ2UgdG8gYSBzcGVjaWZpZWQgYW5nbGUuXG4gKlxuICogQHNpbmNlIDAuMC4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIHJvdGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBUaGUgZGVncmVlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgaW1hZ2UgdG8sIGNsb2Nrd2lzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b2Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSByb3RhdGlvbiBpcyBjb21wbGV0ZSBvciBub3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIHRoZSBpbWFnZSB3aGljaCBpcyBuZWVkZWQgaWYgdGhlIGltYWdlIGlzIGZyb20gYSBkaWZmZXJlbnQgZG9tYWluLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm90YXRlKHBhdGg6IHN0cmluZywgYW5nbGU6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xuXG4gIGNvbnN0IF9vcHRpb25zOiBHZW5lcmFsT3B0aW9ucyA9IG5ldyBHZW5lcmFsT3B0aW9ucyhvcHRpb25zKTtcblxuICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gIGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcblxuICB0cnkge1xuXG4gICAgY29uc3QgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBhd2FpdCBsb2FkSW1hZ2UocGF0aCwgX29wdGlvbnMuY3Jvc3NPcmlnaW4pO1xuXG4gICAgbGV0IGxhcmdlc3RTaWRlOiBudW1iZXIgPSBpbWFnZS53aWR0aDtcblxuICAgIGlmIChpbWFnZS5oZWlnaHQgPiBpbWFnZS53aWR0aCkgbGFyZ2VzdFNpZGUgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgPSBsYXJnZXN0U2lkZTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuICAgIGN0eC5yb3RhdGUoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgIGN0eC50cmFuc2xhdGUoLShjYW52YXMud2lkdGggLyAyKSwgLShjYW52YXMuaGVpZ2h0IC8gMikpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgY2FudmFzLndpZHRoIC8gMiAtIGltYWdlLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSBpbWFnZS5oZWlnaHQgLyAyKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0cnkge1xuXG4gICAgICBjb25zdCByb3RhdGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkucmVwbGFjZShgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCwgJ2ltYWdlL29jdGV0LXN0cmVhbScpKTtcblxuICAgICAgaWYgKF9vcHRpb25zLmF1dG9kb3dubG9hZCkge1xuXG4gICAgICAgIGNvbnN0IGltYWdlTGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgaW1hZ2VMaW5rLmhyZWYgPSByb3RhdGVkSW1hZ2Uuc3JjO1xuICAgICAgICBpbWFnZUxpbmsuZG93bmxvYWQgPSBmaWxlSW5mby5uYW1lICsgJy4nICsgZmlsZUluZm8uZXh0O1xuXG4gICAgICAgIGltYWdlTGluay5jbGljaygpO1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3RhdGVkSW1hZ2U7XG5cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcblxuICAgIH1cblxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcblxuICB9XG5cbn1cbiJdfQ==