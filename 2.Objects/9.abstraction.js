// it's bad practice to make all the method visible to access
// we just need to make public essential propertiesto users
// it's called abstracting
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 1 };

  this.computeOptimumLocation = function () {};

  this.draw = function () {
    this.computeOptimumLocation;
    console.log("Draw");
  };
}
const circle = new Circle(1);
circle.computeOptimumLocation();
