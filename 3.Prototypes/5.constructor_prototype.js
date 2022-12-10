function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);

// to know the root of Circle constructor function
// as functions are objects in JS, it will inherit from objectBase
console.log(Circle.prototype);

console.log(Object.getPrototypeOf(circle));
