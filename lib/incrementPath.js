module.exports = function incrementPath(tree, path, value, adder){
    var last = path.pop();
    path
    .map(function(node){
        if (typeof tree[node] === 'undefined') {
            tree[node] = {};
        }
        tree = tree[node];
    });
    if (typeof tree[last] === 'undefined') {
        tree[last]  = value;
    } else {
        if (adder) {
            tree[last] = adder(tree[last], value);
        } else {
            tree[last] += value;
        }
    }
};

