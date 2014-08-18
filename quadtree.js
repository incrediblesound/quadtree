var Quad = function(x, y) {
  this.x = x;
  this.y = y;
  this.ne = null;
  this.se = null;
  this.nw = null;
  this.sw = null;
};

Quad.prototype.insert = function(inX, inY){
  if(inX >= this.x && inY >= this.y){
    this.ne === null ? this.ne = new Quad(inX, inY) : this.ne.insert(inX, inY);
  } 
  else if (inX <= this.x && inY >= this.y){
    this.se === null ? this.se = new Quad(inX, inY) : this.se.insert(inX, inY);
  }
  else if (inX >= this.x && inY <= this.y){
    this.nw === null ? this.nw = new Quad(inX, inY) : this.nw.insert(inX, inY);
  }
  else if (inX <= this.x && inY <= this.y){
    this.sw === null ? this.sw = new Quad(inX, inY) : this.sw.insert(inX, inY);
  }
};

Quad.prototype.contains = function(yaoX, yaoY) {
  if(yaoX === this.x && yaoY === this.y) {
    return true;
  } 
  else if(yaoX >= this.x && yaoY >= this.y){
    return this.ne === null ? false : this.ne.contains(yaoX, yaoY);
  } 
  else if (yaoX <= this.x && yaoY >= this.y){
    return this.se === null ? false : this.se.contains(yaoX, yaoY);
  }
  else if (yaoX >= this.x && yaoY <= this.y){
    return this.nw === null ? false : this.nw.contains(yaoX, yaoY);
  }
  else if (yaoX <= this.x && yaoY <= this.y){
    return this.sw === null ? false : this.sw.contains(yaoX, yaoY);
  }
};

Quad.prototype.allInZone = function(a,b,c,d) {
  var results = [];
  console.log(this.x, this.y);
  if(this.x <= a[0] && this.x <= b[0] && this.x >= c[0] && this.x >= d[0] && this.y >= a[1] && this.y >= c[1] && this.y <= b[1] && this.y <= d[1]) {
    results.push([this.x, this.y]);
  }
  //swtch this and coordinates
  if(this.x <= a[0] && this.y >= a[1]) {
    if(this.nw !== null) {
    results = results.concat(this.nw.allInZone(a,b,c,d)); 
    }
  }
  if(this.x <= b[0] && this.y <= b[1]) {
    if(this.ne !== null){
    results = results.concat(this.ne.allInZone(a,b,c,d));
    }
  }
  if(this.x >= c[0] && this.y >= c[1]) {
    if(this.sw !== null){
    results = results.concat(this.sw.allInZone(a,b,c,d));
    }
  }
  if(this.x >= d[0] && this.y <= d[1]) {
    if(this.se !== null){
    results = results.concat(this.se.allInZone(a,b,c,d));
    }
  }

  return results;
}