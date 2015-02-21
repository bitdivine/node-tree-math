var assert = require('assert')
  , fs     = require('fs');
module.exports =
{	print: print
,	save:  save
,	compare: compare
};

function print(command, filename){
	command(console.log);
};

function save(command, filename){
	var parts = [];
	command(function(){parts.push(arguments);});
	fs.writeFileSync(filename, JSON.stringify(parts));
}

function compare(command, filename){
	var parts = [];
	command(function(){parts.push(arguments);});
	var testdata = require(filename);
	assert(JSON.stringify(parts)===JSON.stringify(testdata));
	console.log(filename,'OK');
}
