let juice = require('juice');
const fs = require('fs');

const htmlPath = '../src/index.html';

try {
    process.chdir('./scripts');
    console.log('New directory: ' + process.cwd());
}
catch (err) {
    console.error('chdir: ' + err);
}

juice.juiceFile(
    htmlPath,
    {},
    function(err, html){
        if (err) {
            console.log(err);
        } else {
            fs.writeFileSync('../plain-index.html', html, function (err) {
                if (err) {
                    console.log('Error writing to file!');
                    console.error(err);
                }
            });
        }
    });

