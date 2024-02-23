let x;
let y;

let x_speed;
let y_speed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage("DVD.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width - dvd.width);
  y = random(height - dvd.height);
  x_speed = 1.5;
  y_speed = 1.5;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y);

  x = x + x_speed;
  y = y + y_speed;

  if (x + dvd.width >= width) {
    x_speed = -x_speed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    x_speed = -x_speed;
    x = 0;
    pickColor();
  }
  if (y + dvd.height >= height) {
    y_speed = -y_speed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    y_speed = -y_speed;
    y = 0;
    pickColor();
  }
}
