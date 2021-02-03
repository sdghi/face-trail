let img;

function preload() {
	img = loadImage('sdg-face.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('rgb(238, 211, 108)');
}

function mouseMoved() {
	image(img, mouseX - 100, mouseY - 100, 200, 200);
}
