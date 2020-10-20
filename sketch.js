const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

}

function setup(){
   createCanvas(displayWidth,600);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
}

function draw(){
    background(0);        
    
//My folder for Game
}   
