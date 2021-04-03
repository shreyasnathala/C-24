const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,380,80,80);
    box2 = new Box(1000,380,80,80);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(900,380)
log1=new Log(900,360,300,PI/2);
box4=new Box(800,350,80,80);
box5=new Box(1000,350,80,80);
pig2=new Pig(900,350);
log2=new Log(900,300,300,PI/2)
box6=new Box(900,250,80,80);
log3=new Log(850,200,150,PI/7);
log4=new Log(950,200,150,-PI/7)
bird=new Bird(550,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box4.display();
    box5.display();
    pig2.display();
    log2.display();
    box6.display();
    log3.display();
    log4.display();
    bird.display();
}