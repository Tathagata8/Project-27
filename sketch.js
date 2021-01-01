
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2,ball3, ball4,ball5, roof1, chain1, ballDiameter;

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof1 = new Roof(350,150,600,40);
   ball1 = new Ball(150,500,100);
   ball2 = new Ball(251,500,100);
   ball3 = new Ball(355,500,100);
   ball4 = new Ball(455,500,100);
   ball5 = new Ball(555,500,100);
   chain1 = new Chain(ball1.body, roof1.body, -ballDiameter*2,0);
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}



