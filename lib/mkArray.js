#!/usr/bin/env node
module.exports = mkArray;
function mkArray(len,fill){
	return Array.apply(null, new Array(len)).map(function(){return fill;});
}

if (!module.parent){
	console.log(mkArray(5,"Gimme"));
	console.log(mkArray(4,"some"));
	console.log(mkArray(3,"more"));
	console.log(mkArray(2,"funk"));
	console.log(mkArray(1,"rock"));
	console.log(mkArray(20,0));
}
