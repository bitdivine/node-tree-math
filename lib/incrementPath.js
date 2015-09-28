module.exports = function incrementPath(tree, path, value, adder){
	var depth = path.length -1;
	var node;
	var increment = value===undefined?1:value;
	for(var i = 0; i<depth; i++){
		node = path[i];
		if (typeof tree[node] === 'undefined') {
			tree[node] = {};
		}
		tree = tree[node];
	}
	var last = path[depth];
	if (typeof tree[last] === 'undefined') {
		tree[last]  = increment;
	} else {
		if (adder) {
			tree[last] = adder(tree[last], increment);
		} else {
			tree[last] += increment;
		}
	}
};
