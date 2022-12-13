// if we want to create another object,say Square
// we have to create duplicate method again
// BUt it is better if we create a object Shape
// and inherit from it

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicating");
};

function Circle(radius) {
  this.radius = radius;
}

// if we want the Circle object to inherit from the Shape object
// before it, our CircleBase or Circle.prototype was
// Circle.prototype = Object.create(Object.prototype);

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
  console.log("Drawing");
};

// Circle.prototype.duplicate = function () {
//   console.log("Dulicating");
// };

const s = new Shape();
const c = new Circle(1);

// c inherits from circleBase which is // Circle.prototype
// Circle.prototype inherits from objectBase
