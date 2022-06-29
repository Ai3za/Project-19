var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addImage('ghost',ghostImg)
  ghost.scale = 0.4

  
}

function draw() {
  background(200);

  if(keyDown('space')){
    ghost.velocityY = -6

  }
  if(keyDown('left')){
    ghost.x = ghost.x -2
  
  }
  if(keyDown('right')){
    ghost.x = ghost.x +2
  }
  ghost.velocityY = ghost.velocityY + 0.5
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites()
  spawn()

}

function spawn() {

if(frameCount%150 == 0){
  door = createSprite(Math.round(random(50,500)),-10)
door.addImage('door', doorImg)
door.velocityY = 1;
}




}