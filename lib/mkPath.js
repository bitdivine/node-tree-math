module.exports = function(dict, path){
	path.forEach(function(next){
		if (typeof dict[next] === 'undefined') {
			dict[next] = {};
		}
		dict = dict[next];
	});
	return dict;
};
