// To use or make property private
// we can do this in 3 ways but best is given
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {
    console.log("Draw");
  }
}
const c = new Circle(12);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
