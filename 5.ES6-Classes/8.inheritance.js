class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("Move");
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    // inheriting the color from base class
    super(color);
    // adding new property to Circle class
    this.radius = radius;
  }
  draw() {
    console.log("Draw");
  }
}
const c = new Circle("red", 11);
