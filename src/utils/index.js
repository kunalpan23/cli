const fs = require('fs');

const isDirectory = source => fs.lstatSync(source).isDirectory();

const isObject = item => item.constructor === Object;

const createDirectory = path => fs.mkdirSync(path);

const readDirectory = path => fs.readdirSync(path);

const writeFile = (path, content, opts) =>
    fs.writeFileSync(path, content, opts);

module.exports = {
    isDirectory,
    isObject,
    createDirectory,
    readDirectory,
    writeFile
};
