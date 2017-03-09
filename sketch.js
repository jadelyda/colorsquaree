//Stanford moving box example
//Boxes collide with eachother
var targetBox;
var mouseBox;
var back = 200;
var mouseSize = 50;
function setup() {
  createCanvas(800,800);
  targetBox = createSprite(400, 300, 50, 50);
  mouseBox = createSprite(400, 0, mouseSize, mouseSize);
  mouseBox.limitSpeed(1);
mouseBox.draw = function() {    fill(255,0,0);
 ellipse(0,0,mouseSize, mouseSize) }
mouseBox.setCollider ( "circle",  0,  0,  mouseSize/2 );

 // fallingBox.friction = .98;

}

function draw() {
  background(back);
  drawSprites();
  //lets the box follow the mouse at a reasonable speed
   mouseBox.setVelocity( 0,0 );
   mouseBox.attractionPoint ( 2*log(dist(mouseBox.position.x,mouseBox.position.y,mouseX,mouseY) ), mouseX,mouseY );

   targetBox.bounce(mouseBox,colorChange);

   if( 0 > targetBox.position.x || targetBox.position.x > width
       || 0 > targetBox.position.y || targetBox.position.y  > height  ){
       targetBox.attractionPoint ( 10,  width/2 , height/2 );
   }
   function colorChange(){
       back = random(256);
   }

}
