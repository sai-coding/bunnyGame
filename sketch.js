var bunny, bunnyImage, carrot, carrotImage, obstacle1, obstacle1Image, obstacle2, obstacle2Image
var bg

function preload() {
    bg = loadImage("assets/background.jpeg");

    bunnyImage = loadImage("assets/bunny.gif");
    carrotImage = loadImage("assets/carrot.gif");
    obstacle1Image = loadImage("assets/obstacle1.gif");
    obstacle2Image = loadImage("assets/obstacle2.gif");
}

function setup() {
     createCanvas(600, 500);

     bunny = createSprite(45, 390, 20, 50);
     bunny.addImage(bunnyImage);
     bunny.scale = 0.5;

     carrot = createSprite(300, 400, 20, 20);
     carrot.addImage(carrotImage);
     carrot.scale = 0.3;

     obstacle1 = createSprite(200, 400, 20, 20);
     obstacle1.addImage(obstacle1Image);
     obstacle1.scale = 0.90

     obstacle2 = createSprite(500, 380, 20, 20);
     obstacle2.addImage(obstacle2Image); 
     obstacle2.scale = 0.60
}
 
function draw() {
    background(bg);

    if(KeyIsDown = "space") {
        bunny.velocityY = -10;
    } 
  bunny.velocityY = bunny.velocityY + 0.8;
  drawSprites()
 }

function spawnObstacles() {
    if(frameCount%60 === 0) {
        obstacle = createSprite(Math.random(200,500),350,20,20);
        obstacle.velocityX = -4;
        var rand = Math.round(random(1,2));
        switch (rand) {
            case 1: obstacle.addImage(obstacle1Image);
        
                break; 
        case 2: obstacle.addImage(obstacle2Image);
          break;  
         
          default:
                break;
        }
    }
}