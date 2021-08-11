var ship, ship_running, edges;
var seaImage,sea;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200);
ship = createSprite(50,160,20,50);
  ship.addAnimation("ship_running");
  edges = createEdgeSprites();
  sea = createSprite(300,180,600,20)
  sea.addImage(seaImage)
  //adding scale and position to trex
  ship.scale = 0.5;
  ship.x = 50
}


function draw(){
  //set background color 
  background("blue");
  
  //logging the y position of the trex
  console.log(ship.y)
  if(sea.x<0){
    sea.x=sea.width/2
  }
  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -20;
  }
  ship.collide(sea)
  ship.velocityY = ship.velocityY + 0.5;
  sea.velocityX = -3;
  //stop trex from falling down
  ship.collide(edges[3])
  drawSprites();
}