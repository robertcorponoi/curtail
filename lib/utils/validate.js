'use strict';
/**
 * Checks the user input along with the image dimensions to make sure that
 * the input can product a valid result.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 0.1.0
 */

/**
 * Make sure that location chosen on the image is within the bounds of the
 * image.
 * 
 * @since 0.1.0
 * 
 * @param {number} x The x location chosen by the user.
 * @param {number} y The y location chosen by the user.
 * @param {HTMLImageElement} image The image element being evaluated.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLocation = validateLocation;
exports.validateDimensions = validateDimensions;

function validateLocation(x, y, image) {
  if (x < 0 || x > image.width || y < 0 || y > image.height) throw new Error('sdfs');
  return true;
}
/**
 * Make sure that the dimensions chosen by the user along with the location
 * is within the bounds of the image.
 * 
 * @since 0.1.0
 * 
 * @param {number} x The x location chosen by the user.
 * @param {number} y The y location chosen by the user.
 * @param {number} width The width of the new image.
 * @param {number} height The height of the new image.
 * @param {HTMLImageElement} image The image element being evaluated.
 */


function validateDimensions(x, y, width, height, image) {
  if (width > image.width - x || height > image.height - y) return false;
  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy92YWxpZGF0ZS50cyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUxvY2F0aW9uIiwieCIsInkiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiRXJyb3IiLCJ2YWxpZGF0ZURpbWVuc2lvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNBLGdCQUFULENBQTBCQyxDQUExQixFQUFxQ0MsQ0FBckMsRUFBZ0RDLEtBQWhELEVBQWtGO0FBRXhGLE1BQUlGLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBR0UsS0FBSyxDQUFDQyxLQUFuQixJQUE0QkYsQ0FBQyxHQUFHLENBQWhDLElBQXFDQSxDQUFDLEdBQUdDLEtBQUssQ0FBQ0UsTUFBbkQsRUFBMkQsTUFBTSxJQUFJQyxLQUFKLENBQVUsTUFBVixDQUFOO0FBRTNELFNBQU8sSUFBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0Msa0JBQVQsQ0FBNEJOLENBQTVCLEVBQXVDQyxDQUF2QyxFQUFrREUsS0FBbEQsRUFBaUVDLE1BQWpFLEVBQWlGRixLQUFqRixFQUFtSDtBQUV6SCxNQUFJQyxLQUFLLEdBQUlELEtBQUssQ0FBQ0MsS0FBTixHQUFjSCxDQUF2QixJQUE2QkksTUFBTSxHQUFJRixLQUFLLENBQUNFLE1BQU4sR0FBZUgsQ0FBMUQsRUFBOEQsT0FBTyxLQUFQO0FBRTlELFNBQU8sSUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogQ2hlY2tzIHRoZSB1c2VyIGlucHV0IGFsb25nIHdpdGggdGhlIGltYWdlIGRpbWVuc2lvbnMgdG8gbWFrZSBzdXJlIHRoYXRcclxuICogdGhlIGlucHV0IGNhbiBwcm9kdWN0IGEgdmFsaWQgcmVzdWx0LlxyXG4gKiBcclxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cclxuICogXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE1ha2Ugc3VyZSB0aGF0IGxvY2F0aW9uIGNob3NlbiBvbiB0aGUgaW1hZ2UgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlXHJcbiAqIGltYWdlLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBsb2NhdGlvbiBjaG9zZW4gYnkgdGhlIHVzZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGxvY2F0aW9uIGNob3NlbiBieSB0aGUgdXNlci5cclxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSBUaGUgaW1hZ2UgZWxlbWVudCBiZWluZyBldmFsdWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMb2NhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcblx0aWYgKHggPCAwIHx8IHggPiBpbWFnZS53aWR0aCB8fCB5IDwgMCB8fCB5ID4gaW1hZ2UuaGVpZ2h0KSB0aHJvdyBuZXcgRXJyb3IoJ3NkZnMnKTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBzdXJlIHRoYXQgdGhlIGRpbWVuc2lvbnMgY2hvc2VuIGJ5IHRoZSB1c2VyIGFsb25nIHdpdGggdGhlIGxvY2F0aW9uXHJcbiAqIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBpbWFnZS5cclxuICogXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggbG9jYXRpb24gY2hvc2VuIGJ5IHRoZSB1c2VyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBsb2NhdGlvbiBjaG9zZW4gYnkgdGhlIHVzZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIG5ldyBpbWFnZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBuZXcgaW1hZ2UuXHJcbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgVGhlIGltYWdlIGVsZW1lbnQgYmVpbmcgZXZhbHVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRGltZW5zaW9ucyh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogYm9vbGVhbiB7XHJcblxyXG5cdGlmICh3aWR0aCA+IChpbWFnZS53aWR0aCAtIHgpIHx8IGhlaWdodCA+IChpbWFnZS5oZWlnaHQgLSB5KSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxuXHJcbn0iXX0=