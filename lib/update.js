var find          = require('./find')
  , incrementPath = require('./incrementPath');

module.exports = function fillDefaults(tree, overrides) {
	find(overrides, function(path, val){
		incrementPath(tree, path, val, function(b,a){return typeof(a) === 'undefined'? b : a;});
	});
	// No return value - this does have a side effect!
};
