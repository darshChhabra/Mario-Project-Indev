var mario
var marioRunning
var bg

function preload() {
    marioImg = loadImage("assets/mario.jpg");
    marioRunningImg = loadAnimation("assets/marioRunning_1.png", "assets/marioRunning_2.png");
    bgImg = loadImage("assets/bg.png");
}

function setup() {
    createCanvas(500, 300)

    mario = createSprite(250, 230, 20, 20);
    mario.addImage(marioImg);
    mario.scale = 0.15;

    bg = createSprite(250, 150, 500, 600);
    bg.addImage("bg",bgImg);
    bg.scale = 2;

    bg.velocityX = -5;
    mario.velocityX = -(100);
}

function draw() {
    background(bgImg)



    if (keyDown(RIGHT_ARROW)) {
        mario.changeAnimation(marioRunning);
        mario.X = mario.X + 10;
    }

    if (bg.x < -250) {

        bg.x = bg.width / 8;

    }

    mario.depth = bg.depth
    mario.depth = mario.depth + 1

    drawSprites()
}