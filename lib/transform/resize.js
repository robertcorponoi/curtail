'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resize = resize;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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
function resize(path, dimension, size) {
  var options,
      _options,
      fileInfo,
      image,
      aspectRatio,
      imageLink,
      _args = arguments;

  return _regenerator["default"].async(function resize$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
          _options = new _CropOptions["default"](options);
          fileInfo = (0, _file.extractFileInfo)(path);
          _context.prev = 3;
          _context.next = 6;
          return _regenerator["default"].awrap((0, _load.loadImage)(path, _options.crossOrigin));

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
  }, null, null, [[3, 21]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcmVzaXplLnRzIl0sIm5hbWVzIjpbInJlc2l6ZSIsInBhdGgiLCJkaW1lbnNpb24iLCJzaXplIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiQ3JvcE9wdGlvbnMiLCJmaWxlSW5mbyIsImNyb3NzT3JpZ2luIiwiaW1hZ2UiLCJhc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIk1hdGgiLCJyb3VuZCIsImRlbm9taW5hdG9yIiwibnVtZXJhdG9yIiwiYXV0b2Rvd25sb2FkIiwiaW1hZ2VMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNyYyIsImRvd25sb2FkIiwibmFtZSIsImV4dCIsImNsaWNrIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBZUEsTUFBZixDQUFzQkMsSUFBdEIsRUFBb0NDLFNBQXBDLEVBQXVEQyxJQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFFQyxVQUFBQSxPQUFyRSwyREFBdUYsRUFBdkY7QUFFQUMsVUFBQUEsUUFGQSxHQUV3QixJQUFJQyx1QkFBSixDQUFnQkYsT0FBaEIsQ0FGeEI7QUFJQUcsVUFBQUEsUUFKQSxHQUlxQiwyQkFBZ0JOLElBQWhCLENBSnJCO0FBQUE7QUFBQTtBQUFBLCtDQVFlLHFCQUFVQSxJQUFWLEVBQWdCSSxRQUFRLENBQUNHLFdBQXpCLENBUmY7O0FBQUE7QUFRQ0MsVUFBQUEsS0FSRDtBQVVDQyxVQUFBQSxXQVZELEdBVWUsb0JBQVNELEtBQUssQ0FBQ0UsS0FBZixFQUFzQkYsS0FBSyxDQUFDRyxNQUE1QixDQVZmO0FBQUEsd0JBWUdWLFNBWkg7QUFBQSwwQ0FjQyxPQWRELHdCQW9CQyxRQXBCRDtBQUFBOztBQUFBO0FBZUhPLFVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjUixJQUFkO0FBRUEsY0FBSUUsUUFBUSxDQUFDUSxtQkFBYixFQUFrQ0osS0FBSyxDQUFDRyxNQUFOLEdBQWVFLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxXQUFXLENBQUNNLFdBQVosR0FBMEJOLFdBQVcsQ0FBQ08sU0FBdkMsR0FBb0RkLElBQS9ELENBQWY7QUFqQi9COztBQUFBO0FBcUJITSxVQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZVQsSUFBZjtBQUVBLGNBQUlFLFFBQVEsQ0FBQ1EsbUJBQWIsRUFBa0NKLEtBQUssQ0FBQ0UsS0FBTixHQUFjRyxJQUFJLENBQUNDLEtBQUwsQ0FBWUwsV0FBVyxDQUFDTyxTQUFaLEdBQXdCUCxXQUFXLENBQUNNLFdBQXJDLEdBQW9EYixJQUEvRCxDQUFkO0FBdkIvQjs7QUFBQTtBQTRCTCxjQUFJRSxRQUFRLENBQUNhLFlBQWIsRUFBMkI7QUFFcEJDLFlBQUFBLFNBRm9CLEdBRVdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUZYO0FBSTFCRixZQUFBQSxTQUFTLENBQUNHLElBQVYsR0FBaUJiLEtBQUssQ0FBQ2MsR0FBdkI7QUFDQUosWUFBQUEsU0FBUyxDQUFDSyxRQUFWLEdBQXFCakIsUUFBUSxDQUFDa0IsSUFBVCxHQUFnQixHQUFoQixHQUFzQmxCLFFBQVEsQ0FBQ21CLEdBQXBEO0FBRUFQLFlBQUFBLFNBQVMsQ0FBQ1EsS0FBVjtBQUVBOztBQXJDSSwyQ0F1Q0VsQixLQXZDRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0E0Q0UsSUFBSW1CLEtBQUosQ0FBVSxvRkFBVixDQTVDRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRmlsZUluZm8udHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgc2ltcGxpZnkgfSBmcm9tICcuLi91dGlscy9tYXRoJztcclxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9hZCc7XHJcbmltcG9ydCB7IGV4dHJhY3RGaWxlSW5mbyB9IGZyb20gJy4uL3V0aWxzL2ZpbGUnO1xyXG5cclxuaW1wb3J0IENyb3BPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvQ3JvcE9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIFJlc2l6ZSBhbiBpbWFnZSB0byBhIG5ldyBkaW1lbnNpb24uXHJcbiAqIFxyXG4gKiBAc2luY2UgMS4wLjBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byByZXNpemUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaW1lbnNpb24gV2hpY2ggZGltZW5zaW9uIHRvIHJlc2l6ZSwgZWl0aGVyIHdpZHRoIG9yIGhlaWdodC4gS2VlcCBpbiBtaW5kIHRoYXQgaWYgeW91J3JlIHByZXNlcnZpbmcgdGhlIGFzcGVjdCByYXRpbywgdGhlIG90aGVyIHdpbGwgcmVzaXplIGFjY29yZGluZ2x5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbmV3IHNpemUgdG8gbWFrZSB0aGUgc3BlY2lmaWVkIGRpbWVuc2lvbi5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByZXNlcnZlQXNwZWN0UmF0aW89dHJ1ZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCByZXNpemUgdG9nZXRoZXIgdG8gcHJlc2VydmUgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIG9yaWdpbmF0aW5nIGZyb20gZXh0ZXJuYWwgc291cmNlcy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSByZXNpemVkIGltYWdlIGFzIGFuIGltYWdlIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzaXplKHBhdGg6IHN0cmluZywgZGltZW5zaW9uOiBzdHJpbmcsIHNpemU6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xyXG5cclxuXHRjb25zdCBfb3B0aW9uczogQ3JvcE9wdGlvbnMgPSBuZXcgQ3JvcE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IGV4dHJhY3RGaWxlSW5mbyhwYXRoKTtcclxuXHJcblx0dHJ5IHtcclxuXHJcblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG5cdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBzaW1wbGlmeShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuXHJcblx0XHRzd2l0Y2ggKGRpbWVuc2lvbikge1xyXG5cclxuXHRcdFx0Y2FzZSAnd2lkdGgnOlxyXG5cdFx0XHRcdGltYWdlLndpZHRoID0gc2l6ZTtcclxuXHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLnByZXNlcnZlQXNwZWN0UmF0aW8pIGltYWdlLmhlaWdodCA9IE1hdGgucm91bmQoKGFzcGVjdFJhdGlvLmRlbm9taW5hdG9yIC8gYXNwZWN0UmF0aW8ubnVtZXJhdG9yKSAqIHNpemUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaGVpZ2h0JzpcclxuXHRcdFx0XHRpbWFnZS5oZWlnaHQgPSBzaXplO1xyXG5cclxuXHRcdFx0XHRpZiAoX29wdGlvbnMucHJlc2VydmVBc3BlY3RSYXRpbykgaW1hZ2Uud2lkdGggPSBNYXRoLnJvdW5kKChhc3BlY3RSYXRpby5udW1lcmF0b3IgLyBhc3BlY3RSYXRpby5kZW5vbWluYXRvcikgKiBzaXplKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKF9vcHRpb25zLmF1dG9kb3dubG9hZCkge1xyXG5cclxuXHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRcdGltYWdlTGluay5ocmVmID0gaW1hZ2Uuc3JjO1xyXG5cdFx0XHRpbWFnZUxpbmsuZG93bmxvYWQgPSBmaWxlSW5mby5uYW1lICsgJy4nICsgZmlsZUluZm8uZXh0O1xyXG5cclxuXHRcdFx0aW1hZ2VMaW5rLmNsaWNrKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbWFnZTtcclxuXHJcblx0fVxyXG5cdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==