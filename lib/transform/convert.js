'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = convert;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _load = require("../utils/load");

var _file = require("../utils/file");

var _GeneralOptions = _interopRequireDefault(require("../options/GeneralOptions"));

/**
 * Convert an image from one format to another format.
 * 
 * @since 1.0.0
 * 
 * @param {string} path The path to the image to convert to another format.
 * @param {string} format The new format for the image.
 * @param {Object} [options]
 * @param {boolean} [options.autoDownload=false] Indicates whether the image should download after the cropping is complete or not.
 * @param {string} [options.crossOrigin=null] Sets the cross-origin property of images originating from external sources.
 * 
 * @returns {Promise<HTMLImageElement>} Returns the newly formatted image as an image element.
 */
function convert(path, format) {
  var options,
      fileInfo,
      _options,
      canvas,
      ctx,
      nonTransparentFormats,
      image,
      f,
      convertedImage,
      imageLink,
      _args = arguments;

  return _regenerator["default"].async(function convert$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          fileInfo = (0, _file.extractFileInfo)(path);
          _options = new _GeneralOptions["default"](options);
          canvas = document.createElement('canvas');
          ctx = canvas.getContext('2d');
          nonTransparentFormats = ['jpg', 'jpeg', 'gif', 'bmp'];
          _context.prev = 6;
          _context.next = 9;
          return _regenerator["default"].awrap((0, _load.loadImage)(path, _options.crossOrigin));

        case 9:
          image = _context.sent;
          canvas.width = image.width;
          canvas.height = image.height;

          if (nonTransparentFormats.includes(format)) {
            ctx.fillStyle = '#FFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          ctx.drawImage(image, 0, 0);
          _context.prev = 14;
          f = format === 'png' ? 'png' : 'jpeg';
          _context.next = 18;
          return _regenerator["default"].awrap((0, _load.loadImage)(canvas.toDataURL("image/".concat(f))));

        case 18:
          convertedImage = _context.sent;

          if (_options.autodownload) {
            imageLink = document.createElement('a');
            imageLink.href = convertedImage.src;
            imageLink.download = fileInfo.name + '.' + format;
            imageLink.click();
          }

          return _context.abrupt("return", convertedImage);

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](14);
          return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

        case 26:
          _context.next = 31;
          break;

        case 28:
          _context.prev = 28;
          _context.t1 = _context["catch"](6);
          return _context.abrupt("return", new Error('There was a problem loading the image, please check to make sure the path is valid'));

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 28], [14, 23]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udmVydC50cyJdLCJuYW1lcyI6WyJjb252ZXJ0IiwicGF0aCIsImZvcm1hdCIsIm9wdGlvbnMiLCJmaWxlSW5mbyIsIl9vcHRpb25zIiwiR2VuZXJhbE9wdGlvbnMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwibm9uVHJhbnNwYXJlbnRGb3JtYXRzIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5jbHVkZXMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImYiLCJ0b0RhdGFVUkwiLCJjb252ZXJ0ZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFlQSxPQUFmLENBQXVCQyxJQUF2QixFQUFxQ0MsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEQyxVQUFBQSxPQUFyRCwyREFBdUUsRUFBdkU7QUFFQUMsVUFBQUEsUUFGQSxHQUVxQiwyQkFBZ0JILElBQWhCLENBRnJCO0FBSUFJLFVBQUFBLFFBSkEsR0FJMkIsSUFBSUMsMEJBQUosQ0FBbUJILE9BQW5CLENBSjNCO0FBTUFJLFVBQUFBLE1BTkEsR0FNNEJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQU41QjtBQU9BQyxVQUFBQSxHQVBBLEdBT2dDSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FQaEM7QUFTQUMsVUFBQUEscUJBVEEsR0FTd0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQVR4QjtBQUFBO0FBQUE7QUFBQSwrQ0FhZSxxQkFBVVgsSUFBVixFQUFnQkksUUFBUSxDQUFDUSxXQUF6QixDQWJmOztBQUFBO0FBYUNDLFVBQUFBLEtBYkQ7QUFlTFAsVUFBQUEsTUFBTSxDQUFDUSxLQUFQLEdBQWVELEtBQUssQ0FBQ0MsS0FBckI7QUFDQVIsVUFBQUEsTUFBTSxDQUFDUyxNQUFQLEdBQWdCRixLQUFLLENBQUNFLE1BQXRCOztBQUVBLGNBQUlKLHFCQUFxQixDQUFDSyxRQUF0QixDQUErQmYsTUFBL0IsQ0FBSixFQUE0QztBQUUzQ1EsWUFBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FSLFlBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJaLE1BQU0sQ0FBQ1EsS0FBMUIsRUFBaUNSLE1BQU0sQ0FBQ1MsTUFBeEM7QUFFQTs7QUFFRE4sVUFBQUEsR0FBRyxDQUFDVSxTQUFKLENBQWNOLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUF6Qks7QUE2QkVPLFVBQUFBLENBN0JGLEdBNkJNbkIsTUFBTSxLQUFLLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkIsTUE3QmpDO0FBQUE7QUFBQSwrQ0ErQnlCLHFCQUFVSyxNQUFNLENBQUNlLFNBQVAsaUJBQTBCRCxDQUExQixFQUFWLENBL0J6Qjs7QUFBQTtBQStCRUUsVUFBQUEsY0EvQkY7O0FBaUNKLGNBQUlsQixRQUFRLENBQUNtQixZQUFiLEVBQTJCO0FBRXBCQyxZQUFBQSxTQUZvQixHQUVXakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJnQixZQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILGNBQWMsQ0FBQ0ksR0FBaEM7QUFDQUYsWUFBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCeEIsUUFBUSxDQUFDeUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQjNCLE1BQTNDO0FBRUF1QixZQUFBQSxTQUFTLENBQUNLLEtBQVY7QUFFQTs7QUExQ0csMkNBNENHUCxjQTVDSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FpREcsSUFBSVEsS0FBSixDQUFVLG9GQUFWLENBakRIOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0F3REUsSUFBSUEsS0FBSixDQUFVLG9GQUFWLENBeERGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9GaWxlSW5mby50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuLi91dGlscy9sb2FkJztcclxuaW1wb3J0IHsgZXh0cmFjdEZpbGVJbmZvIH0gZnJvbSAnLi4vdXRpbHMvZmlsZSc7XHJcblxyXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucy9HZW5lcmFsT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogQ29udmVydCBhbiBpbWFnZSBmcm9tIG9uZSBmb3JtYXQgdG8gYW5vdGhlciBmb3JtYXQuXHJcbiAqIFxyXG4gKiBAc2luY2UgMS4wLjBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byBjb252ZXJ0IHRvIGFub3RoZXIgZm9ybWF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IFRoZSBuZXcgZm9ybWF0IGZvciB0aGUgaW1hZ2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvRG93bmxvYWQ9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbWFnZSBzaG91bGQgZG93bmxvYWQgYWZ0ZXIgdGhlIGNyb3BwaW5nIGlzIGNvbXBsZXRlIG9yIG5vdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPW51bGxdIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBwcm9wZXJ0eSBvZiBpbWFnZXMgb3JpZ2luYXRpbmcgZnJvbSBleHRlcm5hbCBzb3VyY2VzLlxyXG4gKiBcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudD59IFJldHVybnMgdGhlIG5ld2x5IGZvcm1hdHRlZCBpbWFnZSBhcyBhbiBpbWFnZSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnQocGF0aDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZywgb3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQgfCBFcnJvcj4ge1xyXG5cclxuXHRjb25zdCBmaWxlSW5mbzogRmlsZUluZm8gPSBleHRyYWN0RmlsZUluZm8ocGF0aCk7XHJcblxyXG5cdGNvbnN0IF9vcHRpb25zOiBHZW5lcmFsT3B0aW9ucyA9IG5ldyBHZW5lcmFsT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0Y29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xyXG5cclxuXHRjb25zdCBub25UcmFuc3BhcmVudEZvcm1hdHMgPSBbJ2pwZycsICdqcGVnJywgJ2dpZicsICdibXAnXTtcclxuXHJcblx0dHJ5IHtcclxuXHJcblx0XHRjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShwYXRoLCBfb3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG5cdFx0Y2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuXHRcdGlmIChub25UcmFuc3BhcmVudEZvcm1hdHMuaW5jbHVkZXMoZm9ybWF0KSkge1xyXG5cclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcclxuXHRcdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuXHRcdHRyeSB7XHJcblxyXG5cdFx0XHRjb25zdCBmID0gZm9ybWF0ID09PSAncG5nJyA/ICdwbmcnIDogJ2pwZWcnO1xyXG5cclxuXHRcdFx0Y29uc3QgY29udmVydGVkSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChgaW1hZ2UvJHtmfWApKTtcclxuXHJcblx0XHRcdGlmIChfb3B0aW9ucy5hdXRvZG93bmxvYWQpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmhyZWYgPSBjb252ZXJ0ZWRJbWFnZS5zcmM7XHJcblx0XHRcdFx0aW1hZ2VMaW5rLmRvd25sb2FkID0gZmlsZUluZm8ubmFtZSArICcuJyArIGZvcm1hdDtcclxuXHJcblx0XHRcdFx0aW1hZ2VMaW5rLmNsaWNrKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gY29udmVydGVkSW1hZ2U7XHJcblxyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIGltYWdlLCBwbGVhc2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBwYXRoIGlzIHZhbGlkJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0Y2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHR9XHJcblxyXG59Il19