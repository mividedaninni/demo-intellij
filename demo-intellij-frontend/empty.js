const fs = require('fs')
const {resolve} = require('path');
const dir = resolve(__dirname, 'dist');
const filePath = resolve(__dirname, 'dist', 'dummy.txt');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.closeSync(fs.openSync(filePath, 'w'))