'use strict'; /// <reference path="../interfaces/FileInfo.ts" />

/**
 * Utility methods that extract file names and information from image
 * files.
 * 
 * @author Robert Corponoi
 * 
 * @version 2.0.0
 */

/**
 * Extract the name of the file and the file's extension from the provided file path.
 * 
 * @since 1.0.0
 * 
 * @param {string} path The user provided path to the image file.
 * 
 * @returns {Object} Returns an object with the file name and extension as properties and the results as the values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractFileInfo = extractFileInfo;

function extractFileInfo(path) {
  var nameIndex = 0;
  var extIndex = 0;
  var fileInfo = {
    name: '',
    ext: ''
  };
  if (path.lastIndexOf('/') > -1) nameIndex = path.lastIndexOf('/');
  extIndex = path.lastIndexOf('.');
  fileInfo.name = path.slice(nameIndex + 1, extIndex);
  fileInfo.ext = path.slice(extIndex + 1);
  return fileInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWxlLnRzIl0sIm5hbWVzIjpbImV4dHJhY3RGaWxlSW5mbyIsInBhdGgiLCJuYW1lSW5kZXgiLCJleHRJbmRleCIsImZpbGVJbmZvIiwibmFtZSIsImV4dCIsImxhc3RJbmRleE9mIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7OztBQVNPLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQWlEO0FBRXRELE1BQUlDLFNBQWlCLEdBQUcsQ0FBeEI7QUFDQSxNQUFJQyxRQUFnQixHQUFHLENBQXZCO0FBRUEsTUFBTUMsUUFBa0IsR0FBRztBQUFFQyxJQUFBQSxJQUFJLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxHQUFHLEVBQUU7QUFBakIsR0FBM0I7QUFFQSxNQUFJTCxJQUFJLENBQUNNLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBQyxDQUE3QixFQUFnQ0wsU0FBUyxHQUFHRCxJQUFJLENBQUNNLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWjtBQUVoQ0osRUFBQUEsUUFBUSxHQUFHRixJQUFJLENBQUNNLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWDtBQUVBSCxFQUFBQSxRQUFRLENBQUNDLElBQVQsR0FBZ0JKLElBQUksQ0FBQ08sS0FBTCxDQUFXTixTQUFTLEdBQUcsQ0FBdkIsRUFBMEJDLFFBQTFCLENBQWhCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0UsR0FBVCxHQUFlTCxJQUFJLENBQUNPLEtBQUwsQ0FBV0wsUUFBUSxHQUFHLENBQXRCLENBQWY7QUFFQSxTQUFPQyxRQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvRmlsZUluZm8udHNcIiAvPlxuXG4vKipcbiAqIFV0aWxpdHkgbWV0aG9kcyB0aGF0IGV4dHJhY3QgZmlsZSBuYW1lcyBhbmQgaW5mb3JtYXRpb24gZnJvbSBpbWFnZVxuICogZmlsZXMuXG4gKiBcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pXG4gKiBcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFuZCB0aGUgZmlsZSdzIGV4dGVuc2lvbiBmcm9tIHRoZSBwcm92aWRlZCBmaWxlIHBhdGguXG4gKiBcbiAqIEBzaW5jZSAxLjAuMFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgdXNlciBwcm92aWRlZCBwYXRoIHRvIHRoZSBpbWFnZSBmaWxlLlxuICogXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBmaWxlIG5hbWUgYW5kIGV4dGVuc2lvbiBhcyBwcm9wZXJ0aWVzIGFuZCB0aGUgcmVzdWx0cyBhcyB0aGUgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZpbGVJbmZvKHBhdGg6IHN0cmluZyk6IEZpbGVJbmZvIHtcblxuICBsZXQgbmFtZUluZGV4OiBudW1iZXIgPSAwO1xuICBsZXQgZXh0SW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3QgZmlsZUluZm86IEZpbGVJbmZvID0geyBuYW1lOiAnJywgZXh0OiAnJyB9O1xuXG4gIGlmIChwYXRoLmxhc3RJbmRleE9mKCcvJykgPiAtMSkgbmFtZUluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xuXG4gIGV4dEluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLicpO1xuXG4gIGZpbGVJbmZvLm5hbWUgPSBwYXRoLnNsaWNlKG5hbWVJbmRleCArIDEsIGV4dEluZGV4KTtcbiAgZmlsZUluZm8uZXh0ID0gcGF0aC5zbGljZShleHRJbmRleCArIDEpO1xuXG4gIHJldHVybiBmaWxlSW5mbztcblxufSJdfQ==