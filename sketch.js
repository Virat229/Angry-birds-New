const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var backgroundImage;
var wood1,wood2,wood3,wood4,wood5,wood6,wood7,wood8,wood9,wood10,wood11,wood12,wood13,wood14;
var pig1,pig2,pig3;
function preload(){
    backgroundImage = loadImage("sprites/back.png");
}

function setup(){
   var canvas = createCanvas(1300,600);
   engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(650,480,1300,20);
   wood1 = new Wood(1100,450,80,40,PI);
   wood2 = new Wood(1020,450,80,40,PI);
   wood3 = new Wood(480,450,80,40,PI);
   wood4 = new Wood(400,450,80,40,PI);
   wood5 = new Wood2(1060,380,100,100,PI);
   wood6 = new Wood2(440,380,100,100,PI);
   wood7 = new Wood(750,320,600,30,PI);
   wood8 = new Wood(550,255,40,100,2*PI);
   wood9 = new Wood(595,255,40,100,2*PI);
   wood10 = new Wood(800,255,40,100,2*PI);
   wood11 = new Wood(845,255,40,100,2*PI);
   wood12 = new Wood2(647.5,200,200,150,2*PI);
   pig1 = new Pig(600,470);
   pig2 = new Pig(700,470);
   pig3 = new Pig(800,470);
   pig4 = new Pig(900,470);
   pig5 = new Pig(572.5,180);
   pig6 = new Pig(822.5,180);


    
  

}

function draw(){
    background(backgroundImage);
    //console.log(ground.body.position.y);
    
    Engine.update(engine);
    
    rectMode(CENTER);
    ground1.display();
    wood1.display();
    wood2.display();
    wood3.display();
    wood4.display();
    wood5.display();
    wood6.display();
    wood7.display();
    wood8.display();
    wood9.display();
    wood10.display();
    wood11.display();
    wood12.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();

    
   // DrawSprites();

}