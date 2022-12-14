// when we change one object prototype to other
// we should also change the costructor property
// back to the original
// on line 17
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicating");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.costructor = Circle;

Circle.prototype.draw = function () {
  console.log("Drawing");
};

const c = new Circle(1);
