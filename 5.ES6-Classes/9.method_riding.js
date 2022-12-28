class Shape {
  move() {
    console.log("Move");
  }
}
class Circle extends Shape {
  move() {
    // To call also from base
    super.move();
    // overriding the base move merthod
    console.log("Different from base move");
  }
}
const c = new Circle();
