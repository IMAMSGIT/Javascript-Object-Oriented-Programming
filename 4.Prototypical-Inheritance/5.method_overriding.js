// If we want to change something from the
// base method in our extendedobject method
// or to act differently

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

// Must be after extending from the protype
// Implementing new things different from the inherited object
// It works because prototype hierarchy
// JS search in child and then parent

Circle.prototype.duplicate = function () {
  // To call the method from parent
  Shape.prototype.duplicate.call(this);

  // Get diiferent from parent
  console.log("Duplicating in Circle");
};

const c = new Circle();
