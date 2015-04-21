module.exports = function(dict, path, val){
    var depth = path.length-1;
    var next;
    for (var i=0; i<depth; i++){
        next = path[i];
        if (typeof dict[next] === 'undefined') {
            dict[next] = {};
        }
        dict = dict[next];
    }
    dict[path[depth]] = val;
};
