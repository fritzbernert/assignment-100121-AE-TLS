var player;
var points = 0;
var highscore = 0;

var enemys = [];
let targetTimer = 0;
let enemySpawnRate = 2;

let bulletsFired = [];



function setup() {
  createCanvas(600, 600);
  
  player = new Player();
}



function draw() {
  background(220);
  
  fill(0, 0, 0);
  textSize(30);
  text(points, width/2, 30);
  text("Highscore: "+highscore, width/2+50, 30);
  
  for(let i = 0; i<enemys.length; i++){
    enemys[i].draw();
    enemys[i].move();
    
    if(enemys[i].bulletCollision() || enemys[i].outOfBounds()){
      enemys.splice(i,1);
    }
  }
  
  
  for (var i = 0; i < bulletsFired.length; i++){
    bulletsFired[i].draw();
    bulletsFired[i].move();

    if (bulletsFired[i].outOfBounds()){
        bulletsFired.splice(i,1);
    }
  }
    
      
  player.move();
  player.draw();
  if(player.enemyCollision()){
    console.log("enemy collision");
    gameEnd();
  }

  
  targetTimer += 1;
  let spawnInterval = int(100 / enemySpawnRate);
  if (targetTimer % spawnInterval == 0){
	  enemys.push(new Enemy(random(3, 7), player));
    enemySpawnRate += 0.01;
  }
}

function mousePressed(){
	player.shoot();
}

function gameEnd(){
  if(points > highscore){
    highscore = points;
  }
  points = 0;
  enemys = [];
  bulletsFired = [];
  player.position = createVector(width/2, height/2);
}

