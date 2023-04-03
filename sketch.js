const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background;
var ball;
var dustbin;
var ground;

function preload(){
  backgroundImg = loadImage('Images/background blurred.png');
  platformImg = loadImage('Images/Platform.png')
  ballImg = loadImage('Images/ball.png')
  dustbinImage = loadImage('Images/dustbin.png')

}


function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  dustbin = createSprite(700, 450, 80, 30);
  dustbin.addImage(dustbinImage);

 
  

  platform1 = new Platform(300, 150, 300, 150);
  ball1 = new Ball(750, 150, 30)
  
}


function draw() 
{

  background(backgroundImg);
  Engine.update(engine);

  platform1.show()
ball1.show()
 
  drawSprites()
}

