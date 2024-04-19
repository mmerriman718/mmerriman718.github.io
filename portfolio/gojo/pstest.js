var img;
var initials ='mm';
var choice = '1';
var screenbg = 250;
var lastscreenshot=61;

function preload() {
  img = loadImage('https://mmerriman718.github.io/ps/sakura.png');
  gojo = loadImage('https://mmerriman718.github.io/ps/gojo2.png');
  dress = loadImage('https://mmerriman718.github.io/ps/maid.png');
  skirt1 = loadImage('https://mmerriman718.github.io/ps/Skirt-PNG-Image.png')
  skirt2 = loadImage('https://mmerriman718.github.io/ps/65e44c191055166f7e9c8fa703edbc74.png')
  gay = loadImage('https://mmerriman718.github.io/ps/gay.png')
  cat = loadImage('https://mmerriman718.github.io/ps/cat.png')
  cringe = loadImage('https://mmerriman718.github.io/ps/cringe.png')
  alpha = loadImage('https://mmerriman718.github.io/ps/alpha.png')
  zebra = loadImage('https://mmerriman718.github.io/ps/fedora.png')
  skirt3 = loadImage('https://mmerriman718.github.io/ps/leather.png')
  ears = loadImage('https://mmerriman718.github.io/ps/ears.png')
}

function setup() {
createCanvas(1518, 851);  // canvas size
background(img); 
background(gojo);
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(dress, mouseX-1125, mouseY-550, 2250, 1250);
    
  } else if (toolChoice == '2') { // second tool
    image(skirt1, mouseX-100, mouseY-50, 250, 200);
    
  } else if (toolChoice == '3') { // third tool
    image(skirt2, mouseX-125, mouseY-80, 250, 200);
   
  } else if (toolChoice == '4') {
    image(gay, mouseX-120, mouseY-50, 250, 250);
    
  } else if (key == '5') { 
    image(cat, mouseX-120, mouseY-50, 250, 250);
    
  } else if (toolChoice == '6') {
    image(cringe, mouseX-120, mouseY-50, 275, 280);
    
  } else if (toolChoice == '7') {
    image(alpha, mouseX-120, mouseY-50, 250, 250);
    
  } else if (toolChoice == '8') {
    image(zebra, mouseX-50, mouseY-50, 110, 110);
    
  } else if (toolChoice == '9') {
    image(skirt3, mouseX-90, mouseY-50, 180, 180);
    
  } else if (toolChoice == '0') {
    image(ears, mouseX-50, mouseY-30, 110, 60);
    
  }
 }

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img); 
    background(gojo);
  } else if (key == 'p' || key == 'P') {
     saveme();  
  }
}

function saveme(){
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { 
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second();
  
}
