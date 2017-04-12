var r1;
var r2;

function setup() {
	createCanvas(400, 400);
	// noStroke();

	r1 = new rect_obj();
	r2 = new rect_obj();
}

function draw() {
	background(105);
	r2.update();
	r1.isTouching(r2, solifiy);

	r1.show();
	r2.show();

	// push();
	//
	// 	fill(255,0,0,100);
	// 	rect(r.x, r.y, r.w, r.h);
	//
	// pop();

}


solifiy = function (r) {
	if (r.w < r.h) {
		if (r1.x > r2.x) {
			r2.x -= r.w;
		} else {
			r2.x += r.w;
		}
	} else {
		if (r1.y > r2.y) {
			r2.y -= r.h;
		} else {
			r2.y += r.h;
		}
	}
}

function keyPressed() {
	var speed = 5;

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
