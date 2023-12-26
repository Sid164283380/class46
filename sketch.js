


var bg, bgImg
var dogImg, dog
var ground


// loading the images
function preload() {
  bgImg = loadImage("assets/bgw.png")
  dogAnamation = loadAnimation("assets/dog1.png", "assets/dog2.png", "assets/dog3.png", "assets/dog4.png")
  obstacle1 = loadImage("assets/obstacle1.png")
  obstacle2 = loadImage("assets/obstacle2.png")
  obstacle3 = loadImage("assets/obstacle3.png")
}

// Make sure everything is smooth

function setup() {
  createCanvas(1720, 520)
  console.log(windowWidth, windowHeight)
  //background image
  bg = createSprite(7500, 260);
  bg.addImage(bgImg);
  bg.scale = 1
  bg.velocityX = -30
  //creating the ground
  ground = createSprite(100, 465, 600, 5)
  ground.visible = false;

  //creating PC    
  dog = createSprite(100, 200, 20, 50);
  dog.addAnimation("dog", dogAnamation);
  dog.scale = 1;
}
// meanwhile in another function ........
function draw() {
  background("black")
  
  dog.collide(ground)
  //making the dog jump
  if (keyDown("space")) {
    dog.velocityY = -10;

  }

  //adding gravity
  dog.velocityY = dog.velocityY + 2;
  if (bg.x < -6000) {
    bg.x = 7500;
  }
  spawnObstacles();
console.log(13)

  drawSprites();
  function spawnObstacles(){
 
    if(frameCount % 60 === 0) {
      
      var obstacle = createSprite(width + 10, 430, 20, 10);
      obstacle.setCollider('circle', 0, 0, 50);
      
      obstacle.velocityX = -30;
      obstacle.scale = 10;
  
      var rand = Math.round(random(200, 200));
      switch (rand) {
        case 1: obstacle.addImage(obstacle1);
          break;
        case 2: obstacle.addImage(obstacle2);
          break;
        case 3: obstacle.addImage(obstacle3);
          break;
        default: break;
  }


    }

  }
}
