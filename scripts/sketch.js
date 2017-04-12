var r1;
var r2;

function setup() {
	createCanvas(400, 400);
	noStroke();

	r1 = new rect_obj();
	r2 = new rect_obj();
}

function draw() {
	background(105);
	// r2.x = mouseX;
	// r2.y = mouseY;
	r2.update();
	r1.solifiy(r2);

	r1.show();
	r2.show();

	var r = r1.isTouching(r2);
	push();

		fill(255,0,0,100);
		rect(r.x, r.y, r.w, r.h);

	pop();

}

function keyPressed() {
	var speed = 1;

	if (key === 'A') {
		r2.setDir(-speed, 0);
	}else if (key === 'D') {
		r2.setDir(speed, 0);
	}

	if (key === 'W') {
		r2.setDir(0, -speed);
	}else if (key === 'S') {
		r2.setDir(0, speed);
	}
}

function keyReleased() {
	r2.setDir(0, 0);
}
