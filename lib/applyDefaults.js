var find          = require('./find')
  , incrementPath = require('./incrementPath');

module.exports = function fillDefaults(tree, defaults) {
	find(defaults, function(path, val){
		incrementPath(tree, path, val, function(a,b){return typeof(a) === 'undefined'? b : a;});
	});
	// No return value - this does have a side effect!
};
