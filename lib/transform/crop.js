'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crop = crop;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Crop an image to a specified size by providing the start location of the crop and
 * the dimensions that the product should have.
 * 
 * @version 1.0.0
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
function crop(_x, _x2, _x3, _x4, _x5) {
  return _crop.apply(this, arguments);
}

function _crop() {
  _crop = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(path, x, y, width, height) {
    var options,
        _options,
        canvas,
        ctx,
        fileInfo,
        image,
        croppedImage,
        imageLink,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
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
            return (0, _load.loadImage)(path, _options.crossOrigin);

          case 8:
            image = _context.sent;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
            _context.prev = 12;
            _context.next = 15;
            return (0, _load.loadImage)(canvas.toDataURL("image/".concat(fileInfo.ext)).replace("image/".concat(fileInfo.ext), 'image/octet-stream'));

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
    }, _callee, null, [[5, 25], [12, 20]]);
  }));
  return _crop.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3JvcC50cyJdLCJuYW1lcyI6WyJjcm9wIiwicGF0aCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJHZW5lcmFsT3B0aW9ucyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJyZXBsYWNlIiwiY3JvcHBlZEltYWdlIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztTQWlCc0JBLEk7Ozs7Ozs7K0JBQWYsaUJBQW9CQyxJQUFwQixFQUFrQ0MsQ0FBbEMsRUFBNkNDLENBQTdDLEVBQXdEQyxLQUF4RCxFQUF1RUMsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUZDLFlBQUFBLE9BQXZGLDJEQUF5RyxFQUF6RztBQUVBQyxZQUFBQSxRQUZBLEdBRTJCLElBQUlDLDBCQUFKLENBQW1CRixPQUFuQixDQUYzQjtBQUlBRyxZQUFBQSxNQUpBLEdBSTRCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FKNUI7QUFLQUMsWUFBQUEsR0FMQSxHQUtnQ0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBTGhDO0FBT0FDLFlBQUFBLFFBUEEsR0FPcUIsMkJBQWdCYixJQUFoQixDQVByQjtBQUFBO0FBQUE7QUFBQSxtQkFXZSxxQkFBVUEsSUFBVixFQUFnQk0sUUFBUSxDQUFDUSxXQUF6QixDQVhmOztBQUFBO0FBV0NDLFlBQUFBLEtBWEQ7QUFhTFAsWUFBQUEsTUFBTSxDQUFDTCxLQUFQLEdBQWVBLEtBQWY7QUFDQUssWUFBQUEsTUFBTSxDQUFDSixNQUFQLEdBQWdCQSxNQUFoQjtBQUVBTyxZQUFBQSxHQUFHLENBQUNLLFNBQUosQ0FBY0QsS0FBZCxFQUFxQmQsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCQyxLQUEzQixFQUFrQ0MsTUFBbEMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsRUFBZ0RELEtBQWhELEVBQXVEQyxNQUF2RDtBQWhCSztBQUFBO0FBQUEsbUJBb0J1QixxQkFBVUksTUFBTSxDQUFDUyxTQUFQLGlCQUEwQkosUUFBUSxDQUFDSyxHQUFuQyxHQUEwQ0MsT0FBMUMsaUJBQTJETixRQUFRLENBQUNLLEdBQXBFLEdBQTJFLG9CQUEzRSxDQUFWLENBcEJ2Qjs7QUFBQTtBQW9CRUUsWUFBQUEsWUFwQkY7O0FBc0JKLGdCQUFJZCxRQUFRLENBQUNlLFlBQWIsRUFBMkI7QUFFcEJDLGNBQUFBLFNBRm9CLEdBRVdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZYO0FBSTFCWSxjQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILFlBQVksQ0FBQ0ksR0FBOUI7QUFDQUYsY0FBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCWixRQUFRLENBQUNhLElBQVQsR0FBZ0IsR0FBaEIsR0FBc0JiLFFBQVEsQ0FBQ0ssR0FBcEQ7QUFFQUksY0FBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBL0JHLDZDQWlDR1AsWUFqQ0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBc0NHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQXRDSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBNkNFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQTdDRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9GaWxlSW5mby50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuLi91dGlscy9sb2FkJztcclxuaW1wb3J0IHsgZXh0cmFjdEZpbGVJbmZvIH0gZnJvbSAnLi4vdXRpbHMvZmlsZSc7XHJcblxyXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucy9HZW5lcmFsT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogQ3JvcCBhbiBpbWFnZSB0byBhIHNwZWNpZmllZCBzaXplIGJ5IHByb3ZpZGluZyB0aGUgc3RhcnQgbG9jYXRpb24gb2YgdGhlIGNyb3AgYW5kXHJcbiAqIHRoZSBkaW1lbnNpb25zIHRoYXQgdGhlIHByb2R1Y3Qgc2hvdWxkIGhhdmUuXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAxLjAuMFxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGNyb3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSBob3Jpem9udGFsIGxvY2F0aW9uIGluIHRoZSBvcmlnaW5hbCBpbWFnZSB0byBiZWdpbiB0aGUgY3JvcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHZlcnRpY2FsIGxvY2F0aW9uIGluIHRoZSBvcmlnaW5hbCBpbWFnZSB0byBiZWluZyB0aGUgY3JvcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZmluYWwgY3JvcHBlZCBpbWFnZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IG9mIG9mIHRoZSBmaW5hbCBjcm9wcGVkIGltYWdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIG9yaWdpbmF0aW5nIGZyb20gZXh0ZXJuYWwgc291cmNlcy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtQcm9taXplPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSBjcm9wcGVkIGltYWdlIGFzIGFuIGltYWdlIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JvcChwYXRoOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xyXG5cclxuXHRjb25zdCBfb3B0aW9uczogR2VuZXJhbE9wdGlvbnMgPSBuZXcgR2VuZXJhbE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuXHJcblx0Y29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0gZXh0cmFjdEZpbGVJbmZvKHBhdGgpO1xyXG5cclxuXHR0cnkge1xyXG5cclxuXHRcdGNvbnN0IGltYWdlID0gYXdhaXQgbG9hZEltYWdlKHBhdGgsIF9vcHRpb25zLmNyb3NzT3JpZ2luKTtcclxuXHJcblx0XHRjYW52YXMud2lkdGggPSB3aWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHJcblx0XHRcdGNvbnN0IGNyb3BwZWRJbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShjYW52YXMudG9EYXRhVVJMKGBpbWFnZS8ke2ZpbGVJbmZvLmV4dH1gKS5yZXBsYWNlKGBpbWFnZS8ke2ZpbGVJbmZvLmV4dH1gLCAnaW1hZ2Uvb2N0ZXQtc3RyZWFtJykpO1xyXG5cclxuXHRcdFx0aWYgKF9vcHRpb25zLmF1dG9kb3dubG9hZCkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbWFnZUxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuXHRcdFx0XHRpbWFnZUxpbmsuaHJlZiA9IGNyb3BwZWRJbWFnZS5zcmM7XHJcblx0XHRcdFx0aW1hZ2VMaW5rLmRvd25sb2FkID0gZmlsZUluZm8ubmFtZSArICcuJyArIGZpbGVJbmZvLmV4dDtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmNsaWNrKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gY3JvcHBlZEltYWdlO1xyXG5cclxuXHRcdH1cclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==