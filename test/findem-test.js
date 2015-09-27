#!/usr/bin/env node

var compare = require('./_compare')[process.argv[2]||'print'];
var path    = require('path');
var assert  = require('assert');

var data    = {dogems:{a:{b:[1,2,3],c:[5,6,7]}}};
var find    = require('../lib/find');
var getPath = require('../lib/getPath');

console.log("Testing find:");
compare
( find.bind(null, data)
, path.join(__dirname,'find-plain.json')
);

console.log("Testing find:");
compare
( find.bind(null, data, {maxdepth:3})
, path.join(__dirname, 'find-maxdepth.json')
);

console.log("Testing find:");
compare
( find.bind(null, data, {prefix:['dogems']})
, path.join(__dirname, 'find-prefix.json')
);

console.log("Testing getPath:");
assert	(	JSON.stringify(getPath(data, 'dogems.a.c'.split('.')))
	===	"[5,6,7]"
	);
console.log("OK");
