function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicating");
};

function Circle(radius, color) {
  // to call the Shape function and assign color property
  Shape.call(this, color);
  this.radius = radius;
}

// inheriting from Shape oject
Circle.prototype = Object.create(Shape.prototype);
// assigning back to the constructor property
Circle.prototype.costructor = Circle;

Circle.prototype.draw = function () {
  console.log("Drawing");
};

const c = new Circle(1, "red");
