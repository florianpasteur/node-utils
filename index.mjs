const fs = require('fs/promises');
const path = require('path');

export async function readJson(path) {
    return JSON.parse(await fs.readFile(path, 'utf8'));
}

export async function writeJson(path, data, options = {formatted: true}) {
    if (options.formatted) {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
    } else {
        await fs.writeFile(path, JSON.stringify(data));
    }
}
