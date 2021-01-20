var fixed;
var move;

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 100);
  move.shapeColor="blue";
  fixed = createSprite(200,200,100,50);
  fixed.shapeColor="blue";
  move.velocityX = -2;
  fixed.velocityX = 3;
  move.velocityY = -3;
  fixed.velocityY = 2;

  
}

function draw() {
  background(255,255,255);  

  console.log(move.width/2+fixed.width/2,move.x-fixed.x);

  
  
  bounceOff(move,fixed);

  
  drawSprites();
}
function bounceOff(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 ){
        object1.velocityX = object1.velocityX *(-1);
        object2.velocityX = object2.velocityX *(-1);
}
    
if(object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY =  object1.velocityY *(-1);
    object2.velocityY = object2.velocityY *(-1);
  }


}