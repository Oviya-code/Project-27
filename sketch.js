
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject,bobObject5;
var ground,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  ground = new Roof(200,100,50,10);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}



