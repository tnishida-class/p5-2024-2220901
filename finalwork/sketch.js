// 最終課題を制作しよう

let balls;
let size

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  noStroke();
}
  
function draw(){
  background(0);
  fill(255)
  textSize(32);
  textFont("serif");
  text("スペースキーを押して雪を降らせよう！", 30, 30);

  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    
    b.x += b.vx;
    b.y += b.vy;
    b.size += 0.01
    
    if (b.x < 0 || b.x > width || b.y < 0 || b.y > height || b.size > 20) {
      balls.splice(i, 1);
    } else {
      ellipse(b.x, b.y, b.size);
    }
  }
  
  if (keyIsDown(32)) {
    createBall();
  }
}

function createBall() {
  const size = 5;
  const vx = random(-2, 2);
  const vy = random(-2, 2);

  balls.push({
    x: width / 2,
    y: height / 2,
    size: size,
    vx: vx,
    vy: vy,
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}