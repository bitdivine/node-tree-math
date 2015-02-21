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
    var prefix   = options.prefix ? options.prefix : [];
    var maxdepth = options.maxdepth === undefined? -1: options.maxdepth;
    return flatten(data, callback, prefix, maxdepth);
}

function flatten(data, callback, prefix, maxdepth) {
    if (maxdepth === 0){
        return callback(prefix, data);
    } else {
        var path, val, ans;
        for (var key in data) {
            path = prefix.slice(0);
            path.push(key);
            val = data[key];
            ans = (typeof(val) === 'object')
                ? flatten(val, callback, path, maxdepth-1)
                : callback(path, val);
            if (ans) return ans;
        }
    }
}

