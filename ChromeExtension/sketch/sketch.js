let particles = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 50; i++) {
    particles.push(new Snow());
  }
}

function draw() {
  background(200, 230, 255);
  updateSnow();
  drawSnowMan();
  drawGround();
}
function drawSnowMan() {
  
  // body
  fill(255);
  noStroke();
  
  let ground = height-100;
  let lowerRadius = 50;
  let upperRadius = 35;
  
  ellipse(width/2, ground-lowerRadius, lowerRadius*2, lowerRadius*2);
  ellipse(width/2, ground-lowerRadius*1.9-upperRadius, upperRadius*2, upperRadius*2);
  
  // eyes
  fill(0);
  noStroke();
  
  ellipse(width/2 + upperRadius/3, ground-lowerRadius*1.9-upperRadius*1.2, 5,5);
  ellipse(width/2 - upperRadius/3, ground-lowerRadius*1.9-upperRadius*1.2, 5,5);
  
  // hat
  fill(0);
  stroke(0);
  strokeWeight(3);
  
  push();
  translate(width/2, ground-lowerRadius*1.9-upperRadius);
  rotate(radians(20));
  line(-20, -upperRadius, 20, -upperRadius);
  rect(-10, -upperRadius, 20, -20);
  pop();
  
}
function updateSnow() {
  for (let i = 0; i < particles.length; i++) { 
    particles[i].update();
    particles[i].draw();
  }
}
function drawGround() {
  fill(255);
  noStroke();
  beginShape();
  for(let i = 0; i < 6; i++) {
    let x = map(i, 0, 5, -30, width+30);
    curveVertex(x, height-105 + sin(i*4)*5);
  }
  curveVertex(width, height);
  curveVertex(0, height);
  endShape(CLOSE);
}
class Snow {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(3, 5);
    this.speed = random(0, 5);

  }
  draw() {
    fill(255, 200);
    noStroke();
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
  update() {
    this.y += this.speed;
    this.x += 2.5-this.speed;
    if(this.y > 300) this.y = 0;
    if(this.x > width) this.x = 0;
    if(this.x < 0) this.x = width;
  }
}