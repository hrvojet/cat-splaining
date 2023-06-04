import * as fs from 'fs';

const fileToDel = './plain-index.html';

fs.unlinkSync(fileToDel);
console.log(fileToDel + ' deleted');