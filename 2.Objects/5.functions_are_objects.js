function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const circle = new Circle(1);
//  same things or object creation also happened when
// we call call,apply method
Circle.call({}, 1);
Circle.apply({}, [1]);

// internally this happens //

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function () {
console.log("Draw");
}`
);

const another = new Circle1(111);
