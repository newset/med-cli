/**
 * @file  lib/read.js
 * @author  newset (luojieyy@gmail.com)
 * @copyright  2017 | Medlinker
 * @date  2017-04-02
 */

const stdin = process.openStdin();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

module.exports = {
	readLine: function() {
		return this.read()
			.then(function(line) {
				rl.close();
				return line;
			})
	},
	read: function() {
		let last = null;
		return new Promise(function(resolve, reject) {
			rl.on("line", function(line) {
				resolve(line);
			})
		})
	}
};