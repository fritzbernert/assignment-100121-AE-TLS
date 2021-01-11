var speed;
var player;

class Enemy extends Gameobject{
  
  constructor(_speed, _player){
    super();
    
    this.speed = _speed;
    player = _player;
    
    this.side = int(random(4));
	switch (this.side)
	{
	  case 0:
	    this.position.x = 0;
	    this.position.y = int(random(height));
		break;
	  case 1:
		this.position.x = int(random(width));
		this.position.y = 0;
		break;
	  case 2:
		this.position.x = width;
		this.position.y = int(random(height));
		break;
	  case 3:
		this.position.x = int(random(width));
		this.position.y = height;
		break;
	}
	this.targetX = player.position.x;
	this.targetY = player.position.y;
	this.targetDir = createVector(this.targetX - this.position.x, this.targetY - this.position.y);
	this.targetDir.normalize();
    
    this.xSpd = this.targetDir.x*this.speed;
	this.ySpd = this.targetDir.y*this.speed;
  }
  
  
  
  draw(){
    fill(255, 0, 0);
    noStroke();
    circle(this.position.x, this.position.y, 30);
  }
  
  
  
  move(){
    this.position.x += this.xSpd;
	this.position.y += this.ySpd;
  }
  
  
  
  bulletCollision(){
    for(let i = 0; i < bulletsFired.length; i++){
      var collideOrNot = collideCircleCircle(bulletsFired[i].position.x, bulletsFired[i].position.y, 
                                              10, this.position.x, this.position.y, 30);
		if (collideOrNot){
			bulletsFired.splice(i,1);
            points++;
			return true;
		}
	 }
	 return false;
  }
}