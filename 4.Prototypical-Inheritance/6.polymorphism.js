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

let shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();
