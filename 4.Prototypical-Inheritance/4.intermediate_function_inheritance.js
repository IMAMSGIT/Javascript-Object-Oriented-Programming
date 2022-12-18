// *** We have used a extend function
// ** which is called intermediate function inheritance

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicating");
};

// To reduce the noise of 2 lined of code
function extended(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.costructor = Child;
}

// Circle Function
function Circle(radius, color) {
  // to call the Shape function and assign color property
  Shape.call(this, color);
  this.radius = radius;
}

// inheriting from Shape oject
extended(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("Drawing");
};

// Square Function
function Square(size) {
  this.size = size;
}

// we have to write above two line type of code again and again
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.costructor = Square;
extended(Square, Shape);

const c = new Circle(1, "red");
