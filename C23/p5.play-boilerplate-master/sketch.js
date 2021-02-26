const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;
var object1;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:false
  }
  object=Bodies.rectangle(200,100,50,50,options);
  object.shapeColor="pink";
  World.add(world,object);
 //createSprite(400, 200, 50, 50);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);

 // engine=Engine.create();
  //world=engine.world;
  var options={
    isStatic:true
  }
  object1=Bodies.rectangle(100,100,50,50,options);
  object1.shapeColor="pink";
  World.add(world,object1);
  //createSprite(400, 200, 50, 50);
  console.log(object1);
  console.log(object1.position.x);
  console.log(object1.position.y);

}

function draw() {
  background("black");
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50);
  rect(object.position.x,object.position.y,50,50);
  rectMode(CENTER);
  drawSprites();
}
