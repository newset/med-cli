/**
 * @author luojie.insane
 * @email luojie@medlinker.com
 * @create date 2017-06-08 07:31:03
 * @modify date 2017-06-08 07:31:03
 * @desc [description]
 */
var less = require("less");
var fs = require('fs-extra')
var chalk = require("chalk");

function compile(file, folder) {
    var str = fs.readFileSync(file, 'utf8');
    var fileDir = file.replace(/[^\/]+\.less$/, "")
    less.render(str, {
        paths: ['.', './lib', folder, fileDir]
    }, function(e, output) {
        if (e) {
            console.log(chalk.red(e));
            return
        }
        var dest = file.replace(".less", ".css");
        fs.outputFileSync(dest, output.css);
    });
}

module.exports = {
    compile: compile
}