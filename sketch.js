const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backGround,world;

var drops = []; 

var maxDrops = 100


function preload(){
    
}

function setup(){
    var backGround = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

if (frameCount % 150 === 0){
   
 for(var i=0; i<maxdrops; i++){
      drops.push(new createDrop(random(0,400), random(0,400)));

     }

}
    
}

function draw(){

    Engine.update(engine);

    background("black");

    drops.display();

   for(var i = 0; i<maxdrops; i++){
    drops[i].showDrop();
    drops[i].updateY()

   }
   
   drawSprites();
}   

