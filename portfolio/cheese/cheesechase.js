var ballx = 100;
var bally = 100;
var ballSize = 70;
var score =0;


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} 

function preload(){
  floor=loadImage("https://mmerriman718.github.io/portfolio/cheese/floor.jpg")
  cheese=loadImage("https://mmerriman718.github.io/portfolio/cheese/cheese.png")
  mouse=loadImage("https://mmerriman718.github.io/portfolio/cheese/mouse.png")
  title=loadImage("https://mmerriman718.github.io/portfolio/cheese/title.png")
}

function draw(){
  background(floor);
  
  levelOne();
  
  text(("Score: " + score), width/2, 40);
  
}

function levelOne(){
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
