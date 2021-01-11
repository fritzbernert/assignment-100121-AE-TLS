var position;

class Gameobject{
  constructor(){
    this.position = createVector(0, 0);
  }
  
  outOfBounds(){
	  return(this.position.x > width+10 || this.position.x < -10 || this.position.y > height+10 || this.position.y < -10);
  }
}