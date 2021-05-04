
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var p1 = [];

var bg

function preload(){
  a1=loadAnimation("Imgs/d/1.png","Imgs/d/2.png","Imgs/d/3.png","Imgs/d/4.png","Imgs/d/5.png")
  a2=loadAnimation("Imgs/d/r1.png","Imgs/d/r2.png","Imgs/d/r3.png","Imgs/d/r4.png","Imgs/d/r5.png")
  c1=loadAnimation("Imgs/r/a1.png","Imgs/r/a2.png","Imgs/r/a3.png","Imgs/r/a4.png","Imgs/r/a5.png")
  c2=loadAnimation("Imgs/by1.png","Imgs/by2.png");
  ki1=loadImage("Imgs/kid1.png");
  ki2=loadImage("Imgs/kid2.png");
  ki3=loadImage("Imgs/kid3.png");
  e1=loadImage("Imgs/emoji.png")
  bg=loadImage("Imgs/bg.jpg");
  bgs=loadSound("Imgs/cityOfStars_piano.mp3");
}

function setup() {
  createCanvas(1260, 550);
  engine = Engine.create();
  world = engine.world;
 
  bgs.loop();
  
 

  b1=createSprite(100,450,20,20);
  b1.addAnimation("moving", a1);

  b2=createSprite(2575,450,20,20);
  b2.addAnimation("moving", a2);

  b3=createSprite(900,270,20,20);
  b3.addAnimation("moving", c1);
  b3.scale=0.4;
  

  
  b1.scale=0.4
  b1.velocityX=2;
  b2.scale=0.4
  b2.velocityX=-2;

  k1 = createSprite(100, 300, 10, 10);
  k1.addImage(ki1);
  k1.scale=0.4

  k2=createSprite(300,310,10,10);
  k2.addAnimation("moving",c2);

  k25=createSprite(360,370,10,10);
  k25.addImage(ki2);
  k25.scale=0.3

  k3 = createSprite(600, 320, 10, 10);
  k3.addImage(ki3);
  k3.scale=0.45

  k4 = createSprite(1100, 280, 10, 10);
  k4.addImage(e1);
  k4.scale=0.3

}
 


function draw() {
  background(bg);
  textSize(20)

  Engine.update(engine);

  
  //displaying snow
   if(frameCount%1.5===0){
     p1.push(new Snow(random(width/2-630, width/2+630), 10,10));
   }
   fill("white");
   for (var j = 0; j < p1.length; j++) {
     p1[j].display();
   }
  
  
   
   
  drawSprites();
}

