// 最終課題を制作しよう
//function setup(){
//  createCanvas(windowWidth, windowHeight);
//}

//function draw(){
//  background(160, 192, 255);
//}

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

  // ボールを描画して動かす
  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    
    // ボールの位置を更新
    b.x += b.vx;
    b.y += b.vy;
    
    // サイズを徐々に大きくする
    b.size += 0.01
    
    // ボールが画面外に出たら削除
    if (b.x < 0 || b.x > width || b.y < 0 || b.y > height || b.size > 20) {
      balls.splice(i, 1);  // 配列からボールを削除
    } else {
      // ボールを描画
      ellipse(b.x, b.y, b.size);
    }
  }
  
  // スペースキーが押されている間、ボールを生成し続ける
  if (keyIsDown(32)) {  // 32はスペースキーのコード
    createBall();
  }
}

function createBall() {
  // ボールを中央からランダムに放出
  const startsize = 5;  // 初期サイズは小さめ
  const vx = random(-2, 2);      // ランダムな速度（X方向）
  const vy = random(-2, 2);      // ランダムな速度（Y方向）
  
  // ボールを配列に追加
  balls.push({
    x: width / 2,  // 画面中央から出現
    y: height / 2,
    size: startsize,
    vx: vx,
    vy: vy,
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}