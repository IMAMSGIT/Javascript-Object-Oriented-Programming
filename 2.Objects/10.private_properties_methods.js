// To prevent accessing unecessary properties using circle object
function Circle(radius) {
  this.radius = radius;

  // defaultLocation will only be available in Cicle function, not in new Circle object
  let defaultLocation = { x: 0, y: 1 };

  let computeOptimumLocation = function (factor) {};

  this.draw = function () {
    let x, y;
    // this x and y are only available within the draw function
    // but compute and defaultLoc are available into the whole Circle funxtion
    // called closure
    computeOptimumLocation(0.1);
    // But to access the new Circle objects property
    // We have to use this
    // this.radius
  };
}
const circle = new Circle(1);
