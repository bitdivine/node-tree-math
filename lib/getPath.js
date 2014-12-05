module.exports = function(thing, path){
    ans = thing;
    path.map(function(bit){
        if (typeof(ans) !== 'undefined') {
            ans = ans[bit];
        }
    });
    return ans;
};
