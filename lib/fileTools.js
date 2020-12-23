/**
 * Module dependencies
 */
const fs = require('fs');
const path = require('path');
function createDirIfIsNotDefined(dirPath, dirName, cb) {
    if (!fs.existsSync(dirPath + '/' + dirName)) {
        fs.mkdirSync(dirPath + '/' + dirName);
    }

    cb();
}

function writeFile(path, contents, mode, cb) {
    fs.writeFile(path, contents, { mode: mode || 0666, encoding: 'utf8' }, function (err) {
        if (err) { throw err; }
        cb();
    });
}

function loadTemplateSync(name) {
    return fs.readFileSync(path.join(__dirname, '..', 'templates', name), 'utf8');
}

module.exports = {
    createDirIfIsNotDefined: createDirIfIsNotDefined,
    writeFile: writeFile,
    loadTemplateSync: loadTemplateSync
};
