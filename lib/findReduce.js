module.exports = findReduce;
var find = require('./find');
function findReduce(data,options,callback,initial){
    var d,o,c,i;
    if (typeof(options)==='function')	{d = data; o = {};      c = options;  i = callback;}
    else				{d = data; o = options; c = callback; i = initial;}

    find(d,o,function(path,val){i=c(path,val, i);});
    return i;
}
