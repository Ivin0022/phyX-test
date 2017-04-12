function rect_obj(w, h) {

	this.x = 100;
	this.y = 100;
	this.w = w || 60;
	this.h = h || 60;

	var vel = createVector(0,0);


	this.isTouching = function (rectangle, callback) {
		// Rectangles with negative dimensions are allowed, so we must handle them correctly

		// Compute the min and max of the first rectangle on both axes
		var r1MinX = min(this.x, (this.x + this.w));
		var r1MaxX = max(this.x, (this.x + this.w));
		var r1MinY = min(this.y, (this.y + this.h));
		var r1MaxY = max(this.y, (this.y + this.h));

		// Compute the min and max of the second rectangle on both axes
		var r2MinX = min(rectangle.x, (rectangle.x + rectangle.w));
		var r2MaxX = max(rectangle.x, (rectangle.x + rectangle.w));
		var r2MinY = min(rectangle.y, (rectangle.y + rectangle.h));
		var r2MaxY = max(rectangle.y, (rectangle.y + rectangle.h));

		// Compute the intersection boundaries
		var interLeft   = max(r1MinX, r2MinX);
		var interTop    = max(r1MinY, r2MinY);
		var interRight  = min(r1MaxX, r2MaxX);
		var interBottom = min(r1MaxY, r2MaxY);

		// If the intersection is valid (positive non zero area), then there is an intersection
		if ((interLeft < interRight) && (interTop < interBottom))
		{
				var r = {'touching': true, 'x': interLeft,'y': interTop, 'w': interRight - interLeft, 'h': interBottom - interTop};
				// return this.rect;
				callback(r);

		}
		else
		{
				// this.rect = {'touching': false, 'x': 0, 'y': 0, 'w': 0, 'h':0};
				// return this.rect;
		}
	}



  this.setDir = function (x, y) {
		vel.x = x;
		vel.y = y;
  }

	this.update = function () {
		this.x += vel.x;
		this.y += vel.y;
	}


	this.show = function () {
		rect(this.x, this.y, this.w, this.h);
	}
}
