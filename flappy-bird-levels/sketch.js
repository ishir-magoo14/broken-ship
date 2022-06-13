var obstacles, spaceShip, back;

//preload
function preload() {
background1 = loadImage("background3.png");
}

//setup
function setup() {
createCanvas(windowWidth,windowHeight) 
}

//draw
function draw() {
background(182);
background(background1);

drawSprites();
}