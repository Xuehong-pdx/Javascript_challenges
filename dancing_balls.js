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

let timerId = setTimeout(function run() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    let rx1 = 50 + 50*Math.random(-1, 1);
    let ry1 = 50 + 80*Math.cos(Math.random(-1, 1));
    let bubble1 = new Bubble(rx1, ry1, 'red', 10);
    bubble1.draw();

    let rx2 = 50+ 80*Math.sin(Math.random(-1, 1));
    let ry2 = 50+ 50*Math.cos(Math.random(-1, 1));
    let bubble2 = new Bubble(rx2, ry2, 'green', 10);
    bubble2.draw();

    timerId = setTimeout(run, 300); 
  }, 10);