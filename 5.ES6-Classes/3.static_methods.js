// Methods which are not available
// not an instance but only in the class
// So we can call them using dot after the classname
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {}

  //Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}
const cricle = Circle.parse({ radius: 1 });
console.log(cricle);

// Just as do in JS built in functions Like Math
