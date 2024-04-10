function setup() {
createCanvas(600, 600);
}

function preload(){
  img1 =loadImage("images/shirt.jpg")
  img2 =loadImage("images/moonjellies.jpg")
}

function draw() {
  
  image(img2, 0, 0, 600, 600); //background
  
  fill(0, 2, 11); //hair side
   strokeWeight(0)
   ellipse(350, 160, 150, 100)
   
  fill(0, 2, 11); //hair back
   strokeWeight(0)
   ellipse(270, 225, 180, 230)
   
  fill(36, 59, 153); //neck
    strokeWeight(1)
    rect (275, 300, 65, 100)
    
  fill(36, 59, 153); //head
    strokeWeight(1)
    ellipse (325, 250, 150, 200)

  strokeWeight(0)
  arc(325, 250, 150, 200, 0, PI + 0, CHORD); //mask
    strokeWeight(1)
      line (300, 250, 400, 250)
    strokeWeight(1)
      line (300, 250, 275, 325)
    strokeWeight(4)
    line (260, 200, 300, 250)
    strokeWeight(4)
    line (275, 325, 257, 300)
    ;
    
  fill(36, 59, 153); //ear
    strokeWeight(0)
    ellipse (250, 250, 50, 100)
    
  fill(85, 98, 229); //eyes
    strokeWeight(1)
    ellipse (400, 225, 25, 50)
    strokeWeight(1)
    ellipse (350, 225, 30, 50)
   fill(0, 5, 41)
    strokeWeight(0)
    ellipse (350, 215, 30, 30)
   fill(0, 5, 41)
    strokeWeight(0)
    ellipse (400, 215, 25, 30)
    
  fill(0, 5, 41) //eyebrows
    strokeWeight(3)
    line (325, 185, 365, 183)
    
 fill(0, 2, 11); //hair front
   strokeWeight(0)
   ellipse(300, 160, 110, 115)
 
 fill(0, 0, 8); //shirt
   rect (200, 400, 200, 400)
 
 image(img1, 240, 420, 150, 150); //shirt print
}
