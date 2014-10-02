var find          = require('./find'),
    incrementPath = require('./incrementPath');

module.exports = function(a,b, adder){
    find(b,function(path, val){ incrementPath(a, path, val, adder); });
    return a;
};


