'use strict'

/**
 * The functions in extract deal with getting information from the
 * src path such as file name or file extension.
 * 
 * @since 1.0.0
 */

 /**
  * Extract the file name and extension from the provided src path.
  * 
  * @since 1.0.0
  * 
  * @param {string} src The path to the image file.
  * 
  * @returns {Object} An object containing the file's name and extension.
  */
export function getFileInfo(src) {

  let nameIndex = 0;
  let extIndex = 0;

  let fileInfo = {
    name: null,
    ext: null
  };

  if (src.lastIndexOf('/') > -1) nameIndex = src.lastIndexOf('/');

  extIndex = src.lastIndexOf('.');

  fileInfo.name = src.slice(nameIndex + 1, extIndex);
  fileInfo.ext = src.slice(extIndex + 1);

  return fileInfo;

}