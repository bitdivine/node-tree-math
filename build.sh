
# For this you will need to: npm install -g browserify uglify-js
(
echo "tm=(function(){var require;"
browserify -r ./lib/index.js:tm | uglifyjs --compress drop_console --mangle -r "require,tm,$(node -e "console.log(Object.keys(require('./lib/index.js')).join(','))")" -- - 
echo "return require('tm');})();"
) > tm.js
