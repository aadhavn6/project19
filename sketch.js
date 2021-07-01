var backgroundImage;
var boy,boyImage;
var monster,monsterImage,monstersGroup;
var score,scoreImage;
var gameover,gameoverImage;
var restart,restartImage;


var PLAY = 1;
var END = 0;
var gameState = PLAY;






function preload(){
backgroundImage=loadImage("background.jpg");
boyImage = loadAnimation ("boy1.png","boy2.png","boy3.png");
boy_collided= loadImage("collide.png");
monsterImage = loadImage("monster.png");
scoreImage = loadImage("score.png");
gameoverImage = loadImage("gameover.png");
restartImage = loadImage("restart.png");
}





function setup(){
createCanvas (750,300);
scene=createSprite(10,20);
scene.addImage(backgroundImage);
scene.velocityX=-6;

boy=createSprite(40,250);
boy.addAnimation("running",boyImage);
boy.addAnimation("collide",boy_collided);
boy.scale=1.9;

invisibleGround=createSprite(10,290,1500,10);
invisibleGround.visible=false;

score=createSprite (680,30);
score.addImage(scoreImage);
score.scale=0.2;

score=0;

monstersGroup=createGroup();
}




function draw (){
background(0);
if (scene.x<0){
    scene.x=scene.width/2;

    
}
if(keyDown("space")){
boy.velocityY=-10;
}
boy.velocityY=boy.velocityY+0.8;
if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-3;

    
}
if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+3;

}
if(boy.isTouching(monstersGroup)){
    score=score+1;
    monstersGroup.destroyEach();
}

boy.collide(invisibleGround)
spawnMonster();
drawSprites();
fill("black");
text(""+score,673,40);
}

function spawnMonster()
{
if(frameCount%240===0){
    monster=createSprite(600,250);
monster.addImage(monsterImage);
monster.velocityX=-3;
monster.scale=0.20;
monster.lifetime=250
    monstersGroup.add(monster);
}

}


