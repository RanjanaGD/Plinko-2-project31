const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles;
var plinkos;
var divisions;
var ground;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {

  createCanvas(480,800);

  
  
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
ground= new Ground(200,790,600,10)

for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width-10;j=j+80) {
  plinkos.push(new Plinko(j,175));
}

for(var j=15;j<=width-20;j=j+40) {
  plinkos.push(new Plinko(j,275));
}

for(var j=15;j<=width-30;j=j+70) {
  plinkos.push(new Plinko(j,375));
}


for(var k=0;k<=innerWidth;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}



Engine.run(engine);

}

function draw() {
  background(0);  


ground.display();

for(var k=0;k< divisions.length;k++){
  divisions[k].display();
}


for(var l=0;l<particles.length;l++){
  particles[l].display();
}

for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}





if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}


      
      
  drawSprites();
}






