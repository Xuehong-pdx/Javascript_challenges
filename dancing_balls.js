let canvas = document.getElementById("myCanvas");

class Bubble {
  constructor (x,y,c,r) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
  }

  draw(){
    let b = canvas.getContext("2d");
    b.beginPath();
    b.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    b.fillStyle = this.c;
    b.fill();
    b.closePath();
  }
}

 function run() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    let rx1 = 50+Math.random(-5, 5)*50;
    let ry1 = 50+Math.random(-5, 5)*50;
    let bubble1 = new Bubble(rx1, ry1, 'red', 10);
    bubble1.draw();

    let rx2 = 100+Math.random(-5, 5)*80;
    let ry2 = 100+Math.random(-5, 5)*80;
    let bubble2 = new Bubble(rx2, ry2, 'green', 10);
    bubble2.draw();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Tutor() {
  for (let i = 1; i <100 ; i++) {        
     await sleep(300);
     run();
  }
}
Tutor()