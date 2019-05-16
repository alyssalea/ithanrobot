function setup() {
  createCanvas(1000,1000)
  background  (0,0,255)
  frameRate(6)
}
function draw()
 {
fill(random(0,255), random(0,255), random(0,255))  
triangle(500, 600, 400, 200, 500, 800);
triangle(500, 500, 580, 200, 500, 750);
 triangle(500, 500, 400, 200, 500, 750);
 triangle(500, 600, 580, 200, 500, 800);
  rect(500, 600, 500, 55);
  rect(10, 600, 500, 55);
  ellipse(500, 1000, 500, 500);
  ellipse(500, 700, 350, 350);
  ellipse(500, 450, 200, 200);
ellipse(450, 450, 55, 55);
ellipse(550, 450, 55, 55);
ellipse(450, 450, 25, 25);
ellipse(550, 450, 25, 25);
rect(475,750,50, 50)
  rect(475,650,50, 50)
  rect(475,550,50, 50)
  
  fill(255)
  stroke(6)
  strokeWeight(8)
  ellipse(500,500,50,50)
  
  quad(random(0,900), random (0, 900), random (0,1000), random (0, 900), random (0, 900), random (0, 900), random (0, 900), 76);

arc(random (0,900), random (0,900), random (0,900), random (0,900), 0, PI + QUARTER_PI);

}