// For the benefit of systems that like key/value pairs, convert a tree of dictionaries into a list of path/leaf pairs.

/**
 * callback(path as array, val)
 */
module.exports = find;
find.worker = flatten;

function find(data, options, callback) {
    if (typeof(options)==='function'){
        callback = options;
        options = {};
    }
    var prefix   = options.prefix ? prefix : [];
    var maxdepth = options.maxdepth === undefined? -1: options.maxdepth;
    flatten(data, callback, prefix, maxdepth);
}

function flatten(data, callback, prefix, maxdepth) {
    if (maxdepth === 0){
        callback(prefix, data);
    } else {
        var path, val;
        for (var key in data) {
            path = prefix.slice(0);
            path.push(key);
            val = data[key];
            if (typeof(val) === 'object') {
                flatten(val, callback, path, maxdepth-1);
            } else {
                callback(path, val);
            }
        }
    }
};

