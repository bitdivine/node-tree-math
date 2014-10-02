// For the benefit of systems that like key/value pairs, convert a tree of dictionaries into a list of path/leaf pairs.

/**
 * callback(path as array, val)
 */
module.exports = function flatten(data, callback, prefix, maxdepth) {
    prefix = prefix ? prefix : [];
    if (typeof(maxdepth) === 'undefined') maxdepth = -1;
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

