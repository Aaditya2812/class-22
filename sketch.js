const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,square;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_option={
        restitution :1.0
    }

    ball=Bodies.circle(200,200,40,ball_option);
    World.add(world,ball);

    var square_option={
        isStatic :true
    }
    square=Bodies.rectangle(300,200,50,50,square_option)
    World.add(world,square);

    console.log(ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
    rectMode(CENTER);
    rect(square.position.x,square.position.y,50,50);
}