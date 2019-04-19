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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy92YWxpZGF0ZS50cyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUxvY2F0aW9uIiwieCIsInkiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiRXJyb3IiLCJ2YWxpZGF0ZURpbWVuc2lvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNBLGdCQUFULENBQTBCQyxDQUExQixFQUFxQ0MsQ0FBckMsRUFBZ0RDLEtBQWhELEVBQWtGO0FBRXhGLE1BQUlGLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBR0UsS0FBSyxDQUFDQyxLQUFuQixJQUE0QkYsQ0FBQyxHQUFHLENBQWhDLElBQXFDQSxDQUFDLEdBQUdDLEtBQUssQ0FBQ0UsTUFBbkQsRUFBMkQsTUFBTSxJQUFJQyxLQUFKLENBQVUsTUFBVixDQUFOO0FBRTNELFNBQU8sSUFBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0Msa0JBQVQsQ0FBNEJOLENBQTVCLEVBQXVDQyxDQUF2QyxFQUFrREUsS0FBbEQsRUFBaUVDLE1BQWpFLEVBQWlGRixLQUFqRixFQUFtSDtBQUV6SCxNQUFJQyxLQUFLLEdBQUlELEtBQUssQ0FBQ0MsS0FBTixHQUFjSCxDQUF2QixJQUE2QkksTUFBTSxHQUFJRixLQUFLLENBQUNFLE1BQU4sR0FBZUgsQ0FBMUQsRUFBOEQsT0FBTyxLQUFQO0FBRTlELFNBQU8sSUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQ2hlY2tzIHRoZSB1c2VyIGlucHV0IGFsb25nIHdpdGggdGhlIGltYWdlIGRpbWVuc2lvbnMgdG8gbWFrZSBzdXJlIHRoYXRcbiAqIHRoZSBpbnB1dCBjYW4gcHJvZHVjdCBhIHZhbGlkIHJlc3VsdC5cbiAqIFxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cbiAqIFxuICogQHZlcnNpb24gMC4xLjBcbiAqL1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGF0IGxvY2F0aW9uIGNob3NlbiBvbiB0aGUgaW1hZ2UgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlXG4gKiBpbWFnZS5cbiAqIFxuICogQHNpbmNlIDAuMS4wXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGxvY2F0aW9uIGNob3NlbiBieSB0aGUgdXNlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGxvY2F0aW9uIGNob3NlbiBieSB0aGUgdXNlci5cbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgVGhlIGltYWdlIGVsZW1lbnQgYmVpbmcgZXZhbHVhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMb2NhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBib29sZWFuIHtcblxuXHRpZiAoeCA8IDAgfHwgeCA+IGltYWdlLndpZHRoIHx8IHkgPCAwIHx8IHkgPiBpbWFnZS5oZWlnaHQpIHRocm93IG5ldyBFcnJvcignc2RmcycpO1xuXG5cdHJldHVybiB0cnVlO1xuXG59XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoYXQgdGhlIGRpbWVuc2lvbnMgY2hvc2VuIGJ5IHRoZSB1c2VyIGFsb25nIHdpdGggdGhlIGxvY2F0aW9uXG4gKiBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgaW1hZ2UuXG4gKiBcbiAqIEBzaW5jZSAwLjEuMFxuICogXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBsb2NhdGlvbiBjaG9zZW4gYnkgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBsb2NhdGlvbiBjaG9zZW4gYnkgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBuZXcgaW1hZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIG5ldyBpbWFnZS5cbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgVGhlIGltYWdlIGVsZW1lbnQgYmVpbmcgZXZhbHVhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEaW1lbnNpb25zKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBib29sZWFuIHtcblxuXHRpZiAod2lkdGggPiAoaW1hZ2Uud2lkdGggLSB4KSB8fCBoZWlnaHQgPiAoaW1hZ2UuaGVpZ2h0IC0geSkpIHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcblxufSJdfQ==