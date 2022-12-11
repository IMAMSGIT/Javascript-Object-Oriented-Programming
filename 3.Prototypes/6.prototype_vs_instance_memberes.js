function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    console.log("MOVE");
    this.draw();
  };
}

// Prototype members
// adding the draw method to the parent
Circle.prototype.draw = function () {
  // this.move();
  console.log("Draw");
};

// modifying the built in toString method
Circle.prototype.toString = function () {
  return "Circle with radius" + this.radius;
};

const c1 = new Circle(1);
const c2 = new Circle(2);

// *** we can call instance method sitting
// inside a prototype members/ method more accurately
// and vice versa
