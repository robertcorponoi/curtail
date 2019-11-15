'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udmVydC50cyJdLCJuYW1lcyI6WyJjb252ZXJ0IiwicGF0aCIsImZvcm1hdCIsIm9wdGlvbnMiLCJmaWxlSW5mbyIsIl9vcHRpb25zIiwiR2VuZXJhbE9wdGlvbnMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwibm9uVHJhbnNwYXJlbnRGb3JtYXRzIiwiY3Jvc3NPcmlnaW4iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5jbHVkZXMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImYiLCJ0b0RhdGFVUkwiLCJjb252ZXJ0ZWRJbWFnZSIsImF1dG9kb3dubG9hZCIsImltYWdlTGluayIsImhyZWYiLCJzcmMiLCJkb3dubG9hZCIsIm5hbWUiLCJjbGljayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXTyxTQUFlQSxPQUFmLENBQXVCQyxJQUF2QixFQUFxQ0MsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEQyxVQUFBQSxPQUFyRCwyREFBdUUsRUFBdkU7QUFFQUMsVUFBQUEsUUFGQSxHQUVxQiwyQkFBZ0JILElBQWhCLENBRnJCO0FBSUFJLFVBQUFBLFFBSkEsR0FJMkIsSUFBSUMsMEJBQUosQ0FBbUJILE9BQW5CLENBSjNCO0FBTUFJLFVBQUFBLE1BTkEsR0FNNEJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQU41QjtBQU9BQyxVQUFBQSxHQVBBLEdBT2dDSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FQaEM7QUFTQUMsVUFBQUEscUJBVEEsR0FTd0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQVR4QjtBQUFBO0FBQUE7QUFBQSwrQ0FhZSxxQkFBVVgsSUFBVixFQUFnQkksUUFBUSxDQUFDUSxXQUF6QixDQWJmOztBQUFBO0FBYUNDLFVBQUFBLEtBYkQ7QUFlTFAsVUFBQUEsTUFBTSxDQUFDUSxLQUFQLEdBQWVELEtBQUssQ0FBQ0MsS0FBckI7QUFDQVIsVUFBQUEsTUFBTSxDQUFDUyxNQUFQLEdBQWdCRixLQUFLLENBQUNFLE1BQXRCOztBQUVBLGNBQUlKLHFCQUFxQixDQUFDSyxRQUF0QixDQUErQmYsTUFBL0IsQ0FBSixFQUE0QztBQUUzQ1EsWUFBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FSLFlBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJaLE1BQU0sQ0FBQ1EsS0FBMUIsRUFBaUNSLE1BQU0sQ0FBQ1MsTUFBeEM7QUFFQTs7QUFFRE4sVUFBQUEsR0FBRyxDQUFDVSxTQUFKLENBQWNOLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUF6Qks7QUE2QkVPLFVBQUFBLENBN0JGLEdBNkJNbkIsTUFBTSxLQUFLLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkIsTUE3QmpDO0FBQUE7QUFBQSwrQ0ErQnlCLHFCQUFVSyxNQUFNLENBQUNlLFNBQVAsaUJBQTBCRCxDQUExQixFQUFWLENBL0J6Qjs7QUFBQTtBQStCRUUsVUFBQUEsY0EvQkY7O0FBaUNKLGNBQUlsQixRQUFRLENBQUNtQixZQUFiLEVBQTJCO0FBRXBCQyxZQUFBQSxTQUZvQixHQUVXakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBRlg7QUFJMUJnQixZQUFBQSxTQUFTLENBQUNDLElBQVYsR0FBaUJILGNBQWMsQ0FBQ0ksR0FBaEM7QUFDQUYsWUFBQUEsU0FBUyxDQUFDRyxRQUFWLEdBQXFCeEIsUUFBUSxDQUFDeUIsSUFBVCxHQUFnQixHQUFoQixHQUFzQjNCLE1BQTNDO0FBRUF1QixZQUFBQSxTQUFTLENBQUNLLEtBQVY7QUFFQTs7QUExQ0csMkNBNENHUCxjQTVDSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FpREcsSUFBSVEsS0FBSixDQUFVLG9GQUFWLENBakRIOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0F3REUsSUFBSUEsS0FBSixDQUFVLG9GQUFWLENBeERGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgRmlsZUluZm8gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWxlSW5mbyc7XHJcblxyXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuLi91dGlscy9sb2FkJztcclxuaW1wb3J0IHsgZXh0cmFjdEZpbGVJbmZvIH0gZnJvbSAnLi4vdXRpbHMvZmlsZSc7XHJcblxyXG5pbXBvcnQgR2VuZXJhbE9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucy9HZW5lcmFsT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogQ29udmVydCBhbiBpbWFnZSBmcm9tIG9uZSBmb3JtYXQgdG8gYW5vdGhlciBmb3JtYXQuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gY29udmVydCB0byBhbm90aGVyIGZvcm1hdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBUaGUgbmV3IGZvcm1hdCBmb3IgdGhlIGltYWdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rvd25sb2FkPWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGRvd25sb2FkIGFmdGVyIHRoZSBjcm9wcGluZyBpcyBjb21wbGV0ZSBvciBub3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1udWxsXSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIG9yaWdpbmF0aW5nIGZyb20gZXh0ZXJuYWwgc291cmNlcy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSBSZXR1cm5zIHRoZSBuZXdseSBmb3JtYXR0ZWQgaW1hZ2UgYXMgYW4gaW1hZ2UgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0KHBhdGg6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgRXJyb3I+IHtcclxuXHJcblx0Y29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0gZXh0cmFjdEZpbGVJbmZvKHBhdGgpO1xyXG5cclxuXHRjb25zdCBfb3B0aW9uczogR2VuZXJhbE9wdGlvbnMgPSBuZXcgR2VuZXJhbE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuXHJcblx0Y29uc3Qgbm9uVHJhbnNwYXJlbnRGb3JtYXRzID0gWydqcGcnLCAnanBlZycsICdnaWYnLCAnYm1wJ107XHJcblxyXG5cdHRyeSB7XHJcblxyXG5cdFx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UocGF0aCwgX29wdGlvbnMuY3Jvc3NPcmlnaW4pO1xyXG5cclxuXHRcdGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcblx0XHRpZiAobm9uVHJhbnNwYXJlbnRGb3JtYXRzLmluY2x1ZGVzKGZvcm1hdCkpIHtcclxuXHJcblx0XHRcdGN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XHJcblx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuXHJcblx0XHR0cnkge1xyXG5cclxuXHRcdFx0Y29uc3QgZiA9IGZvcm1hdCA9PT0gJ3BuZycgPyAncG5nJyA6ICdqcGVnJztcclxuXHJcblx0XHRcdGNvbnN0IGNvbnZlcnRlZEltYWdlID0gYXdhaXQgbG9hZEltYWdlKGNhbnZhcy50b0RhdGFVUkwoYGltYWdlLyR7Zn1gKSk7XHJcblxyXG5cdFx0XHRpZiAoX29wdGlvbnMuYXV0b2Rvd25sb2FkKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGltYWdlTGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5ocmVmID0gY29udmVydGVkSW1hZ2Uuc3JjO1xyXG5cdFx0XHRcdGltYWdlTGluay5kb3dubG9hZCA9IGZpbGVJbmZvLm5hbWUgKyAnLicgKyBmb3JtYXQ7XHJcblxyXG5cdFx0XHRcdGltYWdlTGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNvbnZlcnRlZEltYWdlO1xyXG5cclxuXHRcdH1cclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBFcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZSwgcGxlYXNlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcGF0aCBpcyB2YWxpZCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdHJldHVybiBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2UsIHBsZWFzZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgdmFsaWQnKTtcclxuXHJcblx0fVxyXG5cclxufSJdfQ==