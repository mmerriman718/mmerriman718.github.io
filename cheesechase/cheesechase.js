var ballx = 100;
var bally = 100;
var ballSize = 70;
var score =0;
var gameState = "L1";



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} 

function preload(){
  floor=loadImage("https://mmerriman718.github.io/cheesechase/floor.jpg")
  cheese=loadImage("https://mmerriman718.github.io/cheesechase/cheese.png")
  mouse=loadImage("https://mmerriman718.github.io/cheesechase/mouse.png")
  title=loadImage("https://mmerriman718.github.io/cheesechase/title.png")
}

function draw(){
  background(title);
  if(gameState =="L1"){
    levelOne();
  }
}
  
function levelOne(){
  image(title, width/2, height/2);
  if(function mouseClicked(){)
      
  }


function draw(){
  background(floor);
  if(gameState == "L2"){
  levelTwo();
  }
  
  text(("Score: " + score), width/2, 40);
  
}


function levelTwo(){
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  stroke('yellow');
  line(ballx+30, bally+30, mouseX, mouseY);
  image(cheese, ballx, bally, ballSize, ballSize);
  
  if(score>9){
    background(mouse);
    stroke('yellow');
    textSize(50);
    text("You caught the cheese!", width/2, height-20);
  }
  
}
