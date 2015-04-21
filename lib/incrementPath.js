module.exports = function incrementPath(tree, path, value, adder){
	var depth = path.length -1;
	for(var i = 0; i<depth; i++){
		if (typeof tree[node] === 'undefined') {
			tree[node] = {};
		}
		tree = tree[node];
	}
	var last = path[depth];
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
