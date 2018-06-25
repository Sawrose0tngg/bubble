let bg;
let clear = false;
let bubbles = [];
let canvaswidth = 805;
let canvasheight = 500;
let pressTime, releaseTime;

function setup() {
  	bg = loadImage("../images/image2.jpg");
  	createCanvas(canvaswidth, canvasheight);

  	//if(clear == true) {
	  	setInterval(function() {
	    	setTimeout (function(){ 
				bubbles.shift(); 
			}, 5000);
	    }, 10000);
	//}
}

function mouseReleased(){
	if(mouseX <= canvaswidth && mouseY <= canvasheight) {
		releaseTime = new Date();
		
		if(pressTime.getSeconds()+1 <= releaseTime.getSeconds()) {
			//For Multiple Bubbles Display
			/*for(var i=0; i<7; i++) {
			    let r = random(10, 50);
				let b = new Bubble(mouseX+random(-100, 100), mouseY+random(-100, 100), r);
				bubbles.push(b);
			}*/
			clear = true;
			let r = random(200, 300);
			let b = new Bubble(mouseX, mouseY, r);
			bubbles.push(b);
	  	}
	}
	
}

function mousePressed() {
	pressTime = new Date();
}

function draw() {
	background(bg);
  	for (let bubble of bubbles) {
  		//bubble.move(random(0, 1));
    	bubble.show();
  	}

  	for (let i = 0; i < bubbles.length; i++) {
    	//bubbles[i].move(random(0, 1));
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
    	strokeWeight(0.01);
    	fill('rgba(0,191,165,0.1)');
    	ellipse(this.x, this.y, this.r * 2);
  	}
}
