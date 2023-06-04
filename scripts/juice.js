let juice = require('juice');
let fs = require('fs');

const htmlPath = '../public/index.html';
const cssPath = '../public/style.css';

/*juice.juiceFile(
    htmlPath,
    {
        extraCss: cssPath
    },
    function(err, html){
        console.log(err);
        console.log(html);
});*/

try {
    const htmlStr = fs.readFileSync(htmlPath);
    const cssStr = fs.readFileSync(cssPath);
    const ht = juice.inlineContent(htmlStr.toString(), cssStr.toString(), {applyStyleTags: false});
    console.log(ht);
    fs.writeFileSync('../index.html', ht, function (err) {
        if (err) {
            console.log('Error writing to file!');
            console.error(err);
        }
    });
} catch (err) {
    console.error(err);
}
