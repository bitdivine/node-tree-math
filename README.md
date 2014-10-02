node-tree-math
==============

Store, increment &amp;&amp; manipulate counts in a tree structure.

# Installation:

npm install tree-math

# Usage

    var tree = require('tree-math');
    
    var x =
    { y:
      { z: 99
      , zz:27
      }
      w:4
    };
    
    tree.setPath(x,[3,'red','bulls'], 5);
    tree.getPath(x,[3,'red','bulls']);
    tree.incrementPath(x,[3,'red','bulls'], 1);
    tree.find(x,function(path,val){console.log(path,'->',val)}, {maxdepth:4, prefix:['y']});



