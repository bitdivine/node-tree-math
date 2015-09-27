module.exports = function getPath(thing, path){
    return path.reduce(function(s,n){if(s!==undefined)return s[n];},thing);
};
