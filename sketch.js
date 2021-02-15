const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Bob(600,500,40);
	
	ball2= new Bob(500,500,40);
    ball3 = new Bob(400,500,40);
    ball4 = new Bob(300,500,40);
    
    slingshot1 = new SlingShot(ball1.body,{x:600, y:500});
	slingshot2 = new SlingShot(ball2.body,{x:500, y:500});
	slingshot3 = new SlingShot(ball3.body,{x:400, y:500});
	slingshot4 = new SlingShot(ball4.body,{x:300, y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  




ball1.display()
ball2.display()
ball3.display()
ball4.display()
slingshot1.display()
slingshot2.display()
slingshot3.display()
slingshot4.display()

  drawSprites();
 
}



