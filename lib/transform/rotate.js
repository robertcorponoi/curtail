'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Rotate an image to a specified angle.
 *
 * @param {string} path The path to the image to rotate.
 * @param {number} angle The degree angle to rotate the image to, clockwise.
 * @param {Object} [options]
 * @param {boolean} [options.autodownload=false] Indicates whether the image should download after the rotation is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of the image which is needed if the image is from a different domain.
 */
function rotate(path, angle) {
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

  return _regenerator["default"].async(function rotate$(_context) {
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
          return _regenerator["default"].awrap((0, _load.loadImage)(path, _options.crossOrigin));

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
          return _regenerator["default"].awrap((0, _load.loadImage)(canvas.toDataURL("image/".concat(fileInfo.ext)).replace("image/".concat(fileInfo.ext), 'image/octet-stream')));

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
  }, null, null, [[5, 31], [18, 26]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcm90YXRlLnRzIl0sIm5hbWVzIjpbInJvdGF0ZSIsInBhdGgiLCJhbmdsZSIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIkdlbmVyYWxPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsImxhcmdlc3RTaWRlIiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwidHJhbnNsYXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsInRvRGF0YVVSTCIsImV4dCIsInJlcGxhY2UiLCJyb3RhdGVkSW1hZ2UiLCJhdXRvZG93bmxvYWQiLCJpbWFnZUxpbmsiLCJocmVmIiwic3JjIiwiZG93bmxvYWQiLCJuYW1lIiwiY2xpY2siLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQWVBLE1BQWYsQ0FBc0JDLElBQXRCLEVBQW9DQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EQyxVQUFBQSxPQUFuRCwyREFBcUUsRUFBckU7QUFFQ0MsVUFBQUEsUUFGRCxHQUU0QixJQUFJQywwQkFBSixDQUFtQkYsT0FBbkIsQ0FGNUI7QUFJQ0csVUFBQUEsTUFKRCxHQUk2QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBSjdCO0FBS0NDLFVBQUFBLEdBTEQsR0FLaUNILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUxqQztBQU9DQyxVQUFBQSxRQVBELEdBT3NCLDJCQUFnQlYsSUFBaEIsQ0FQdEI7QUFBQTtBQUFBO0FBQUEsK0NBV21DLHFCQUFVQSxJQUFWLEVBQWdCRyxRQUFRLENBQUNRLFdBQXpCLENBWG5DOztBQUFBO0FBV0dDLFVBQUFBLEtBWEg7QUFhQ0MsVUFBQUEsV0FiRCxHQWF1QkQsS0FBSyxDQUFDRSxLQWI3QjtBQWVILGNBQUlGLEtBQUssQ0FBQ0csTUFBTixHQUFlSCxLQUFLLENBQUNFLEtBQXpCLEVBQWdDRCxXQUFXLEdBQUdELEtBQUssQ0FBQ0csTUFBcEI7QUFFaENWLFVBQUFBLE1BQU0sQ0FBQ1MsS0FBUCxFQUFjVCxNQUFNLENBQUNVLE1BQVAsR0FBZ0JGLFdBQTlCO0FBRUFMLFVBQUFBLEdBQUcsQ0FBQ1EsSUFBSjtBQUVBUixVQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY1osTUFBTSxDQUFDUyxLQUFQLEdBQWUsQ0FBN0IsRUFBZ0NULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixDQUFoRDtBQUVBUCxVQUFBQSxHQUFHLENBQUNULE1BQUosQ0FBV0UsS0FBSyxHQUFHaUIsSUFBSSxDQUFDQyxFQUFiLEdBQWtCLEdBQTdCO0FBRUFYLFVBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjLEVBQUVaLE1BQU0sQ0FBQ1MsS0FBUCxHQUFlLENBQWpCLENBQWQsRUFBbUMsRUFBRVQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWxCLENBQW5DO0FBRUFQLFVBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjUixLQUFkLEVBQXFCUCxNQUFNLENBQUNTLEtBQVAsR0FBZSxDQUFmLEdBQW1CRixLQUFLLENBQUNFLEtBQU4sR0FBYyxDQUF0RCxFQUF5RFQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWhCLEdBQW9CSCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUE1RjtBQUVBUCxVQUFBQSxHQUFHLENBQUNhLE9BQUo7QUE3Qkc7QUFBQTtBQUFBLCtDQWlDNEMscUJBQVVoQixNQUFNLENBQUNpQixTQUFQLGlCQUEwQlosUUFBUSxDQUFDYSxHQUFuQyxHQUEwQ0MsT0FBMUMsaUJBQTJEZCxRQUFRLENBQUNhLEdBQXBFLEdBQTJFLG9CQUEzRSxDQUFWLENBakM1Qzs7QUFBQTtBQWlDS0UsVUFBQUEsWUFqQ0w7O0FBbUNELGNBQUl0QixRQUFRLENBQUN1QixZQUFiLEVBQTJCO0FBRW5CQyxZQUFBQSxTQUZtQixHQUVZckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlo7QUFJekJvQixZQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILFlBQVksQ0FBQ0ksR0FBOUI7QUFDQUYsWUFBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCcEIsUUFBUSxDQUFDcUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQnJCLFFBQVEsQ0FBQ2EsR0FBcEQ7QUFFQUksWUFBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUQ7O0FBNUNBLDJDQThDTVAsWUE5Q047O0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBbURNLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQW5ETjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMERHLElBQUlBLEtBQUosQ0FBVSxrR0FBVixDQTFESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IEZpbGVJbmZvIGZyb20gJy4uL2ludGVyZmFjZXMvRmlsZUluZm8nO1xyXG5cclxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XHJcbmltcG9ydCB7IGV4dHJhY3RGaWxlSW5mbyB9IGZyb20gJy4uL3V0aWxzL2ZpbGUnO1xyXG5cclxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvR2VuZXJhbE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIFJvdGF0ZSBhbiBpbWFnZSB0byBhIHNwZWNpZmllZCBhbmdsZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIHJvdGF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIFRoZSBkZWdyZWUgYW5nbGUgdG8gcm90YXRlIHRoZSBpbWFnZSB0bywgY2xvY2t3aXNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b2Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSByb3RhdGlvbiBpcyBjb21wbGV0ZSBvciBub3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgdGhlIGltYWdlIHdoaWNoIGlzIG5lZWRlZCBpZiB0aGUgaW1hZ2UgaXMgZnJvbSBhIGRpZmZlcmVudCBkb21haW4uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm90YXRlKHBhdGg6IHN0cmluZywgYW5nbGU6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xyXG5cclxuICBjb25zdCBfb3B0aW9uczogR2VuZXJhbE9wdGlvbnMgPSBuZXcgR2VuZXJhbE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuXHJcbiAgY29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0gZXh0cmFjdEZpbGVJbmZvKHBhdGgpO1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gYXdhaXQgbG9hZEltYWdlKHBhdGgsIF9vcHRpb25zLmNyb3NzT3JpZ2luKTtcclxuXHJcbiAgICBsZXQgbGFyZ2VzdFNpZGU6IG51bWJlciA9IGltYWdlLndpZHRoO1xyXG5cclxuICAgIGlmIChpbWFnZS5oZWlnaHQgPiBpbWFnZS53aWR0aCkgbGFyZ2VzdFNpZGUgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0ID0gbGFyZ2VzdFNpZGU7XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICBjdHgucm90YXRlKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcblxyXG4gICAgY3R4LnRyYW5zbGF0ZSgtKGNhbnZhcy53aWR0aCAvIDIpLCAtKGNhbnZhcy5oZWlnaHQgLyAyKSk7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgY2FudmFzLndpZHRoIC8gMiAtIGltYWdlLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSBpbWFnZS5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByb3RhdGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkucmVwbGFjZShgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCwgJ2ltYWdlL29jdGV0LXN0cmVhbScpKTtcclxuXHJcbiAgICAgIGlmIChfb3B0aW9ucy5hdXRvZG93bmxvYWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgaW1hZ2VMaW5rLmhyZWYgPSByb3RhdGVkSW1hZ2Uuc3JjO1xyXG4gICAgICAgIGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmaWxlSW5mby5leHQ7XHJcblxyXG4gICAgICAgIGltYWdlTGluay5jbGljaygpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJvdGF0ZWRJbWFnZTtcclxuXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==