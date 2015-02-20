// I'm told that single letter vars and no comments are great.  Let's see how long it takes for someone to ask... :-)
module.exports = function(d,f){return Object.keys(d).reduce(function(a,k,i){a[k]=f(d[k],k,d);return a;},{});};
