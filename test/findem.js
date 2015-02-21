#!/usr/bin/env node

var data = {dogems:{a:{b:[1,2,3],c:[5,6,7]}}};
var find = require('../lib/find');

find(data, console.log);
find(data, {maxdepth:3}, console.log);
find(data, {prefix:['dogems']}, console.log);
