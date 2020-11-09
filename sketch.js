const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisionz = [];

var divionsH = 300;

function setup() {
  createCanvas(480,800);

ground = new Ground(400,720,800,20);
  

for (var j = 40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for (var j = 40; j<=width-30; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for (var j = 15; j<=width-40; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}

  createSprite(400, 200, 50, 50);
}



function draw() {
  background(0);  

ground.display();

  drawSprites();
}

for (var k =0, k<=width; k=k+80){
  diviisionz.push(new Divisions(k, height-divisionH/2, 10, divisionH));
}