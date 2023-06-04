let ls = require('live-server');

try {
    process.chdir('./src');
    console.log('New directory: ' + process.cwd());
}
catch (err) {
    console.error('chdir: ' + err);
}

const params = {
    port: 4200,
    file: 'index.html',
    open: false
}

ls.start(params);
