quadtree
========

This is a personal project to experiment with the quadtree data structure.

Use Example:
```javascript
// initialize a new quadtree with starting coordinates
var quad = new Quad(1,2)

// insert new coordinate points
quad.insert(2,3)
quad.insert(-1,2)

// check if a given point exists in the tree
quad.contains(-1,2) //=> true

//check a given sector for points
quad.allInZone([2,-2],[2,2],[-2,-2],[-2,2]) //=> [[-1,2]]

