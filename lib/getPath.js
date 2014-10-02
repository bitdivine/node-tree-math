module.exports = function(thing, path){
    path.map(function(bit){
        if (typeof(thing) !== 'undefined') {
            thing = thing[bit];
        }
    });
    return thing;
};
