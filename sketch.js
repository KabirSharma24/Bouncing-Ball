const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;

function setup() { 

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={ isStatic: true }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  var ball_options={ restitution:30 }
   ball= Bodies.circle(100,100,30,ball_options);
   World.add(world,ball); 
}

function draw() {

  background(255,255,255);  
    
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,30,30);

}