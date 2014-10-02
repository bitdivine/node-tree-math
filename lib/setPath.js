module.exports = function(dict, path, val){
    var last = path.pop();
    var next;
    while(path.length > 0) {
        next = path.shift(1);
        if (typeof dict[next] === 'undefined') {
            dict[next] = {};
        }
        dict = dict[next];
    }
    dict[last] = val;
};
