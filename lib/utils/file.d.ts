import FileInfo from '../interfaces/FileInfo';
/**
 * Extract the name of the file and the file's extension from the provided file path.
 *
 * @param {string} path The user provided path to the image file.
 *
 * @returns {Object} Returns an object with the file name and extension as properties and the results as the values.
 */
export declare function extractFileInfo(path: string): FileInfo;
