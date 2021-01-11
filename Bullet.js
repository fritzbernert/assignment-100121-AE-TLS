class Bullet extends Gameobject{
	constructor(xSpd, ySpd){
      super();
	  this.position.x = player.position.x;
	  this.position.y = player.position.y;
	  this.xSpd = xSpd*15;
	  this.ySpd = ySpd*15;
	}
	
  
  
	draw(){
	  push()
	  noStroke();
	  fill(0, 0, 0, 135);
	  circle(this.position.x, this.position.y, 10);
	  pop();
	}
	
  
  
	move(){
	  this.position.x += this.xSpd;
	  this.position.y += this.ySpd;
	  this.xSpd *= 0.994;
	  this.ySpd *= 0.994;
	}
}