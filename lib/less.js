var less = require("less");

function compile(file, folder) {
	var str = fs.readFileSync(file, 'utf8');
	var fileDir = file.replace(/[^\/]+\.less$/, "")
	less.render(str, {
		paths: ['.', './lib', folder, fileDir]
	}, function (e, output) {
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