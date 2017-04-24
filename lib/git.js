/**
 * @file  lib/git.js
 * @author  newset (luojieyy@gmail.com)
 * @copyright  2017 | Medlinker
 * @date  2017-04-24
 */
var exec_cmd = require('child_process').exec;
var exec = function(command) {
	return new Promise(function(resolve, reject) {
		exec_cmd(command, function(err, stdout, stderr){
			if (err) {
				return reject(stderr);
			}

			resolve(stdout);
		})
	})
}

module.exports = {
	commit: function() {
		return exec('git add .')
		.then(function(){
			return exec("git commit");
		})
		.then(function(){
			return exec("git push");
		});
	},
	exec: exec
}; 

