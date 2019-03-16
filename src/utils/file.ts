'use strict'

/// <reference path="../interfaces/FileInfo.ts" />

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
export function extractFileInfo(path: string): FileInfo {

  let nameIndex: number = 0;
  let extIndex: number = 0;

  const fileInfo: FileInfo = { name: '', ext: '' };

  if (path.lastIndexOf('/') > -1) nameIndex = path.lastIndexOf('/');

  extIndex = path.lastIndexOf('.');

  fileInfo.name = path.slice(nameIndex + 1, extIndex);
  fileInfo.ext = path.slice(extIndex + 1);

  return fileInfo;

}