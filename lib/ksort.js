// Sort a dictionary by its keys.
module.exports = function ksort(dict){var ans={}; Object.keys(dict).sort().forEach(function(k){ans[k]=dict[k];});return ans;};

