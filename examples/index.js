var fs = require('fs');

var files = ['rts-common.js', 'rts-plain.js'];

var load = function(name) { return fs.readFileSync(__dirname + "/" + name, 'utf8') };

var vm = require('vm')

files.map(function (name) {
  vm.runInThisContext(load(name), name);
});

$hs.loadPaths.push(__dirname + "/");

exports.$hs = $hs;

$hs.init();
