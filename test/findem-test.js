#!/usr/bin/env node

var compare = require('./_compare')[process.argv[2]||'print'];
var path    = require('path');

var data    = {dogems:{a:{b:[1,2,3],c:[5,6,7]}}};
var find    = require('../lib/find');

compare
( find.bind(null, data)
, path.join(__dirname,'find-plain.json')
);

compare
( find.bind(null, data, {maxdepth:3})
, path.join(__dirname, 'find-maxdepth.json')
);

compare
( find.bind(null, data, {prefix:['dogems']})
, path.join(__dirname, 'find-prefix.json')
);
