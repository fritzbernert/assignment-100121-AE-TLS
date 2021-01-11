class Player extends Gameobject{
  
  constructor() {
    super();
    this.position = createVector(width/2, height/2);
  }
  
  
  
  draw(){
    fill(255, 255, 0);
    noStroke();
    circle(this.position.x, this.position.y, 50);
  }
  
  
  
  move(){
    if (keyIsDown(65) && this.position.x-5 > 0) {
      this.position.x -= 5;
    }

    if (keyIsDown(68) && this.position.x+5 < width) {
      this.position.x += 5;
    }

    if (keyIsDown(87) && this.position.y-5 > 0) {
      this.position.y -= 5;
    }

    if (keyIsDown(83) && this.position.y+5 < height) {
      this.position.y += 5;
    }
  }
  
  
  
  shoot(){
      let mouseVector = this.getMouseVector();
      let bullet = new Bullet(mouseVector.x, mouseVector.y);
      bulletsFired.push(bullet);
  }
  
  
  
  enemyCollision(){
    for(let i = 0; i < enemys.length; i++){
      var collideOrNot = collideCircleCircle(enemys[i].position.x, enemys[i].position.y, 
                                              30, this.position.x, this.position.y, 50);
		if (collideOrNot){
			return true;
		}
	 }
	 return false;
  }
  
  
  
  getMouseVector(){
      let mouseXalt = mouseX - player.position.x;
      let mouseYalt = mouseY - player.position.y;
      let mouseDir = createVector(mouseXalt, mouseYalt);
      mouseDir.normalize();
      return mouseDir;
  }

}