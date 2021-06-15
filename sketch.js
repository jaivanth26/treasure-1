var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

 textSize(20)
 fill("black")
 text("score"+score,450,50)

  // Add code to display the end screen
if(score===3){
  clear()
  background(bg2)
  textSize(50)
  text("treasureUnlocked",250,200)
}

  drawSprites()
}