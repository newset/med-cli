/**
 * @file  lib/generate.js
 * @author  newset (luojieyy@gmail.com)
 * @copyright  2017 | Medlinker
 * @date  2017-03-28
 */	
var path = require('path')
var async = require('async')
// var ask = require('./ask')
var Metalsmith = require('metalsmith');
var render = require('consolidate').handlebars.render

module.exports = function genertate (name, src, dest, done) {
  var metalsmith = Metalsmith(path.join(src, 'templates'))
	
  metalsmith
    .use(renderTemplateFiles)
    .clean(false)
    .source('.') // start from template root instead of `./src` which is Metalsmith's default for `source`
    .destination(dest)
    .build(function (err) {
      done(err)
    })
}

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function renderTemplateFiles (files, metalsmith, done) {
  var keys = Object.keys(files)
  var metalsmithMetadata = metalsmith.metadata()
  async.each(keys, function (file, next) {
    var str = files[file].contents.toString()
    // do not attempt to render files that do not have mustaches
    if (!/{{([^{}]+)}}/g.test(str)) {
      return next()
    }
    render(str, metalsmithMetadata, function (err, res) {
      if (err) return next(err)
      files[file].contents = new Buffer(res)
      next()
    })
  }, done)
}


