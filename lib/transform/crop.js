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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3JvcC50cyJdLCJuYW1lcyI6WyJjcm9wIiwicGF0aCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJHZW5lcmFsT3B0aW9ucyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJleHQiLCJyZXBsYWNlIiwiY3JvcHBlZEltYWdlIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztTQWlCc0JBLEk7Ozs7Ozs7K0JBQWYsaUJBQW9CQyxJQUFwQixFQUFrQ0MsQ0FBbEMsRUFBNkNDLENBQTdDLEVBQXdEQyxLQUF4RCxFQUF1RUMsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUZDLFlBQUFBLE9BQXZGLDJEQUF5RyxFQUF6RztBQUVBQyxZQUFBQSxRQUZBLEdBRTJCLElBQUlDLDBCQUFKLENBQW1CRixPQUFuQixDQUYzQjtBQUlBRyxZQUFBQSxNQUpBLEdBSTRCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FKNUI7QUFLQUMsWUFBQUEsR0FMQSxHQUtnQ0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBTGhDO0FBT0FDLFlBQUFBLFFBUEEsR0FPcUIsMkJBQWdCYixJQUFoQixDQVByQjtBQUFBO0FBQUE7QUFBQSxtQkFXZSxxQkFBVUEsSUFBVixFQUFnQk0sUUFBUSxDQUFDUSxXQUF6QixDQVhmOztBQUFBO0FBV0NDLFlBQUFBLEtBWEQ7QUFhTFAsWUFBQUEsTUFBTSxDQUFDTCxLQUFQLEdBQWVBLEtBQWY7QUFDQUssWUFBQUEsTUFBTSxDQUFDSixNQUFQLEdBQWdCQSxNQUFoQjtBQUVBTyxZQUFBQSxHQUFHLENBQUNLLFNBQUosQ0FBY0QsS0FBZCxFQUFxQmQsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCQyxLQUEzQixFQUFrQ0MsTUFBbEMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsRUFBZ0RELEtBQWhELEVBQXVEQyxNQUF2RDtBQWhCSztBQUFBO0FBQUEsbUJBb0J1QixxQkFBVUksTUFBTSxDQUFDUyxTQUFQLGlCQUEwQkosUUFBUSxDQUFDSyxHQUFuQyxHQUEwQ0MsT0FBMUMsaUJBQTJETixRQUFRLENBQUNLLEdBQXBFLEdBQTJFLG9CQUEzRSxDQUFWLENBcEJ2Qjs7QUFBQTtBQW9CRUUsWUFBQUEsWUFwQkY7O0FBc0JKLGdCQUFJZCxRQUFRLENBQUNlLFlBQWIsRUFBMkI7QUFFcEJDLGNBQUFBLFNBRm9CLEdBRVdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZYO0FBSTFCWSxjQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILFlBQVksQ0FBQ0ksR0FBOUI7QUFDQUYsY0FBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCWixRQUFRLENBQUNhLElBQVQsR0FBZ0IsR0FBaEIsR0FBc0JiLFFBQVEsQ0FBQ0ssR0FBcEQ7QUFFQUksY0FBQUEsU0FBUyxDQUFDSyxLQUFWO0FBRUE7O0FBL0JHLDZDQWlDR1AsWUFqQ0g7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBc0NHLElBQUlRLEtBQUosQ0FBVSxvRkFBVixDQXRDSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBNkNFLElBQUlBLEtBQUosQ0FBVSxvRkFBVixDQTdDRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbnRlcmZhY2VzL0ZpbGVJbmZvLnRzXCIgLz5cblxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XG5pbXBvcnQgeyBleHRyYWN0RmlsZUluZm8gfSBmcm9tICcuLi91dGlscy9maWxlJztcblxuaW1wb3J0IEdlbmVyYWxPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvR2VuZXJhbE9wdGlvbnMnO1xuXG4vKipcbiAqIENyb3AgYW4gaW1hZ2UgdG8gYSBzcGVjaWZpZWQgc2l6ZSBieSBwcm92aWRpbmcgdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBjcm9wIGFuZFxuICogdGhlIGRpbWVuc2lvbnMgdGhhdCB0aGUgcHJvZHVjdCBzaG91bGQgaGF2ZS5cbiAqIFxuICogQHZlcnNpb24gMS4wLjBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIGNyb3AuXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgaG9yaXpvbnRhbCBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgaW1hZ2UgdG8gYmVnaW4gdGhlIGNyb3AuXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgdmVydGljYWwgbG9jYXRpb24gaW4gdGhlIG9yaWdpbmFsIGltYWdlIHRvIGJlaW5nIHRoZSBjcm9wLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZmluYWwgY3JvcHBlZCBpbWFnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBvZiBvZiB0aGUgZmluYWwgY3JvcHBlZCBpbWFnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49bnVsbF0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIHByb3BlcnR5IG9mIGltYWdlcyBvcmlnaW5hdGluZyBmcm9tIGV4dGVybmFsIHNvdXJjZXMuXG4gKiBcbiAqIEByZXR1cm5zIHtQcm9taXplPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSBjcm9wcGVkIGltYWdlIGFzIGFuIGltYWdlIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcm9wKHBhdGg6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IEVycm9yPiB7XG5cblx0Y29uc3QgX29wdGlvbnM6IEdlbmVyYWxPcHRpb25zID0gbmV3IEdlbmVyYWxPcHRpb25zKG9wdGlvbnMpO1xuXG5cdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cblx0Y29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0gZXh0cmFjdEZpbGVJbmZvKHBhdGgpO1xuXG5cdHRyeSB7XG5cblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XG5cblx0XHRjYW52YXMud2lkdGggPSB3aWR0aDtcblx0XHRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cblx0XHR0cnkge1xuXG5cdFx0XHRjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCkucmVwbGFjZShgaW1hZ2UvJHtmaWxlSW5mby5leHR9YCwgJ2ltYWdlL29jdGV0LXN0cmVhbScpKTtcblxuXHRcdFx0aWYgKF9vcHRpb25zLmF1dG9kb3dubG9hZCkge1xuXG5cdFx0XHRcdGNvbnN0IGltYWdlTGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cblx0XHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBjcm9wcGVkSW1hZ2Uuc3JjO1xuXHRcdFx0XHRpbWFnZUxpbmsuZG93bmxvYWQgPSBmaWxlSW5mby5uYW1lICsgJy4nICsgZmlsZUluZm8uZXh0O1xuXG5cdFx0XHRcdGltYWdlTGluay5jbGljaygpO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjcm9wcGVkSW1hZ2U7XG5cblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKSB7XG5cblx0XHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcblxuXHRcdH1cblxuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xuXG5cdH1cblxufSJdfQ==