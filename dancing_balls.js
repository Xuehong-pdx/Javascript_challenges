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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Run() {
  for (let i = 1; i <300 ; i++) {        
    await sleep(300);

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    let rx1 = 120 + Math.random(-i, i)* 60*Math.sin(i);
    let ry1 = 100 + Math.random(-i, i)* 80*Math.cos(i);
    let bubble1 = new Bubble(rx1, ry1, 'red', 10);
    bubble1.draw();

    let rx2 = 100+Math.random(-i, i)* 80*Math.cos(i);
    let ry2 = 120+Math.random(-i, i)* 50*Math.sin(i);
    let bubble2 = new Bubble(rx2, ry2, 'green', 10);
    bubble2.draw();
  }
}
Run()