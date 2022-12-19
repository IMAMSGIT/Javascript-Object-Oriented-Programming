function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.costructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicating");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("Duplicating in Circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("Duplicating in Square");
};

// Array of Shape Objects
let shapes = [new Circle(), new Square()];

// This is polymorphism in action
// We can use many form of duplicate function
// Also we don't have to provide Sqaure and Circle object separately
for (let shape of shapes) shape.duplicate();
