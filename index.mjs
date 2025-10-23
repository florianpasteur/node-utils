import fs from 'fs/promises';


/**
 * Reads JSON data from a file.
 * @param path {string} - The file path to read the JSON data from.
 * @returns {Promise<any>}
 */
export async function readJson(path) {
    return JSON.parse(await fs.readFile(path, 'utf8'));
}

/**
 * Reads text data from a file.
 * @param path {string} - The file path to read the text data from.
 * @returns {Promise<string>}
 */
export async function readTextFile(path) {
    return (await fs.readFile(path, 'utf8')).toString();
}

/**
 * Writes JSON data to a file.
 * @param path {string} - The file path where the JSON data should be written.
 * @param data {any} - The JSON data to write to the file.
 * @param options {Object} - Options for writing the JSON data.
 * @param options.formatted {boolean} - If true, the JSON data will be pretty-printed with indentation.
 * @returns {Promise<void>}
 */
export async function writeJson(path, data, options = {formatted: true}) {
    if (options.formatted) {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
    } else {
        await fs.writeFile(path, JSON.stringify(data));
    }
}

