'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

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
 * @since 0.0.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcm90YXRlLnRzIl0sIm5hbWVzIjpbInJvdGF0ZSIsInBhdGgiLCJhbmdsZSIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIkdlbmVyYWxPcHRpb25zIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGVJbmZvIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsImxhcmdlc3RTaWRlIiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwidHJhbnNsYXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsInRvRGF0YVVSTCIsImV4dCIsInJlcGxhY2UiLCJyb3RhdGVkSW1hZ2UiLCJhdXRvZG93bmxvYWQiLCJpbWFnZUxpbmsiLCJocmVmIiwic3JjIiwiZG93bmxvYWQiLCJuYW1lIiwiY2xpY2siLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUVBOzs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdPLFNBQWVBLE1BQWYsQ0FBc0JDLElBQXRCLEVBQW9DQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EQyxVQUFBQSxPQUFuRCwyREFBcUUsRUFBckU7QUFFQ0MsVUFBQUEsUUFGRCxHQUU0QixJQUFJQywwQkFBSixDQUFtQkYsT0FBbkIsQ0FGNUI7QUFJQ0csVUFBQUEsTUFKRCxHQUk2QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBSjdCO0FBS0NDLFVBQUFBLEdBTEQsR0FLaUNILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUxqQztBQU9DQyxVQUFBQSxRQVBELEdBT3NCLDJCQUFnQlYsSUFBaEIsQ0FQdEI7QUFBQTtBQUFBO0FBQUEsK0NBV21DLHFCQUFVQSxJQUFWLEVBQWdCRyxRQUFRLENBQUNRLFdBQXpCLENBWG5DOztBQUFBO0FBV0dDLFVBQUFBLEtBWEg7QUFhQ0MsVUFBQUEsV0FiRCxHQWF1QkQsS0FBSyxDQUFDRSxLQWI3QjtBQWVILGNBQUlGLEtBQUssQ0FBQ0csTUFBTixHQUFlSCxLQUFLLENBQUNFLEtBQXpCLEVBQWdDRCxXQUFXLEdBQUdELEtBQUssQ0FBQ0csTUFBcEI7QUFFaENWLFVBQUFBLE1BQU0sQ0FBQ1MsS0FBUCxFQUFjVCxNQUFNLENBQUNVLE1BQVAsR0FBZ0JGLFdBQTlCO0FBRUFMLFVBQUFBLEdBQUcsQ0FBQ1EsSUFBSjtBQUVBUixVQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY1osTUFBTSxDQUFDUyxLQUFQLEdBQWUsQ0FBN0IsRUFBZ0NULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixDQUFoRDtBQUVBUCxVQUFBQSxHQUFHLENBQUNULE1BQUosQ0FBV0UsS0FBSyxHQUFHaUIsSUFBSSxDQUFDQyxFQUFiLEdBQWtCLEdBQTdCO0FBRUFYLFVBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjLEVBQUVaLE1BQU0sQ0FBQ1MsS0FBUCxHQUFlLENBQWpCLENBQWQsRUFBbUMsRUFBRVQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWxCLENBQW5DO0FBRUFQLFVBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjUixLQUFkLEVBQXFCUCxNQUFNLENBQUNTLEtBQVAsR0FBZSxDQUFmLEdBQW1CRixLQUFLLENBQUNFLEtBQU4sR0FBYyxDQUF0RCxFQUF5RFQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWhCLEdBQW9CSCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUE1RjtBQUVBUCxVQUFBQSxHQUFHLENBQUNhLE9BQUo7QUE3Qkc7QUFBQTtBQUFBLCtDQWlDNEMscUJBQVVoQixNQUFNLENBQUNpQixTQUFQLGlCQUEwQlosUUFBUSxDQUFDYSxHQUFuQyxHQUEwQ0MsT0FBMUMsaUJBQTJEZCxRQUFRLENBQUNhLEdBQXBFLEdBQTJFLG9CQUEzRSxDQUFWLENBakM1Qzs7QUFBQTtBQWlDS0UsVUFBQUEsWUFqQ0w7O0FBbUNELGNBQUl0QixRQUFRLENBQUN1QixZQUFiLEVBQTJCO0FBRW5CQyxZQUFBQSxTQUZtQixHQUVZckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlo7QUFJekJvQixZQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILFlBQVksQ0FBQ0ksR0FBOUI7QUFDQUYsWUFBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCcEIsUUFBUSxDQUFDcUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQnJCLFFBQVEsQ0FBQ2EsR0FBcEQ7QUFFQUksWUFBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUQ7O0FBNUNBLDJDQThDTVAsWUE5Q047O0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBbURNLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQW5ETjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMERHLElBQUlBLEtBQUosQ0FBVSxrR0FBVixDQTFESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRmlsZUluZm8udHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XHJcbmltcG9ydCB7IGV4dHJhY3RGaWxlSW5mbyB9IGZyb20gJy4uL3V0aWxzL2ZpbGUnO1xyXG5cclxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvR2VuZXJhbE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIFJvdGF0ZSBhbiBpbWFnZSB0byBhIHNwZWNpZmllZCBhbmdsZS5cclxuICpcclxuICogQHNpbmNlIDAuMC4wXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byByb3RhdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBUaGUgZGVncmVlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgaW1hZ2UgdG8sIGNsb2Nrd2lzZS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9kb3dubG9hZD1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGltYWdlIHNob3VsZCBkb3dubG9hZCBhZnRlciB0aGUgcm90YXRpb24gaXMgY29tcGxldGUgb3Igbm90LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIHRoZSBpbWFnZSB3aGljaCBpcyBuZWVkZWQgaWYgdGhlIGltYWdlIGlzIGZyb20gYSBkaWZmZXJlbnQgZG9tYWluLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJvdGF0ZShwYXRoOiBzdHJpbmcsIGFuZ2xlOiBudW1iZXIsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcclxuXHJcbiAgY29uc3QgX29wdGlvbnM6IEdlbmVyYWxPcHRpb25zID0gbmV3IEdlbmVyYWxPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG4gIGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG4gICAgbGV0IGxhcmdlc3RTaWRlOiBudW1iZXIgPSBpbWFnZS53aWR0aDtcclxuXHJcbiAgICBpZiAoaW1hZ2UuaGVpZ2h0ID4gaW1hZ2Uud2lkdGgpIGxhcmdlc3RTaWRlID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCA9IGxhcmdlc3RTaWRlO1xyXG5cclxuICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgY3R4LnJvdGF0ZShhbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgIGN0eC50cmFuc2xhdGUoLShjYW52YXMud2lkdGggLyAyKSwgLShjYW52YXMuaGVpZ2h0IC8gMikpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIGNhbnZhcy53aWR0aCAvIDIgLSBpbWFnZS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gaW1hZ2UuaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3Qgcm90YXRlZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gYXdhaXQgbG9hZEltYWdlKGNhbnZhcy50b0RhdGFVUkwoYGltYWdlLyR7ZmlsZUluZm8uZXh0fWApLnJlcGxhY2UoYGltYWdlLyR7ZmlsZUluZm8uZXh0fWAsICdpbWFnZS9vY3RldC1zdHJlYW0nKSk7XHJcblxyXG4gICAgICBpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlTGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICAgIGltYWdlTGluay5ocmVmID0gcm90YXRlZEltYWdlLnNyYztcclxuICAgICAgICBpbWFnZUxpbmsuZG93bmxvYWQgPSBmaWxlSW5mby5uYW1lICsgJy4nICsgZmlsZUluZm8uZXh0O1xyXG5cclxuICAgICAgICBpbWFnZUxpbmsuY2xpY2soKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByb3RhdGVkSW1hZ2U7XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=