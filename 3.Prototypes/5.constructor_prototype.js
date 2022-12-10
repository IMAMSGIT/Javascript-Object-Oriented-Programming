function Circus(radius) {
  this.radius = radius;
}

const circle = new Circus(1);

// to know the root of Circle constructor function
// as functions are objects in JS, it will inherit from objectBase
console.log(Circus.prototype);
console.log(Object.getPrototypeOf(circle));
