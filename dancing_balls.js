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

function doSetInterval(i) {
    function run() {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        let rx1 = 50 + 50*Math.random(-i, i);
        let ry1 = 50 + 80*Math.cos(Math.random(-i, i));
        let bubble1 = new Bubble(rx1, ry1, 'red', 10);
        bubble1.draw();
    
        let rx2 = 50+ 80*Math.sin(Math.random(-i, i));
        let ry2 = 50+ 50*Math.cos(Math.random(-i, i));
        let bubble2 = new Bubble(rx2, ry2, 'green', 10);
        bubble2.draw();
    }

    setInterval(run, 300);
  }
  
  doSetInterval(5);