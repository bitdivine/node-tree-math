module.exports = function incrementPath(tree, key, value, adder){
	if (typeof tree[key] === 'undefined') {
		tree[key]  = value;
	} else {
		if (adder) {
			tree[key] = adder(tree[key], value);
		} else {
			tree[key] += value;
		}
	}
};
