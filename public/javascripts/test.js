let bubbles = [];
let timeHold = 0;

function setup() {
  createCanvas(600, 400);
  setInterval(function() {
    	setTimeout (function(){ 
			bubbles.shift(); 
		}, 5000);
    }, 10000);
}

function mousePressed() {

	if(mouseX <= 600 && mouseY <= 400) {
	    let r = random(10, 50);
		let b = new Bubble(mouseX, mouseY, r);
		bubbles.push(b);
  	}
}

function draw() {
  background(9, 132, 227);

  for (let bubble of bubbles) {
  	bubble.move(random(0, 1));
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(random(0, 1));
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(yy) {
  	this.x = this.x;
    this.y = this.y - yy;
  }

  show() {
    stroke(233);
    strokeWeight(1);
    fill(214,206,206);
    ellipse(this.x, this.y, this.r * 2);
  }
}
