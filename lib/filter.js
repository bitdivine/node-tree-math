// For the benefit of systems that like key/value pairs, convert a tree of dictionaries into a list of path/leaf pairs.

/**
 * callback(path as array, val)
 */
module.exports = filter;
var find    = require('./find')
  , setPath = require('./setPath');

function filter(data, options, callback) {
    var ans = {};
    find(data,options,function(path,val){if (callback(path,val))setPath(path,val);});
    return ans;
}
