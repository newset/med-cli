/**
 * @file  lib/git.js
 * @author  newset (luojieyy@gmail.com)
 * @copyright  2017 | Medlinker
 * @date  2017-04-24
 */
var exec_cmd = require('child_process').exec;
var input = require("./input");
var ora = require('ora')

var exec = function(command) {
	return new Promise(function(resolve, reject) {
		exec_cmd(command, function(err, stdout, stderr){
			if (err) {
				console.error(err);
				return reject(stderr);
			}

			console.info(stdout);
			resolve(stdout);
		})
	})
}

module.exports = {
	commit: function() {
		var spinner = ora('正在提交代码')

		return exec('git add .')
		.then(function(){
			console.log("填写提交信息:");
			return input.readLine()
		})
		.then(function(msg) {
			if (!msg) {
				return Promise.reject("提交信息不能为空");
			}
			// return exec(`git commit -m '${msg}'`);
		})
		.then(function(){
			spinner.start();
			// return exec("git push");
		})
		.then(function() {
			spinner.stop();
		})
		.catch(function(e) {
			console.log("命令异常退出", e);
			spinner.stop();
		});
	},
	exec: exec
}; 

